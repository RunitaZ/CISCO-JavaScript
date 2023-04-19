
//! OPERADORES EN JAVASCRIPT

console.log('hola mundo')
console.log('hola mundo')

// o igual puede ser usado el ; para tener dos líneas de comando en la misma fila
console.log('hola mundo'); console.log('hola mundo')

//notación camel case,  ejemplo: estaEncendido ... el uso de la minúscula en la primera palabra
//y en la segunda palabra empieza con mayúscula


//operador ejemplo
let estaEncendido = true //dato boolean => dato primitivo
let estaLloviendo=false
let estaCasado = true
console.log(estaEncendido);
console.log(estaLloviendo);
console.log(estaCasado)
let esMayor = 5>3 //True
console.log(esMayor)




//COLORES PARA LOS COMENTARIOS MÁS DETALLADOS
//! hola como estas
//?
//



//! Operadores de Asignacion++++++++++++++++

// el operadores de asignación es el signo ( = )

let primerNombre
console.log(primerNombre) //indefinido => dato primitivo

//aquí agregamos datos con el =
let primerNombre1='Rut'
let pais='Bolivia'
console.log(primerNombre1);
console.log(pais);


//! Operadores Numéricos+++++++++++++++


let x=0 // number
let y=1 // number
x=y 
0=0+1
x=x+y                                                                                                
x+=y
x=x-y 
x-=y
x=x*y 
x*=y 
x=x/y
x/=y 
x=x%y
x%=y 
x=x**y
x**=y



//! Operadores Aritmeticos
a=5
b=7
Suma = a+b
Resta = a-b
Multiplicacion =a*b
Division =a/b
Modulo =a%b
Exponencial =a**b
console.log(Suma,Resta,Multiplicacion,Division,Modulo,Exponencial);


//! Operadores de comparacion
x==y ; console.log('2'==2)
x===y ; console.log('2'===2);
x != y ;console.log(3!=2)
x > y ; console.log(3>2)
x >= y ;  console.log(3>=3)
x < y ; console.log(3<2)
x <= y ; console.log(3<=2)


//! Operadores Lógicos   

//--    &&  and  (y)
//--    ||  or   (o)
//--    !  negación

//? devuelve valores booleanos como true o false

//!    &&   and   Y
//? devuelve el segundo valor de la respuesta
true && true //devuelve el segundo valor, verdadero
true && false //devuelve el segundo valor, falso
false && false //devuelve el primer valor, falso
123 && 'abc' // devuelve el segundo valor, 'abc'
'abc' && null //devuelve el segundo valor, nulo
undefined && 'abc' //devuelve el primer valor, indefinido
0 && false //devuelve el primer valor, 0


//prueba:
const check1= 4 > 3 && 10 > 5  //true && true --> true   -->devuelve el segundo valor que es true
const check2= 4 > 3 && 10 < 5  //true && false --> false    -->devuelve el segundo valor que es false
const check3= 4 < 3 && 10 < 5  //false && false --> false   -->devuelve el segundo valor que es false
console.log(check1);
console.log(check2);
console.log(check3);


//!    ||    or    O
//?Si la primera se evalúa como "falsa", la sentencia devolverá el valor de la segunda expresión. 
//?Si la primera se evalúa como "verdadera", la sentencia devolverá el valor de la primera expresión.
//?Cuando solo se incluyen valores booleanos (true o false), se devuelve como true si cualquiera de las dos expresiones son verdaderas.
//? Ambas expresiones pueden ser verdaderas, pero solo se necesita una para que el resultado sea verdadero.

true || true //devuelve el primer valor, verdadero
true || false //devuelve el primer valor, verdadero
false || false //devuelve el segundo valor, falso
123 || 'abc' //devuelve el primer valor, 123
'abc' || null //devuelve el primer valor, 'abc'
undefined || 'abc' //devuelve el segundo valor, 'abc'
0 || false //devuelve el segundo valor, falso


//prueba:
const check4= 4 > 3 || 10 > 5  //true || true --> true
const check5= 4 > 3 || 10 < 5  //true || false --> true
const check6= 4 < 3 || 10 < 5  //false || false --> false
console.log(check4);
console.log(check5);
console.log(check6);



//--    !  Negación

//?Devolver el valor contrario del booleano obtenido en el último paso.

let check7 = 4>3   // aquí me da resultado TRUE
console.log(check7);

let check8 = !(4>3)   //Con la negación cambiamos el resultado que era cierto por el falso
console.log(check8);


let isLightOn = true
let isLightOff = !isLightOn
console.log(isLightOff);



//!  OPERADORES DE INCREMENTO Y DECREMENTO  DE A 1, PARA QUITAR DE MÁS NÚMEROS DEBEMOS COMBINAR CON LOS ANTERIORES OPERADORES NUMÉRICOS

//? Post - incremento
let count=0
console.log(count++)      //0
console.log(count);       //1

//? Pre - incremento
let count1=0
console.log(++count1);    //1


//!   OPERADORES DE DECREMENTO

//? Post - decremento
let count2=0
console.log(count2--)     //0
console.log(count2);     //-1

//? Pre - decremento
let count3=0
console.log(--count3);   //-1




//! OPERADORES TERNARIOS

let isRaining = false
isRaining === true
? console.log('Tú necesitarás llevar un paraguas')  // si cumple la condición mandará esta respuesta, que lleva el signo ?
: console.log('Tu no necesitas llevar un paraguas')  //si no cumple la condición mandará esta respuesta, que lleva el signo :


// aquí solo bota el texto si es o no positivo o negativo
let numero = -5
numero > 0
? console.log('es un número positivo')
: console.log('es un número negativo')


// usando las comillas al revés `` se puede agregar el valor de la variable numero1 junto al texto como respuesta
let numero1 = 5
numero1 > 0
? console.log(`${numero1} es un número positivo`)
: console.log(`${numero1} es un número negativo`)


//!  -------- Objeto de Fecha

//                        FormatoDatos:      EjemploResultados:
// getFullYear()            (yyyy)                  2023
// getMonth()               (0-11)                  11
// getDate()                (1-31)                  7
// getDay()                 (0-6)                   3
// getHours()               (0-23)                  11
// getMinutes()             (0-59)                  23
// getSeconds()             (0-59)                  12
// getMilliseconds()        (0-999)
// getTime()


// Obteniendo DATOS a partir del DATE
const now = new Date()
console.log(now);

//Obteniendo el año del DATE
console.log(now.getFullYear());

//Obteniendo el mes del DATE
console.log(now.getMonth());

//Obteniendo el día del DATE
console.log(now.getDay());

//Obteniendo la hora del DATE
console.log(now.getHours());

//Obteniendo los minutos del DATE
console.log(now.getMinutes());

//Obteniendo los segundos del DATE
console.log(now.getSeconds());



//!    CONDICIONALES
// se ejecuta de abajo hacia arriba

let num = -3
if(num>0){
    console.log('es un número positivo')
}
else{
    console.log('es un número negativo')
}


//QUIZZ
let X = 3
let Y = 5
let Z =10
respuesta = ++Z+Y-Y+Z+X++
console.log(respuesta)