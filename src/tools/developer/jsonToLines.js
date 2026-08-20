const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const jsonToLines=v=>{const x=JSON.parse(v);return Object.entries(x).map(([k,val])=>`${k}=${typeof val==="object"?JSON.stringify(val):val}`).join("\n")};
export default jsonToLines;
