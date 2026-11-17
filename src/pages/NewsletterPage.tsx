import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DetailPage from "@/components/DetailPage";
import { editions } from "@/data/newsletters";
import { setPageSeo } from "@/utils/seo";

function Subscribe() {
  const username = import.meta.env.VITE_BUTTONDOWN_USERNAME || "";
  if (!/^[a-zA-Z0-9_-]+$/.test(username)) return <p>Email subscriptions will open later. Every edition will be available in the archive.</p>;

  return (
    <form action={`https://buttondown.com/api/emails/embed-subscribe/${username}`} method="post" className="archive-controls items-end">
      <label className="field-label">Get Signal Daily by email<input className="field" name="email" type="email" required autoComplete="email" /></label>
      <input type="hidden" name="embed" value="1" /><button className="action action-primary" type="submit">Subscribe</button>
      <p className="w-full">Buttondown will ask you to confirm your address. You can unsubscribe from any issue.</p>
    </form>
  );
}

export default function NewsletterPage() {
  const { slug } = useParams();
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("");
  const edition = slug ? editions.find(record => record.slug === slug) : undefined;

  useEffect(() => {
    if (edition) {
      setPageSeo(`${edition.title} | Signal Daily | Kaushik Yellanki`, edition.intro.replace(/\s+/g, " ").trim().slice(0, 160), `/newsletter/${encodeURIComponent(edition.slug)}`);
    } else if (slug) {
      setPageSeo("Edition not found | Signal Daily | Kaushik Yellanki", "This edition has not been published in the Signal Daily archive.", null);
    } else {
      setPageSeo("Signal Daily | Kaushik Yellanki", "Read human-reviewed Signal Daily AI briefings with links to their original sources.", "/newsletter");
    }
  }, [edition, slug]);

  if (slug && !edition) return <DetailPage back="/newsletter" backLabel="Newsletter archive" label="Signal Daily" title="Edition not found." intro="This edition hasn’t been published in the archive." />;

  if (edition) return (
    <DetailPage back="/newsletter" backLabel="Newsletter archive" label={`Signal Daily · ${edition.topic}`} title={edition.title} intro={edition.intro}>
      <article className="newsletter-edition case-content">
        <p className="eyebrow"><time dateTime={edition.publishedAt}>{edition.publishedAt.slice(0, 10)}</time></p>
        {edition.items.map((item, index) => <section key={`${index}-${item.url}`}>
          <h2>{item.headline}</h2>
          <p className="whitespace-pre-line">{item.summary}</p>
          <p><strong>Why it matters</strong> {item.why}</p>
          {/^https?:\/\//.test(item.url) && <a href={item.url} className="text-link">Source · {item.source}</a>}
          {item.published_at && <p><time dateTime={item.published_at}>{item.published_at.slice(0, 10)}</time></p>}
        </section>)}
        <p className="whitespace-pre-line">{edition.closing}</p>
      </article>
    </DetailPage>
  );

  const filtered = editions.filter(record => (!topic || record.topic === topic) && `${record.title} ${record.intro}`.toLowerCase().includes(query.trim().toLowerCase()));

  return (
    <DetailPage back="/#newsletter" backLabel="Portfolio writing" label="Newsletter archive" title="Signal Daily."
      intro="Briefings on AI. Each edition is reviewed before publication and includes links to the original sources.">
      {!!editions.length && <div className="archive-controls">
        <label className="field-label">Search editions<input type="search" className="field" value={query} onChange={event => setQuery(event.target.value)} /></label>
        <label className="field-label">Topic
          <select className="field" value={topic} onChange={event => setTopic(event.target.value)}>
            <option value="">All topics</option>
            {[...new Set(editions.map(record => record.topic))].map(value => <option key={value}>{value}</option>)}
          </select>
        </label>
      </div>}
      <div className="detail-directory">
        {filtered.map(record => <Link className="directory-row newsletter-row" to={`/newsletter/${record.slug}`} key={record.id}>
          <p className="eyebrow"><time dateTime={record.publishedAt}>{record.publishedAt.slice(0, 10)}</time></p>
          <div><h3>{record.title}</h3><p>{record.intro}</p></div>
        </Link>)}
        {!filtered.length && <p role="status">{editions.length ? "No editions match your search." : "No editions have been published yet."}</p>}
      </div>
      <div className="newsletter-edition"><Subscribe /></div>
    </DetailPage>
  );
}
