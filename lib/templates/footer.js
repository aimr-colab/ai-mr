import { getAffiliate } from "../config";

export function footer(page){

  const links =
    getAffiliate(page.kategori);

  const affiliateHtml =
    links.map(link => `
<a
href="${link.url}"
target="_blank"
rel="nofollow sponsored noopener">
${link.name}
</a>
`).join("");

  return `
<a href="/kategori/${sanitizeSlug(post.kategori)}">
#${escapeHTML(post.kategori)}
</a>
  <footer>
<p>Kategori Footer: ${page.kategori}</p>
</footer>


<footer class="footer">

${affiliateHtml}

<div class="footer-bottom">
© ${new Date().getFullYear()}
${page.SITE.name}
</div>

</footer>
`;
}
