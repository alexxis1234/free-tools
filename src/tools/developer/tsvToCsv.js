const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const tsvToCsv=v=>v.split(/\r?\n/).map(r=>r.split("\t").map(x=>`"${x.replaceAll('"','""')}"`).join(",")).join("\n");
export default tsvToCsv;
