import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API Key from env
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { firstName, lastName, email, projectType, message } = body;

        // Validation (simple)
        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
        }

        // Send Email using Resend
        // Note: You need a domain verified in Resend to send from a custom email.
        // If not, you can use 'onboarding@resend.dev' for testing.
        const { data, error } = await resend.emails.send({
            from: 'PixUp Agency <onboarding@resend.dev>', // Change to 'PixUp Agency <hello@pixup.agency>' after domain verification
            to: ['pixup.agence@gmail.com'],
            subject: `[Contact] - Nouveau message de ${firstName} ${lastName}`,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <h2 style="color: #6366f1;">Nouveau message de contact</h2>
                    <p><strong>Nom :</strong> ${firstName} ${lastName}</p>
                    <p><strong>Email :</strong> ${email}</p>
                    <p><strong>Type de projet :</strong> ${projectType || 'Non spécifié'}</p>
                    <p><strong>Message :</strong></p>
                    <div style="background-color: #f4f4f4; padding: 15px; border-radius: 8px;">
                        ${message.replace(/\n/g, '<br>')}
                    </div>
                    <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                    <p style="font-size: 12px; color: #888;">Ce mail a été envoyé depuis le formulaire de contact de PixUp.</p>
                </div>
            `
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
        }

        console.log('Contact form email sent:', data);

        return NextResponse.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error in contact form submission:', error);
        return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
    }
}
