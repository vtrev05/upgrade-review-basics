'use strict';

//ITERATION 4

const myArray = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
let index;

function findArrayIndex(arr, text) {
        if (arr.includes(text)) {
            index = arr.indexOf(text)
            console.log(index)
        } 
}
findArrayIndex(myArray, 'Ajolote')
