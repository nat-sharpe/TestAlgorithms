// Take in a string of curly braces, square brackets and parens. 
// For every opener there must be a closer of the same type.
// A closer is not allowed if the last unclosed opener is of a different type.
// If all conditions re met, return true, else return false.

let syntaxValidator = (toCheck) => {
  const toCheckArray = toCheck.split('');
  const matches = {
    '}': '{',
    ')': '(',
    ']': '[',
  };
  const closers = Object.keys(matches);
  let openers = [];
  let invalid = false;

  toCheckArray.forEach(char => {
    let lastOpener = openers[openers.length-1];
    if (closers.includes(char)) {
      if (matches[char] === lastOpener) {
        openers.pop();
      } else {
        invalid = true;
      }
    } else {
      openers.push(char);
    }
  });
  return (invalid || openers.length > 0) ? false : true;
};


const test1 = '[]'; // returns true
const test2 = '[()]'; // returns true
const test3 = '[[(())]{}()]'; // returns true

console.log(syntaxValidator(test3));


// Find all the primes between two positive integers
// Return an array of them

let findPrimes = (start, end) => {
  let rangePrimes = [];
  for (let i = start; i <= end; i++) {
    // find if i is prime or not
    let isPrime = true;
    if (i > 1) {
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
    } else {
      isPrime = false;
    }
    if (isPrime) {
      rangePrimes.push(i);
    }
  }
  return rangePrimes;
};

console.log(findPrimes(4, 20)) // should return [5, 7, 11]