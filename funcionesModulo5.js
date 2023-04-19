

//!Funciones de autoinvocación

(function(n){
    console.log(n*n);
})(3)

//! Funciòn de flecha
function cuadrado(n){
    return n*n
}
console.log(cuadrado(4));

const square = n => {
    return n*n
}
console.log(square(5));
const squareArrow = n=> n*n
    console.log(4);
