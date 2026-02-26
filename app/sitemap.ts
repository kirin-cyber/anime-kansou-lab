import { MetadataRoute } from 'next';
import { animeList, siteConfig } from '@/data/anime';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/anime`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/ranking`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/category/era`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/category/genre`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/profile`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ];

  const animePages: MetadataRoute.Sitemap = animeList.map((anime) => ({
    url: `${baseUrl}/anime/${anime.slug}`,
    lastModified: new Date(anime.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  return [...staticPages, ...animePages];
}
