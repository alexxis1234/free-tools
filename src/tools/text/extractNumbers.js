export default v => (v.match(/[-+]?(?:\d+(?:[.,]\d+)?)/g)||[]).join("\n");
