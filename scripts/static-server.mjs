import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';
import { execFile } from 'node:child_process';

const root = resolve('dist');
const port = 3000;
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.avif': 'image/avif',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
};

const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const relative = normalize(pathname).replace(/^([\\/])+/, '') || 'index.html';
    let file = join(root, relative);

    if (!file.startsWith(root)) throw new Error('Invalid path');

    try {
      if ((await stat(file)).isDirectory()) file = join(file, 'index.html');
    } catch {
      file = join(root, 'index.html');
    }

    const body = await readFile(file);
    response.writeHead(200, {
      'Content-Type': mime[extname(file).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-store',
    });
    response.end(body);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('File not found');
  }
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.log('Site is already running at http://127.0.0.1:3000');
    if (process.argv.includes('--open')) {
      execFile('cmd.exe', ['/c', 'start', '', 'http://127.0.0.1:3000'], () => {});
    }
    process.exit(0);
  }
  throw error;
});

server.listen(port, '127.0.0.1', () => {
  console.log('Kate Mel portfolio is running: http://127.0.0.1:3000');
  console.log('Keep this window open. Press Ctrl+C to stop.');

  if (process.argv.includes('--open')) {
    execFile('cmd.exe', ['/c', 'start', '', 'http://127.0.0.1:3000'], () => {});
  }
});
