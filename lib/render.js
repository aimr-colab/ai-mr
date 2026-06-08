import { SITE, url as buildUrl, amphtml, escapeHTML } from "./config";

import { head } from "./templates/head.js";
import { header } from "./templates/header.js";
import { footer } from "./templates/footer.js";


export function layout({ title=SITE.name, description=SITE.description, canonical="", image="", schema="", robots="", content="" }){
	const canonicalUrl=canonical||SITE.domain;
	const ampUrl=amphtml(canonicalUrl.replace(SITE.domain,""));
	const ogImage=image||buildUrl(SITE.defaultImage);

	return new Response(`<!DOCTYPE html>
<html lang="id">
<head>
${head(page)}
${robots||""}
${schema||""}

</head>
<body>

${header(page)}

<main class="container">
${content}
</main>

${footer(page)}
</body>
</html>`,{
		headers:{
			"content-type":"text/html;charset=UTF-8",
			"cache-control":"public,max-age=300"
		}
	});
}
