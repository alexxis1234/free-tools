const lines=v=>v.split(/\r?\n/);
const removeLineNumbers=v=>lines(v).map(x=>x.replace(/^\s*\d+[.)]\s?/,"")).join("\n");
export default removeLineNumbers;
