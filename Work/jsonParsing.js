// const a = '{"result":"success","msg":"{"result":"success","msg":"hello"}"}';
// console.log(JSON.parse(a.msg.msg))

const a = '{"result":"success","msg":"{"result":"success","msg":"hello"}"}';
const startIndex = a.indexOf('"msg":"') + 9;
const endIndex = a.lastIndexOf('"}"');
const innerJsonString = a.slice(startIndex, endIndex);

console.log(innerJsonString); 