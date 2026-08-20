const lines=v=>v.split(/\r?\n/);
const sortLinesReverse=v=>lines(v).sort((a,b)=>b.localeCompare(a)).join("\n");
export default sortLinesReverse;
