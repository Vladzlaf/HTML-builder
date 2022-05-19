const fs = require('fs');
const path = require('path');
const process = require('process');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });
const textPath = path.join(__dirname, '/text.txt');
const exit = 'exit'

fs.writeFile(textPath, '', err => {
    if (err) console.log('err')
})

rl.question('Hello! Your massage?\n ', (answer) => {
    if (answer.trim().toLowerCase() == exit) {
        process.exit();
    }
    else {
        rl.setPrompt('Another massage?\n')
        rl.prompt();
        rl.on('line',(answer) => {
            fs.appendFile(textPath, answer + '\n', err => {
                if (err) {
                    console.log('err')
                }
            });     
            if (answer.trim() == exit) {
                process.exit();
            }
            else {
                rl.setPrompt('Another massage?\n')
                rl.prompt();
            }
        })
    }
    fs.appendFile(textPath, answer + '\n', err => {
        if (err) {
            console.log('err')
        }
    });
});

process.on('exit', () => {
    console.log('Thanks for your massage!') 
})

rl.on('SIGINT', () => {
    process.exit();
})