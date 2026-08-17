export default v => v.split(/\r?\n/).sort((a,b)=>a.length-b.length).join("\n");
