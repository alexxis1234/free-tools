const lines=v=>v.split(/\r?\n/);
const wordCounter=v=>String(v).trim()?String(v).trim().split(/\s+/).length:0;
export default wordCounter;
