let a = 6

if (a <= 5) {
    console.log('pasooo')
}
else {
    console.log('no pasooo')
}


const hoy = new Date()
let dia = hoy.getDate()

console.log({ dia })

if (dia === '12') {
    console.log('Hoy es 12')
}
else {
    console.log('no es 12')
}



//Mapeo sin usar if else o switch =================================
let day = 5

const days = {
    0: () => "Domingo",
    1: () => "Lunes",
    2: () => "Martes",
    3: () => "Miércoles",
    4: () => "Jueves",
    5: () => "Viernes",
    6: () => "Sábado"
}

console.log(days[day]() || 'Día no definido')


// Solución con arreglos ============================================

let dia2 = 3
const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

console.log(dias[dia2])
