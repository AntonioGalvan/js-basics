// Arreglos

//Inicializar array
// new Array(10) crea un arreglo de 10 elementos pero vacios
const array = new Array(10)
console.log(array)

// Otra forma de inicialización
const arr = []

let videojuegos = ['god of war', 'the last of us', 'battlefront', 'skyrim']
console.log(videojuegos)

console.log(videojuegos[2])

let arrayVariado = [
    'palabra',
    2,
    3.22,
    5 + 10,
    function () {
        console.log('hi')
    },
    {
        a: 1,
        b: 3
    },
    [
        'x', 'megaman', 'mario'
    ],
    () => {
        console.log('hi flecha')
    }
]

console.log(arrayVariado[0])

//Ejecutamos la funcion
arrayVariado[arrayVariado.length - 1]()

//La asignamos y luego la ejecutamos
const func = arrayVariado[4]
func()

//Obtenemos el array
console.log(arrayVariado[6][1])

const miArray = arrayVariado[6]
console.log(miArray[1])

let juegos = ['zelda', 'skyrim', 'halo', 'The last of us']

console.log(juegos.length)

//Foreach: va a ejecutar una instrucción por cada uno de los elementos que se encuentran en el arreglo
juegos.forEach((elm, index, arr) => {
    console.log(`${++index}: ${elm}`)
})

// Funciones con arrays ===============================================================
console.log(juegos.length)
// Agregamos un nuevo elemento al array, push retorna el número de la nueva longitud
let longitudNueva = juegos.push('mario')
console.log({ longitudNueva, juegos })

//agregamos un nuevo elemento al inicio del array
longitudNueva = juegos.unshift('god of war')
console.log({ longitudNueva, juegos })

//Sacamos el últimos elemento, retorna el valor del elemento borrado
longitudNueva = juegos.pop()
console.log({ longitudNueva: juegos.length, juegos })

console.log({ juegos })
//Con splice podemos borrar un indice especifico con el primer parámetro, y con el segundo el número de elementos que borraremos a partir de ahi, es diferente a slice 
let juegosBorrados = juegos.splice(3, 2)
console.log({ juegosBorrados, juegos })

// Obtenemos el indice de un elemento del array con base en su valor
//Si no lo encuentra retorna -1 si no lo encuentra, es caseSensitive
const indexOfZelda = juegos.indexOf('zelda')
console.log(indexOfZelda)

