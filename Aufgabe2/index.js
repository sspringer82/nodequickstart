const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const chalk = require('chalk');
const program = require('commander');

program
  .version('0.0.1')
  .option('-n, --number <n>', 'Number of Tasks', parseInt)
  .option('-l, --level <n>', 'Level', parseInt)
  .parse(process.argv);

const tasks = require('./tasks');

function ask(mathTasks, index) {

    const operation = mathTasks[index];
    const question = operation.operand1 + ' ' + operation.operation + ' ' + operation.operand2 + ' = ';

    rl.question(question, (answer) => {
        operation.userInput = parseInt(answer, 10);
        if (operation.userInput === operation.result) {
            console.log(chalk.green.bold('correct'));
        } else {
            console.log(chalk.red.bold('wrong'));
        }
        if (index + 1 < mathTasks.length) {
            ask(mathTasks, index + 1);
        } else {
            const correct = mathTasks.reduce((prev, cur) => {
                return prev += cur.result === cur.userInput ? 1 : 0
            }, 0);

            console.log('correct ' + correct + ' of ' + mathTasks.length);
            rl.close();
        }
    });
}

ask(tasks(program.number, program.level), 0);
