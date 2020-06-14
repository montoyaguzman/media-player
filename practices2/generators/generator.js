function* simpleGenerator() {
    console.log('El generador inicio')
    yield 'empece'
    console.log('trabajó')
    yield 'estoy terminando'
    console.log('El generador termino')
    yield 'termine'
}

function* makerIds() {
    let id = 1
    while(true) {
        yield id
        id++
    }
}

function* makerIdsWithReset() {
    let id = 1
    let reset
    while(true) {
        reset = yield id
        reset ? id = 1 : id++
    }
}

function* fibonacci() {
    let a = 1
    let b = 1
    
    while(true) {
        let nextNum = a + b
        yield nextNum
        a = b
        b = nextNum
    }
}

const fnGen = simpleGenerator()
// fnGen.next() //  retorna {value: undefined, done: true}

const genId = makerIds()
// genId.next()

const genIdWithReset = makerIdsWithReset()
// genIdWithReset.next()

const genFibonacci = fibonacci()
// genFibonacci.next()