const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const htmlTagExtractor=v=>[...new Set(v.match(/<([a-z][\w-]*)\b/gi)?.map(x=>x.slice(1).split(/\s/)[0].toLowerCase())||[])].join("\n");
export default htmlTagExtractor;
