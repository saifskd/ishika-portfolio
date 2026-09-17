const fs = require('node:fs');
const base = (process.env.NEXT_PUBLIC_SITE_URL || 'https://saifskd.github.io/ishika-portfolio').replace(/\/$/, '');
const escape = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
if (!fs.existsSync('out/index.html')) throw new Error('Static export out/index.html is missing');
fs.writeFileSync('out/.nojekyll', '');
fs.writeFileSync('out/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`);
fs.writeFileSync('out/sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + ['/', '/about/'].map(path => `<url><loc>${escape(base + path)}</loc></url>`).join('') + '</urlset>');
