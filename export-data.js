// Run this in browser console to export all localStorage data
const all = {};
for(let i=0; i<localStorage.length; i++){
  const k = localStorage.key(i);
  if(k.startsWith('workbench-')) all[k] = JSON.parse(localStorage.getItem(k));
}
console.log(JSON.stringify(all, null, 2));
