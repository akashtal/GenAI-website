import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://genaidigitalsolution.com"

    // Static routes — all pages including local+global service landing pages
    const routes = [
        "",
        "/about",
        "/services",
        "/projects",
        "/contact",
        "/web-development-company-guwahati",
        "/software-development-assam",
        "/ai-solutions-guwahati",
        "/mobile-app-development-guwahati",
        "/crm-erp-development-assam",
        "/services/ai-automation",
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.8,
    }))
}
