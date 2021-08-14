"use strict";

// let question = "How old are you?";
// prompt(question);
//
// let output = prompt(question, 18);
// console.log("Wow, you're already", output, "years old??")

let question = "What's the cube's side?";
let userInput = prompt(question, 100);

findArea(userInput);

function findArea(cubeSide) {
    return 6 * cubeSide ** 2
}

let cube = findArea(userInput);
console.log(cube)