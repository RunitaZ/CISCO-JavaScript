let n = 5 + 2 ** 2 * 3;
console.log(n);

let x = 3
console.log(x=x*x);


console.log(x*=2);
console.log(x**=2); //Correcto, lleva al resultado 9 porque ** equivale a exponente
console.log(x**=x);
console.log(x +=x);

x= 0 + x
x+=x

let y = 2
y = y*y // hasta aquí sale 4 la multiplicación
y **= 2  // aquí sale 8 porque es 
console.log(y);


let str="1024"
console.log(str=-str);
console.log(typeof str);

let prueba = true * "hola"
console.log( typeof prueba);


let nn=10;
let m = nn++
//!  ++nn  //11 ;  nn++ //11 despues de usar otra vez la variable
console.log(m);
console.log(nn);



for(let i =0; i<=5; i++){
    console.log(i);
}


20 && 5
console.log(20 && 5);  //al ser mayores a 0, es true pero JS toma el ùltimo valor numérico
console.log("hola" && "como estas"); // con este operador, siempre muestra el ùltimo dato

nameIsValid = 'Rut'
console.log(nameIsValid === false);

console.log(Boolean(''));


//ejercicio
let numString = "10"

let a = (numString = 10)  //10
let b = (numString == 10)  //true
let c = (numString === 10)  //true

console.log(a);
console.log(b);
console.log(c);

//a) a=10; b=10
//b) a=10; b=true; c=false
//c) a=10; b=null; c=null
//d) a=10; b=false; c=true
//e) ninguna    // este es la respuesta

"abcd">"dc"
console.log("abcd">"dc");  // a > d? //la respuesta es falso, pero porque en cadenas toma el primer caracter para comparar si es mayor al primer caracter de la segunda cadena



6*2<20-15
//a) true
// b) false
//c) NaN
console.log(6*2<20-15)  //False

//¿qué método mostrará un cuadro de diálogo que me permite como usuario
// escribir cualquier cadena?

//a) prompt   // esta es la respuesta
//b) fill
//c)confirm
//ninguna



// el método confirm nos permite crear un cuadro de diálogo
//qué valor devuelve este método cuando el usuario cierra la ventana?

//a) siempre devuelve false
//b) la cadena ingresada por el usuario
//c) devuelve true
//d) depende de la opción seleccionada por el usuario  //este es la respuesta

let choice = confirm('¿estas listo?') ?"true":"false";
console.log(choice);
console.log(typeof choice)
//respuesta: "true"

