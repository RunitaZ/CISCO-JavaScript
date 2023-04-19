
// Creacion de arrays vacios
const arrayprueba= Array()
console.log()
const arr1=[]
const arr= [
    'maria', // string
    250, // number
    {nombre:'Maria'}, //object
    {skills:['Html','CSS','JavaScript']} //object
]
console.log(arr)
const array1= [
    'maria', // string
    250, // number
    {nombre:'Maria'}, //object
    {skills:['Html','CSS','JavaScript']} //object
]
console.log(array1)
//! Split
let js='JavaScript' //string
const charsInJavaScript=js.split('')
console.log(charsInJavaScript)
const empresas='Facebook,Google,Microsoft,Apple,IBM,Amazon,Oracle' //string
const empresas1='Facebook Google Microsoft Apple IBM Amazon Oracle' //string
const compañias=empresas.split(',')
const compañias1=empresas1.split(' ')
console.log(compañias);
console.log(compañias1);
const frutas=['🍌','🍊','🥝','🍋','🥩','🍠']
let primeraFruta=frutas[0]
console.log(primeraFruta);
let segundaFruta=frutas[1]
console.log(segundaFruta);

let frutasLength1=frutas.length-1
console.log(frutas[frutasLength1])


const arr12= Array(8)
console.log(arr12);
const ochoValores=Array(8).fill('🍟')
console.log(ochoValores)

//!concat
const primerLista=[1,2,3]
const segundaLista=[4,5,6]
const terceraLista=primerLista.concat(segundaLista)
console.log(terceraLista)
//! indexOf
const fruits=['🍌','🍊','🥝','🍋','🥝']
console.log(fruits.indexOf('🥝'))
//!lastIndexOf
const foods=['🍕','🍔','🍟','🍔']
console.log(foods.lastIndexOf('🍔'));
const mezcla = fruits.concat(foods)
console.log(mezcla);
//! includes
const numbers=[1,2,3,4,5]
console.log(numbers.includes(0));
//!Array.isArray
const numbers1=[1,2,3,4,5]
console.log(Array.isArray(numbers1));
const number2=100
console.log(Array.isArray(number2));
//!instanceof
let days=['Domingo','Lunes','Martes','Miercoles','Jueves']
console.log(typeof days)
console.log(days instanceof Array)

//!toString
const numbers3=['maria','juana','osmar','oscar','alfredo']
console.log(numbers3.toString())
//! join
const names=['maria','juana','osmar','oscar','alfredo']
console.log(names.join());
console.log(names.join(''));
console.log(names.join(' '));
console.log(names.join(', '));
console.log(names.join('# '));
const arrItems=['item1','item2','item3','item4']
//! push 
arrItems.push('new Item')
console.log(arrItems)
//! pop
arrItems.pop()
console.log(arrItems)
//!shift
arrItems.shift()
console.log(arrItems)
//!unshift
arrItems.unshift('item0')
console.log(arrItems)


//! Ordenar elementos en el array
const webTecnologias=[
    'Z',
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
webTecnologias.sort()
console.log('sort ',webTecnologias);
webTecnologias.reverse()
console.log('reverse ',webTecnologias);
//! arays de arrays
const firstNums=[1,2,3]
const secondNums=[1,4,9]
const arraysOfArray=[['👀','😥','🤓'],[1,2,3]]
console.log(arraysOfArray[1][2]);
//? Datos Complejos o compuestos son aquellos que pueden contener multiples 
//? valores o datos
//* let miArray=['manzana'...]
let miObjeto={
    nombre:'Maria',
    pais:'Bolivia'
}
console.log(miObjeto);

function sumar(a,b) {
    return a+b
}
console.log(sumar(2,3));

/*ksksksksk

sdasdasd
asdasds


adasdasd

*/
const comments=['maria',/*250,jjjjjjj*/{pais:'Bolivia'}]
console.log(comments);