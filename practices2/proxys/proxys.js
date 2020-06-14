const target = {
    red: 'rojo',
    green: 'verde',
    blue: 'azul'
}

const handler = {
    
    get(obj, prop) {
        const suggestion = Object.keys(obj).find(key => {
            return Levenshtein.get(key, prop) <= 3
        })
        if(suggestion) {
            console.log(`${prop} no se encontró. Quisiste decir ${suggestion}?`)
        }
        if(prop in obj) {
            return obj[prop]
        }
    }

}

const proxy = new Proxy(target, handler)