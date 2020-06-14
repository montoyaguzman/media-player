var urlBase = 'https://pokeapi.co/api/v2/pokemon'

async function getInicialesKanto() {
    const query = '?limit=9&offset=0'
    const url = `${urlBase}${query}`
    const response = await fetch(url)
    const data = await response.json()
    return data.results
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

async function getAbilitiesByName(str) {
    let name = document.getElementById('name').value
    try {
        let response = await getAbilitiesByNameFetch(name)
        let { moves } = response
        let movesArr = moves.map(element => element.move.name)
        console.log(`${name} aprende: `, movesArr.splice(1,10))
    } catch(error) {
        console.log('error: ', error)
    }

}

function getAbilitiesByNameFetch(name) {
    const url = `${urlBase}/${name}`
    return fetch(url)
        .then(response => response.json())
        .then(data => data.moves)
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}


async function getMovesInSequences() {
    
    const names = await getInicialesKanto()
    let pokes = []

    for (const name of names) {
        const pokemon = { name: name.name }
        pokes.push(pokemon)
    }

    let count = 0
    for(const poke of pokes) {
        const moves = await getAbilitiesByNameFetch(poke.name)
        pokes[count].moves = moves.splice(1,10)
        count++
    }
    console.log('iniciales: ', pokes)

}

async function getMovesInParallelFetch() {
    const pokemons = await getInicialesKanto() 
    const getMoves = pokemons.map(poke => getAbilitiesByNameFetch(poke.name))
    const moves = await Promise.all(getMoves)
    let pokesWithMoves = pokemons.map((poke,i) => {
        let newPoke = { ...poke, moves: moves[i].splice(1,10) }
        return newPoke
    })
    return pokesWithMoves
}

async function getMovesInParallel() {
    const pokesWithMoves = await getMovesInParallelFetch()
    console.log('iniciales: ', pokesWithMoves)
}

async function getFastestMoveFetch() {
    const pokemons = await getInicialesKanto() 
    const getMoves = pokemons.map(poke => getAbilitiesByNameFetch(poke.name))
    const moveFast = await Promise.race(getMoves)
    return moveFast
}

async function getFastestMove() {
    const fastestPoke = await getFastestMoveFetch()
    console.log('fastest move: ', fastestPoke[0].move.name)
}