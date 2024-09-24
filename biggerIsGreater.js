function biggerIsGreater(word) {
  // Initialize result value
  let result = null;
  // Split word into array of characters
  const splitWord = word.split('');
  let i = splitWord.length - 1;

  // Find the longest non-increasing suffix
  while (i > 0 && splitWord[i - 1] >= splitWord[i]) {
    i--;
  }

  // If the entire string is non-increasing, there's no larger permutation
  if (i <= 0) {
    return 'no answer';
  }

  // Find the pivot
  const pivotIndex = i - 1;
  let j = splitWord.length - 1;

  // Find the rightmost successor to the pivot
  while (splitWord[j] <= splitWord[pivotIndex]) {
    j--;
  }

  // Swap the pivot with the successor
  [splitWord[pivotIndex], splitWord[j]] = [splitWord[j], splitWord[pivotIndex]];

  // Reverse the suffix
  splitWord.splice(i, splitWord.length - i, ...splitWord.slice(i).reverse());

  result = splitWord.join('');

  return result;
}

// Created a new string to array below to make your own checking
const example = [
  'ab',
  'ba',
  'bb',
  'hefg',
  'dhck',
  'dkhc'
];
for (let i = 0; i < example.length; i++) {
  console.log(`${example[i]} -> ${biggerIsGreater(example[i])}`);
}
