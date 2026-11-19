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
                description: "Gen AI Digital Solutions is an Indian software, mobile app and AI development company headquartered in Guwahati, Assam, serving clients across India and worldwide. We specialize in custom software development, mobile app development, AI solutions, CRM/ERP systems, web development, and digital marketing \u2014 serving clients in India, the UK, and the USA.",
                telephone: "+91-9365339460",
                email: "info@genaidigitalsolution.com",
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
                priceRange: "₹₹",
                slogan: "Websites, apps & AI software that bring you customers",
                knowsAbout: [
                    "Web development", "Mobile app development", "React Native", "Flutter", "Next.js",
                    "Custom software development", "SaaS development", "CRM development", "ERP development",
                    "AI chatbots", "WhatsApp chatbots", "Large language models", "Machine learning",
                    "Computer vision", "Search engine optimisation",
                ],
                numberOfEmployees: { "@type": "QuantitativeValue", minValue: 5 },
                foundingLocation: { "@type": "Place", name: "Guwahati, Assam, India" },
                areaServed: [
                    {
                        "@type": "Country",
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
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development", url: "https://genaidigitalsolution.com/services/web-development" } },
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development", url: "https://genaidigitalsolution.com/services/mobile-app-development" } },
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Solutions", url: "https://genaidigitalsolution.com/services/ai-solutions" } },
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Software Development", url: "https://genaidigitalsolution.com/services/custom-software-development" } },
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "CRM & ERP Development", url: "https://genaidigitalsolution.com/services/crm-erp-development" } },
                        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing", url: "https://genaidigitalsolution.com/services" } },
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
                    {
                        "@type": "ContactPoint",
                        telephone: "+91-9181188734",
                        contactType: "customer service",
                        areaServed: ["IN"],
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
            {
                "@type": "WebSite",
                "@id": "https://genaidigitalsolution.com/#website",
                url: "https://genaidigitalsolution.com",
                name: "Gen AI Digital Solutions",
                alternateName: ["GenAI Digital Solution", "Gen AI Digital"],
                publisher: { "@id": "https://genaidigitalsolution.com/#organization" },
                inLanguage: "en-IN",
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

