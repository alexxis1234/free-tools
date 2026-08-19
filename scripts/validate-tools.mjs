import fs from "node:fs";import path from "node:path";
const root=process.cwd(),src=fs.readFileSync(path.join(root,"src/data/tools.js"),"utf8"),re=/\{slug:"([^"]+)",category:"([^"]+)",name:"([^"]+)",title:"([^"]+)",description:"([^"]+)"/g,tools=[...src.matchAll(re)];
if(tools.length!==100)throw Error(`Expected 100 tools, found ${tools.length}`);
const cats={text:50,developer:46,image:4};
for(const [c,n] of Object.entries(cats)){const got=tools.filter(x=>x[2]===c).length;if(got!==n)throw Error(`${c}: expected ${n}, found ${got}`)}
const dist=path.join(root,"dist");
for(const m of tools){const p=path.join(dist,m[2],m[1],"index.html");if(!fs.existsSync(p))throw Error(`Missing SEO page ${p}`);const h=fs.readFileSync(p,"utf8");for(const x of ["<title>",'<meta name="description"','rel="canonical"'])if(!h.includes(x))throw Error(`Missing ${x} in ${p}`)}
const sm=fs.readFileSync(path.join(dist,"sitemap.xml"),"utf8");if((sm.match(/<url>/g)||[]).length!==104)throw Error("Sitemap must contain 104 URLs");if(!fs.existsSync(path.join(dist,"robots.txt")))throw Error("robots.txt missing");console.log("VALIDATION OK: 100 tools, 104 sitemap URLs, SEO pages, canonical/title/description, robots.txt.");
