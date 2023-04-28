//! PRACTICOS DEL MÓDULO 4

//! TAREA 1
//?Escribe un fragmento de código que escriba números del 100 al 0 en la consola, 
//?pero en pasos de 10 en 10; entonces sería 100, 90, 80... etc.

//Con este for, recorremos desde el número 100 hasta el 0
for (let i = 100; i >= 0; i-=10) {
    console.log(i);
}    



//! TAREA 2
//?Modifica el programa anterior para que le pida al usuario el primer y último número 
//?a usar en lugar de 100 y 0 (pista: use el cuadro de diálogo `prompt`). Comprueba si 
//?los valores introducidos son correctos (que el valor inicial sea mayor que el valor final).

//Con este for, recorremos desde el número 100 hasta el 0

let num1 = prompt("Ingrese un número Mayor:", 'ingrese un dato')
let num2 = prompt("Ingrese otro número, ahora menor:", 'Ingrese un dato')

if(num1 > num2){
    for (num1; num1 >= num2; num1-=10) {
        console.log(num1);
    }  
    
}
else{
    console.log("Debería ingresar un número mayor primero, luego un número menor");
}


//! TAREA 3
//?Hay diez números diferentes en este arreglo:
/*
let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];
 */
//?Escribe un programa que primero escriba todos estos números en la consola, luego solo 
//?los que son pares (pista: el residuo de dividir un número par entre 2 es igual a 0), 
//?luego solo los que son mayores que 10 y al mismo tiempo menor que 60.

let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];
console.log("Lista de los números del arreglo:");
for( num of numbers){
    console.log(num);
};

for( num of numbers){
    if(num % 2 === 0){
        console.log(`Número par del arreglo: ${num}`);
    }
};

console.log("Números mayores a 10, y a la vez menores a 60: ");
for(num of numbers){
    if(num > 10 && num < 60){
        console.log(num);
    }
};

//! TAREA 4
//?Escribe un programa utilizando un bucle que le pida al usuario el nombre de una película 
//?(primer cuadro de dialogo) y su calificación de www.imdb.com (segundo cuadro de dialogo). 
//?El programa te permitirá ingresar tantas películas como desees en el arreglo de películas. 
//?Cada elemento del arreglo será un objeto, que constará de dos campos: título e imdb. 
//?La entrada se completa si el usuario presiona Cancelar en el cuadro de diálogo. Luego, 
//?el programa debe imprimir primero en la consola todas las películas que tienen una calificación inferior a 7, 
//?luego aquellas cuya calificación sea mayor o igual a 7. Escribe el nombre de la película 
//? y su calificación uno al lado del otro, por ejemplo:< /p>Perdido en la Selva (7.7)

let peliculas= [];
while(true){
    let titulo = prompt("Ingrese el nombre de una película:", 'ingrese dato')
    let calificacion = prompt("Califique del 1 al 10 la película", 'ingrese dato')
    if(titulo === null || calificacion === null){
        break;
    }
    else {
        peliculas.push({
            titulo : titulo,
            calificacion : Number(calificacion)
        });
    }
}
console.log("Peliculas con calificación menor a 7");
for(peli of peliculas){
    if(peli.calificacion < 7){
        console.log(`${peli.titulo} (${peli.calificacion})`);
    }
}

console.log("Películas con calificación mayor a 7:");
for(peli of peliculas){
    if(peli.calificacion>7){
        console.log(`${peli.titulo} (${peli.calificacion})`);
    }
}

//! TAREA 5
//?El contenido del objeto que describe la posición del barco llamado "Mareno" se muestra en la consola.
/*
LATITUD -> 40.07288
LONGITUD -> 154.48535
CURSO -> 285.6
VELOCIDAD -> 14.0
OMI -> 9175717
NOMBRE -> MARENO
 */
//?El código que se presenta a continuación se usa para esto. Completa el programa declarando el objeto que falta en lugar de los tres puntos.
/* 
let vessel = ...

for( let key in vessel) {
    console.log(`${key} -> ${vessel[key]}`);
}
*/

let vessel = {
    Latitud : 40.07288,
    Longitud : 154.48535,
    Curso : 285.6,
    Velocidad : 14.0,
    OMI : 9175717,
    Nombre : "MARENO"
}

for( let key in vessel) {
    console.log(`${key} -> ${vessel[key]}`);
}


//! TAREA 6
//?Modifica el programa de calculadora que creaste en el Módulo 4, Sección 2, de tal manera que  
//?funcione en el bucle hasta que el usuario ingrese S en cualquiera de los cuadros de dialogo.

while (true) {
    let primerNumero = prompt("Introduce un número");
    let segundoNumero = prompt("Introduce el segundo número");
    let operando = prompt("Introduce el operando (+, -, * o /)");
    let result;

    if (primerNumero === "S" || segundoNumero === "S" || operando === "S") {
        break;
    }

    primerNumero = Number(primerNumero);
    segundoNumero = Number(segundoNumero);

    if (!Number.isNaN(primerNumero) && !Number.isNaN(segundoNumero)) {
        switch (operando) {
            case "+":
                result = primerNumero + segundoNumero;
                break;
            case "-":
                result = primerNumero - segundoNumero;
                break;
            case "*":
                result = primerNumero * segundoNumero;
                break;
            case "/":
                result = primerNumero / segundoNumero;
                break;
            default:
                result = "Error: El operando es desconocido";
        }
    } else {
        result = "Algunos de los valores introducidos no es un número";
    }
    alert(result);
}


//! LABORATORIO DEL MÓDULO 4
/*
## **Objetivos**

Familiarizar al estudiante con:

- Bucles (qué son los bucles, el bucle while, el bucle do-while, el bucle for, el bucle for-of, el bucle for-in,
     las instrucciones break y continue)

## **Escenario**

Podemos mejorar un poco nuestro programa de lista de contactos mediante el uso de bucles. Ahora puedes intentar mostrar no 
solo el primer o último contacto, sino todos los contactos de la lista, independientemente de su número.

Además, intenta encerrar todo el programa en un bucle para que al usuario se le pregunte repetidamente qué quiere hacer.
 El usuario puede optar por:

- Mostrar el primer contacto (primero)
- Mostrar el último contacto (último)
- Mostrar todos los contactos (todos)
- Añadir un nuevo contacto (nuevo)
- Salir del programa (salir)

Después de ejecutar la acción seleccionada, el programa le dará la oportunidad de elegir nuevamente. 
El programa debe finalizar las acciones solo después de que el usuario dé un comando específico, por ejemplo `salir`. */


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
]







while(true){
    let nuevoContacto = 
        {
        nombre : prompt("Ingrese un nuevo nombre", 'ingrese dato'),
        telefono : prompt("ingrese un nuevo teléfono",0),
        correoElectronico : prompt("Ingrese un nuevo Correo Electronico", 'ingrese dato')
        }
        
    contactos.push(nuevoContacto);
    
    if(nuevoContacto.nombre===" " && nuevoContacto.telefono===" " && nuevoContacto.correoElectronico===" ")
        {
            break;
    }
}


let last = contactos.length-1

console.log(`${contactos[0].nombre} / ${contactos[0].telefono} / ${contactos[0].correoElectronico}`);
console.log(`${contactos[last].nombre} / ${contactos[last].telefono} / ${contactos[last].correoElectronico}`);
console.log(contactos.length);
console.log(contactos[0].nombre);
console.log(contactos[1].nombre);
console.log(contactos[2].nombre);
console.log(contactos[3].nombre);


const arr = [ 5, 3, 2, 7, 8, 9];
const last2 = arr[arr.length-1];
console.log(last2);

while (true) {
    let primerNumero = prompt("Introduce un número");
    let segundoNumero = prompt("Introduce el segundo número");
    let operando = prompt("Introduce el operando (+, -, * o /)");
    let result;

    if (primerNumero === "S" || segundoNumero === "S" || operando === "S") {
        break;
    }

    primerNumero = Number(primerNumero);
    segundoNumero = Number(segundoNumero);

    if (!Number.isNaN(primerNumero) && !Number.isNaN(segundoNumero)) {
        switch (operando) {
            case "primer contacto":
                result = primerNumero + segundoNumero;
                break;
            case "ultimo contacto":
                result = primerNumero - segundoNumero;
                break;
            case "todos los contactos":
                result = primerNumero * segundoNumero;
                break;
            case "salir":
                result = primerNumero / segundoNumero;
                break;
            default:
                result = "Error: El operando es desconocido";
        }
    } else {
        result = "Algunos de los valores introducidos no es un número";
    }
    alert(result);
}
