function firstMissingPositive(arr) {
  const arrL = arr.length;

  // Clean the array
  for (let i = 0; i < arrL; i++) {
    // Replace non-positive numbers and numbers > n with n+1
    if (arr[i] <= 0 || arr[i] > arrL) {
      arr[i] = arrL + 1;
    }
  }

  // Use the index as a hash to mark the presence of numbers
  for (let i = 0; i < arrL; i++) {
    const num = Math.abs(arr[i]);
    if (num <= arrL) {
      // Mark as negative
      arr[num - 1] = -Math.abs(arr[num - 1]);
    }
  }

  // Find the first positive index
  for (let i = 0; i < arrL; i++) {
    if (arr[i] > 0) {
      // Smallest missing positive integer
      return i + 1;
    }
  }

  // If all positions are filled
  return arrL + 1;
}

// module.exports = firstMissingPositive;
// Created a new array based on examples below to make your own checking
const example = [
  [1, 2, 0],
  [3, 4, -1, 1],
  [7, 8, 9, 11, 12]
];
for (let i = 0; i < example.length; i++) {
  console.log(`[${example[i]}] = ${firstMissingPositive(example[i])}`);
}
