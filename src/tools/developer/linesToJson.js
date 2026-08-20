const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const linesToJson=v=>{const o={};for(const line of v.split(/\r?\n/)){const i=line.indexOf("=");if(i>0)o[line.slice(0,i).trim()]=line.slice(i+1).trim()}return JSON.stringify(o,null,2)};
export default linesToJson;
