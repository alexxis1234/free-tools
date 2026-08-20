const lines=v=>v.split(/\r?\n/);
const paragraphCounter=v=>v.trim()?v.trim().split(/\n\s*\n/).length:0;
export default paragraphCounter;
