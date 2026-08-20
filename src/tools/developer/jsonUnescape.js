const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const jsonUnescape=v=>{const x=JSON.parse(v);return typeof x==="string"?x:JSON.stringify(x,null,2)};
export default jsonUnescape;
