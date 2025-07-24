import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const defaultPages: MetadataRoute.Sitemap = [
        {
            url: "https://mosaewebsolutions.nl",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1
        }
    ];

    return defaultPages;
}