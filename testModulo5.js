//! QUIZ DEL MÓDULO 5


//! 1.-
//? con qué palabra clave comienza la declaración de una función?

/*
a)  fun
b)  procedure
c)  function        //*respuesta correcta
d)  let
 */



//! 2.-
//?En el cuerpo de una función (dentro de ella) declaramos una variable, p. sea "x = 10"
//? es local o global?


/*
a)  la variable x es una variable local         //*respuesta correcta
b)  la variable x puede ser local o global, según dónde se declare la función y como se declare
c)  la variable x es una variable global.
d)  no podemos declarar variable dentro de una función
 */

//! 3.-
//? Una función recursiva, es una función que:


/*
a)  se vuelve a llamar a si misma mientras se ejecuta.          //*respuesta correcta
b)  no devuelve ningun valor.
c)  usa instrucciones de bucles.
d)  no utiliza variables  globales.
 */


//! 4.-
//? los parámetros de una función son:



/*
a)  variables que se pasan a una función cuando se le manda llamar.
b)  variables locales declaradas en el cuerpo de la función. 
 */



//! 5.-
//? analiza el siguiente código:

let x = 10;
function test(){
    let x = 20;
    console.log(x);
}

test();


/*
a)  10
b)  no se mostrará nada.
c)  "x"
d)  20      //*respuesta correcta
 */



//! 6.-
//?analiza el siguiente código:
let x1 = 10;

function test(){
    let x1 = 20;
}

test();
console.log(x1);


/*
a)  10          //*respuesta correcta
b)  "x"
c)  no se mostrará nada.
d)  undefined
 */



//! 7.-
//? la declaración de la función:
function test(){
    console.log("test");
}

//?se puede reemplazar usando una expresión de función. ¿cuál de los siguientes fragmentos de código es correcto?

/*
a)  let test = function{console.log("test");}();
b)  let test() = function{console.log("test")};
c)  let function test = (){console.log("test")};
d)  let test= function(){console.log("test");};         //*respuesta correcta
 */



//! 8.-
//? declaramos la función:
function multiply(m, n){
    return (m*n);
}
//?cómo sería la defición de la función flecha o arrow correspondiente?

/*
a)  let multiply => (m,n) = m*n;
b)  let multiply = (m,n) => return m*n;
c)  let multiply(m,n) => m*n;
d)  let multiply = (m,n) => m*n;            //*respuesta correcta
 */



//! 9.-
//?hemos definido una función flecha:
let multiply = (m, n) => m*n;
//?cómo se verá una declaración regular de la función correspondiente?

/*
a)  function multiply(m,n){
    m=m*n;
    }
b)  function multiply(m,n){         //* respuesta correcta
    return (m*n);
    }
c)  function multiply(m,n){
    m*n;
    }
d)  function multiply(m,n){
    n=m*n;
    }
 */



//! 10.-
//?analiza el siguiente código:
function executeOperation(a,b,op){
    return op(a,b)
}
console.log(executeOperation(10,20,x2));
//?antes de declarar la función, debemos agregar una línea de código.¿qué línea agregamos, si la ejecucion del código completo da resultado en la consola el valor de 30?


/*
a)  let x = 10 + 20;   
b)  let x = 30;
c)  let x = (a,b) => a+b;           //*respuesta correcta
d)  let x =  function(){
    return a+b;
};
 */



//! 11.-
//? qué método se usa para llamar repetidamente a una función de callback específicada a intervalos fijos?


/*
a)  repeat
b)  interval
c)  setTimeout
d)  serInterval     //*respuesta correcta
 */




