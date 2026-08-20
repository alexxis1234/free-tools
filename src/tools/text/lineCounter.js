const lines=v=>v.split(/\r?\n/);
const lineCounter=v=>v===""?0:lines(v).length;
export default lineCounter;
