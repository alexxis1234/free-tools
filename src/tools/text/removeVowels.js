const lines=v=>v.split(/\r?\n/);
const removeVowels=v=>v.replace(/[aeiouаеёиоуыэюя]/gi,"");
export default removeVowels;
