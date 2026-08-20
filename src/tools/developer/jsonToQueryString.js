const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const jsonToQueryString=v=>{const o=JSON.parse(v);if(!o||typeof o!=="object"||Array.isArray(o))throw Error("Expected a JSON object");return new URLSearchParams(Object.entries(o).map(([k,val])=>[k,String(val)])).toString()};
export default jsonToQueryString;
