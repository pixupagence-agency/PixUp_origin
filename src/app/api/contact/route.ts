import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, projectType, message } = body;

        // In a real application, you would send an email here using a service like Resend, SendGrid, or Nodemailer
        console.log('Contact form submission:', { firstName, lastName, email, projectType, message });

        // Simulate a delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error in contact form submission:', error);
        return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
    }
}
