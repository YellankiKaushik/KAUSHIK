import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import handler from "../api/portfolio-chat.ts";

const file = name => new URL(`../${name}`, import.meta.url);

test("Vercel preserves filesystem routing, API requests, and retirement of the résumé URL", async () => {
  const config = JSON.parse(await readFile(file("vercel.json"), "utf8"));
  assert.equal(config.rewrites, undefined);
  assert.equal(config.headers, undefined);
  const [headers, retired, filesystem, fallback] = config.routes;
  assert.equal(headers.continue, true);
  assert.equal(headers.headers["X-Content-Type-Options"], "nosniff");
  assert.equal(retired.status, 410);
  assert.match("/resume/Kaushik-Resume.pdf", new RegExp(retired.src));
  assert.equal(filesystem.handle, "filesystem");
  assert.equal(fallback.dest, "/index.html");
  assert.deepEqual(fallback.methods, ["GET", "HEAD"]);
  assert.match("/project/hazlo", new RegExp(fallback.src));
  assert.match("/newsletter", new RegExp(fallback.src));
  assert.doesNotMatch("/api/portfolio-chat", new RegExp(fallback.src));
  assert.doesNotMatch("/api", new RegExp(fallback.src));
});

test("the canonical origin and social preview agree with the sitemap and manifest", async () => {
  const [html, sitemap, manifestText, image] = await Promise.all(
    ["index.html", "public/sitemap.xml", "public/site.webmanifest", "public/social-preview.jpg"].map(name => readFile(file(name))));
  const source = html.toString();
  const locations = [...sitemap.toString().matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
  assert.ok(locations.length > 10);
  assert.equal(new Set(locations).size, locations.length);
  assert.ok(locations.every(url => new URL(url).origin === "https://kaaush.vercel.app"));
  assert.ok(locations.includes("https://kaaush.vercel.app/newsletter"));
  assert.match(source, /rel="canonical" href="https:\/\/kaaush\.vercel\.app\/"/);
  assert.match(source, /property="og:image" content="https:\/\/kaaush\.vercel\.app\/social-preview\.jpg"/);
  assert.deepEqual([...image.subarray(0, 2)], [0xff, 0xd8]);
  const manifest = JSON.parse(manifestText);
  assert.equal(new URL(manifest.start_url, "https://example.net/KAUSHIK/site.webmanifest").pathname, "/KAUSHIK/");
  assert.ok(manifest.icons.every(icon => icon.src.startsWith("./")));
});

async function request(method, body) {
  const response = { headers: {} };
  await handler({ method, body }, {
    setHeader(name, value) { response.headers[name] = value; },
    status(code) { response.status = code; return this; },
    json(payload) { response.payload = payload; },
  });
  return response;
}

test("the assistant endpoint rejects unsupported methods and invalid input", async () => {
  const get = await request("GET");
  assert.equal(get.status, 405);
  assert.equal(get.headers.Allow, "POST");
  assert.equal((await request("POST", "{not-json")).status, 400);
  assert.equal((await request("POST", {})).status, 400);
  const fallback = await request("POST", { message: "What does Kaushik build?" });
  assert.equal(fallback.status, 200);
  assert.equal(fallback.payload.source, "local_fallback");
});
