const lines=v=>v.split(/\r?\n/);
const extractHexColors=v=>[...new Set(v.match(/#[0-9a-f]{3,8}\b/gi)||[])].join("\n");
export default extractHexColors;
