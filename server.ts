import http, { IncomingMessage, ServerResponse } from 'http';
import fs from 'fs';
import path from 'path';

const PORT = 8080;
// Use project root as the server base (works for both `tsx server.ts` and `node dist/server.js`)
const ROOT_DIR = path.resolve(process.cwd());
const PHOTOS_DIR = path.join(ROOT_DIR, 'photos');

// MIME 类型映射
const MIME_TYPES: Record<string, string> = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.mjs': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.wasm': 'application/wasm',
    '.task': 'application/octet-stream'
};

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    // CORS 头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Filename');

    // Handle preflight
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // Only allow GET/HEAD for this simple static server
    if (req.method && req.method !== 'GET' && req.method !== 'HEAD') {
        res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('405 Method Not Allowed');
        return;
    }

    const url = new URL(req.url || '/', 'http://localhost');

    // API: 列出 photos 文件夹中的所有图片
    if (url.pathname === '/api/photos') {
        try {
            const files = fs.readdirSync(PHOTOS_DIR)
                .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
                .map(file => `photos/${file}`);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(files));
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Failed to read photos directory' }));
        }
        return;
    }

    // 静态文件服务
    const requestedPath = url.pathname === '/' ? 'index.html' : url.pathname.replace(/^\/+/, '');

    // Resolve to absolute path under ROOT_DIR and prevent path traversal
    const absPath = path.resolve(ROOT_DIR, requestedPath);
    if (absPath !== ROOT_DIR && !absPath.startsWith(ROOT_DIR + path.sep)) {
        res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('400 Bad Request');
        return;
    }

    const ext = path.extname(absPath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(absPath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end('404 Not Found');
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end('500 Server Error');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            if (req.method === 'HEAD') {
                res.end();
            } else {
                res.end(content);
            }
        }
    });
});

server.listen(PORT, () => {
    console.log(`\n🎄 Christmas Tree Server running at:`);
    console.log(`   http://localhost:${PORT}\n`);
    console.log(`📷 Photos API: http://localhost:${PORT}/api/photos\n`);
});
