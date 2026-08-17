export default v => [...new Set(v.match(/(?:\+?\d[\d\s().-]{7,}\d)/g)||[])].join("\n");
