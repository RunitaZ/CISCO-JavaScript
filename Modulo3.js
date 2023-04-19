/***Tarea 1**
***Operadores aritméticos**
Completa los operadores que faltan para obtener el resultado esperado 
(reemplaza el guión bajo con el operador apropiado): */

/*
console.log(2 _ 3 _ 1); // salida 7
console.log(2 _ 4); // salida 16
console.log(5 _ 1); // salida 5
console.log(8 _ 2 _ 5 _ 2); // salida 39
*/

console.log(2 * 3 + 1); // salida 7
console.log(2 ** 4); // salida 16
console.log(5 * 1); // salida 5
console.log(8 ** 2 - 5 ** 2); // salida 39

//pruebas del 4to log
console.log(8**2);
console.log(64-25);


/**Tarea 2**

***Operadores de comparación**

Completa los operadores de comparación que faltan de tal manera que todas las expresiones
 resulten `true` - verdaderas (reemplaza el guión bajo con el operador apropiado): */

 /*
 console.log(4 * 5 _ 20);
console.log(6 * 5 _ "30");
console.log(-17 _ 0);
console.log(25 _ 1);
console.log(2 + 2 * 2 _ 4);
 */

console.log(4 * 5 == 20);
console.log(6 * 5 == "30");
console.log(-17 < 0);
console.log(25 > 1);
console.log(2 + 2 * 2 > 4);


/**Tarea 3**

***Operadores Lógicos**

Completa los operadores de comparación que faltan de tal manera que todas las expresiones 
resulten `true` - verdaderas (reemplaza el guión bajo con el operador apropiado): */

/*
console.log(true _ false);
console.log(false _ false);
console.log(false _ false _ true);
console.log(true _ false _ false && true);
 */

console.log(true || false);
console.log(false ||! false);
console.log(false || false || true);
console.log(true || false && false && true);

// true && (true * false)
console.log(false && true);



//! TAREA 2

/*
**Tarea 1**

Usando todo lo que has aprendido hasta este punto, escribe una secuencia de comandos que le pregunte
 al usuario sobre el ancho, alto y largo de una caja, luego calcula y devuelve al usuario el volumen de esta caja.

Como ejemplo, una caja con `anchura = 20`, `altura = 10` y `longitud = 50` tendrá un volumen de 10000 
(omitiendo unidades, ya que no son relevantes en este escenario). Por ahora, supón que los valores 
proporcionados por el usuario son números válidos, pero si tienes alguna idea sobre cómo hacerlo, 
puedes intentar hacer este script de tal manera que sea resistente a los valores no válidos. */

let anchura = prompt("Creando una caja, ahora ingresa el ancho de la caja:");
let altura = prompt("Creando una caja, ahora ingresa el alto de la caja:");
let longitud = prompt("Creando una caja, ahora ingresa el largo de la caja:");
let volumenCaja = anchura * altura * longitud;
console.log(`Este es el volumen de la caja: ${volumenCaja}`)



//!LABORATORIO
/*
## **Objetivos**

Familiarizar al alumno con:

- La interacción con el usuario (cuadros de diálogo: alerta, confirmación y aviso)

## **Escenario**

Volvamos a nuestra lista de contactos. Después de algunos ajustes recientes (es decir, el emplear un arreglo y objetos),
 en realidad comienza a parecerse a una lista. Sin embargo, quedaba un problema bastante grave. El cambio de datos en 
 la lista, como agregar un nuevo contacto, debe proporcionarse de inmediato en el código del programa. 
 ¿Qué sucede si queremos darle al usuario la posibilidad de ingresar los datos del contacto agregado mientras se ejecuta el programa?
 Modifica el programa para agregar, al final de la lista, no el contacto, que se da en el código, sino el que el usuario dará durante
 la ejecución del programa. Usa el método `prompt` para hacer esto. Al final, muestra el primer y último contacto de la lista. */

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


let nuevoContacto = 
    {
    nombre : prompt("Ingrese un nuevo nombre", 'ingrese dato'),
    telefono : prompt("ingrese un nuevo teléfono",0),
    correoElectronico : prompt("Ingrese un nuevo Correo Electronico", 'ingrese dato')
    }


contactos.push(nuevoContacto)
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