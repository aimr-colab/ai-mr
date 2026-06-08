import { SITE } from "./config.js";

import { head } from "./templates/head.js";
import { header } from "./templates/header.js";
import { secheader } from "./templates/secheader.js";
import { secfooter } from "./templates/secfooter.js";
import { footer } from "./templates/footer.js";

export function layout({

  title = SITE.name,
  description = SITE.description,
  canonical = "",
  image = "",
  schema = "",
  robots = "",
  content = ""

}) {

  const page = {
    SITE,
    title,
    description,
    canonical,
    image,
    schema,
    robots,
    content
  };

  return new Response(`<!DOCTYPE html>
<html lang="id">

${head(page)}

<body>

${header(page)}

${secheader(page)}

<main class="container">
${page.content}
</main>

${secfooter(page)}

${footer(page)}

</body>
</html>`, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
      "cache-control": "public,max-age=300"
    }
  });
}
