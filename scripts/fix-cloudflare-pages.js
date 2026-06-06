/**
 * Fix Cloudflare Pages output structure.
 *
 * @astrojs/cloudflare outputs:
 *   dist/client/  → static assets
 *   dist/server/  → worker code (entry.mjs + chunks)
 *
 * Cloudflare Pages needs everything in ONE output directory:
 *   _worker.js   → SSR entry
 *   _routes.json → routing rules
 *   (static files)
 *
 * Strategy: merge everything into dist/client/ as the output directory.
 */
import { existsSync, cpSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve("dist");
const clientDir = join(root, "client");
const serverDir = join(root, "server");

// 1. Copy _routes.json into dist/client/
const routesSrc = join("public", "_routes.json");
if (existsSync(routesSrc)) {
    cpSync(routesSrc, join(clientDir, "_routes.json"));
    console.log("✅ _routes.json → dist/client/");
}

// 2. Copy entry.mjs as _worker.js into dist/client/
const entrySrc = join(serverDir, "entry.mjs");
if (existsSync(entrySrc)) {
    cpSync(entrySrc, join(clientDir, "_worker.js"));
    console.log("✅ entry.mjs → dist/client/_worker.js");
}

// 3. Copy server chunks into dist/client/chunks/
const srcChunks = join(serverDir, "chunks");
const dstChunks = join(clientDir, "chunks");
if (existsSync(srcChunks)) {
    cpSync(srcChunks, dstChunks, { recursive: true });
    console.log("✅ server chunks → dist/client/chunks/");
}

// 4. Copy server _astro into dist/client/_astro-server/
const srcServerAstro = join(serverDir, "_astro");
if (existsSync(srcServerAstro)) {
    cpSync(srcServerAstro, join(clientDir, "_astro-server"), { recursive: true });
    console.log("✅ server _astro → dist/client/_astro-server/");
}

console.log("\n📁 Output directory: dist/client/");
console.log("   Set this in Cloudflare Pages dashboard → Build settings → Output directory");
