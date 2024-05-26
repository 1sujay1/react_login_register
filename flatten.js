function flattenArray(arr) {
  return arr.reduce(function (acc, curr) {
    return acc.concat(Array.isArray(curr) ? flattenArray(curr) : curr);
  }, []);
}

console.log(flattenArray([1, 2, [3, 4, [5, 6]]]));
