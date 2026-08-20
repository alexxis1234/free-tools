const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const numberBaseConverter=v=>{const [n,base="10",to="10"]=v.trim().split(/\s+/);const x=parseInt(n,Number(base));if(!Number.isFinite(x))throw Error("Use: NUMBER FROM_BASE TO_BASE");return x.toString(Number(to))};
export default numberBaseConverter;
