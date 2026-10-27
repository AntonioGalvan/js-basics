const carros = ['Mazda', 'Toyota', 'Ford', 'Nissan', 'VW', 'Audi', 'Mercedes benz']

//Ciclo while
let i = 0
// while(i < carros.length) {
//     console.log(carros[i])
//     i++
// }

while (carros[i]) {

    if (i === 2) {
        //Si se ejecuta brak se sale del ciclo y ya no lo sigue ejecutando
        //break

        //Si se ejecuta continue se salta esa iteración pero sigue con el resto del ciclo
        i++
        continue
    }

    console.log(carros[i])
    i++
}


let j = 0
// Do while
do {
    console.log(carros[j])
    j++
} while (carros[j])