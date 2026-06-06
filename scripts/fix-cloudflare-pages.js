/**
 * Fix Cloudflare Pages output structure.
 *
 * @astrojs/cloudflare adapter already generates a properly bundled
 * _worker.js in dist/client/ during "Rearranging server assets".
 * We should NOT overwrite it.
 *
 * This script only:
 * 1. Copies _routes.json into dist/client/
 * 2. That's it.
 */
import { existsSync, cpSync } from "node:fs";
import { join, resolve } from "node:path";

const clientDir = resolve("dist", "client");

// Only copy _routes.json to dist/client/
const routesSrc = join("public", "_routes.json");
if (existsSync(routesSrc)) {
    cpSync(routesSrc, join(clientDir, "_routes.json"));
    console.log("✅ _routes.json → dist/client/");
} else {
    console.log("⚠ No public/_routes.json found, skipping");
}

console.log("📁 Output directory: dist/client/");
