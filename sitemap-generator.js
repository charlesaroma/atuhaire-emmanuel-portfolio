import { fileURLToPath } from 'url';
import path from 'path';
import Sitemap from 'react-router-sitemap';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateSitemap = () => {
  return new Sitemap({
    '/': {},
    '/portfolio': {},
    '/gallery': {},
    '/contact': {},
  })
    .build('https://atuhaire-emmanuel.netlify.app')
    .save(path.resolve(__dirname, 'public', 'sitemap.xml'));
};

generateSitemap();
