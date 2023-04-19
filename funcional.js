// Función declarativa
//función de expresión
// Función anónima
//función de flecha

function functionName(){
    //aquí viene el código
}
functionName();

function cuadrado() {
    let num = 2
    let c = num * num
    console.log(c);
}

cuadrado();  //4

function nombreCompleto() {
    let nombre = 'Rut'
    let apellido = 'Zotar'
    let  nombrecompleto=`Mi nombre completo es: ${nombre} ${apellido}`
    return nombrecompleto
    
}
console.log(nombreCompleto());


function nombrecompleto(nombre, apellido) {
    let nombreCompleto = `Mi nombre completo es: ${nombre} ${apellido}`
    return nombreCompleto
}
console.log(nombrecompleto('Rut','Zotar'));



function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
        
    }
    return sum;
}
console.log(sumAllNums(1,2,3,4,10));