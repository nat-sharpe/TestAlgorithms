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
  console.log(toCheckArray)
  let test = toCheckArray.pop();
  console.log(test);
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
    // Catches 1 and negative numbers
    if (i > 1) {
      // Divides index by every number between 2 and the index
      for (let j = 2; j < i; j++) {
        console.log(i)
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

console.log(findPrimes(2, 20)) // should return [5, 7, 11]



// We list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.  Find the sum of all the multiples of 3 or 5 below 1000.

let findMultiples = (range) => {
  let sum = 0;
  for (let i = 0; i < range; i+= 3) {
    sum+= i;
  }
  for (let j = 5; j < range; j+= 5) {
    sum+= j;
  }
  return sum;
};


console.log(findMultiples(1000))