//! callbacks sincronas

//en tareas sincronas, no importa ni el tamaño de la tarea ni el orden, igual ejecuta lo que el cliente le diga
/*
tarea1 🏐🏐🏐
tarea2 🏐
tarea3 🏐🏐
*/
// tarea1
// tarea2
// tarea3

let interna = function(){
    console.log('soy la primera función interna')
}

let exterior = function(callbacks){
    console.log('soy la función del exterior1')
    callbacks()
    console.log('soy la función del exterior2')
}

console.log('test1');
exterior(interna)
console.log('test2');

//! callbacks asincronas

/*
tarea1  🏀🏀🏀
tarea2  🏀
tarea3  🏀🏀
*/
// tarea3
// tarea1
// tarea2

function suma(a,b,callback) {
    const resultado= a+b
    callback(resultado)
}
function imprimirResultado(resultado) {
    console.log('El resultado es: ' + resultado);
}
suma(5,10,imprimirResultado)

console.log('Inicio')

setTimeout(()=>{
    console.log('Este mensaje se mostrará después de 3 segundos')
},3000)//3000ms= 3s

console.log('Fin')

let interior= function () {
    console.log('soy la primera interna');
}
let externa=function (callback) {
    console.log('externa 1')
    setTimeout(callback,1000) //1000ms
    console.log('externa 2');
}
console.log('test1')
externa(interior)
console.log('test2')

//* Crear una función que tome un arreglo de nombres y un callback que determine si un nombre especifico se encuentra o no en el arreglo.Luego , imprimir un mensaje en la consola indicando si el nombre se encuentra o no en el arreglo

function buscarNombre(nombres,nombreBuscado,callback) {
    const encontrado=nombres.includes(nombreBuscado)
    callback(encontrado)
}
function imprimirResultado(encontrado) {
    if (encontrado) {
        console.log("El nombre se encuentra en el arreglo")
    } else{
        console.log('El nombre no se encuentra en el arreglo');
    }
}
const listNombres=["Juan","Maria","Pedro","Ana"]
buscarNombre(listNombres,"Paola",imprimirResultado)
