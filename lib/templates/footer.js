export function footer(page){

  const category =
    (page.category || "")
    .toLowerCase()
    .trim();

  const links =
    page.SITE.affiliate?.[category] || [];

  const affiliateHtml =
    links.length
      ? `
<div class="footer-menu">
<h4>Rekomendasi</h4>

${links.map(link => `
<a
href="${link.url}"
target="_blank"
rel="nofollow sponsored noopener">
${link.name}
</a>
`).join("")}

</div>
`
      : "";

  return `
<footer class="footer">

<div class="footer-wrap">

<div class="footer-brand">

<h3>${page.SITE.name}</h3>

<p>
Platform informasi teknologi,
AI modern, SEO, bisnis digital,
dan tren internet terbaru.
</p>

</div>

<div class="footer-menu">

<h4>Menu</h4>

<a href="/">Home</a>
<a href="/about">Tentang Kami</a>
<a href="/contact">Kontak</a>
<a href="/privacy-policy">Privacy Policy</a>

</div>

<div class="footer-menu">

<h4>Informasi</h4>

<a href="/terms">Terms</a>
<a href="/disclaimer">Disclaimer</a>
<a href="/rss.xml">RSS Feed</a>
<a href="/sitemap.xml">Sitemap</a>

</div>

${affiliateHtml}

</div>

<div class="footer-bottom">

© ${new Date().getFullYear()}
${page.SITE.name}
All Rights Reserved.

</div>

</footer>
`;
}
