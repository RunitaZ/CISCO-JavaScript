// ! MODULO 2  TAREA 1

//? *****DATOS DE LA FLORISTERÍA*****

// ROSAS:
let rosaPrecioUnit = 8
let rosaCantidad = 70


// lIRIOS:
let lirioPrecioUnit = 10
let lirioCantidad = 50


// TULIPANES:
let tulipanPrecioUnit = 2
let tulipanCantidad = 120


// Realizamos una multiplicación de las variables de precio unitario 
// por cantidad de cada flor, para obtener el precio total de la venta:
let rosaPrecioTotal = rosaPrecioUnit * rosaCantidad
let lirioPrecioTotal = lirioPrecioUnit * lirioCantidad
let tulipanPrecioTotal = tulipanPrecioUnit * tulipanCantidad


// Una vez obtenido el Valor total de la multiplicación por flor, toca sumar
// el precio total de cada flor para obtener un solo valor total de la venta.
let totalVenta = rosaPrecioTotal + lirioPrecioTotal + tulipanPrecioTotal


// Ahora solo nos toca mostrar los resultados en la consola: para concatenar los datos, puede usarse el signo "+" o la ","

console.log("ROSA = Precio Unitario: "+ rosaPrecioUnit + ", Cantidad: "+ rosaCantidad+ ", Precio Total: "+ rosaPrecioTotal)

console.log("LIRIO = Precio Unitario:", lirioPrecioUnit, ", Cantidad:", lirioCantidad, ", Precio Total:", lirioPrecioTotal)

console.log("TULIPÁN = Precio Unitario:", tulipanPrecioUnit, ", Cantidad:", tulipanCantidad, ", Precio Total:", tulipanPrecioTotal)

console.log("Valor Total Flores:", totalVenta)



// ! MODULO 2  TAREA 2

// Restamos las cantidades de las rosas y los lirios:
rosaCantidad = rosaCantidad - 20
lirioCantidad = lirioCantidad - 30

// Volvemos a realizar la multiplicación con los nuevos datos actualizados de las rosas y los lirios:
rosaPrecioTotal = rosaPrecioUnit * rosaCantidad
lirioPrecioTotal = lirioPrecioUnit * lirioCantidad
tulipanPrecioTotal = tulipanPrecioUnit * tulipanCantidad

// Una vez obtenido el Valor total de la multiplicación por flor, toca sumar
// el precio total de cada flor para obtener un solo valor total de la venta.
totalVenta = rosaPrecioTotal + lirioPrecioTotal + tulipanPrecioTotal


// Ahora solo nos toca mostrar los resultados en la consola: para concatenar los datos, puede usarse el signo "+" o la ","
console.log(" ")
console.log("ROSA = Precio Unitario: "+ rosaPrecioUnit + ", Cantidad: "+ rosaCantidad+ ", Precio Total: "+ rosaPrecioTotal)

console.log("LIRIO = Precio Unitario:", lirioPrecioUnit, ", Cantidad:", lirioCantidad, ", Precio Total:", lirioPrecioTotal)

console.log("TULIPÁN = Precio Unitario:", tulipanPrecioUnit, ", Cantidad:", tulipanCantidad, ", Precio Total:", tulipanPrecioTotal)

console.log("Valor Total Flores:", totalVenta)


/*Escribe un fragmento de código que creará variables y las inicializará con valores Boolean, Number, BigInt, String y tipos 
undefined utilizando (siempre que sea posible) literales y funciones constructoras.*/

//Boolean
let estaSoltera = false;
let noEstasoltera = Boolean (true);

//Number
let pruebaNumber = 15;
let pruebaNumero = Number(13);

//BigInt
let numeroGrande = 155n;
let numeroGrand = BigInt(120e7);

//String
let Nombre = "Rut";
let nombreApe = String("Rut Z.");

//Undefined
let Indefinido = undefined;


/** Imprime todos los valores y todos los tipos de esos valores usando console.log. 
 * Intenta usar la interpolación de cadenas para  mostrar el valor y el tipo al mismo tiempo con 
 * una sola llamada a console.log, por ejemplo, en el siguiente formato: 1000 [número]. */

console.log(`${estaSoltera} [${typeof estaSoltera}]`);
console.log(`${noEstasoltera} [${typeof noEstasoltera}]`);
console.log(`${pruebaNumber} [${typeof pruebaNumber}]`);
console.log(`${pruebaNumero} [${typeof pruebaNumero}]`);
console.log(`${numeroGrande} [${typeof numeroGrande}]`);
console.log(`${numeroGrand} [${typeof numeroGrand}]`);
console.log(`${Nombre} [${typeof Nombre}]`);
console.log(`${nombreApe} [${typeof nombreApe}]`);
console.log(`${Indefinido} [${typeof Indefinido}]`);


/**Realiza una cadena de conversiones: crea un Boolean a partir de un BigInt creado a partir 
 * de un Number que se creó a partir de un String. Comienza con el valor "1234". ¿Es posible? */


/**
 * let b = Boolean( BigInt(Number("1234")));
console.log(`${b} [${typeof b}]`);

// or

let s = "1234";
let n = Number(s);
let bi = BigInt(n);
let b = Boolean(bi);
console.log(`${b} [${typeof b}]`);
 */

let esBooleano = Boolean(BigInt(Number("1234")));
console.log(`${esBooleano} [${typeof esBooleano}]`);


let string = "12334";
let numero = Number(string);
let bigInt = BigInt(numero);
let esBoolean = Boolean(bigInt);

console.log(`${esBoolean} [${typeof esBoolean}]`);

/** Intenta agregar dos valores del mismo tipo y verifica el tipo de resultado. 
 * Pruébalo para todos los tipos de datos primitivos.*/

let Booleano = false + false;
let Numero = 15 + 20;
let numGrande = 14n + 15n;
let cadena = "prueba, " + "otra prueba";
let indefi = undefined + undefined;

console.log(Booleano);
console.log(`${Booleano} [${typeof Booleano}]`);  //tipo de dato: número

console.log(Numero);
console.log(`${Numero} [${typeof Numero}]`);

console.log(numGrande);
console.log(`${numGrande} [${typeof numGrande}]`);

console.log(cadena);
console.log(`${cadena} [${typeof cadena}]`);

console.log(indefi);
console.log(`${indefi} [${typeof indefi}]`)  //tipo de dato: número


/**Intenta sumar dos valores de diferentes tipos y verifica los resultados. */

//!   Boolean
let boo1 = false + " hola";
let boo2 = false + 5;
//? let boo3 = true + 14n       Error

console.log(`${boo1} [${typeof boo1}]`);
console.log(`${boo2} [${typeof boo2}]`);


//!   String
let stri1 = "Cómo estás? " + 100;
let stri2 = "hola? " + true;
let stri3 = "20 " + 10n;

console.log(`${stri1} [${typeof stri1}]`);
console.log(`${stri2} [${typeof stri2}]`);
console.log(`${stri3} [${typeof stri3}]`);


//!   Number
let num1 = 15 + false;
let num2 = 120 + " 50";
//? let num3 = 20 + 20n;        Error

console.log(`${num1} [${typeof num1}]`);
console.log(`${num2} [${typeof num2}]`);


//!   BigInt
let bI1 = 30n + " Quién eres?";
//? let bI2 = 199n + true;      Error
//? let bI3 = 300n + 10;        Error

console.log(`${bI1} [${typeof bI1}]`);


/**Intenta modificar la línea const str1 = 42 + "1"; para obtener el resultado 43 
 * (sin eliminar las comillas alrededor del 1) */

const string1 = 42 + + "1";
console.log(string1);



/*## **Objetos**

Crea un objeto que describa un boleto de tren y guárdalo en la variable ticket. El objeto debe tener tres campos:

- estación inicial (el nombre clave es 'from', y como valor, proporciona el nombre de la estación más cercana en tu área)
- estación final (el nombre clave es 'to', y como valor, dar cualquier otra estación dentro de 100 km)
- el precio del boleto (el nombre clave es 'price', y como valor, proporciona la cantidad que te gustaría pagar por este boleto)

El objeto debe crearse usando llaves {}, en los que todos los campos se enumerarán inmediatamente. muestra los valores de los campos del ticket en la consola.

Declara un objeto vacío y guárdalo en la variable person. Usando la notación de punto, agrega los campos `firstName` y `lastName` 
al objeto ingresando tus datos como valores. Intenta mostrar los campos individuales en la consola. */

let Ticket = {
    from: "Santa Cruz de la Sierra",
    to: "Cotoca",
    price: 15 + " Bs"
};
console.log(`Ticket de: ${Ticket.from}`);
console.log(`a: ${Ticket.to}`);
console.log(`Precio del Ticket : ${Ticket.price}`);

let Persona = {};
Persona.firstName = "Rut";
Persona.lastName = "Zotar";
console.log(`Pasajero/a: ${Persona.firstName} ${Persona.lastName}`);





/*## **Arreglos** TAREA 5

Estamos creando una pequeña biblioteca de libros sobre programación en JavaScript. Tenemos tres libros y queremos preparar una lista de ellos. 
Almacenaremos tres datos de cada libro: el título, el autor y el número de páginas:

//? Creamos un array para almacenar los primeros 3 libros de la librería
let Libros = [
    {
        titulo: "Speaking JavaScript",
        autor: "Axel Rauschmayer",
        paginas: 460
    },
    {
        titulo: "Programming JavaScript Applications",
        autor: "Eric Elliott",
        paginas: 254
    },
    {
        titulo: "Understanding ECMAScript 6",
        autor: "Nicholas C. Zakas",
        paginas: 352
    }
];


//? Creamos nuevo arreglo para agregar un nuevo libro.
let nuevoLibro = 
    {
        titulo: "Learning JavaScript Design Patterns",
        autor: "Addy Osmani",
        paginas: 254
    };

//? Agregamos un nuevo libro al arreglo Libros con el método __push__
Libros.push(nuevoLibro);

console.log("***Longitud del arreglo Libros: ");
console.log(Libros.length);
console.log("***Lista de los libros disponibles en la librería:");
console.log(Libros[0].titulo);
console.log(Libros[1].titulo);
console.log(Libros[2].titulo);
console.log(Libros[3].titulo);

//? Copiamos los dos últimos libros a un nuevo arreglo con el método __slice__

let seleccionarLibros = Libros.slice(-2);
console.log("***Libros copiados en un nuevo arreglo:");
console.log(seleccionarLibros);

//? Eliminamos el primer libro del arreglo con el método __shift__

let eliminarLibro = Libros.shift();

// Mostramos la longitud del arreglo despues de eliminar con SHIFT.
console.log("***Nueva Longitud del arreglo Libros:");
console.log(Libros.length);

//Mostramos el libro eliminado.
console.log("***Primer libro perdido, por lo tanto se elimina de la lista:");
console.log(eliminarLibro);

//para despues mostrar los libros que quedan en el arreglo.
console.log("***Lista de libros actual:");
console.log(Libros[0].titulo);
console.log(Libros[1].titulo);
console.log(Libros[2].titulo);


//? Suma de todos los libros de la colección de la librería:

let sumaPaginas = Libros[0].paginas + Libros[1].paginas + Libros[2].paginas

console.log(`***La cantidad de páginas totales de todos los libros disponibles son: ${sumaPaginas}`);
*/




/*## **Arreglos** TAREA 6

Estamos creando una pequeña biblioteca de libros sobre programación en JavaScript. Tenemos tres libros y queremos preparar una lista de ellos. 
Almacenaremos tres datos de cada libro: el título, el autor y el número de páginas:

1. *Speaking JavaScript*, Axel Rauschmayer, 460.
2. *Programming JavaScript Applications*, Eric Elliott, 254.
3. *Understanding ECMAScript 6*, Nicholas C. Zakas, 352.
- Crea un arreglo de tres objetos que representen los libros. Cada objeto debe tener las siguientes propiedades: título, autor, páginas.
- Hemos agregado un nuevo libro a nuestra colección: Learning JavaScript Design Patterns, por Addy Osmani, 254 páginas. 
Usa el método apropiado para adjuntar el libro al final del arreglo. Muestra la longitud del arreglo y, a su vez, todos los nombres de los libros en la colección.
- Utiliza el comando slice para copiar los dos últimos libros al nuevo arreglo.
- El primer libro de la colección se pierde en circunstancias inexplicables. Ya has aceptado la pérdida, así que ahora elimínalo del arreglo. 
¿Cuál método usarás para este propósito? Muestra la longitud del arreglo y todos los nombres de los libros de la colección a su vez.
- Muestra la suma de las páginas de todos los libros de la colección.*/

let Libros = [
    {
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        pages: 460
    },
    {
        title: "Programming JavaScript Applications",
        author: "Eric Elliott",
        pages: 254
    },
    {
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        pages: 352
    }
];

let nuevoLibro = 
    {
        title: "Learning JavaScript Design Patterns",
        author: "Addy Osmani",
        pages: 254
    };

//? Agregamos un nuevo libro de otro arreglo al arreglo Libros con el método __push__
Libros.push(nuevoLibro);

console.log("***Longitud del arreglo Libros: ");
console.log(Libros.length);
console.log("***Lista de los libros disponibles en la librería:");
console.log(Libros[0].title);
console.log(Libros[1].title);
console.log(Libros[2].title);
console.log(Libros[3].title);

//? Copiamos los dos últimos libros a un nuevo arreglo con el método __slice__

let seleccionarLibros = Libros.slice(-2);
console.log("***Libros copiados en un nuevo arreglo:");
console.log(seleccionarLibros);

//? Eliminamos el primer libro del arreglo con el método __shift__

let eliminarLibro = Libros.shift();
console.log("***Nueva Longitud del arreglo Libros:");
console.log(Libros.length);
console.log("***Primer libro perdido, por lo tanto se elimina de la lista:");
console.log(eliminarLibro);
console.log("***Lista de libros actual:");
console.log(Libros[0].title);
console.log(Libros[1].title);
console.log(Libros[2].title);


//? Suma de todos los libros de la colección de la librería:

let sumaPaginas = Libros[0].pages + Libros[1].pages + Libros[2].pages

console.log(`***La cantidad de páginas totales de todos los libros disponibles son: ${sumaPaginas}`);


//? TAREA 7
//? Existe un código que actualmente no funciona. Intenta arreglarlo usando solo comentarios. 
//? Intenta, si es posible, usar los atajos de teclado en tu editor para este propósito.

"use strict";

const prefix = "username_";

let userName = "Jack";

//Comentamos lo siguiente porque la variable userName no podría cambiar si es una  constante:

//const userName = "Adam";

let prefixedUserName;

//Igual que arriba, comentamos porque una constante no cambiaría sus datos si queremos modificar datos:

//const prefixedUserName;

userName = "John";
prefixedUserName = prefix + userName;

//Aquí comentamos el prefixedUserName2 porque no ha sido creada la variable y tampoco inicializado con algún dato:
console.log(prefixedUserName /*+ prefixedUserName2*/);

//Y aquí comentamos toda la línea de código porque el prefixedUserName2 no es válido. Igual que arriba.
//console.log(prefixedUserName2);




//! LABORATORIO MODULO 2 SECCIÓN 2
/*## **Escenario**

Nuestra tarea será crear una lista de contactos. Inicialmente, la lista será bastante simple: solo escribiremos tres personas 
utilizando los datos que se muestran en la tabla a continuación. En el resto del curso, volverá a este script y 
lo ampliará sistemáticamente con nuevas funciones, utilizando los elementos de JavaScript recién aprendidos.

| Nombre | Teléfono | Correo |
| --- | --- | --- |
| Maxwell Wright | (0191) 719 6495 | Curabitur.egestas.nunc@nonummyac.co.uk |
| Raja Villarreal | 0866 398 2895 | posuere.vulputate@sed.com |
| Helen Richards | 0800 1111 | libero@convallis.edu |

Declara e inicializa las variables donde almacenarás toda la información (nueve variables en total). 
Muestra en la consola información sobre el primer y último contacto en el formulario: nombre/teléfono/correo. */


let contactos = [
    {
        nombre : "Maxwell Wright",
        telefono : "(0191) 719 6495",
        correoElectronico : "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
        nombre : "Raja Villarreal",
        telefono : "0866 398 2895",
        correoElectronico : "posuere.vulputate@sed.com"
    },
    {
        nombre : "Helen Richards",
        telefono : "0800 1111",
        correoElectronico : "libero@convallis.edu"
    }
];

console.log('***Longitud del arreglo:', contactos.length);
console.log('Primer contacto',contactos[0])
console.log('Último contacto',contactos[2])
console.log('Ultimo contacto',contactos[contactos.length -1])