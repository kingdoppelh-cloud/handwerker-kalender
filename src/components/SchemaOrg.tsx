export default function SchemaOrg() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "HandwerkerKalender Pro",
        "image": "https://handwerker-kalender.vercel.app/og-image.jpg",
        "description": "Ihr professioneller Partner für schnelle und zuverlässige Handwerker-Termine.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Berlin",
            "addressRegion": "Berlin",
            "postalCode": "10115",
            "streetAddress": "Musterstraße 1",
            "addressCountry": "DE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 52.5200,
            "longitude": 13.4050
        },
        "url": "https://handwerker-kalender.vercel.app",
        "telephone": "+49123456789",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
            }
        ],
        "priceRange": "€€"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
