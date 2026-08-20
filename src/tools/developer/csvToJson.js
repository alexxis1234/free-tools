const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const csvToJson=v=>{const rows=v.trim().split(/\r?\n/).filter(Boolean).map(r=>r.split(/,(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/).map(x=>x.trim().replace(/^\"|\"$/g,"").replaceAll('""','"')));if(!rows.length)throw Error("Enter CSV data");const h=rows[0];return JSON.stringify(rows.slice(1).map(r=>Object.fromEntries(h.map((k,i)=>[k,r[i]??""]))),null,2)};
export default csvToJson;
