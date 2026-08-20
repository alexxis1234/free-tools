const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const htmlDecode=v=>{const t=document.createElement("textarea");t.innerHTML=v;return t.value};
export default htmlDecode;
