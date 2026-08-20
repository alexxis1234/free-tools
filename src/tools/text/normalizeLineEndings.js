const lines=v=>v.split(/\r?\n/);
const normalizeLineEndings=v=>lines(v).join("\n");
export default normalizeLineEndings;
