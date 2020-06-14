var urlBase = 'https://pokeapi.co/api/v2/pokemon'

async function getInicialesKanto() {
    const query = '?limit=9&offset=0'
    const url = `${urlBase}${query}`
    const response = await fetch(url)
    const data = await response.json()
    const { results } = data
    let arr = results.map(element => { return element.name })
    console.log('Iniciales Kanto:', arr)
}

async function getLegendary() {
    console.log('Atrapaste a: ', await getLegendaryFetch())
}

async function getLegendaryFetch() {
    let num = getRndInteger(144, 147)
    const url = `${urlBase}/${num}`
    const response = await fetch(url)
    const data = await response.json()
    return  data.name
}

async function getAbilitiesByName() {
    let name = document.getElementById('name').value
    const url = `${urlBase}/${name}`
    
    try {
        let response = await getAbilitiesByNameFetch()
        let { moves } = response
        let movesArr = moves.map(element => element.move.name)
        console.log(`${name} aprende: `, movesArr.splice(1,10))
    } catch(error) {
        console.log('error: ', error)
    }

}

function getAbilitiesByNameFetch() {
    let name = document.getElementById('name').value || 'snorlax'
    const url = `${urlBase}/${name}`
    return fetch(url)
        .then(response => response.json())
        .then(data => data)
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}


function managePromises() {

}