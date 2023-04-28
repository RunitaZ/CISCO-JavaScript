

//Funciones Puras

//Datos Primitivos
//si los datos son primitivos, es inmutable
let numero = 4 //number
let nombre = 'José'


//Datoss compuestos complejos
//si los datos son compuestos completos, son mutables
let nombres= ['Juana', 'Maria', 'Juan']  //Mutable
nombres[0] = 'Patricio'
console.log(nombres);

//Funciones de orden superior
//Son funciones que aceptan 1 o varios argumentos

function operacionFuncional(operation, a, b){
    return operation(a,b)
}
function suma(a, b){
    return a+b
}
function resta(a,b){
    return a-b
}
console.log(operacionFuncional(suma, 2, 3));
console.log(operacionFuncional(resta, 2, 3));


//métodos de arrays
const numeros = [1,2,3,4,5,6,7,8,9]
const cuadrado = numeros.map(function (numero){
    return  numero* numero
})
console.log(cuadrado);

//cuando hay llaves en una función, ya sea de flecha o común, se debe de agregar el RETURN
const cuadrado2=numeros.map(numero => numero*numero)
console.log(cuadrado2)

//fuNCIÓN DE FLECHA = sacar los pares del array numeros
const numerosPares = numeros.filter(numero => numero%2===0)
console.log(numerosPares);

//FUNCIÓN DECLARATIVA  = sacar los pares del array numeros
const numerosPares1= numeros.filter(function (numero){//2
    return numero %2 === 0   //[2,4,6,8]
})
console.log(numerosPares1);


const sumaNumeros = numeros.reduce(function(sum,numero){
    return sum + numero
},0)
console.log(sumaNumeros)



//declarando una expresion regular sin bandera global

let patron = 'love'
let bandera = 'gi'
let regExpr = new RegExp(patron, bandera)
console.log(regExpr); //*respuestas sin bandera global  /love/

let regEx = /love/gi
console.log(regEx);



//Métodos del objeto RegExp

//test();

const str = 'love JavaScript love'
const patron1=/l/
const result = patron1.test(str)
console.log(result);


//MATCH()
const str1 = 'love JavaScript love'
const patron2=/love/
const resultado =str1.match(patron2)
console.log(resultado);


//SEARCH()
const str2 = 'JavaScript love'
const patron3=/love/
const resultado1 =str2.search(patron3)
console.log(resultado1);



