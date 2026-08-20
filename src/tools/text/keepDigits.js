const lines=v=>v.split(/\r?\n/);
const keepDigits=v=>v.match(/\d/g)?.join("")||"";
export default keepDigits;
