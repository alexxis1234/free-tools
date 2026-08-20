const lines=v=>v.split(/\r?\n/);
const indentText=v=>lines(v).map(x=>x?`    ${x}`:x).join("\n");
export default indentText;
