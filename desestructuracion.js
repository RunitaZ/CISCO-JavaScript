//!Desestructuración
//se desempaqueta los datos de un arreglo de una forma mas sencilla de usar

//forma antigua de uso de datos de un arreglo:
const names = ['martha', 'juana', 'cecilia']
names[2] = 'maria'

const numeros = [1, 2, 3]
//para desempaquetar hacemos uso de una variable entre corchetes así:
const [a, b, c] = numeros

//y podré tener los elementos de la variable números, independientes:
console.log(a);
console.log(b);
console.log(c);


const person = {name:'juan', age:30}
const {name, age} = person
console.log(name);
console.log(age);


//!Propagación
//es una caracteristica que permite desempacar elementos como argumentos:

//?arreglos
const a1 = [1,2,3]
const b1 = [4,5,6]
const c1 = [...a1,...b1]
console.log(c1);


//?objetos
const persona = {name:'juan', age: 30}
const details = {country: 'Bolivia', occupation:'desarrollador'}
const profile = {...persona,...details}
console.log(profile);


function printPerson (person1){
    const name = person1.name
    const age = person1.age || 30 /* este or, nos dice que si age no tiene dato, por defecto irá el 30*/
    const city = person1.city || 'La Paz'
    console.log(`Nombre: ${name}, Edad: ${age}, Ciudad : ${city}`);
}
const person1 = {name:'juan', age: 25}
printPerson(person1)

//?--Ejercicio 2 Despues de usar propagación
function printPerson({name,age =30, city = 'La Paz'}/*El valor despues del igual es el por defecto*/){
    console.log(`Nombre: ${name}, Edad: ${age}, Ciudad: ${city}`)
}
const person2 = {name:'Juan'}
printPerson({...person2})

//?Ejercicio 2 ---antes
const person3 = {name:'Jose', age: 21}
const name = person3.name
const age = person3.age
console.log(`Nombre: ${name}, Edad: ${age}`);

//?Despues de usar desestructuración
const person4 = {name:'Paola', age:28}
const {name, age} =person4
console.log(`Nombre: ${name}, Edad: ${age}`);


//? Ejercicio 3 ---antes
const a2 = [1,2,3]
const b2 = [4,5,6]
const c2 = []
for (let i = 0; i < a2.length; i++) {
    c2.push(a2[i]);    
}
for (let i = 0; i < b2.length; i++) {
    c2.push(b2[i]);    
}
console.log(c2);

//? Despues de la propagación
const a3 = [1,2,3]
const b3 = [4,5,6]
const c3 = [...a3,...b3]
console.log(c3);


