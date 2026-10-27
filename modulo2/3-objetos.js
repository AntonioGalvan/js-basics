//Como sabemos que es un objeto: si no es primitivo es un objeto

//Aunque yo defina como const el objeto podré modificar sus propiedades
const personaje = {
    nombre: 'Tony Stark',
    edad: 49,
    coords: {
        x: 300.32,
        y: 982.12
    },
    trajes: [
        'Mark 4',
        'Mark 3',
        'Hulk buster'
    ],
    vivo: false,
    direccion: {
        zip: '73992',
        ubicacion: 'Malibu'
    }
}

console.log(personaje)
const nombre = personaje.nombre
console.log({ nombre })
console.log({ trajes: personaje["trajes"].length })

const edad = personaje.edad
console.log({ edad })

console.log(personaje)

//Borrar propiedad de objeto
delete personaje.edad

//Agregamos otra propiedad
personaje.casado = true

console.log(personaje)

//Entries: Devuelve un array con varios arrays dentro que juntan la kye y los valoes de cada propiedad
const entriesPares = Object.entries(personaje)
console.log(entriesPares)

//Bloquea la modificación de las propiedades del objeto
Object.freeze(personaje)
personaje.dinero = 2482394293

console.log(personaje.dinero)

//Obtenemos las propiedades dle objeto (Retorna TODAS las propiedades del objeto)
const props = Object.getOwnPropertyNames(personaje)
console.log({ props })

//Obtenemos las keys del objeto (Solo retorna las propiedades enumerables)
const keys = Object.keys(personaje)
console.log({ keys })

//Obtenemos los valores del objeto
const values = Object.values(personaje)
console.log({ values })