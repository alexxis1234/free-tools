const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const binaryToDecimal=v=>parseInt(v.trim(),2).toString(10);
export default binaryToDecimal;
