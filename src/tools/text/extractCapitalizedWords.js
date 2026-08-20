const lines=v=>v.split(/\r?\n/);
const extractCapitalizedWords=v=>[...new Set(v.match(/\b\p{Lu}[\p{L}\p{M}'’-]*\b/gu)||[])].join("\n");
export default extractCapitalizedWords;
