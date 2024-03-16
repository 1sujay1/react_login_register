var a = "aabcc", //b
  b = "aabbcc"; //NA

function checkIsRepititve(value) {
  let globalVal = {};
  for (let item of value) {
    globalVal[item] = globalVal[item] ? globalVal[item] + 1 : 1;
  }
  for (let item of value) {
    if (globalVal[item] == 1) {
      return item;
    }
  }
  return null;
  // return globalVal;
}

console.log(checkIsRepititve(a));
console.log(checkIsRepititve(b));
