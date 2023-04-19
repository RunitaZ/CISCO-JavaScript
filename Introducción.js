console.log('hello world')
let numero=2 // Number
let numero1=2.2 //Number
const nombre1='maria' //cadena
let apellido1="ramos" // cadena
var ciudad=`La Paz` //cadena
console.log(numero);
console.log(numero1);
console.log(nombre1);
let esCasada=false // Booleano
let esCasado=true // Booleano
let secundaria=null // Nulo
console.log(secundaria); 
let pais //undefined
console.log(pais);
// let licenciada=nombre?especialidad?añosExperiencia

let arreglo=[1,2,3,4,5] //arreglos o array , vectores matrices
let arreglo1=['1','2','3','4','5'] //arreglos o array , vectores matrices
let objeto={
   name: 'Maria',
   apellido:'Ramos'
}
console.log(objeto);
console.log(arreglo);
console.log(arreglo1);

//! Numeros
const PI= Math.PI
console.log(PI); 
console.log(Math.round(PI));
console.log(Math.floor(PI));
console.log(Math.ceil(PI));
console.log(Math.min(-5,3,20,4,5,10));
console.log(Math.max(-5,3,20,4,5,10));
let randomico= Math.random()
console.log(randomico); //(0 0.9999)
let randomNum=Math.floor(Math.random()*11)
console.log(randomNum);
let numAbsoluto=Math.abs(-20)
console.log(numAbsoluto);
console.log(Math.sqrt(100));
console.log(Math.sqrt(2));
console.log(Math.pow(4,2));
console.log(Math.LN10);
console.log(Math.sin(0))
console.log(Math.sin(60))
console.log(Math.cos(0))
console.log(Math.cos(60))
let espacio=' '
let nombre='Maria'
let apellido='Ramos'
let ciudad='La Paz'

let fullInformacion= nombre + espacio+ apellido + espacio + ciudad
console.log(fullInformacion);
const parrafo= 'My nombre es Maria . Me gusta caminar en la lluvia .\
Soy apasionada de peliculas de terror .\
Soy apasionada de peliculas de terror .\
Soy apasionada de peliculas de terror .\
'
console.log(parrafo);

// \n : nueva linea
// \t : Tabulador , 8 espacios
// \\: barra invertida
// \': Una frase(')
// \": Comilla doble(")
console.log('Espero tener un buen examen. \n Que esperas tú?');
console.log('Espero tener un buen examen. \t Que esperas tú?');
console.log('Dia 1\t3\t5');

console.log('Doble barra (\\)');
console.log('Mi primer mensaje en programacion \"Hola Mundo\"');
console.log("Mi primer mensaje en programacion \'Hola Mundo\'");
console.log("Mi primer mensaje en programacion 'Hola Mundo'");

let a=50
let b=40
console.log('suma = ' , a+b )
console.log(`La suma de ${a} + ${b} = ${a+b}` )
let js='javaScript'
console.log(js.length);
let ultimaPosicion= js[js.length-1]
console.log(ultimaPosicion);
console.log('maria'.toUpperCase());
console.log('MARIA'.toLocaleLowerCase());

console.log(Math.round(7.4));
console.log(Math.floor(6.12));
console.log(Math.ceil(6.16));