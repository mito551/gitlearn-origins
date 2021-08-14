"use strict";

function whichReward(mathGrade) {
    // let mathGrade = "A";
    let reward = "";

    switch (mathGrade) {
        case "A":
            reward = "A in math means that dad buys me a bike"
            break;
        case "B":
            reward = "B in math means that dad gets me a webcam"
            break;
        case "C":
            reward = "C means nothing happens"
            break;
        case "F":
            reward = "F means I get grounded"
            break;
        case "O":
            reward = "Uhhhhh"
            break;
        default:
            reward = "what"
    }
    return reward
}

console.log(whichReward("A"));