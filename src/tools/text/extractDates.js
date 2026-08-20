const lines=v=>v.split(/\r?\n/);
const extractDates=v=>[...new Set(v.match(/\b(?:\d{1,4}[-/.]){2}\d{1,4}\b/g)||[])].join("\n");
export default extractDates;
