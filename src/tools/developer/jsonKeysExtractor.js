const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const jsonKeysExtractor=v=>{const x=JSON.parse(v),s=new Set();const walk=o=>{if(o&&typeof o==="object")for(const [k,val] of Object.entries(o)){s.add(k);walk(val)}};walk(x);return [...s].sort().join("\n")};
export default jsonKeysExtractor;
