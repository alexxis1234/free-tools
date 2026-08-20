const lines=v=>v.split(/\r?\n/);
const wrapText=v=>{const width=80;return v.split(/\r?\n/).map(line=>{const words=line.trim().split(/\s+/).filter(Boolean);let out="",cur="";for(const w of words){if((cur?cur.length+1:0)+w.length>width){out+=(out?"\n":"")+cur;cur=w}else cur+=(cur?" ":"")+w}return out+(cur?"\n" : "")}).join("").trimEnd()};
export default wrapText;
