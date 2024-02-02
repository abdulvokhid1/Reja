// Module package CORE

// let number = 0;
// setInterval(function ()  {
// console.log("onuse", number);
// number++;
// }, 2000);


// File System
// const fs = require('fs');
// const data = fs.readFileSync('./input.txt','utf8');
// console.log(data)

// console.log("************")

// fs.writeFileSync('./input.txt', `${data} \n\t\t by Ali`);
// const new_data = fs.readFileSync('./input.txt','utf8');
// console.log(new_data)




//Module package EXTERNAL
// xeternal modulllar ustanovka qilinishi shart boladi

// const moment = require("moment");
// setInterval(function(){
//     const time = moment().format();
//     console.log(`hozirgi vaqt: ${time}`)
// }, 5000)



// const inquirer = require("inquirer")
// inquirer
// .prompt([{type: "input", name:"raqam", message: "raqamni kiriting?"}])
// .then((answer) => {
//     console.log("menn kiritgan raqam qiymati :", answer.raqam);
// })
// .catch((err) => console.log(err));

//

const validator = require("validator");
// const test = validator.isEmail("ibrakhimov7747a@gmail.com");
const test = validator.isInt("100");
console.log(test);


// random string create qilib beradi
const { v4: uuidv4 } = require("uuid");
const random = uuidv4();
console.log("random", random);

// bizga terminalda boshqacha usulda log qlib berish imkonini beradi

const chalk = require("chalk");
const log = console.log;
log(chalk.blue("Hello" + random + chalk.red("!")));


const os = require("os").cpus();
console.log(os.length);