/**
 * Fix Cloudflare Pages output structure.
 *
 * @astrojs/cloudflare adapter already generates a properly bundled
 * _worker.js in dist/client/ during "Rearranging server assets".
 * We should NOT overwrite it.
 *
 * Cloudflare Pages default behavior (without _routes.json):
 * 1. First serve static files from the output directory
 * 2. If no static file matches, route to _worker.js
 *
 * This is exactly what we want for SSR - static assets served directly,
 * page routes handled by the worker. Do NOT add _routes.json.
 */
console.log("📁 Output directory: dist/client/");
console.log("ℹ Using Cloudflare Pages default routing (static first, then worker)");
