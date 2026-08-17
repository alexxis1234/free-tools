export default v => [...new Set(v.match(/https?:\/\/[^\s"'<>]+/gi)||[])].join("\n");
