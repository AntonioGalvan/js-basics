const printValueType = (value) => {
    console.log(`Tipo de ${value}: ${typeof value}`)
}

// Datos primitivos
let nombre = 'Peter Parker'
console.log(nombre)

nombre = 'Ben Parker'
console.log(nombre)

printValueType(nombre)

let number = 832
printValueType(number)

let esMarvel = false
printValueType(esMarvel)

let peso = 70.2
printValueType(peso)

//de tipo Undefined
let superpoder
printValueType(superpoder)

//de tipo object (pero el valor es nulo)
let soyNulo = null
printValueType(soyNulo)

// de tipo symbol
let symbol1 = Symbol('a')
let symbol2 = Symbol('a')
console.log(typeof symbol1)

console.log(symbol1 === symbol2)
