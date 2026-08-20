const lines=v=>v.split(/\r?\n/);
const sentenceCounter=v=>(v.match(/[^.!?]+[.!?]+/g)||[]).length;
export default sentenceCounter;
