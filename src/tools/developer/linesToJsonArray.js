const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const linesToJsonArray=v=>JSON.stringify(v.split(/\r?\n/).filter(x=>x!==""),null,2);
export default linesToJsonArray;
