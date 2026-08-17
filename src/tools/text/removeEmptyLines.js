export default v => v.split(/\r?\n/).filter(x=>x.trim()!=="").join("\n");
