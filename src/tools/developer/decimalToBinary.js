const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const decimalToBinary=v=>{const n=Number(v.trim());if(!Number.isInteger(n))throw Error("Enter an integer");return n.toString(2)};
export default decimalToBinary;
