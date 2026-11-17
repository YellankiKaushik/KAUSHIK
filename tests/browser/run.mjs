import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const base = new URL(process.env.QA_BASE_URL ?? "http://127.0.0.1:4173/KAUSHIK/");
if (!base.pathname.endsWith("/")) base.pathname += "/";
const output = resolve("browser-results.local");
const caseStudies = [
  ["agroguia-ai", "AGROGUIA.AI"],
  ["hazlo", "Hazlo"],
  ["gym-membership", "FitZone Gym Membership Management System"],
];
const sections = [
  ["hero", "#home"], ["work", "#projects"], ["process", "#process"],
  ["experience", "#experience"], ["skills", "#skills"], ["contact", "#contact"],
];
const goto = (page, path = "") => page.goto(new URL(path, base).href, { waitUntil: "load" });
const shot = (width, name) => resolve(output, `${width}-${name}.png`);

async function checkLayout(page, width) {
  const layout = await page.evaluate(() => ({
    width: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
  assert.equal(layout.width, width);
  assert.ok(layout.scrollWidth <= width, `Horizontal overflow on ${page.url()}: ${layout.scrollWidth}px at ${width}px`);
}

async function capturePage(page, width, name, fullPage = false) {
  await page.evaluate(() => document.fonts.ready.then(() => true));
  await checkLayout(page, width);
  await page.screenshot({ path: shot(width, name), fullPage, animations: "disabled" });
}

async function checkPrimaryRoutes(page, width, report) {
  const response = await goto(page);
  assert.ok(response?.ok(), `Preview returned ${response?.status()}`);
  await page.getByRole("heading", { level: 1, name: /Kaushik.*Yellanki/i }).waitFor();
  await page.evaluate(() => document.fonts.ready.then(() => true));
  report.timing = await page.evaluate(() => {
    const navigation = performance.getEntriesByType("navigation")[0];
    return { domContentLoadedMs: navigation.domContentLoadedEventEnd, loadMs: navigation.loadEventEnd, transferBytes: navigation.transferSize };
  });
  for (const [name, selector] of sections) {
    await checkLayout(page, width);
    await page.locator(selector).screenshot({ path: shot(width, name), animations: "disabled" });
  }
  for (const id of ["certifications", "achievements"]) {
    await page.locator(`#${id} summary`).press("Enter");
    assert.equal(await page.locator(`#${id}`).evaluate(node => node.open), true);
    await page.locator(`#${id}`).screenshot({ path: shot(width, id), animations: "disabled" });
  }
  const badge = await page.locator("#certifications").getByRole("link", { name: /Alteryx Auto Insights/ }).getAttribute("href");
  assert.match(badge, /^https:\/\/www\.credly\.com\//);
  assert.match(await page.locator("#contact").getByRole("link", { name: /kaushikyellanki@gmail.com/i }).getAttribute("href"), /^mailto:/);
  report.accessibility.home = (await new AxeBuilder({ page }).analyze()).violations;

  const nav = page.getByRole("navigation", { name: width === 390 ? "Mobile navigation" : "Main navigation" });
  if (width === 390) {
    const menu = page.locator(".nav-mobile summary");
    await menu.press("Enter");
    await nav.waitFor();
    await capturePage(page, width, "mobile-navigation");
    await page.keyboard.press("Escape");
    await nav.waitFor({ state: "hidden" });
    assert.equal(await menu.evaluate(node => node === document.activeElement), true);
    await menu.press("Enter");
  }
  await nav.getByRole("link", { name: "Work", exact: true }).click();
  assert.equal(new URL(page.url()).hash, "#projects");
  assert.equal(await page.locator("#projects").evaluate(node => node === document.activeElement), true);
  if (width === 390) await nav.waitFor({ state: "hidden" });
  await page.getByRole("link", { name: "Hazlo", exact: true }).click();
  await page.getByRole("heading", { level: 1, name: "Hazlo", exact: true }).waitFor();
  await page.goBack();
  await page.locator("#projects").waitFor();
  assert.equal(new URL(page.url()).hash, "#projects");

  for (const [slug, title] of caseStudies) {
    await goto(page, `project/${slug}`);
    await page.getByRole("heading", { level: 1, name: title, exact: true }).waitFor();
    const source = await page.getByRole("link", { name: "Source on GitHub" }).getAttribute("href");
    assert.match(source, /^https:\/\/github\.com\/YellankiKaushik\//);
    await capturePage(page, width, `case-${slug}`, true);
    if (slug === "hazlo") report.accessibility.caseStudy = (await new AxeBuilder({ page }).analyze()).violations;
  }
  for (const slug of ["ai-crowd-intelligence", "sistemaa-electoral"]) {
    await goto(page, `project/${slug}`);
    await page.getByText(/hosted demo is currently unavailable/).waitFor();
    assert.equal(await page.getByRole("link", { name: "Open live demo" }).count(), 0);
  }
  await goto(page, "experience/uptoskills-ai-research");
  await page.getByRole("heading", { level: 1, name: /AI Research Intern/ }).waitFor();
  await goto(page, "experience/challenge-participation");
  await page.getByRole("link", { name: /AI Crowd Intelligence Assistant/ }).click();
  await page.getByRole("heading", { level: 1, name: "AI Crowd Intelligence Assistant" }).waitFor();
  await page.getByText(/hosted demo is currently unavailable/).waitFor();
  await page.getByRole("link", { name: "Read case study" }).click();
  await page.getByRole("link", { name: "Selected work" }).waitFor();
}

async function checkNewsletterAndAssistant(page, width, report) {
  await goto(page, "newsletter");
  await page.getByRole("heading", { level: 1, name: "Signal Daily." }).waitFor();
  const subscription = page.getByRole("button", { name: "Subscribe" });
  if (await subscription.count()) {
    assert.match(await page.locator("form").filter({ has: subscription }).getAttribute("action"), /^https:\/\/buttondown\.com\//);
  } else {
    await page.getByText(/Email subscriptions will open later/).waitFor();
  }
  await capturePage(page, width, "newsletter", true);
  report.accessibility.newsletter = (await new AxeBuilder({ page }).analyze()).violations;
  await goto(page, "newsletter/qa-missing-edition");
  await page.getByRole("heading", { name: "Edition not found." }).waitFor();
  await page.locator('meta[name="robots"][content="noindex, follow"]').waitFor({ state: "attached" });

  const launcher = page.getByRole("button", { name: "Open Kaushik portfolio assistant" });
  await launcher.press("Enter");
  const dialog = page.getByRole("dialog", { name: "Kaushik Portfolio Assistant" });
  const close = dialog.getByRole("button", { name: "Close Kaushik portfolio assistant" });
  assert.equal(await close.evaluate(node => node === document.activeElement), true);
  const input = dialog.getByRole("textbox");
  await input.fill("What is Kaushik's email address?");
  await input.press("Enter");
  await dialog.getByRole("log").getByText(/kaushikyellanki@gmail\.com/).waitFor();

  let apiCalled = false;
  await page.route("**/api/portfolio-chat", async route => {
    apiCalled = true;
    assert.equal(route.request().method(), "POST");
    assert.match(route.request().postDataJSON().message, /recruiter summary/i);
    await route.fulfill({ json: { source: "openrouter", answer: "QA fixture: enriched assistant answer." } });
  });
  await dialog.getByRole("button", { name: "Recruiter summary of Kaushik" }).click();
  if (base.pathname === "/") {
    await dialog.getByText("QA fixture: enriched assistant answer.").waitFor();
    assert.equal(apiCalled, true);
  } else {
    await dialog.getByRole("log").getByText(/recruiter's perspective/i).waitFor();
    assert.equal(apiCalled, false);
  }
  await capturePage(page, width, "assistant");
  report.accessibility.assistant = (await new AxeBuilder({ page }).analyze()).violations;
  await input.press("Escape");
  await dialog.waitFor({ state: "hidden" });
  assert.equal(await launcher.evaluate(node => node === document.activeElement), true);
}

await mkdir(output, { recursive: true });
const browser = await chromium.launch();
try {
  for (const width of [390, 768, 1440]) {
    const context = await browser.newContext({
      viewport: { width, height: width === 390 ? 844 : 960 },
      hasTouch: width !== 1440,
      reducedMotion: "reduce",
    });
    const page = await context.newPage();
    const report = { width, accessibility: {} };
    try {
      await checkPrimaryRoutes(page, width, report);
      await checkNewsletterAndAssistant(page, width, report);
      await goto(page);
      assert.equal(await page.evaluate(() => document.documentElement.classList.contains("lenis")), false);
      assert.equal(await page.evaluate(() => matchMedia("(prefers-reduced-motion: reduce)").matches), true);
    } finally {
      await writeFile(resolve(output, `${width}-audit.json`), JSON.stringify(report, null, 2));
      await context.close();
    }
    const violations = Object.entries(report.accessibility).flatMap(([path, findings]) =>
      findings.map(({ id }) => `${path}: ${id}`));
    assert.deepEqual(violations, [], `Accessibility violations at ${width}px`);
    console.log(`Passed browser QA at ${width}px`);
  }

  const motion = await browser.newPage({ viewport: { width: 1440, height: 960 }, reducedMotion: "no-preference" });
  await goto(motion);
  await motion.locator("html.lenis").waitFor({ state: "attached" });
  await motion.emulateMedia({ reducedMotion: "reduce" });
  await motion.locator("html.lenis").waitFor({ state: "detached" });
  await motion.close();
} finally {
  await browser.close();
}
