import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import catalog from "@/data/newsletters.json";

type Story = { headline: string; summary: string; why: string; source: string; url: string; published_at: string };
type Edition = { id: string; version: number; slug: string; title: string; topic: string; intro: string; closing: string; publishedAt: string; items: Story[] };
const editions = catalog as Edition[];
const card = "glass-card p-6 md:p-8";

function Subscribe() {
  const username = import.meta.env.VITE_BUTTONDOWN_USERNAME || "";
  if (!/^[a-zA-Z0-9_-]+$/.test(username)) return <p className="text-white/70">Email subscriptions are not activated yet. Editions will be readable here without signing up.</p>;
  return <form action={`https://buttondown.com/api/emails/embed-subscribe/${username}`} method="post" className="flex flex-wrap gap-3">
    <label className="w-full" htmlFor="signal-email">Get Signal Daily by email</label>
    <input id="signal-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className="rounded-lg bg-black/30 border border-white/30 p-3 max-w-full" />
    <input type="hidden" name="embed" value="1" /><button className="btn-cosmic" type="submit">Subscribe</button>
    <p className="w-full text-sm text-white/70">Buttondown manages confirmation and unsubscribe. Confirm your address to opt in.</p>
  </form>;
}

export function SignalDailySection() {
  const latest = editions[0];
  return <section id="newsletter" aria-labelledby="signal-title" className="max-w-6xl mx-auto px-6 py-20">
    <div className={card}><p className="uppercase tracking-widest text-orange-300 text-sm">Local AI · Human judgment · Original sources</p>
      <h2 id="signal-title" className="text-4xl md:text-5xl my-4">Signal Daily</h2>
      <p className="text-white/70 mb-6">A considered briefing on AI, researched from trusted feeds and published only after editorial approval.</p>
      {latest ? <Link to={`/newsletter/${latest.slug}`} className="block text-2xl mb-4 underline">{latest.title}</Link> : <p className="mb-6">The first approved edition is coming soon.</p>}
      {editions.slice(1, 4).map(edition => <Link key={edition.id} className="block mb-3 underline" to={`/newsletter/${edition.slug}`}>{edition.title}</Link>)}
      <Link className="btn-cosmic inline-block mb-8" to="/newsletter">Explore the newsletter archive →</Link><Subscribe />
    </div>
  </section>;
}

export function NewsletterPage() {
  const { slug } = useParams();
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("");
  const edition = slug ? editions.find(record => record.slug === slug) : undefined;
  const filtered = editions.filter(record => (!topic || record.topic === topic) && `${record.title} ${record.intro}`.toLowerCase().includes(query.toLowerCase()));
  return <main className="max-w-5xl mx-auto px-6 py-16 break-words">
    <nav aria-label="Newsletter navigation" className="flex gap-6 mb-12"><Link to="/">← Portfolio</Link><Link to="/newsletter">All editions</Link></nav>
    <p className="text-orange-300 uppercase tracking-widest text-sm">Signal Daily</p>
    {slug ? edition ? <article className={card}>
      <p className="text-white/70">{edition.topic} · <time dateTime={edition.publishedAt}>{edition.publishedAt.slice(0, 10)}</time></p>
      <h1 className="text-4xl md:text-6xl my-6">{edition.title}</h1><p className="text-xl mb-10 whitespace-pre-line">{edition.intro}</p>
      {edition.items.map((item, index) => <section key={`${index}-${item.url}`} className="border-t border-white/20 py-8">
        <h2 className="text-2xl mb-4">{item.headline}</h2><p className="whitespace-pre-line mb-4">{item.summary}</p><p className="bg-white/5 p-4 mb-4"><strong>Why it matters:</strong> {item.why}</p>
        {/^https?:\/\//.test(item.url) && <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-orange-300 underline">Source: {item.source}</a>}
        {item.published_at && <time className="block text-sm text-white/70" dateTime={item.published_at}>Source date: {item.published_at.slice(0, 10)}</time>}
      </section>)}<p className="whitespace-pre-line border-t border-white/20 pt-8">{edition.closing}</p>
    </article> : <><h1 className="text-4xl my-8">Edition not found</h1><p>This edition has not been published here.</p></> : <>
      <h1 className="text-4xl md:text-6xl my-6">A clearer signal.</h1><p className="text-white/70 mb-8">Every public edition. Reviewed by a human, with original sources attached.</p>
      <div className="flex flex-wrap gap-4 mb-8"><label>Search editions<input className="block bg-black/30 border border-white/30 rounded-lg p-3 max-w-full" type="search" value={query} onChange={event => setQuery(event.target.value)} /></label>
        <label htmlFor="newsletter-topic">Topic<select id="newsletter-topic" aria-label="Topic" className="block bg-black border border-white/30 rounded-lg p-3" value={topic} onChange={event => setTopic(event.target.value)}><option value="">All topics</option>{[...new Set(editions.map(record => record.topic))].map(value => <option key={value}>{value}</option>)}</select></label></div>
      <div className="grid md:grid-cols-2 gap-6 mb-12">{filtered.map(record => <article key={record.id} className={card}><time dateTime={record.publishedAt} className="text-white/70">{record.publishedAt.slice(0, 10)}</time><h2 className="text-2xl my-4"><Link className="underline" to={`/newsletter/${record.slug}`}>{record.title}</Link></h2><p>{record.intro}</p></article>)}</div>
      {!filtered.length && <p role="status" className="mb-12">{editions.length ? "No editions match your search." : "No editions have been published yet."}</p>}<Subscribe />
    </>}
  </main>;
}
