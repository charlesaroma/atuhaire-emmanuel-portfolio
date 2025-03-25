import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';
import { createGzip } from 'zlib';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/portfolio', changefreq: 'weekly', priority: 0.8 },
  { url: '/gallery', changefreq: 'monthly', priority: 0.5 },
  { url: '/contact', changefreq: 'monthly', priority: 0.5 },
];

const generateSitemap = async () => {
  const stream = new SitemapStream({ hostname: 'https://atuhaire-emmanuel.netlify.app/' });
  const gzip = createGzip();

  links.forEach(link => stream.write(link));

  stream.end();

  const sitemap = await streamToPromise(stream.pipe(gzip));

  fs.writeFileSync('public/sitemap.xml.gz', sitemap);
  console.log('Sitemap successfully created: public/sitemap.xml.gz');
};

generateSitemap().catch(console.error);
