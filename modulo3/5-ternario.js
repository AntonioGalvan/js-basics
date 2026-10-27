const dia = 0
const horaActual = 8

let horaApertura
let mensaje //abierto o cerrado

// Revisamos si es sabado o domingo

horaApertura = [0, 6].includes(dia) ? 9 : 11

console.log({ horaApertura })

mensaje = horaActual >= horaApertura ? 'Está abierto' : `Está cerrado, abrimos a las ${horaApertura}`

console.log({ mensaje })


//Otros usos
const grade = 91

const letter = grade >= 95 ? 'A+' :
    grade >= 90 ? 'A' :
        grade >= 85 ? 'B+' :
            grade >= 80 ? 'B' :
                grade >= 75 ? 'C+' :
                    grade >= 70 ? 'C' : 'F'

console.log(letter)
