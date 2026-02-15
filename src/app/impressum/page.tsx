export default function ImpressumPage() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-12 prose prose-slate">
            <h1 className="text-3xl font-bold mb-8">Impressum</h1>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
                <p>[NAME DES UNTERNEHMENS]<br />
                    [ADRESSE]<br />
                    [PLZ, STADT]</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
                <p>Telefon: [TELEFONNUMMER]<br />
                    E-Mail: [EMAIL-ADRESSE]</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Redaktionell verantwortlich</h2>
                <p>[NAME DES VERANTWORTLICHEN]<br />
                    [ADRESSE]</p>
            </section>

            <section className="mb-8 border-t pt-8 mt-12 text-sm text-slate-500">
                <p>Haftungsausschluss: Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
            </section>
        </main>
    );
}
