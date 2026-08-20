const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const queryStringToJson=v=>{const q=v.trim().replace(/^\?/,"");return JSON.stringify(Object.fromEntries(new URLSearchParams(q)),null,2)};
export default queryStringToJson;
