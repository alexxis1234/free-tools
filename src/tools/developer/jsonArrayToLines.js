const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const jsonArrayToLines=v=>{const a=JSON.parse(v);if(!Array.isArray(a))throw Error("Expected a JSON array");return a.map(x=>typeof x==="string"?x:JSON.stringify(x)).join("\n")};
export default jsonArrayToLines;
