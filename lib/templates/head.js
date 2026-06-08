export function head(page){

  return `
<title>${page.title}</title>

<meta
name="description"
content="${page.description}">
`;
}
