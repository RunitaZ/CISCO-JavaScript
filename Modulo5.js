

//! EJERCICIOS DE MÓDULO 5

//! **TAREA 1**
//?Los arreglos en JavaScript tienen disponible un método `sort` que, como puedes suponer, te permite ordenar sus elementos. 
//? Este método toma como argumento una función que comparará dos elementos del arreglo. La función debe devolver cero si consideramos
//? que los argumentos son iguales, un valor menor que cero si consideramos que el primero es menor que el segundo y un valor mayor que 
//? cero en caso contrario. Mira el ejemplo: 

/*
let numbers = [50, 10, 40, 30, 20];
function compareNumbers(a, b) {
    let retVal = 0;
    if (a < b) {
        retVal = -1;
    } else if(a > b) {
        retVal = 1;
    }
    return retVal;
}
let sorted = numbers.sort(compareNumbers);
console.log(sorted); // [10, 20, 30, 40, 50]
 */

//***A.** Intenta modificar el código anterior para que sea lo más corto posible. Sugerencias:
/*
- Usar una función anónima.
- Usar una función arrow o flecha
- Considera omitir la sentencia `if`.
*/
let numbers = [50,10,40,30,20]

let numOrdenAsc = numbers.sort((a,b)=>(a-b))
console.log(numOrdenAsc);

//*B. Luego modifica la función para que los elementos se ordenen en orden descendente, no en orden ascendente como en el ejemplo.


numbers = [50,10,40,30,20]

let numOrdenDesc = numbers.sort((a,b)=>(b-a))
console.log(numOrdenDesc);


//! TAREA 2

//?Escribe tres funciones con los nombres `add`, `sub` y `mult`, que tomarán dos argumentos numéricos. Las funciones son para verificar
//? si los argumentos dados son enteros (emplea `Number.isInteger`). Si no, devuelven `NaN`, de lo contrario, devuelven el resultado de 
//? la suma, la resta o la multiplicación, respectivamente. Las funciones deben declararse mediante una instrucción de función.
//? Ejemplo de su uso y resultados esperados:
/*
console.log(add(12, 10)); // -> 22
console.log(mult(12, 10.1)); // -> NaN
 */
//* Función para Suma con verificación de números enteros
function add(a,b){
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        return NaN;
    }
    return a + b;
}
console.log(add(12,10))

//* Función para Resta con verificación de números enteros
function sub(a,b){
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        return NaN;
    }
    return a - b;
}
console.log(sub(4,2));

//* Función para Multiplicación con verificación de números enteros
function mult(a,b){
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        return NaN;
    }
    return a * b;
}
console.log(mult(12, 10.1));


//! TAREA 3

//?Reescribe las funciones de la tarea anterior usando una expresión de función arrow o flecha, tratando de escribirlas  
//? en la forma más corta posible.
//? Ejemplo de su uso y resultados esperados:
/*
console.log(sub(12, 10)); // -> 2
console.log(mult(10, 10.1)); // -> NaN
 */

//* Función de flecha para la suma con verificación de números enteros
let add = (a,b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a+b;
console.log(add(12,10));

//* Función de flecha para la resta con verificación de números enteros
let sub = (a,b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a-b;
console.log(sub(12,10));

//* Función de flecha para la multiplicación con verificación de números enteros
let mult = (a,b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a*b;
console.log(mult(10,12));


//! TAREA 4

//?Escriba una función `action` que tomará la función callback como su primer argumento y los otros dos argumentos como números. 
//? Como función callback, podrá pasar una de las tres funciones de la tarea anterior. La función `action` llamará a la función callback 
//? que se le pasó y devolverá el resultado obtenido. La función callback aceptará el segundo y el tercer argumento de la invocación.
//? Ejemplo de su uso y resultados esperados:
/*
console.log(action(add, 12, 10)); // -> 22
console.log(action(sub, 12, 10)); // -> 2
console.log(action(mult, 10, 10.1)); // -> NaN
 */

let action = (callback, a, b) => callback(a,b);
console.log(action(add, 10, 10.1));

// OR
action = function(callback, a, b){
    return callback(a,b)
}
console.log(action(sub, 12, 10));

// OR
action = function action(callback,a,b){
    return callback(a,b);
}
console.log(action(mult, 12, 10));


//! TAREA 5

//?Escribe un programa que imprima (en la consola) números enteros consecutivos 10 veces, en intervalos de dos segundos (comienza con el número 1).
//?  Utiliza las funciones `setInterval`, `clearInterval` y `setTimeout`.
/*
1
2
3
4
5
6
7
8
9
10
 */




//! TAREA 6

//?Escribe una función que calcule el n-ésimo elemento de la sucesión de Fibonacci. Esta secuencia se define mediante una fórmula:
/*
       0                    ifn= 0
Fn = {1                     ifn= 1
    F      +  F             ifn> 1
      n-1       n-2     
*/
//? Entonces, cada elemento de la secuencia (excepto los dos primeros) es la suma de los dos anteriores. Por ejemplo: 
//? *F1 = 1, F2 = F1 + F0 = 1, F3 = F2 + F1 = 2* y *F6 = F5 + F4 = 8*. La función debe usar **recursividad**. En la definición, 
//?usa una expresión de función (almacena una función anónima en una variable). Ejemplo de su uso y resultados esperados: 
/*
console.log(fibbRec(4)); // -> 3
console.log(fibbRec(7)); // -> 13
 */




//! TAREA 7

//?Reescribe la función de la Tarea 6 usando una expresión de función arrow o flecha, pero intenta acortar tu código tanto como 
//?sea posible (emplea operadores condicionales y trata de no usar variables adicionales que no sean el parámetro n).



//! TAREA 8

//?Escribe una versión iterativa de la función de la Tarea 6 (usa el bucle for). Declara la función usando una instrucción de función.


