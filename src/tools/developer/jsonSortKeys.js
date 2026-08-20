const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const jsonSortKeys=v=>{const sort=x=>Array.isArray(x)?x.map(sort):x&&typeof x==="object"?Object.fromEntries(Object.keys(x).sort().map(k=>[k,sort(x[k])])):x;return JSON.stringify(sort(JSON.parse(v)),null,2)};
export default jsonSortKeys;
