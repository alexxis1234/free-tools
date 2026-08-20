const lines=v=>v.split(/\r?\n/);
const trimWhitespace=v=>lines(v).map(x=>x.trim()).join("\n");
export default trimWhitespace;
