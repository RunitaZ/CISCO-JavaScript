
//! Tarea 2
numeros = [50,10,20,40,30]

let ordenAscendente = numeros.sort((a,b)=>(a-b))
console.log(ordenAscendente);

let ordenDescendente = numeros.sort((a,b)=>(b-a))
console.log(ordenDescendente);


//!Tarea 3
function add(a,b) {
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        return NaN
    }
    return a + b
}

function sub(a,b) {
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        return NaN
    }
    return a - b
}

function mult(a,b) {
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        return NaN
    }
    return a * b
}

console.log(add(2.11,4));  //si cambiamos a un número con decimal, nos sale resultado NaN porque no es entero.
console.log(sub(2,4));
console.log(mult(2,4));




//! Tarea 4
function action(callback, a, b){
    return callback(a,b)
}
//console.log(action(/** hay que poner el nombre de las variables, que entrarán como valor */));
console.log(action(add, 12,10));


//! Tarea 5
let count = 1
let intervalo = setInterval(() => {
    console.log(count);
    if(count === 10){
        clearInterval(intervalo)
    }
    else{
        count++
    }
}, 2000);

//! Tarea 6



//! Tarea 7


//! Tarea 8



//! LABORATORIO DE MODULO 5 PARTE 1/2
['juan','pedro','ismael','carlos','amanda']
function showContact (contacts, index){
    if(Array.isArray(contacts) && contacts.length>index){
        const contact = contacts[index]
        
        console.log(`Nombre: ${contact.nombre}`);
        console.log(`telefono: ${contact.telefono}`);
        console.log(`numero: ${contact.numero}`);
    }
}
const contacts=[
    {
        nombre:'juan',
        telefono: '7777',
        numero:1
    },
    {
        nombre:'pedro',
        telefono: '5555',
        numero:2
    },

]

showContact(contacts,0)


function showAllContacts(contacts){
    if(Array.isArray(contacts)){
        contacts.forEach((contact,index)=>{
            console.log(`Contacto ${index}:`);
            console.log(`Nombre ${contact.nombre}:`);
            console.log(`Teléfono ${contact.telefono}:`);
        })
    }
    else{
        console.log('La lista de contactos está vacía');
    }
}

showAllContacts(contacts)

//podemos crearnos una función para adicionar un nuevo contacto

function addNewContact(contact, nombre, telefono, numero){
    contacts.push({nombre, telefono, numero})
    console.log('Nuevo contacto agregado');
}
addNewContact(contacts,'Maria',111111,2)
contacts.push({nombre:'hola'})