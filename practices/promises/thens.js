var urlBase = 'https://pokeapi.co/api/v2/pokemon'

function getInicialesKanto() {
    const query = '?limit=9&offset=0'
    const url = `${urlBase}${query}`
    return fetch(url)
        .then(response => response.json() )
        .then(data => {
            let { results } = data
            let arr = results.map(element => {
                return element.name
            })
            console.log('Iniciales kanto: ', arr)
        })
}

function getLegendary() {
    let num = getRndInteger(144, 147)
    const url = `${urlBase}/${num}`
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            let { name } = data
            console.log('Has atrapado a:', name.toUpperCase())
        })
}

function getAbilitiesByName() {
    let name = document.getElementById('name').value
    const url = `${urlBase}/${name}`
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            let { moves } = data
            let movesArr = moves.map(element => element.move.name)
            console.log(`${name} aprende: `, movesArr.splice(1,10))
        })
        .catch(err => console.log('error: ', err))
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }