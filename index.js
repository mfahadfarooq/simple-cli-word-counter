import inquirer from "inquirer";
const input = await inquirer.prompt([{
        name: 'Sentence',
        type: 'input',
        message: 'Enter your sentence to count words:',
    }]);
const words = input.Sentence.trim().split(' ');
console.log(`Number or words: ${words.length}`);
