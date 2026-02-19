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
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #000; text-align: center;">Welcome to SEOSpeeder!</h2>
          <p>Hi there,</p>
          <p>Thank you for subscribing to our newsletter. You're now on the list to receive the latest SEO insights, performance tips, and AI-driven strategies to grow your digital presence.</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0; text-align: center;">
            <p style="margin: 0; font-weight: bold;">What's next?</p>
            <p style="margin: 5px 0;">Keep an eye on your inbox for our upcoming performance audit guide!</p>
          </div>
          <p>In the meantime, feel free to explore our platform and test your website speed.</p>
          <p style="margin-top: 30px;">Best regards,<br>The SEOSpeeder Team</p>
          <hr style="margin: 30px 0; border: 0; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #888; text-align: center;">
            You received this email because you subscribed on seospeeder.com<br>
            If you wish to unsubscribe, click <a href="#" style="color: #888;">here</a>.
          </p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log(`Newsletter sent successfully to: ${email}`);

    return NextResponse.json(
      { message: 'Successfully subscribed and welcome email sent!' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Email sending failed:', error);
    
    // Check for specific Gmail authentication errors
    if (error.code === 'EAUTH') {
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
