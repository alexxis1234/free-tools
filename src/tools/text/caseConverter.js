export default (v,mode="lowercase") => mode==="uppercase"?v.toUpperCase():mode==="title"?v.toLowerCase().replace(/\b\p{L}/gu,c=>c.toUpperCase()):v.toLowerCase();
