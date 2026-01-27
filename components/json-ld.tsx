export function JsonLd() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Gen AI Digital Solutions",
        url: "https://www.genai-solutions.com",
        logo: "https://www.genai-solutions.com/logo.png",
        description: "Leading digital transformation agency specializing in custom software, mobile app development, and AI solutions.",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Digital Digital City",
            addressCountry: "IN"
        },
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-9876543210",
            contactType: "sales",
            availableLanguage: ["English", "Hindi"]
        },
        sameAs: [
            "https://twitter.com/genaisolutions",
            "https://linkedin.com/company/genaisolutions",
            "https://facebook.com/genaisolutions"
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    )
}
