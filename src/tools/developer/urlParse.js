const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const urlParse=v=>{const u=new URL(v.trim());return JSON.stringify({protocol:u.protocol,hostname:u.hostname,port:u.port,pathname:u.pathname,search:u.search,hash:u.hash,origin:u.origin},null,2)};
export default urlParse;
