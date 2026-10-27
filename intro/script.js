let name = "Antonio";
let lastname = "Galván";

let fullName = `Nombre: ${name} | Apellido: ${lastname}`;

console.log(fullName);

let videojuegos = ['god of war', 'the last of us', 'battlefront', 'skyrim'];
console.log(videojuegos)

function saludar(nombre) {
    console.log(arguments)
    console.log(`Hola ${nombre}`)

    return 1
}

const saludarFlecha = (nombre) => {
    console.log('hiiii ' + nombre)
}

saludarFlecha(name)
saludar(name);

const toggleButton = document.querySelector('.toggle-button');
const hiddenMessage = document.querySelector('.hidden-message');

toggleButton.addEventListener('click', () => {
    hiddenMessage.classList.toggle('hidden-message');
});

