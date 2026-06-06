/**
 * Fix Cloudflare Pages output structure.
 *
 * Cloudflare Pages expects _worker.js and _routes.json at the output root.
 * Astro's Cloudflare adapter puts static files in dist/client/ and worker in dist/server/.
 * This script merges everything into dist/ for Cloudflare Pages compatibility.
 */
import { existsSync, cpSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve("dist");
const clientDir = join(root, "client");
const serverDir = join(root, "server");

// 1. Move static assets from dist/client/ to dist/
if (existsSync(clientDir)) {
    const files = readdirSync(clientDir);
    for (const file of files) {
        if (file === ".assetsignore") continue;
        const src = join(clientDir, file);
        const dst = join(root, file);
        cpSync(src, dst, { recursive: true });
    }
    console.log("✅ Moved static assets from dist/client/ to dist/");
}

// 2. Copy _routes.json to dist/
const routesSrc = join("public", "_routes.json");
if (existsSync(routesSrc)) {
    cpSync(routesSrc, join(root, "_routes.json"));
    console.log("✅ Copied _routes.json to dist/");
}

// 3. Copy entry.mjs as _worker.js to dist/
const entrySrc = join(serverDir, "entry.mjs");
if (existsSync(entrySrc)) {
    cpSync(entrySrc, join(root, "_worker.js"));
    console.log("✅ Copied entry.mjs → _worker.js");
}

// 4. Copy server chunks (needed by entry.mjs imports)
const srcChunks = join(serverDir, "chunks");
const dstChunks = join(root, "chunks");
if (existsSync(srcChunks)) {
    cpSync(srcChunks, dstChunks, { recursive: true });
    console.log("✅ Copied server chunks");
}

// 5. Copy server _astro dir
const srcServerAstro = join(serverDir, "_astro");
if (existsSync(srcServerAstro)) {
    cpSync(srcServerAstro, join(root, "_astro-server"), { recursive: true });
    console.log("✅ Copied server _astro");
}

console.log("\n📁 dist/ structure ready for Cloudflare Pages");
