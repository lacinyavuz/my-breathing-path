import { Helmet } from "react-helmet-async";
import { site } from "../data/site";

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

export function Seo({ title, description, path = "/", image }: SeoProps) {
  const fullTitle = title
    ? `${title} — ${site.name}`
    : `${site.name} — ${site.tagline}`;
  const desc = description ?? site.description;
  const url = `${site.url}${path}`;
  const img = image ?? `${site.url}/og-image.jpg`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  );
}
