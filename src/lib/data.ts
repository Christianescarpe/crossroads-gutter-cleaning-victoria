import pagesData from '@/data/pages.json';
import blogsData from '@/data/blogs.json';
import imagesData from '@/data/images.json';

export interface PageItem {
  title: string;
  seoTitle: string;
  metaDescription: string;
  url: string;
  focusKeywords: string;
  contentHtml: string;
  internalAnchor1: string;
  internalAnchor2: string;
  internalAnchor3: string;
  externalAnchor: string;
}

export interface BlogItem {
  title: string;
  seoTitle: string;
  metaDescription: string;
  url: string;
  focusKeywords: string;
  contentHtml: string;
  internalAnchor1: string;
  internalAnchor2: string;
  internalAnchor3: string;
  externalAnchor: string;
}

export const SERVICE_URLS = [
  '/gutter-cleaning',
  '/downspout-cleaning',
  '/gutter-and-downspout-cleaning',
  '/clogged-gutter-cleaning',
  '/gutter-debris-removal',
  '/gutter-maintenance',
  '/gutter-inspection',
  '/gutter-repair',
  '/gutter-guard-installation',
  '/gutter-guard-cleaning',
  '/commercial-gutter-cleaning',
  '/residential-gutter-cleaning',
  '/roof-and-gutter-cleaning',
  '/emergency-gutter-cleaning'
];

export const LOCATION_URLS = [
  '/victoria',
  '/port-lavaca',
  '/cuero',
  '/edna',
  '/goliad',
  '/bloomington',
  '/inez',
  '/hallettsville'
];

export function extractH1(html: string, fallback: string = ''): string {
  const match = html.match(/<h1[^>]*>(.*?)<\/h1>/i);
  return match ? match[1].replace(/<[^>]+>/g, '').trim() : fallback;
}

export function stripH1(html: string): string {
  return html.replace(/<h1[^>]*>.*?<\/h1>\s*/i, '');
}

export function getHomePage(): PageItem {
  return pagesData.find(p => p.url === '/')!;
}

export function getPageByUrl(url: string): PageItem | undefined {
  return pagesData.find(p => p.url === url);
}

export function getServices(): PageItem[] {
  return pagesData.filter(p => SERVICE_URLS.includes(p.url));
}

export function getLocations(): PageItem[] {
  return pagesData.filter(p => LOCATION_URLS.includes(p.url));
}

export function getAllBlogs(): BlogItem[] {
  return blogsData;
}

export function getBlogBySlug(slug: string): BlogItem | undefined {
  const targetUrl = `/blog/${slug}`;
  return blogsData.find(b => b.url === targetUrl);
}

export function getImage(nameMatch: string): string {
  const found = imagesData.find(img => img.filename.toLowerCase().includes(nameMatch.toLowerCase()));
  if (found) return found.url;
  return imagesData[0]?.url || '/images/man-on-ladder-cleaning-gutters-of-a-suburban-house.webp';
}
