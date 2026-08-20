const lines=v=>v.split(/\r?\n/);
const extractIpAddresses=v=>[...new Set(v.match(/\b(?:\d{1,3}\.){3}\d{1,3}\b/g)||[])].filter(x=>x.split(".").every(n=>+n<=255)).join("\n");
export default extractIpAddresses;
