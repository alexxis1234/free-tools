const lines=v=>v.split(/\r?\n/);
const characterCounterNoSpaces=v=>String(v).replace(/\s/g,"").length;
export default characterCounterNoSpaces;
