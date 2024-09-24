function validAnagram(material) {
  // initialize result value
  let result = false;

  // Check is material index 0 & 1 literally same
  if (material[0] === material[1]) {
    result = true;
  } else {
    // regex of space
    const space = /\s/g;

    // Create 2 new variables contains value of material index 0 & 1 without space & transformed to lowercase
    let word1 = material[0].replace(space, '').toLowerCase(); 
    let word2 = material[1].replace(space, '').toLowerCase();

    // Check is length of word 1 & 2 same
    if (word1.length === word2.length) {
      // Re-arrange word 1 & 2 to be sorted alphabetically
      word1 = word1.split('').sort().join('');
      word2 = word2.split('').sort().join('');

      // Check alphabetical simmilarities
      if (word1 === word2) {
        result = true;
      }
    }
  }

  // Show final result
  return `"${material[0]}", "${material[1]}", ${result}`;
}

// module.exports = validAnagram;
console.log(validAnagram(['', '']));
console.log(validAnagram([' ', ' ']));
console.log(validAnagram(['hello', 'ellho']));
console.log(validAnagram(['hello', 'ell  ho']));
console.log(validAnagram(['hello', 'heeello']));
console.log(validAnagram(['hello', 'eegho']));
