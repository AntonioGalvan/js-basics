console.log("Hola mundo")

//Variables y constantes

//let 
let a = 10

//var (versión obsoleta) Coloca la varialbe en el objeto window y es accesible desde multiples partes por lo que pueden existir problemas al apuntar a una variable
var b = 20

//constante: su valor no puede modificarse
const c = 30

// Ocurriría un error al ejecutar
//c = 123

// Esto es una mala practica, además se comporta como var
d = 40

// ================================================================================

//objeto console

console.log({ a, b, c, d })


// Mostramos log normal
console.log("mensaje de log")

// Advertencia
console.warn("Alerta")

// Mostramos directamente un error
console.error("Ha ocurrido un error")

//Información con estilo
console.log('%c Información con estilo', 'color: yellow; font-weight: bold; font-size: 20px')

console.log('%c Hiiii', 'color: black;')

console.table({ a, b, c, d })

