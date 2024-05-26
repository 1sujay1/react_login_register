function isPerfectNumber(n) {
  let sum = 0;
  console.log("Math.floor(n / 2)", Math.floor(n / 2));
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  console.log("sum", sum);
  return sum === n;
}

function main(input) {
  const inputLines = input.trim().split("\n");
  const T = parseInt(inputLines[0]); // Number of test cases

  for (let t = 0; t < T; t++) {
    const N = parseInt(inputLines[t + 1]); // Number for the current test case
    console.log("N", N);
    if (isPerfectNumber(N)) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
}

// Example usage:
const input = `1
3
`;
main(input);
