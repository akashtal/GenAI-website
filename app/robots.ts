import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://www.genai-solutions.com"

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/admin", "/private"],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
