const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const regexEscape=v=>v.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
export default regexEscape;
