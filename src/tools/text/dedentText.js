const lines=v=>v.split(/\r?\n/);
const dedentText=v=>{const a=lines(v);const ind=a.filter(x=>x.trim()).reduce((m,x)=>Math.min(m,(x.match(/^\s*/)||[""])[0].length),Infinity);return Number.isFinite(ind)?a.map(x=>x.slice(ind)).join("\n"):v};
export default dedentText;
