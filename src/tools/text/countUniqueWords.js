const lines=v=>v.split(/\r?\n/);
const countUniqueWords=v=>new Set((v.toLowerCase().match(/[\p{L}\p{N}]+/gu)||[])).size;
export default countUniqueWords;
