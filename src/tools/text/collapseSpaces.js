const lines=v=>v.split(/\r?\n/);
const collapseSpaces=v=>v.replace(/[ \t]+/g," ").replace(/\n\s+/g,"\n").trim();
export default collapseSpaces;
