import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Configure Nodemailer with Gmail
    // Note: To use Gmail, you'll need an "App Password" if 2FA is enabled.
    // Environment variables should be set in .env.local
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'devmadhan24@gmail.com',
        pass: process.env.EMAIL_PASS, // This MUST be an App Password, not the regular password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || 'devmadhan24@gmail.com',
      to: email,
      subject: 'Welcome to SEOSpeeder Newsletter! 🚀',
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300..800&display=swap" rel="stylesheet">
  <style>
    body { margin: 0; padding: 0; background-color: #f4f4f5; -webkit-font-smoothing: antialiased; }
    table, td, p, h1, h2, h3, span, a, div { font-family: 'Bricolage Grotesque', system-ui, -apple-system, sans-serif !important; }
    .wrapper { width: 100%; table-layout: fixed; background-color: #f4f4f5; padding: 40px 20px; }
    .main { background-color: #09090b; color: #fafafa; margin: 0 auto; width: 100%; max-width: 600px; border-spacing: 0; font-family: 'Bricolage Grotesque', system-ui, -apple-system, sans-serif; border-radius: 16px; overflow: hidden; border: 2px solid #27272a; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15); }
    .inner-padding { padding: 48px 40px; }
    .header { text-align: center; padding-bottom: 32px; border-bottom: 2px solid #27272a; margin-bottom: 32px; }
    .header h1 { margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.03em; color: #ffffff; }
    .header p { margin: 8px 0 0 0; color: #a1a1aa; font-size: 15px; }
    .message-content { color: #e4e4e7; line-height: 1.7; font-size: 16px; margin: 0 0 24px 0; }
    .highlight-box { background-color: #18181b; padding: 24px; border-radius: 12px; border: 2px solid #27272a; text-align: center; margin: 32px 0; }
    .highlight-box p { margin: 0; }
    .highlight-title { display: block; color: #ffffff; font-weight: 600; font-size: 18px; margin-bottom: 8px; }
    .highlight-text { color: #a1a1aa; font-size: 15px; }
    .footer { text-align: center; padding-top: 32px; border-top: 2px solid #27272a; color: #52525b; font-size: 13px; margin-top: 16px; }
    .footer a { color: #a1a1aa; text-decoration: underline; }
    @media screen and (max-width: 600px) {
      .wrapper { padding: 20px 10px; }
      .inner-padding { padding: 32px 24px; }
      .header h1 { font-size: 24px; }
      .highlight-box { padding: 20px; }
      .message-content { font-size: 15px; }
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <table class="main">
      <tr>
        <td class="inner-padding">
          <div class="header">
            <h1>Welcome to SEOSpeeder!</h1>
            <p>Your performance upgrade is here 🚀</p>
          </div>
          
          <p class="message-content">Hi there,</p>
          <p class="message-content">Thank you for subscribing to our newsletter. You're now on the elite list to receive the latest SEO insights, performance tips, and AI-driven strategies to organically grow your digital presence.</p>
          
          <div class="highlight-box">
            <span class="highlight-title">What's next?</span>
            <p class="highlight-text">Keep an eye on your inbox for our upcoming performance audit guide. We guarantee it will completely change your technical approach!</p>
          </div>
          
          <p class="message-content">In the meantime, feel free to explore our platform and securely test your website structure directly from our dashboard.</p>
          
          <p class="message-content" style="margin-top: 32px; margin-bottom: 0;">Best regards,<br><strong style="color: #ffffff;">The SEOSpeeder Team</strong></p>
          
          <div class="footer">
            <p style="margin: 0 0 8px 0;">You received this email because you subscribed to updates on seospeeder.com.</p>
            <p style="margin: 0;">If you changed your mind, you can safely <a href="#">unsubscribe here</a>.</p>
          </div>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log(`Newsletter sent successfully to: ${email}`);

    return NextResponse.json(
      { message: 'Successfully subscribed and welcome email sent!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending failed:', error);
    
    // Check for specific Gmail authentication errors
    if (error && typeof error === 'object' && 'code' in error && error.code === 'EAUTH') {
      return NextResponse.json(
        { error: 'Email authentication failed. Please check your App Password.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to send subscription email. Please try again later.' },
      { status: 500 }
    );
  }
}
