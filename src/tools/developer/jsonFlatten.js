const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const jsonFlatten=v=>{const o=JSON.parse(v),out={};const walk=(x,p="")=>{if(x&&typeof x==="object"&&!Array.isArray(x))for(const [k,val] of Object.entries(x))walk(val,p?`${p}.${k}`:k);else out[p]=x};walk(o);return JSON.stringify(out,null,2)};
export default jsonFlatten;
