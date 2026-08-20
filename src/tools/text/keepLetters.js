const lines=v=>v.split(/\r?\n/);
const keepLetters=v=>v.match(/[\p{L}]/gu)?.join("")||"";
export default keepLetters;
