const lines=v=>v.split(/\r?\n/);
const shuffleLines=v=>{const a=lines(v);for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a.join("\n")};
export default shuffleLines;
