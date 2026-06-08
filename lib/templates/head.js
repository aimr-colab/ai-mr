export function head(page) {

  return `
<title>${page.title}</title>

<meta
name="description"
content="${page.description}">

<link
rel="canonical"
href="${page.canonicalUrl}">

<link
rel="amphtml"
href="${page.ampUrl}">

<meta
name="robots"
content="index,follow,max-image-preview:large">

<meta
property="og:type"
content="website">

<meta
property="og:site_name"
content="${page.SITE.name}">

<meta
property="og:title"
content="${page.title}">

<meta
property="og:description"
content="${page.description}">

<meta
property="og:url"
content="${page.canonicalUrl}">

<meta
property="og:image"
content="${page.ogImage}">

<meta
name="twitter:card"
content="summary_large_image">

<meta
name="twitter:title"
content="${page.title}">

<meta
name="twitter:description"
content="${page.description}">

<meta
name="twitter:image"
content="${page.ogImage}">

${page.robots || ""}
${page.schema || ""}
`;
}
