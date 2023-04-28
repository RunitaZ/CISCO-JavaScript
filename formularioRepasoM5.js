//! CUESTIONARIO DE JAVASCRIPT MODULO 5


//! 1.
//? Definimos una función usando la siguiente expresión. ¿cómo sería la definición de la función flecha correspondiente?
let suma = function (a,b){
    return (a+b)
}

/*
a)  let sum = (a, b) => a+b
b)  let sum = (a, b) => a+b
c)  let sum = (a, b) => (a+b)
d)  let sum = function (a,b) => {return (a+b)}
*/


//! 2.
//? el fragmento de código es:
function test(){

}
/*
a)  la declaración vacía de la función test
b)  La llamada de la función test
c)  incorrecta ya que el código es incorrecto y no significa nada
d)  La declaración de la variables test en la que se almacenarán los valores devueltos por la función
*/


//! 3.
//? Si la función devuelve algún valor calculado al finalizar, usamos la siguiente palabra clave para hacerlo:

/*
a)  return
b)  res
c)  yield
d)  function
*/


//! 4.
//? Una función callback es una función que:

/*
a)  contienen una referencia a si misma en su codigo
b)  siempre se manda a llamar con un cierto retraso predefinido
c)  se pasa a otra función como argumento y solo se manda llamar en su código
d)  siempre se ejecuta a intervalos fijos
*/


//! 5.
//? Analizar el siguiente codigo:
//? ¿Cuántas veces se mostrará la palabra "test" en la consola?
function test(counter){
    console.log("test");
    if(counter>0)
        test(--counter)
}
test(3)

/*
a)  3
b)  2
c)  0
d)  4       //*respuesta correcta
*/


//! 6.
//? Podemos usar el método forEach para iterar a través de los elementos de un arreglo.
//? ¿Cuál de las siguientes fragmentos de código mostrará a todos los elementos consecutivos 
//? del arreglo de animales en la consola.

/*
a)  animals.forEach(console.log(animal))
b)  forEach(animals, a =>{console.log(a)})
c)  animals.forEach(a =>{console.log(a)})       //*respuesta correcta
d)  animals.forEach(a=>a)
*/


//! 7.
//? Hemos definido una función flecha:
//? Intentaremos escribirla en una forma ligeramente modificada pero sin cambiar lo que se supone
//? que debe hacer. Señala la definición correcta:
let multiplicar = (m,n)=> m*n

/*
a)  let multiplicar = (m,n) =>{console.log(m*n)}
b)  let multiplicar = (m,n) =>{return(m*n)}
c)  let multiplicar = (m*n) => (m*n)
d)  otro.
*/


//! 8.
//? analiza el siguiente código: ¿qué se mostrará en la consola como resultado de su ejecución?
let x = 10
let y = 20
function test(y){
    console.log(y)
}
test(x)

/*
a)  10
b)  Nada
c)  "Y"
d)  20
*/


//! 9.
//? Analiza el siguiente código: Su ejecución provocará que:
let show = function(){
    console.log("test")
}
setTimeout(show, 2000)

/*
a)  la consola muestra "show" después de un restraso de 2 segundos
b)  la consola muestra "test" 2000 veces
c)  la consola muestra "test" después de una retraso de 2 segundos      //*respuesta correcta
d)  otro.
*/


//! 10.
//? Analiza el siguiente código: ¿Qué se mostrará en la consola como resultado de su ejecución?
let x1 = 10
function  test(x1){
    console.log(x);
}
test(20)

/*
a)  10
b)  "x"
c)  No se mostrará nada
d)  20
*/
