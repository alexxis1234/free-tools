export default v => [...new Set(v.split(/\r?\n/))].join("\n");
