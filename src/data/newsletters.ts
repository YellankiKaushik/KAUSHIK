import catalog from "./newsletters.json";

type Story = { headline: string; summary: string; why: string; source: string; url: string; published_at: string };
type Edition = { id: string; version: number; slug: string; title: string; topic: string; intro: string; closing: string; publishedAt: string; items: Story[] };

export const editions = catalog as Edition[];
