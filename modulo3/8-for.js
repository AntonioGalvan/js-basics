//El for se utiliza cuando:
// 1- Conoces el número de iteraciones
// 2- Vas a recorrer un array con indices
// 3- Vas a manipular indices en cada iteración
// 4- Quieres ejeutar bucles anidados

// Imprimimos números primos 
let numerosPrimos = []

for (let i = 2; i <= 100; i++) {
    let primo = true
    for (j = 2; j < i; j++) {
        if (i % j === 0) {
            primo = false
            break
        }
    }
    if (primo) numerosPrimos.push(i)
}

console.log(numerosPrimos)
// ===================================================================

//Invertimos array
let nums = [3, 1, 8, 9, 2]
let inv = []
for (let i = nums.length - 1; i >= 0; i--) {
    inv.push(nums[i])
}

console.log(inv)
// ===================================================================

//Tabla de multiplicar
let tablas = []
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 10; j++) {
        tablas.push(`${i} x ${j} = ${i * j}`)
    }
}
console.table(tablas)

// ===================================================================

// Sumar elementos de matriz
const matriz = [
    [3, 2, 1],
    [7, 2, 9],
    [4, 8, 1]
]

let suma = 0
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        suma += matriz[i][j]
    }
}

console.log("Suma de matriz: ", suma)

// ===================================================================

// Eliminar elementos duplicados
let nums1 = [2, 3, 5, 1, 3, 5]

let nums2 = []
for (i = 0; i < nums1.length; i++) {
    if (!(nums2.includes(nums1[i]))) {
        nums2.push(nums1[i])
    }
}

console.log(nums2)
