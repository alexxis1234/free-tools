const lines=v=>v.split(/\r?\n/);
const spacesToTabs=v=>v.replace(/ {4}/g,"\t");
export default spacesToTabs;
