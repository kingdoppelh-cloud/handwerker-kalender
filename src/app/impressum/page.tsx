export default function ImpressumPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-24 prose prose-slate">
            <h1 className="text-4xl font-black text-slate-900 mb-12 tracking-tight">Impressum</h1>

            <div className="space-y-12">
                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">Angaben gemäß § 5 TMG</h2>
                    <p className="text-slate-600 leading-relaxed">
                        Max Mustermann<br />
                        Musterstraße 1<br />
                        12345 Musterstadt
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">Kontakt</h2>
                    <p className="text-slate-600 leading-relaxed">
                        Telefon: +49 123 4567890<br />
                        E-Mail: info@handwerker-kalender.de
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">Redaktionell verantwortlich</h2>
                    <p className="text-slate-600 leading-relaxed">
                        Max Mustermann<br />
                        Musterstraße 1<br />
                        12345 Musterstadt
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">EU-Streitschlichtung</h2>
                    <p className="text-slate-600 leading-relaxed">
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                            https://ec.europa.eu/consumers/odr/
                        </a>.
                        Unsere E-Mail-Adresse finden Sie oben im Impressum.
                    </p>
                </section>

                <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100 italic text-sm text-slate-500">
                    Hinweis: Dies ist ein Template. Bitte lassen Sie Ihre rechtlichen Dokumente vor dem Live-Gang von einem Fachanwalt prüfen.
                </section>
            </div>
        </main>
    );
}
