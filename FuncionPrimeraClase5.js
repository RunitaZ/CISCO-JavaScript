

function verMensajes(mensaje){
    console.log(`Mensaje: ${mensaje}`);

}
let sm = verMensajes
sm('esto funciona')

console.log(typeof sm); //verificar el tipo de dato de la variable sm

function hacerNada(){
    return undefined
}
let a = hacerNada()
let b = hacerNada
console.log(typeof a);   //verificar el tipo de dato de la variable "a"
console.log(typeof b);   //verificar el tipo de dato de la variable "b"

function suma(a,b) {
    return a+b
}
function multipliacion(a,b) {
    return a*b
}
function operaciones(funcion,numeroA,numeroB) {
    return funcion(numeroA,numeroB)
}
console.log(operaciones(suma,10,20))
console.log(operaciones(multipliacion,10,20))