const lines=v=>v.split(/\r?\n/);
const sortLinesNumeric=v=>lines(v).sort((a,b)=>(parseFloat(a)||0)-(parseFloat(b)||0)).join("\n");
export default sortLinesNumeric;
