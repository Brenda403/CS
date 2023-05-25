// Functions 1 - 4 with runtime complexity

// 1) Sum Zero O(n^2) - Quadratic
function addToZero(array) {
  let isZero = false;

  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        isZero = true;
      }
    }
  }
  return isZero;
}

console.log(addToZero([]));
// -> False

console.log(addToZero([1]));
// -> False

console.log(addToZero([1, 2, 3]));
// -> False

console.log(addToZero([1, 2, 3, -2]));
// -> True

// 2) Unique Characters O(n^2) - Quadratic

function hasUniqueChars(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(hasUniqueChars("Monday"), hasUniqueChars("Moonday"));
console.log(hasUniqueChars("hello")); // false
console.log(hasUniqueChars("world")); // true
console.log(hasUniqueChars("javascript")); // true

// 3) Pangram Sentence O(n) - Linear

function isPangram(str) {
  let lowerCaseString = str.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < alphabet.length; i++) {
    let letter = alphabet[i];
    if (lowerCaseString.indexOf(letter) === -1) {
      return false;
    }
  }
  return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

console.log(isPangram("I like cats, but not mice"));
// -> False

// 4) Longest Word O(n) - Linear

function findLongestWord(words) {
  let longestLength = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const wordLength = word.length;

    if (wordLength > longestLength) {
      longestLength = wordLength;
    }
  }

  return longestLength;
}

console.log(findLongestWord(["hi", "hello"]));
// -> 5
