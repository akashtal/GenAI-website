import nodemailer from 'nodemailer';

// Gmail SMTP configuration for Vercel deployment
// Uses App Password with SSL on port 465 for reliable delivery
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // App Password (16 characters, no spaces)
    },
    // Connection timeout settings for serverless environment
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000,
    socketTimeout: 10000,
});

interface EmailOptions {
    to: string;
    subject: string;
    html: string;
    replyTo?: string;
}

export async function sendEmail({ to, subject, html, replyTo }: EmailOptions) {
    try {
        const info = await transporter.sendMail({
            from: `"GenAI Digital Solutions" <${process.env.SMTP_USER}>`,
            to,
            subject,
            html,
            replyTo,
        });

        console.log('Email sent:', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Email send error:', error);
        return { success: false, error };
    }
}

// Email templates
export function getContactNotificationEmail(data: {
    name: string;
    email: string;
    company?: string;
    service?: string;
    budget?: string;
    message: string;
}) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
      </div>
      <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
        <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #1a1a2e; margin-top: 0;">Contact Details</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
          ${data.service ? `<p><strong>Service Interested:</strong> ${data.service}</p>` : ''}
          ${data.budget ? `<p><strong>Budget Range:</strong> ${data.budget}</p>` : ''}
        </div>
        <div style="background: white; padding: 20px; border-radius: 8px;">
          <h2 style="color: #1a1a2e; margin-top: 0;">Message</h2>
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
        <p style="color: #666; font-size: 12px; margin-top: 20px; text-align: center;">
          This email was sent from your GenAI Digital Solutions website contact form.
        </p>
      </div>
    </body>
    </html>
  `;
}

export function getContactConfirmationEmail(name: string) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You for Contacting Us</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 24px;">Thank You, ${name}!</h1>
      </div>
      <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
        <div style="background: white; padding: 20px; border-radius: 8px;">
          <p>Thank you for reaching out to GenAI Digital Solutions!</p>
          <p>We've received your message and our team will review it shortly. You can expect to hear back from us within <strong>24 hours</strong>.</p>
          <p>In the meantime, feel free to explore our services and projects on our website.</p>
          <div style="text-align: center; margin-top: 30px;">
            <a href="${process.env.NEXTAUTH_URL}" style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: white; padding: 12px 30px; border-radius: 25px; text-decoration: none; font-weight: 600;">Visit Our Website</a>
          </div>
        </div>
        <p style="color: #666; font-size: 12px; margin-top: 20px; text-align: center;">
          © ${new Date().getFullYear()} GenAI Digital Solutions. All rights reserved.
        </p>
      </div>
    </body>
    </html>
  `;
}

export function getDemoRequestEmail(email: string, source: string) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Demo Request</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">🎯 New Demo Request</h1>
      </div>
      <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
        <div style="background: white; padding: 20px; border-radius: 8px;">
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Source:</strong> ${source}</p>
          <p><strong>Requested At:</strong> ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export function getDemoConfirmationEmail() {
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Demo Request Received</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 24px;">Demo Request Confirmed! 🎉</h1>
      </div>
      <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
        <div style="background: white; padding: 20px; border-radius: 8px;">
          <p>Thank you for your interest in GenAI Digital Solutions!</p>
          <p>We've received your demo request and one of our team members will reach out to you within <strong>24-48 hours</strong> to schedule a personalized demonstration.</p>
          <p>Get ready to see how AI can transform your business!</p>
        </div>
        <p style="color: #666; font-size: 12px; margin-top: 20px; text-align: center;">
          © ${new Date().getFullYear()} GenAI Digital Solutions. All rights reserved.
        </p>
      </div>
    </body>
    </html>
  `;
}
