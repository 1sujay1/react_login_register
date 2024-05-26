const arr = "abcd";

const reduceData = arr.split("").reduce(
  (acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    if (acc[curr] > acc.highest) {
      acc.highest = acc[curr];
      acc.keys = [curr];
    } else if (acc[curr] == acc.highest) {
      if (!acc.keys.includes(curr)) {
        acc.keys.push(curr);
      }
    }
    return acc;
  },
  { highest: 0, keys: [] }
);

console.log("reduceData", reduceData);
