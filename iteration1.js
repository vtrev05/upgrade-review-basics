'use strict';

//ITERATION 1

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

/* const moviesCategories = []
const categories = []

function moviesCategory() {
    for (const movie of movies) {
        moviesCategories.push(movie.categories)
    }
    for (let i = 0; i < moviesCategories.length; i++) {
        if (moviesCategories[i].includes(moviesCategories[i])) {
            console.log('repetido')
        } else {
            categories.push(moviesCategories[i])
        }
    }
    console.log(categories)
}


moviesCategory() */
const moviesCategories = []
const categories = []

function moviesCategory() {
    for (const movie of movies) {
        moviesCategories.push(movie.categories)
    }
    
    console.log(moviesCategories)
}
moviesCategory()