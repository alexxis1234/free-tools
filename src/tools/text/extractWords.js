const lines=v=>v.split(/\r?\n/);
const extractWords=v=>[...new Set(v.match(/[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu)||[])].join("\n");
export default extractWords;
