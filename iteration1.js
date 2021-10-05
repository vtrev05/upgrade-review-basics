'use strict';

//ITERATION 1

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let moviesCategories = []

/* let firstCategories = []
let secondCategories = []
let thirdCategories = []
let fourthCategories = []
let concatenated = []

function moviesCategory() {
    for (const movie of movies) {
        moviesCategories.push(movie.categories)
    }
    firstCategories = moviesCategories[0]
    secondCategories = moviesCategories[1]
    thirdCategories = moviesCategories [2]
    fourthCategories = moviesCategories[3]
    concatenated = firstCategories.concat(secondCategories).concat(thirdCategories).concat(fourthCategories)

    const onlyOne = [];

    for(let i = 0; i < concatenated.length; i++) {
    
    const elemento = concatenated[i];
    
    if (!onlyOne.includes(concatenated[i])) {
        onlyOne.push(elemento);
        }
    }

    console.log(`las categorías únicas de las películas son: ${onlyOne}`);
} */

/* moviesCategory() */

for (const movie of movies) {
    for (const category of movie.categories) {
        if (!moviesCategories.includes(category)) {
            moviesCategories.push(category)
        }
    }
    
}
console.log(moviesCategories)