const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const jwtDecoder=v=>{const p=v.trim().split(".");if(p.length!==3)throw Error("Invalid JWT");const decode=s=>JSON.parse(atob(s.replace(/-/g,"+").replace(/_/g,"/")+"=".repeat((4-s.length%4)%4)));return JSON.stringify({header:decode(p[0]),payload:decode(p[1])},null,2)};
export default jwtDecoder;
