function longestSubstring(str) {
  let longest = "";

  for (let i = 0; i < str.length; i++) {
    let current = "";
    for (let j = i; j < str.length; j++) {
      if (!current.includes(str[j])) {
        current += str[j];
      }
    }
    if (current.length > longest.length) {
      longest = current;
    }
  }

  return longest;
}

// Example usage:
const str = "abcabcdebb";
console.log(longestSubstring(str)); // Output: "abc"
