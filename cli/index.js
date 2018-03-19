const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [];
for (let i = 0; i < 4; i++) {
  const o1 = Math.floor(Math.random() * 10);
  const o2 = Math.floor(Math.random() * 10);
  const result = o1 + o2;
  questions.push({ o1, o2, result });
}

function ask() {
  let question;
  if (questions.length >= 1) {
    question = questions.shift();
  } else {
    process.exit();
  }

  rl.question(`${question.o1} + ${question.o2} = `, answer => {
    if (parseInt(answer, 10) === question.result) {
      console.log('RICHTIG!');
    } else {
      console.log(question.result + " wär's gewesen");
    }
    ask();
  });
}
ask();
