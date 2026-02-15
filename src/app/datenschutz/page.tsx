export default function DatenschutzPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-24 prose prose-slate">
            <h1 className="text-4xl font-black text-slate-900 mb-12 tracking-tight">Datenschutzerklärung</h1>

            <div className="space-y-12">
                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">1. Datenschutz auf einen Blick</h2>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Allgemeine Hinweise</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten innerhalb unserer Website auf. Wir nehmen den Schutz Ihrer Daten sehr ernst.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">2. Datenerfassung auf dieser Website</h2>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Technischer Betrieb & Sicherheit</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Wir nutzen moderne Cloud-Infrastrukturen (Supabase, Vercel), um die Stabilität und Sicherheit der Plattform zu gewährleisten. Die Verarbeitung erfolgt auf Basis von Art. 6 Abs. 1 lit. f DSGVO.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">3. Buchungsdaten</h2>
                    <p className="text-slate-600 leading-relaxed">
                        Wenn Sie einen Termin anfragen, speichern wir die von Ihnen eingegebenen Daten (Name, Telefon, Adresse, Problembeschreibung), um Ihren Auftrag bearbeiten und koordinieren zu können. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">4. Ihre Rechte</h2>
                    <p className="text-slate-600 leading-relaxed">
                        Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten. Sie haben außerdem ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
                    </p>
                </section>

                <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100 italic text-sm text-slate-500">
                    Wichtiger Hinweis: Diese Datenschutzerklärung dient als Vorlage. Für die rechtssichere Veröffentlichung ist eine Prüfung durch einen Datenschutzbeauftragten oder Anwalt zwingend erforderlich.
                </section>
            </div>
        </main>
    );
}
