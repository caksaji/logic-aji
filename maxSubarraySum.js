function maxSubarraySum(arr, n) {
  // Initialize result value
  let result = null;

  // Check length of arr and value of n matching
  if (arr.length > 0 && n > 0 && arr.length >= n) {
    let highestSum = 0;
    // Loop n times (how many possibilities)
    for (let i = 0; i < arr.length - (n - 1); i++) {
      let currentSum = 0;
      // Summarize each possibilities
      for (let j = 0; j < n; j++) {
        currentSum += arr[i + j];
        // Replace highest summary if higher summary found
        highestSum = Math.max(highestSum, currentSum);
      }
    }
    result = highestSum;
  }

  return result;
}

// module.exports = maxSubarraySum;
// Created a new array with 2 string as value based on examples below to make your own checking
const example = [
  [[1, 2, 5, 2, 8, 1, 5], 2],
  [[1, 2, 5, 2, 8, 1, 5], 4],
  [[4, 2, 1, 6], 1],
  [[4, 2, 1, 6, 2], 4],
  [[], 4]
];
for (let i = 0; i < example.length; i++) {
  console.log(`[${example[i][0]}], ${example[i][1]} = ${maxSubarraySum(example[i][0], example[i][1])}`);
}
