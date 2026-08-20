const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const xmlMinifier=v=>v.replace(/>\s+</g, "><").trim();
export default xmlMinifier;
