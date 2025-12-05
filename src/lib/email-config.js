import nodemailer from 'nodemailer';

// Email configuration
export const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change to other services like 'outlook', 'yahoo', etc.
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com', // Your email
    pass: process.env.EMAIL_PASSWORD || 'your-app-password', // Your email app password
  },
});

// Email template for VIP access request
export const createVIPRequestEmail = (name, email, whatsapp) => {
  return {
    subject: '💎 New VIP Access Request - Shofy Jewelry Collection',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            background: linear-gradient(135deg, #1a1a2e 0%, #302b63 100%);
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          }
          .header {
            background: linear-gradient(135deg, #d4af37 0%, #f4e5a1 100%);
            padding: 30px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            color: #1a1a2e;
            font-size: 28px;
            font-weight: 700;
          }
          .content {
            padding: 40px 30px;
            color: #ffffff;
          }
          .info-box {
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid rgba(212, 175, 55, 0.3);
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
          }
          .info-row {
            margin: 15px 0;
            padding: 10px 0;
            border-bottom: 1px solid rgba(212, 175, 55, 0.2);
          }
          .info-row:last-child {
            border-bottom: none;
          }
          .label {
            color: #d4af37;
            font-weight: 600;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 5px;
          }
          .value {
            color: #ffffff;
            font-size: 16px;
            font-weight: 500;
          }
          .icon {
            font-size: 40px;
            margin: 10px 0;
          }
          .footer {
            background: rgba(0, 0, 0, 0.3);
            padding: 20px;
            text-align: center;
            color: #b8b8b8;
            font-size: 12px;
          }
          .timestamp {
            color: #d4af37;
            font-weight: 600;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid rgba(212, 175, 55, 0.2);
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="icon">💎</div>
            <h1>New VIP Access Request</h1>
          </div>
          <div class="content">
            <p style="font-size: 16px; margin-bottom: 25px;">
              A new customer has requested exclusive access to the Shofy Jewelry Collection!
            </p>
            
            <div class="info-box">
              <div class="info-row">
                <div class="label">👤 Name</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="info-row">
                <div class="label">📧 Email Address</div>
                <div class="value">${email}</div>
              </div>
              
              <div class="info-row">
                <div class="label">📱 WhatsApp Number</div>
                <div class="value">${whatsapp || 'Not provided'}</div>
              </div>
              
              <div class="timestamp">
                🕐 Request Time: ${new Date().toLocaleString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  timeZoneName: 'short'
                })}
              </div>
            </div>
            
            <p style="margin-top: 30px; padding: 15px; background: rgba(212, 175, 55, 0.1); border-radius: 8px; border-left: 4px solid #d4af37;">
              <strong>Action Required:</strong> Please follow up with this potential customer within 24 hours for the best conversion rate.
            </p>
          </div>
          <div class="footer">
            <p>This is an automated notification from Shofy Jewelry Collection</p>
            <p>Tech Field Solution | support@techfieldsolution.com | +91 6290 218 436</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
      New VIP Access Request - Shofy Jewelry Collection
      
      Customer Details:
      Name: ${name}
      Email: ${email}
      WhatsApp: ${whatsapp || 'Not provided'}
      
      Request Time: ${new Date().toLocaleString()}
      
      Please follow up with this customer within 24 hours.
      
      ---
      Tech Field Solution
      support@techfieldsolution.com
      +91 6290 218 436
    `
  };
};

export default transporter;
