const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const hexToDecimal=v=>parseInt(v.trim().replace(/^0x/i,""),16).toString(10);
export default hexToDecimal;
