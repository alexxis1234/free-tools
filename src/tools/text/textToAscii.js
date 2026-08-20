const lines=v=>v.split(/\r?\n/);
const textToAscii=v=>[...v].map(c=>c.charCodeAt(0)<128?c:`&#${c.codePointAt(0)};`).join("");
export default textToAscii;
