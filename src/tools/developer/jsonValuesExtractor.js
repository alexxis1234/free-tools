const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const jsonValuesExtractor=v=>{const x=JSON.parse(v),a=[];const walk=o=>{if(o&&typeof o==="object")Object.values(o).forEach(val=>{if(val&&typeof val==="object")walk(val);else a.push(String(val))})};walk(x);return a.join("\n")};
export default jsonValuesExtractor;
