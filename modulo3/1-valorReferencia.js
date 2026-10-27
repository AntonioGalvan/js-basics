// Problema
let juan = {
    nombre: 'juan'
}

let ana = juan

//cuando cambio el nombre de ana tambien cambio el nombre de juan, porque en js todos los objetos son pasados por referencia
//Esto no pasa en varaibles con valores primitivos, solo los objetos se pasan por referencia
ana.nombre = 'ana'

console.log({ juan, ana })


//Aqui no pasa eso
let c = 4
let d = c

console.log({ c, d })
d = 392
console.log({ c, d })


// En este ejemplo tambien se cambian los dos valores al cambiar uno
const cambiaNombre = (persona) => {
    persona.nombre = 'Tony'
    return persona
}

let peter = {
    nombre: 'peter'
}

let tony = cambiaNombre(peter)
console.log({ peter, tony })

// Romper la referencia del objeto ===================================

let javier = { nombre: 'javier' }
//Asi podemos copiar solo las propiedades sin que  se pase por referencia
let mariana = { ...javier }
mariana = cambiaNombre(mariana)

console.log({ javier, mariana })


//Cambio de nombre mejorado

//Recibimos el objeto pero lo destructuramos para romper la relación
const cambiaNombre2 = ({ ...persona }, nombre) => {
    persona.nombre = nombre
    return persona
}

let cesar = { nombre: 'cesar' }
let liliana = cambiaNombre2(cesar, "liliana")

console.log({ cesar, liliana })


//Arreglos ==========================================================

//en este caso pasa lo mismo se agrega por referencia
const frutas = ['manzana', 'peras', 'kiwi']
const otrasFrutas = frutas

otrasFrutas.push('mango')
console.table({ frutas, otrasFrutas })

//rompemos la realación con spread
console.time('spread')
const otrasFrutas2 = [...frutas]
console.timeEnd('spread')
otrasFrutas2.push('sandia')


//slice regresa una copia completa del arreglo si no le pasamos parametros, tambien sirve para romper la referencia
console.time('slice')
const otrasFrutas3 = frutas.slice()
console.timeEnd('slice')
otrasFrutas3.push('melon')

//en los tiempos vemos que el spread es mas rapido generalmente
console.table({ frutas, otrasFrutas2, otrasFrutas3 })