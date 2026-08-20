const esc=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const regexTest=v=>{const [pattern,flags="",...rest]=v.split(/\n/);const text=rest.join("\n");if(!pattern)throw Error("First line must contain a regular expression");const re=new RegExp(pattern,flags);const matches=text.match(re);return matches?`✓ Match found\n${matches.join("\n")}`:"✗ No match"};
export default regexTest;
