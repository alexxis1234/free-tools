const lines=v=>v.split(/\r?\n/);
const asciiToText=v=>v.replace(/&#(\d+);/g,(_,n)=>String.fromCodePoint(Number(n)));
export default asciiToText;
