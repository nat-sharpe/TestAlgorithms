// Take in a string of curly braces, square brackets and parens. 
// For every opener there must be a closer of the same type.
// A closer is not allowed if the last unclosed opener is of a different type.
// If all conditions re met, return true, else return false.

let syntaxValidator = (toCheck) => {
  const matches = {
    '}': '{',
    ')': '(',
    ']': '[',
  };
  const closers = Object.keys(matches);
  let openers = [];
  const toCheckArray = toCheck.split('');
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
  console.log(openers)
  return (invalid || openers.length > 0) ? false : true;
};


const test1 = '[]'; // returns true
const test2 = '[()]'; // returns true
const test3 = '[[(())]{}()]'; // returns true

console.log(syntaxValidator(test3));