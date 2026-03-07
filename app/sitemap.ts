import { MetadataRoute } from 'next';

const BASE_URL = 'https://jservicejesolo.com';

/** Pagine da includere nella sitemap: path, priorità (0–1), frequenza di aggiornamento */
const PAGES: Array<{
  path: string;
  priority: number;
  changeFrequency: 'weekly' | 'monthly' | 'yearly';
}> = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/servizi', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/prezzi', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/zone-servite', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/chi-siamo', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/faq', priority: 0.6, changeFrequency: 'monthly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return PAGES.map(({ path, priority, changeFrequency }) => ({
    url: path ? `${BASE_URL}${path}` : BASE_URL,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
