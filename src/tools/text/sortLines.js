export default v => v.split(/\r?\n/).sort((a,b)=>a.localeCompare(b)).join("\n");
