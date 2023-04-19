//! ********TEST DE JAVASCRIPT


//1.
//?La condición if (a==0) puede ser reemplazada por la condición:
/*
a)   if(a<>0)
b)   if(a===0)  // respuesta incorrecta
c)   if(!a)        //esta era la correcta
d)   if(a)
*/

console.log(a==0);


//2.
//?Queremos reescribir el siguiente fragmento de código usando el operador condicional

let x;
if(counter <100){
   x=10;
} else {
   x=20;
}
console.log(counter);

/*
a)  let x= counter < 100 ? 10: 20;    //Respuesta correcta
b)  let x= if counter < 100 ? 10 : 20;
c)  let x = (counter < 100 )(10)(20)
d)  let x = counter < 100 : 10 ? 20;
 */



//3.
//?El operador condicional es :

/*
a)  Un operador unario
b)  Un operador binario
c)  Un operador ternario   //respuesta correcta
d)  Un operador cuaternario
 */



//4.
//?revisa el siguiente código:
let a1 = 10;
if (a1>100)
    a1 = 20;
console.log(a1)

/*
a)  10
b)  Nada
c)  100
d)  20
 */
// respuesta es: 10



//5.-
//?Una sentencia condicional if puede referirse a un bloque de programa 
//?que consta de varias sentencias . Separamos el bloque de programa usando:

/*
a)  llaves :{...}   //respuesta correcta
b)  corchetes : [...]
c)  Los signos : <...>
d)  20              //respuesta por equivocación
 */


//6.-
//?Analiza el siguiente código :
if (counter === 100){
    console.log("abc")
}

/*
a)  case (counter){ switch 100: console.log("abc")}
b)  switch (counter) case 100: console.log("abc")
c)  switch(counter){ case 100 : console.log("abc"); break;}   //respuesta correcta
 */


//7.-
//?¿Qué secuencia de sentencias if ... else es incorrecta?

/*
a)  if ... else if ...
b)  if ... else ....
c)  if ... else ... else   //respuesta correcta
d)  if .... else if ... else
 */


//8.-
//?¿Cuál de las siguientes no es una instrucción de bucle en JavaScript?

/*
a)  do ... while
b)  for
c)  switch
d)  while
 */

//9.-
//?¿Cuál de las siguientes instrucciones de bucles tiene la intención 
//?solo de recorrer todos los elementos del arreglo indicado?

/*
a)  Opción 1
b)  do ... while
c)  for ... in
d)  for ... of    //respuesta correcta
 */


//10.-
//?¿Cuál de las siguientes instrucciones de bucles verifica la condición de 
//?continuación del bucle hasta después de que la iteración haya sido completada?

/*
a)  for .. in
b)  for
c)  do .. while    //respuesta correcta
d)  while
 */


let a=0
if(a===0){
    

}


let x1= counter < 100 ? 10: 20;

console.log(x1);






switch(counter){ case 100 : console.log("abc"); break;}


var oldCar = {
    make: 'Audi',
    model: 'A4',
    year: '2010'
};

for (let key in oldCar) {
    console.log(key + ' - ' + oldCar[key]);
}

let animals = ['sheep', 'pig', 'rabbit'];

for (let animal of animals) {
    console.log(animal);
}


//pregunta revisa el siguiente código
if(counter > 100){
    if(msg==="test"){
        console.log(1)
    }
}

//respuesta: counter >100 && msg =="test"


//otra pregunta
if(counter>100 || show === true){
    console.log("test");
}

// qué valores pueden tener la variables counter y shor para que la consola muestre "test"
// y como resultado de la ejecución del cógio
/* a)     counter: 99, show:true
 b)     counter: 100, show:true
 c)     counter: 99, show: 1
 */


 //
 let a11 = 1
 do{
    console.log(a++);
 }
while (a11<3)


/*
a)  
b)  
c)  
d)  
 */

