import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { BookingEmail } from '@/components/emails/BookingEmail';

export async function POST(request: Request) {
    try {
        // Initialisierung innerhalb des Handlers, um Build-Fehler zu vermeiden
        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
            process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIn0.dummy'
        );

        const resend = new Resend(process.env.RESEND_API_KEY || '');

        const body = await request.json();
        const { service, date, time, name, phone, address, description } = body;

        // 1. Daten in Supabase speichern
        const { data: booking, error: dbError } = await supabase
            .from('bookings')
            .insert([
                {
                    service,
                    booking_date: date,
                    booking_time: time,
                    customer_name: name,
                    customer_phone: phone,
                    customer_address: address,
                    problem_description: description,
                    status: 'pending'
                }
            ])
            .select()
            .single();

        if (dbError) {
            console.error('Database Error:', dbError);
            return NextResponse.json({ error: 'Fehler beim Speichern der Buchung' }, { status: 500 });
        }

        // 2. Bestätigungs-E-Mail via Resend senden (nur wenn Key gültig ist)
        if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 'your-resend-api-key') {
            try {
                await resend.emails.send({
                    from: 'HandwerkerKalender <onboarding@resend.dev>',
                    to: 'mustermann.test@example.com',
                    subject: `Deine Terminanfrage: ${service}`,
                    react: BookingEmail({ customerName: name, service, date, time }),
                });
            } catch {
                // Silently fail email but log it if needed
            }
        }

        return NextResponse.json({ success: true, booking });

    } catch {
        return NextResponse.json({ error: 'Interner Server-Fehler' }, { status: 500 });
    }
}
