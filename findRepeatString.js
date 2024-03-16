function longestSubstringWithoutRepeating(str) {
  let maxLength = 0; // Length of the longest substring
  let start = 0; // Starting index of the current substring
  let charMap = {}; // Map to track characters and their indices

  let longestSubstring = ""; // Variable to store the longest substring

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    // If the current character was already seen in the current substring
    // Adjust the start index of the current substring
    if (charMap[currentChar] >= start) {
      start = charMap[currentChar] + 1;
    }

    // Update the index of the current character
    charMap[currentChar] = i;

    // Check if the current substring is longer than the longest substring found so far
    if (i - start + 1 > maxLength) {
      maxLength = i - start + 1;
      longestSubstring = str.slice(start, i + 1);
    }
  }
  console.log("charMap", charMap);
  return longestSubstring;
}

// Example usage:
const inputString = "abcabcdbb";
const longestSubstring = longestSubstringWithoutRepeating(inputString);
console.log(
  "Longest substring without repeating characters:",
  longestSubstring
);
