'use strict';

//ITERATION 2

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

const volumes = []
const waves = []
const wavesVolumes = []


function mediumWaves() {
    for (const user of users) {
        volumes.push(user.favoritesSounds)
    }
    for (const wave of volumes) {
        if (wave.waves) {
            waves.push(wave.waves)
        }
    }
    for (const waveSound of waves) {
        wavesVolumes.push(waveSound.volume)
    }
    if (wavesVolumes.length > 2) {
        console.log(`Los usuarios han añadido a favoritos el sonido ${rainVolumes.length} veces. Es uno de los sonidos más escuchados`)
    } else{
        console.log(`Los usuarios han añadido a favoritos el sonido ${rainVolumes.length} vez. No es muy escuchado.`)
    }
}
/* mediumWaves() */

const rain = []
const rainVolumes = []


function mediumRain() {
    for (const user of users) {
        volumes.push(user.favoritesSounds)
    }
    for (const r of volumes) {
        if (r.rain) {
            rain.push(r.rain)
        }
    }
    for (const rainSound of rain) {
        rainVolumes.push(rainSound.volume)
    }
    if (rainVolumes.length > 2) {
        console.log(`Los usuarios han añadido a favoritos el sonido ${rainVolumes.length} veces. Es uno de los sonidos más escuchados`)
    } else{
        console.log(`Los usuarios han añadido a favoritos el sonido ${rainVolumes.length} vez. No es muy escuchado.`)
    }
    
}
mediumRain()