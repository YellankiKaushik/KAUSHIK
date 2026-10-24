const portfolioOrigin = "https://kaaush.vercel.app";

export const setPageSeo = (
  title: string,
  description: string,
  canonicalPath: string | null = "/"
) => {
  document.title = title;

  const selector = 'meta[name="description"]';
  let descriptionTag = document.querySelector<HTMLMetaElement>(selector);

  if (!descriptionTag) {
    descriptionTag = document.createElement("meta");
    descriptionTag.name = "description";
    document.head.appendChild(descriptionTag);
  }

  descriptionTag.content = description;

  for (const [attribute, name, content] of [
    ["property", "og:title", title],
    ["property", "og:description", description],
    ["name", "twitter:title", title],
    ["name", "twitter:description", description],
  ]) {
    let tag = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute(attribute, name);
      document.head.appendChild(tag);
    }
    tag.content = content;
  }

  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  let ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
  if (canonicalPath === null) {
    canonical?.remove();
    ogUrl?.remove();
    return;
  }

  const url = new URL(canonicalPath, portfolioOrigin).href;
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = url;
  if (!ogUrl) {
    ogUrl = document.createElement("meta");
    ogUrl.setAttribute("property", "og:url");
    document.head.appendChild(ogUrl);
  }
  ogUrl.content = url;
};
