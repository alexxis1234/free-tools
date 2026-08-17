import fs from "node:fs";
import path from "node:path";

const root=process.cwd();
const dist=path.join(root,"dist");
const source=fs.readFileSync(path.join(root,"src/data/tools.js"),"utf8");
const re=/\{slug:"([^"]+)",category:"([^"]+)",name:"([^"]+)",title:"([^"]+)",description:"([^"]+)"/g;
const tools=[...source.matchAll(re)].map(m=>({slug:m[1],category:m[2],name:m[3],title:m[4],description:m[5]}));
const cats={text:"Text Tools",developer:"Developer Tools",image:"Image Tools"};
const BASE_URL="https://free-tools.alexandr-beschastniy.workers.dev";
const assets=fs.readdirSync(path.join(dist,"assets"));
const js="/assets/"+assets.find(x=>x.endsWith(".js"));
const css="/assets/"+assets.find(x=>x.endsWith(".css"));
const esc=s=>s.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");
const nav=`<header><a class="brand" href="/">FreeTools</a><nav><a href="/text/">Text</a><a href="/developer/">Developer</a><a href="/image/">Image</a></nav></header>`;
const footer=`<footer>FreeTools — simple browser utilities.</footer>`;
const shell=(title,desc,url,body)=>`<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><meta name="description" content="${esc(desc)}"><link rel="canonical" href="${BASE_URL}${url}"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${BASE_URL}${url}"><link rel="stylesheet" href="${css}"></head><body data-seo-shell="true"><script>window.__FREE_TOOLS_SEO_SHELL__=true;</script><main class="container">${nav}${body}${footer}</main><script type="module" src="${js}"></script></body></html>`;

fs.mkdirSync(dist,{recursive:true});

for(const [c,name] of Object.entries(cats)){
  const d=path.join(dist,c); fs.mkdirSync(d,{recursive:true});
  const list=tools.filter(t=>t.category===c).map(t=>`<a class="card" href="/${t.category}/${t.slug}/"><strong>${esc(t.name)}</strong><span>${esc(t.description)}</span></a>`).join("");
  fs.writeFileSync(path.join(d,"index.html"),shell(`Free ${name} Online`,`Free browser-based ${name.toLowerCase()}.`,`/${c}/`,
    `<div class="breadcrumbs"><a href="/">Home</a> / ${name}</div><section class="hero"><h1>Free ${name} Online</h1><p>Simple tools that run in your browser.</p></section><div class="grid">${list}</div>`));
}

for(const t of tools){
  const d=path.join(dist,t.category,t.slug); fs.mkdirSync(d,{recursive:true});
  const related=tools.filter(x=>x.category===t.category&&x.slug!==t.slug).slice(0,8).map(x=>`<a class="card" href="/${x.category}/${x.slug}/"><strong>${esc(x.name)}</strong><span>${esc(x.description)}</span></a>`).join("");
  const catName=cats[t.category];
  const body=`<div class="breadcrumbs"><a href="/">Home</a> / <a href="/${t.category}/">${catName}</a> / ${esc(t.name)}</div><section class="hero"><h1>${esc(t.name)}</h1><p>${esc(t.description)}</p></section><div id="root"></div><section class="info"><h2>How to use ${esc(t.name)}</h2><ol><li>Paste or select your input.</li><li>Use the tool above.</li><li>Copy or download the result.</li></ol><h2>About this tool</h2><p>${esc(t.description)} This tool runs in your browser and does not require an account. Your input stays on your device during processing.</p><h2>Frequently asked questions</h2><h3>Is this tool free?</h3><p>Yes. This tool is free to use in your browser.</p><h3>Is my data uploaded?</h3><p>No. Processing happens locally in your browser.</p><h3>Can I use it for large text?</h3><p>Yes, within the limits of your browser and device.</p><h2>Related tools</h2><div class="related">${related}</div></section>`;
  fs.writeFileSync(path.join(d,"index.html"),shell(t.title,t.description,`/${t.category}/${t.slug}/`,body));
}

console.log(`SEO pages generated: ${tools.length}`);
