import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://genaidigitalsolution.com"

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/admin", "/private"],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
