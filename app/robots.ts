import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/anime';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
