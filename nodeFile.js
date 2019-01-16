const questions = [
  "What is your name?",
  "What is your fav movie?",
  "What is your lovedest coding language?",
];

let answers = [];

let ask = (index) => {
  process.stdout.write(`\n\n\n\n ${questions[index]}`);
  process.stdout.write(" > ");
};

process.stdin.on('data', (data) => {
  process.stdout.write('\n' + data.toString().trim() + '\n');
})

ask(0);