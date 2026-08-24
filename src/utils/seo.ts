export const setPageSeo = (title: string, description: string) => {
  document.title = title;

  const selector = 'meta[name="description"]';
  let descriptionTag = document.querySelector<HTMLMetaElement>(selector);

  if (!descriptionTag) {
    descriptionTag = document.createElement("meta");
    descriptionTag.name = "description";
    document.head.appendChild(descriptionTag);
  }

  descriptionTag.content = description;
};
