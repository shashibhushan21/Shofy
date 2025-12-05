import { transporter, createVIPRequestEmail } from '../../lib/email-config';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, whatsapp, to } = req.body;

  // Validate input
  if (!name || !email) {
    return res.status(400).json({ 
      success: false, 
      message: 'Name and email are required' 
    });
  }

  try {
    const emailTemplate = createVIPRequestEmail(name, email, whatsapp);

    // Send email to both addresses
    const recipients = to || ['support@techfieldsolution.com', 'info@techfieldsolution.com'];
    
    const mailOptions = {
      from: process.env.EMAIL_USER || 'noreply@techfieldsolution.com',
      to: recipients.join(', '),
      subject: emailTemplate.subject,
      text: emailTemplate.text,
      html: emailTemplate.html,
      replyTo: email, // Allow direct reply to customer
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log('✅ VIP Access Request Email Sent Successfully');
    console.log('To:', recipients.join(', '));
    console.log('Customer:', name, email);

    // Send confirmation email to customer
    try {
      const customerMailOptions = {
        from: process.env.EMAIL_USER || 'noreply@techfieldsolution.com',
        to: email,
        subject: '💎 Welcome to Shofy Jewelry VIP List!',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 20px auto; background: #fff; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.1); }
              .header { background: linear-gradient(135deg, #d4af37 0%, #f4e5a1 100%); padding: 40px; text-align: center; }
              .content { padding: 40px 30px; }
              .footer { background: #1a1a2e; color: #d4af37; padding: 20px; text-align: center; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin:0; color:#1a1a2e; font-size:32px;">💎 Welcome, ${name}!</h1>
              </div>
              <div class="content">
                <p style="font-size:18px; color:#333;">Thank you for joining our exclusive VIP list!</p>
                <p style="color:#666;">You're now among the first to know about our luxury jewelry collection launch.</p>
                <p style="margin-top:30px; padding:20px; background:#f9f9f9; border-left:4px solid #d4af37;">
                  <strong>What's Next?</strong><br>
                  Our team will contact you soon with exclusive early access and special offers.
                </p>
                <p style="margin-top:30px; color:#666;">Best regards,<br><strong>Shofy Jewelry Team</strong></p>
              </div>
              <div class="footer">
                <p>Tech Field Solution</p>
                <p>support@techfieldsolution.com | +91 6290 218 436</p>
              </div>
            </div>
          </body>
          </html>
        `,
      };
      await transporter.sendMail(customerMailOptions);
      console.log('✅ Confirmation email sent to customer');
    } catch (confirmError) {
      console.log('⚠️ Could not send confirmation to customer, but main notification was sent');
    }

    return res.status(200).json({ 
      success: true, 
      message: 'VIP access request received! Check your email for confirmation.' 
    });

  } catch (error) {
    console.error('❌ Error sending email:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send notification. Please try again or contact us directly.' 
    });
  }
}
