export default function DatenschutzPage() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-12 prose prose-slate">
            <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
                <h3 className="text-lg font-medium mb-2">Allgemeine Hinweise</h3>
                <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">2. Datenerfassung auf dieser Website</h2>
                <h3 className="text-lg font-medium mb-2">Supabase (Datenbank & Authentifizierung)</h3>
                <p>Wir nutzen Supabase für die Speicherung Ihrer Buchungsdaten und die Benutzerverwaltung. Anbieter ist die Supabase Inc. Die Datenverarbeitung erfolgt auf Basis von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">3. Cloud-Dienste und Integrationen</h2>
                <h3 className="text-lg font-medium mb-2">Google Calendar API</h3>
                <p>Sofern Sie die Übertragung in den Google Kalender nutzen, werden Daten an Google Ireland Limited übertragen. Dies erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">4. E-Mail-Versand</h2>
                <h3 className="text-lg font-medium mb-2">Resend</h3>
                <p>Für den Versand von Bestätigungs-E-Mails nutzen wir Resend. Dies dient der Dokumentation und Information über Ihre Buchung gemäß Art. 6 Abs. 1 lit. f DSGVO.</p>
            </section>

            <section className="mb-8 border-t pt-8 mt-12 text-sm text-slate-500">
                <p>Hinweis: Dies ist ein Template. Bitte lassen Sie Ihre Datenschutzerklärung durch einen Fachanwalt prüfen.</p>
            </section>
        </main>
    );
}
