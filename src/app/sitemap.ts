import { MetadataRoute } from 'next';
import pagesData from '@/data/pages.json';
import blogsData from '@/data/blogs.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://crossroadsguttercleaningvictoria.com';

  const pagesUrls = pagesData.map(p => ({
    url: `${baseUrl}${p.url === '/' ? '' : p.url}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: p.url === '/' ? 1.0 : 0.8,
  }));

  const blogUrls = blogsData.map(b => ({
    url: `${baseUrl}${b.url}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogListing = {
    url: `${baseUrl}/blog`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  };

  return [...pagesUrls, blogListing, ...blogUrls];
}
