const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const htmlLinkExtractor=v=>[...new Set([...v.matchAll(/href=["']([^"']+)["']/gi)].map(m=>m[1]))].join("\n");
export default htmlLinkExtractor;
