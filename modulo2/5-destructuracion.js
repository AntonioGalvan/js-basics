const crearPersona = (nombre, apellido) => ({ nombre, apellido })

const { nombre, apellido } = crearPersona("antonio", "galvan")
console.log(`${nombre} ${apellido}`)


//De esta forma podemos usar los arguments que usamos en una función normal pero en una función de flecha
//Usamos el operador rest ... para incluir todos los parametros restantes y solo nombramos el primero, retornamos un objeto
const imprimeArgumentos = (edad, ...args) => {
    console.log({ edad, args })
    return args
}

// const argumentos = imprimeArgumentos(44, 'Caballo', 3.2, true)
// console.log({ argumentos })

//En este caso la función de imprimeArgumentos nos está retornando un array con todos los valores que le pasamos previamente a la función, podemos destructurarlo pero esta vez como array
const [animal, calculo, casado] = imprimeArgumentos(44, 'Caballo', 3.2, true)

console.log({
    data: {
        animal,
        calculo,
        casado
    }
})


const imprimePropiedades = (personaje) => {

    Object.keys(personaje).forEach((key) => {
        console.log(`${key}: ${personaje[key]}`)
    })
}

//Esta función recibe un objeto y al conocer las propiedades lo destruturamos
const imprimePropiedades2 = ({ nombre, edad, trajes }) => {
    console.log({ nombre, edad, trajes })
}

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

imprimePropiedades(personaje)

//
imprimePropiedades2(personaje)