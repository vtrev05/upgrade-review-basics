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
const rain = []
const firecamp = []
const shower = []
const wind = []
const train = []

const wavesVolumes = []
const rainVolumes = []
const firecampVolumes = []
const showerVolumes = []
const windVolumes = []
const trainVolumes = []


let wavesVolumesMedium = 0
let rainVolumesMedium = 0


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
    for (let index = 0; index < wavesVolumes.length; index++) {
        wavesVolumesMedium += wavesVolumes[index]
    }
    wavesVolumesMedium = wavesVolumesMedium / wavesVolumes.length
    console.log(wavesVolumesMedium)
}
mediumWaves()

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
    for (let index = 0; index < rainVolumes.length; index++) {
        rainVolumesMedium += rainVolumes[index]
    }
    rainVolumesMedium = rainVolumesMedium / rainVolumes.length
    console.log(rainVolumesMedium)
}
mediumRain()

