
//1
let n = 5 + 2 ** 2 * 3;
console.log(n);
// 17


//2
/*el número 3 se almacena en la variable x: (let x = 3). Se llamó al comando x=x*x. 
este ultimo comando se puede reemplazar usando: */
let x= 3
x=x*x
console.log(x);
//respuesta x**=2
//da como una x exponente a 2 = 9


//3
let str="1024"
console.log(str=-str);
//-1024


//4.
let nu = 10;
let m = nu++;
console.log(nu);
console.log(m);

//nu: 11    m: 10



//5.
console.log(true && false || true)
//true


//6.
console.log(20 && 5);
//5


//7.
console.log(true && "false");
//false


//8.
let str1 ="10";
let a = (str1=10);
let b = (str1 == 10);
let c = (str1 === 10);

console.log(a);
console.log(b);
console.log(c);

// a:10     b:true      c:false


//9.
//que operador usamos para verificar que dos variables tienen datos diferentes?
//  !==

//10.
console.log("abcd">"dc");
//False



//11.
console.log(6*2<20-15);

//false



//12.
//método para mostrar cuadro de diálogo que permite al usuario agregar cualquier cadena
// prompt


//13.
/*el método confirm te permite crear un cuadro de diálogo. ¿qué valor devuelve
este método cuando el usuario cierra la ventana? */
//depende de la opción seleccionada por el usuario



//14.
let choice = confirm("¿estas listo?") ? "true" : "false";
console.log(choice);

//"true"