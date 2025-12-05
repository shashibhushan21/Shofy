// Alternative implementation using SendGrid API
// Install: npm install @sendgrid/mail
// Signup: https://sendgrid.com (Free: 100 emails/day)

import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, whatsapp } = req.body;

  if (!name || !email) {
    return res.status(400).json({ 
      success: false, 
      message: 'Name and email are required' 
    });
  }

  try {
    // Send to your team
    await sgMail.send({
      to: ['support@techfieldsolution.com', 'info@techfieldsolution.com'],
      from: 'noreply@techfieldsolution.com', // Use your verified sender
      subject: '💎 New VIP Access Request - Shofy Jewelry',
      html: `
        <h2>New VIP Access Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp || 'Not provided'}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    // Send confirmation to customer
    await sgMail.send({
      to: email,
      from: 'noreply@techfieldsolution.com',
      subject: ' Welcome to Shofy Jewelry VIP List!',
      html: `
        <h2>Welcome, ${name}!</h2>
        <p>Thank you for joining our exclusive VIP list!</p>
        <p>Our team will contact you soon with special offers.</p>
      `,
    });

    return res.status(200).json({ 
      success: true, 
      message: 'VIP access request received!' 
    });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send notification' 
    });
  }
}
