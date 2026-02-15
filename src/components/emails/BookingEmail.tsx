import * as React from 'react';

interface BookingEmailProps {
    customerName: string;
    service: string;
    date: string;
    time: string;
}

export const BookingEmail: React.FC<Readonly<BookingEmailProps>> = ({
    customerName,
    service,
    date,
    time,
}) => (
    <div style={{ fontFamily: 'sans-serif', lineHeight: '1.5', color: '#333' }}>
        <h1 style={{ color: '#1E40AF' }}>Buchungsanfrage erhalten</h1>
        <p>Hallo {customerName},</p>
        <p>vielen Dank für deine Buchungsanfrage über den <strong>HandwerkerKalender</strong>.</p>
        <div style={{ backgroundColor: '#f3f4f6', padding: '15px', borderRadius: '8px', margin: '20px 0' }}>
            <p style={{ margin: '0' }}><strong>Dienstleistung:</strong> {service}</p>
            <p style={{ margin: '0' }}><strong>Datum:</strong> {date}</p>
            <p style={{ margin: '0' }}><strong>Uhrzeit:</strong> {time} Uhr</p>
        </div>
        <p>Wir prüfen deine Anfrage aktuell und melden uns in Kürze mit einer Bestätigung oder einem Alternativvorschlag bei dir.</p>
        <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '20px 0' }} />
        <p style={{ fontSize: '12px', color: '#666' }}>
            Diese E-Mail wurde automatisch versendet. Bitte antworte nicht direkt auf diese Nachricht.
        </p>
    </div>
);
