const lines=v=>v.split(/\r?\n/);
const extractMentions=v=>[...new Set(v.match(/@[\p{L}\p{N}_.-]+/gu)||[])].join("\n");
export default extractMentions;
