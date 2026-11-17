import { test } from "node:test";
import assert from "node:assert/strict";
import { projects } from "../src/data/projects.ts";
import { projectStories } from "../src/data/projectStories.ts";
import { challenges, challengeProofLinkKeys } from "../src/data/challenges.ts";

const featured = ["agroguia-ai", "youtube-review", "hazlo", "ai-crowd-intelligence", "sistemaa-electoral", "gym-membership"];
const archive = ["krishi-seva", "psymatch", "vaaniplan", "google-product-analysis"];

test("featured projects retain their order and all existing case-study routes remain available", () => {
  assert.deepEqual(projects.filter(project => project.visible !== false).map(project => project.slug), featured);
  assert.deepEqual(projects.filter(project => project.visible === false).map(project => project.slug), archive);
  assert.equal(new Set(projects.map(project => project.slug)).size, projects.length);
});

test("each featured project has evidence links and a complete engineering narrative", () => {
  for (const slug of featured) {
    const project = projects.find(record => record.slug === slug);
    const story = projectStories[slug];
    assert.ok(project.problem && project.results?.length && project.github, slug);
    assert.ok(story?.flow.length >= 3 && story.decisions.length && story.boundaries.length, slug);
    for (const link of [project.github, project.live, project.medium, story.evidence?.href].filter(Boolean)) {
      assert.equal(new URL(link).protocol, "https:", link);
    }
  }
});

test("challenge evidence URLs and links to portfolio case studies remain valid", () => {
  assert.equal(new Set(challenges.map(challenge => challenge.slug)).size, challenges.length);
  for (const challenge of challenges) {
    if (challenge.relatedProjectSlug) {
      assert.ok(projects.some(project => project.slug === challenge.relatedProjectSlug), challenge.slug);
    }
    for (const key of challengeProofLinkKeys) {
      const link = challenge[key];
      if (!link) continue;
      if (link.startsWith("/")) {
        assert.ok(projects.some(project => link === `/project/${project.slug}`), link);
      } else {
        assert.equal(new URL(link).protocol, "https:", link);
      }
    }
  }
});
