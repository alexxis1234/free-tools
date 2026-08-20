const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const xmlFormatter=v=>v.replace(/(>)(<)(\/?)/g,"$1\n$2$3").split("\n").map(x=>x.trim()).map((x,i)=>x.startsWith("</")?x:x).join("\n");
export default xmlFormatter;
