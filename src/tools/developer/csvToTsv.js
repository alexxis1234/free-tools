const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const csvToTsv=v=>v.replace(/,(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/g,"\t");
export default csvToTsv;
