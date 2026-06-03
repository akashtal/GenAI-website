export function JsonLd() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": ["Organization", "LocalBusiness"],
                "@id": "https://genaidigitalsolution.com/#organization",
                name: "Gen AI Digital Solutions",
                url: "https://genaidigitalsolution.com",
                logo: {
                    "@type": "ImageObject",
                    url: "https://genaidigitalsolution.com/images/gen-ai-logo.png",
                    width: 200,
                    height: 200,
                },
                description: "Gen AI Digital Solutions is a global software and AI company headquartered in Guwahati, Assam, India. We specialize in custom software development, mobile app development, AI solutions, CRM/ERP systems, web development, and digital marketing \u2014 serving clients in India, the UK, and the USA.",
                telephone: "+91-9365339460",
                email: "djtalukdar290@gmail.com",
                address: {
                    "@type": "PostalAddress",
                    streetAddress: "Guwahati",
                    addressLocality: "Guwahati",
                    addressRegion: "Assam",
                    postalCode: "781001",
                    addressCountry: "IN",
                },
                geo: {
                    "@type": "GeoCoordinates",
                    latitude: 26.1445,
                    longitude: 91.7362,
                },
                areaServed: [
                    {
                        "@type": "Place",
                        name: "Guwahati, Assam, India",
                    },
                    {
                        "@type": "Place",
                        name: "India",
                    },
                    {
                        "@type": "Place",
                        name: "United Kingdom",
                    },
                    {
                        "@type": "Place",
                        name: "United States",
                    },
                ],
                hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Digital Services",
                    itemListElement: [
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Solutions" } },
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Software Development" } },
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "CRM & ERP Development" } },
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing" } },
                    ],
                },
                contactPoint: [
                    {
                        "@type": "ContactPoint",
                        telephone: "+91-9365339460",
                        contactType: "sales",
                        areaServed: ["IN", "GB", "US"],
                        availableLanguage: ["English", "Hindi", "Assamese"],
                    },
                ],
                sameAs: [
                    "https://www.facebook.com/profile.php?id=61587441681086",
                    "https://www.instagram.com/genai.digital.290/",
                    "https://www.linkedin.com/company/genaidigitalsolustion/",
                ],
                openingHoursSpecification: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    opens: "09:00",
                    closes: "18:00",
                },
            },
        ],
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    )
}

