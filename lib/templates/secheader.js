export function footer(page){

  return `
<footer>

© ${new Date().getFullYear()}
${page.SITE.name}

</footer>
`;
}
