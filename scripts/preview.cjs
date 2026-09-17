const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve('out');
const prefix = '/ishika-portfolio';
const types = { '.html':'text/html', '.js':'application/javascript', '.css':'text/css', '.json':'application/json', '.png':'image/png', '.jpg':'image/jpeg', '.ico':'image/x-icon', '.pdf':'application/pdf', '.xml':'application/xml', '.txt':'text/plain', '.woff2':'font/woff2' };
http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  if (url.pathname === prefix) { res.writeHead(301, {Location: prefix + '/'}); return res.end(); }
  if (!url.pathname.startsWith(prefix + '/')) { res.writeHead(404); return res.end('Not found'); }
  let file;
  try { file = path.resolve(root, '.' + decodeURIComponent(url.pathname.slice(prefix.length))); } catch { res.writeHead(400); return res.end(); }
  if (!file.startsWith(root + path.sep)) { res.writeHead(403); return res.end(); }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  if (!fs.existsSync(file)) { res.writeHead(404, {'Content-Type':'text/html'}); return res.end(fs.readFileSync(path.join(root, '404.html'))); }
  res.writeHead(200, {'Content-Type':types[path.extname(file)] || 'application/octet-stream'});
  fs.createReadStream(file).pipe(res);
}).listen(process.env.PORT || 3010, () => console.log(`Static preview: http://localhost:${process.env.PORT || 3010}${prefix}/`));
