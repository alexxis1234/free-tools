const lines=v=>v.split(/\r?\n/);
const addLineNumbers=v=>lines(v).map((x,i)=>`${i+1}. ${x}`).join("\n");
export default addLineNumbers;
