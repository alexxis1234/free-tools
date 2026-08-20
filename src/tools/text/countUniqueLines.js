const lines=v=>v.split(/\r?\n/);
const countUniqueLines=v=>new Set(lines(v)).size;
export default countUniqueLines;
