const lines=v=>v.split(/\r?\n/);
const slugGenerator=v=>v.normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim().replace(/[^\p{L}\p{N}]+/gu,"-").replace(/^-+|-+$/g,"");
export default slugGenerator;
