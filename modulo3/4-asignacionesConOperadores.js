const retornaVerdadero = () => {
    return true
}

const a1 = retornaVerdadero() && 'Holaaa'
const a2 = retornaVerdadero() && 'si' && 'Se asignó el último'

const a3 = false && 'hii'

const a4 = retornaVerdadero() || 'hey'

//Siempre se asigna el último
const a5 = false || undefined || 'hoa'

console.log({ a1, a2, a3, a4, a5 })