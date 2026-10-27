//La diferencia entre función y método es que el método se encuentra en una clase y la función no

//Todas las funciones de js por defecto retornan undefined

//Cuando usamos function y despues definimos una variable con var se podria cambia el apuntador a la variable, por eso no es muy recomensable usar function

//Todas las funciones tradicionales (con la palabra function) tiene un objeto implicito llamado arguments que es un array con todos los argumentos que mandamos 
function saludar(nombre) {
    console.log(arguments)
    console.log(`Hola ${nombre}`)

    return 1
}

//En este caso la función que asignamos a la constante es una función anónima, ya que no cuenta con un nombre
const saludar2 = function (nombre) {
    console.log(arguments)
    console.log('hi ' + nombre)
}


//Funciones lamba / de flecha (no viene con el array de arguments)
const saludarFlecha = (nombre) => {
    console.log('hiiii ' + nombre)
}

//Con function definir la función primero y despues llamarla
const ret = saludar('Antonio', 40, true)
saludar2('Mariana')
saludarFlecha('Ramiro')

console.log(ret)


//Retornamos un resultado de tipo number
const suma = (a, b) => {
    return a + b
}

const resultado = suma(2,8)
console.log(resultado)

const getAleatorio = () => Math.ceil(Math.random() * 100)
console.log(getAleatorio())
