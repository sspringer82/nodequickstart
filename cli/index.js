const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask() {
  rl.question('wie geht es dir?', answer => {
    console.log(answer);
    ask();
  });
}

ask();
