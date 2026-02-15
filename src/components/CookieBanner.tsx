'use client';

import CookieConsent from 'react-cookie-consent';
import Link from 'next/link';

export default function CookieBanner() {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Akzeptieren"
            declineButtonText="Nur Notwendige"
            enableDeclineButton
            cookieName="handwerker-kalender-consent"
            style={{ background: "#2B373B", fontSize: "14px" }}
            buttonStyle={{ background: "#1E40AF", color: "#fff", fontSize: "14px", borderRadius: "4px", padding: "8px 24px" }}
            declineButtonStyle={{ background: "transparent", border: "1px solid white", color: "white", fontSize: "14px", borderRadius: "4px", padding: "8px 24px" }}
            expires={150}
        >
            Wir verwenden Cookies, um die Benutzererfahrung zu verbessern. Mehr Informationen finden Sie in unserer{" "}
            <Link href="/datenschutz" className="underline hover:text-blue-200">
                Datenschutzerklärung
            </Link>.
        </CookieConsent>
    );
}
