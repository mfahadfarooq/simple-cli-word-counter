import inquirer from "inquirer";


const input = await inquirer.prompt([{
    name:'Sentence',
    type:'input',
    message:'Enter your sentence to count words:',
}])

const words = input.Sentence.trim().split(' ');

console.log(`Your sentence words count is: ${words.length }`);
