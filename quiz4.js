//! QUIZ DEL MODULO 4

//! 1.
//?La condición if(a==0) se puede reemplazar por:

/*
a) if (!a)   //respuesta correcta
b) if(a<>0)
c) if(a)
d) if (a===0)
 */


//! 2.
//? if(!!a) puede ser reemplazada por:

/*
a) if(a)  //respuesta correcta
b) if(!a)
c) if(a==false)
d) if(a===true)
 */


//! 3.

//? el siguiente codigo puede ser reemplazado por:

let x;
if(counter <100){
   x=10;
} else {
   x=20;
}

/*
a)  let x= counter <100:10?20;
b)  let x =  (counter <100)(10)(20);
c)  let x = if counter < 100 ? 10:20;
d)  let x = counter < 100 ? 10 : 20;   //respuesta correcta
 */

//! 4.

//? El operador condicional es:

/*
a)  Un operador cuaternario.
b)  Un operador binario.
c)  un operador ternario.   //respuesta correcta
d)  un operador unario.
 */

//! 5.

let a = 10;
if(a>100)
    a=20
    console.log(a);

//qué se mostrará en la consola?
/*
a)  100
b)  Nada.
c)  20
d)  10   //respuesta correcta
 */

//! 6.

if(counter>100){
    if(msg==="test"){
        console.log(1);
    }
}

//podemos reemplazarlo usando:

/*
a)  if(counter>0 || msg === "test"){console.log(1);}
b)  if(counter>0 && msg === "test")console.log(1);  //respuesta correcta
c)  if(counter>0 || msg === "test")console.log(1);
d)  if(counter>=0 || msg === "test")console.log(1);
 */

//! 7.

//?Una sentencia condicional IF puede referirse a un bloque de programa que consta de varias sentencias.
//? separamos el bloque de programa usando:

/*
a)  corchetes: [...].
b)  las palabras claves: begin ... end.
c)  los signos <...>.
d)  llaves: {...}.  //respuesta correcta
 */

//! 8.

if(counter>100 || show === true){
    console.log("test");
}

//qué valores pueden tener las variables COUNTER y SHOW para que la consola muestre "test"?

/*
a)  counter:100, show:1
b)  counter:99, show:false
c)  counter:100, show:false
d)  counter:99, show:true //respuesta correcta
 */


//! 9.

if(counter === 100){
    console.log("abc");
}

//cómo podemos escribir la misma condición usando la sentencia SWITCH?

/*
a)  switch (counter){case ?100: console.log("abc")};
b)  case (counter){switch 100: console.log("abc")};
c)  switch (counter){ case 100: console.log("abc"); break;};  //respuesta correcta
d)  switch (counter) case 100: console.log("abc");
 */


//! 10.

//?qué secuencia de sentencias IF... ELSE es incorrecta?

/*
a)  if ... else if ... else...
b)  if ... else if ...
c)  if ... else ... else ... //respuesta correcta
d)  if ... else ...
 */


//! 11.

//? cuál de las siguientes NO es una instrucción de bucle en JavaScript?

/*
a)  do ...  while
b)  switch   //respuesta correcta
c)  for
d)  while
 */


//! 12.

//? cuál de las siguientes instruccines de bucles verifica la condición de 
//? continuación del bucle hasta después de que la iteración haya sigo completada?

/*
a)  for... in
b)  for
c)  do ...  while  //respuesta correcta
d)  while
 */


//! 13.

//?cuál de las siguientes instrucciones de bucles tiene la intención SOLO de recorrer todos los elementos del arreglo indicado?
/*
a)  for
b)  do ... while
c)  for ... in
d)  for ... of  //respuesta correcta
 */


//! 14.

let a1 = 1;
do {
    console.log(a1++);
}
while(a1<3)

// qué sentencia puede reemplazar el do ... while del ejemplo?

/*
a)  while(a1<4) console.log(++a);
b)  while(a1<4) console.log(++a);
c)  while(a1<=3) console.log(a++);
d)  while(a1<3) console.log(a++);  //respuesta correcta
 */


//! 15.

for (let a =1; a<7; a+=2){
    console.log("test");
}

//cuántas veces se mostrará "test" en la consola?
/*
a)  7
b)  3   //respuesta correcta
c)  4
d)  2
 */


//! 16.

let animals = ["dog","cat","hamster","rabbit"];

//cuál de las siguientes sentencias mostrará todos los nombres?

/*
a)  for (let n of animals) console.log(n);   //respuesta correcta
b)  for (let i=1; i<animals.length; i++) console.log(animals[i]);
c)  for (let n in animals) console.log(n);
d)  for (let i=0; i<animals.length; i++) console.log(animals(i));
 */


//! 17.

for (let a11 = 1; a11 < 5; a11++) {
    console.log(a11);
    
}
//qué sentencia puede reemplazar el for?

/*
a)  let a11=1; while(a<5) console.log(++a11)
b)  let a11=0; while(a<4) console.log(a11++)
c)  let a11=0; while(a<5) console.log(a11++)
d)  let a11=1; while(a<5) console.log(a11++)  //respuesta correcta
 */


//! 18.

let a22=1;
while (a<4){
    console.log("test");
    a++;
}

//cuántas veces se mostrará "test" en la consola?

/*
a)  4
b)  1
c)  3       //respuesta correcta
d)  no se mostrará en lo absoluto.
 */


//! 19.

let point = {a: 100, x: 200};
for (let f in point) {
   console.log(f);
}

// qué aparecerá en la consola?

/*
a)  "point"
b)  "x" "y"     //respuesta correcta
c)  100
d)  100 200
 */


//! 20.

let steps= [1,2,3];
for ( let n of steps)
console.log(n);

/*
a)  "[1, 2, 3]"
b)  0 1 2
c)  "steps"
d)  1 2 3       //respuesta correcta
 */


