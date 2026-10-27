const heroes = ['batman', 'green lantern', 'superman', 'wonder woman', 'aquaman']

console.warn('For in')

// For in: Itera sobre los índices del array (las posiciones, no los valores directamente).
// Es útil si necesitas trabajar con los índices, pero no directamente con los valores.
for (let i in heroes) {
    console.log(heroes[i])
}

// For of: Itera directamente sobre los valores del array.
// Es más legible y directo si solo necesitas trabajar con los elementos (principalmente objetos).
console.warn('For of')
//For of
for (let hero of heroes) {
    console.log(hero)
}

// Foreach: Es un método de orden superior que aplica una función a cada elemento del array.
// Es ideal si necesitas un enfoque funcional y moderno para recorrer el array.
console.warn('Foreach')
//Foreach (high order function)
heroes.forEach((hero) => {
    console.log(hero)
})


const personas = [
    {
        nombre: 'Antonio',
        edad: 24,
        titulo: 'Ing',
        carrera: 'Software'
    },
    {
        nombre: 'Mariana',
        edad: 28,
        titulo: 'Lic',
        carrera: 'Lenguas'
    },
    {
        nombre: 'Mauricio',
        edad: 32,
        titulo: 'Lic',
        carrera: 'Derecho'
    }
]

console.warn('Objetos')

for (let persona of personas) {
    Object.keys(persona).forEach((dato) => {
        if (dato === 'titulo') return
        console.log(`${dato}: ${persona[dato]}`)
    })

    console.log('===================')
}