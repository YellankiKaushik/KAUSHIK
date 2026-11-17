import { after, before, test } from "node:test";
import assert from "node:assert/strict";
import { PassThrough } from "node:stream";
import { createElement } from "react";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { createServer } from "vite";
import { projects } from "../src/data/projects.ts";
import { challenges } from "../src/data/challenges.ts";

let vite;
let PortfolioRoutes;
let getPortfolioAnswer;

before(async () => {
  vite = await createServer({ appType: "custom", server: { middlewareMode: true, ws: false, hmr: false } });
  ({ default: PortfolioRoutes } = await vite.ssrLoadModule("/src/PortfolioRoutes.tsx"));
  ({ getPortfolioAnswer } = await vite.ssrLoadModule("/src/utils/portfolioChatbotEngine.ts"));
});

after(async () => { await vite?.close(); });

function renderRoute(location, basename = "/") {
  return new Promise((resolve, reject) => {
    const output = new PassThrough();
    const chunks = [];
    output.setEncoding("utf8");
    output.on("data", chunk => chunks.push(chunk));
    output.on("error", reject);
    output.on("end", () => resolve(chunks.join("")));
    const stream = renderToPipeableStream(createElement(StaticRouter, { location, basename }, createElement(PortfolioRoutes)), {
      onAllReady() { stream.pipe(output); },
      onError: reject,
    });
  });
}

test("home renders the portfolio landmarks, work, and writing links under the Pages base", { timeout: 15_000 }, async () => {
  const html = await renderRoute("/KAUSHIK/", "/KAUSHIK");
  assert.match(html, /<h1[^>]*>Kaushik/);
  for (const id of ["home", "projects", "process", "about", "experience", "skills", "education", "certifications", "achievements", "newsletter", "contact"]) {
    assert.match(html, new RegExp(`id="${id}"`));
  }
  assert.match(html, /href="\/KAUSHIK\/project\/hazlo"/);
  assert.match(html, /href="\/KAUSHIK\/newsletter"/);
  assert.match(html, /Proof link unavailable/);
});

test("all project routes render their data, including archived projects", { timeout: 15_000 }, async () => {
  for (const project of projects) {
    const html = await renderRoute(`/project/${project.slug}`);
    assert.ok(html.includes(project.title.replaceAll("&", "&amp;")), project.slug);
    assert.match(html, /The problem/);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, project.slug);
  }
});

test("experience, challenge, newsletter, and not-found views render", { timeout: 15_000 }, async () => {
  const routes = [
    ["/experience/uptoskills-ai-research", "AI Research Intern"],
    ["/experience/edunet-ai-engineer", "AI Engineer"],
    ["/experience/crowdsource-marketing", "Marketing Associate"],
    ["/experience/aashay-social-media", "Social Media &amp; Promotions Associate"],
    ["/experience/challenge-participation", "Challenges &amp; hackathons."],
    ...challenges.map(challenge => [`/challenges/${challenge.slug}`, challenge.title.replaceAll("&", "&amp;").replaceAll("'", "&#x27;")]),
    ["/newsletter", "No editions have been published yet."],
    ["/newsletter/missing-edition", "Edition not found."],
    ["/missing-page", "Page not found."],
  ];
  for (const [path, title] of routes) {
    const html = await renderRoute(path);
    assert.ok(html.includes(title), `${path}: ${title}`);
  }
});

test("assistant can answer a contact question from local portfolio data", () => {
  const answer = getPortfolioAnswer("What is Kaushik’s email address?");
  assert.match(answer.content, /kaushikyellanki@gmail\.com/);
});

test("unavailable deployments are labeled and their broken links stay out of the public UI", async () => {
  for (const slug of ["ai-crowd-intelligence", "sistemaa-electoral"]) {
    const html = await renderRoute(`/project/${slug}`);
    assert.match(html, /hosted demo is currently unavailable/i);
    assert.match(html, /Source on GitHub/);
    assert.doesNotMatch(html, /href="[^"]+\.run\.app/);
  }
  const challenge = await renderRoute("/challenges/ai-crowd-intelligence-assistant");
  assert.match(challenge, /hosted demo is currently unavailable/i);
  assert.doesNotMatch(challenge, /href="[^"]+\.run\.app/);
  const answer = getPortfolioAnswer("Tell me about Sistemaa Electoral");
  assert.match(answer.content, /hosted demo is currently unavailable/i);
  assert.doesNotMatch(answer.content, /\.run\.app/);
});
