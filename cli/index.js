const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  'Wie geht es dir?',
  'Wie ist das Wetter?',
  'Hast du hunger?',
];

function ask() {
  let question;
  if (questions.length >= 1) {
    question = questions.shift();
  } else {
    process.exit();
  }

  rl.question(question, answer => {
    console.log('Deine Antwort war: ', answer);
    ask();
  });
}

ask();
