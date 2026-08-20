const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const htmlMinifier=v=>v.replace(/<!--[\s\S]*?-->/g,"").replace(/>\s+</g, "><").trim();
export default htmlMinifier;
