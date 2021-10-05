'use strict';

//ITERATION 4

let number;

function rollDice(min, numberOfFaces) {
    number = Math.floor(Math.random() * (numberOfFaces - min)) + min;
    console.log(number)
}
rollDice(1, 6)