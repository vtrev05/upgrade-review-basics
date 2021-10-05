'use strict';

//ITERATION 6

const myArray = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

let firstValue;
let secondValue;


function swap(arr, indexOne, indexTwo) {
    firstValue = arr[indexOne];
    arr.splice(arr[indexOne], 0)

    secondValue = arr[indexTwo]
    arr.splice(arr[indexTwo], 0)

    arr[indexOne] = secondValue
    arr[indexTwo] = firstValue

    console.log(myArray)
    
}
swap(myArray, 0, 3)