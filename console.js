

//!métodos de objeto de consola
console.log();
document.write()
document.getElementById()

//DOM





console.log('%d %s Evolutech', 10, 'días')
//      10 días Evolutech
//?     %d sustituye un número
//?     %s sustituye con la palabra días


console.log('%c Evolutech', 'color:green')

//?     %c  sustituye colores

console.log('%cEvolutech%c %cLa%c %cPaz','color:green', '','color:red', '','color:yellow')
//agregamos color a cada palabra


console.warn('esto es una mala práctica')
//manda un mensaje de advertencia en la consola.


console.error('este es un mensaje de error')
//manda un mensaje de error en la consola.


console.table(['maría', 'susana', 'estela'])
//genera una tabla para los datos ingresados en la consola.


const usuario={
    nombre:'Carla',
    titulo:'Programadora',
    pais: 'Bolivia',
    edad: 30
}
console.table(usuario)
//mostrar datos en una tabla desde un arreglo directamente en la consola


const paises=[['Bolivia','Sucre'],['Argentina','Buenos Aires'],['Colombia','Bogotá']]
console.table(paises)
//mostrando nido de datos en varios arreglos


const usuarios=[
    {name:'Carlos', job:'Programmer', age: 30},
    {name:'Jhon', job:'Programmer', age: 25},
    {name:'Paola', job:'Programmer', age: 35}
]
console.table(usuarios)
// mostrar datos para tabla en la consola.


//! VERIFICAMOS EL TIEMPO DE EJECUCIÓN DE LOS BUCLES DE LOS FOR existente

const pais=[['Bolivia','Sucre'],['Argentina','Buenos Aires'],['Colombia','Bogotá']]
console.time('loop')
for (let i = 0; i < pais.length; i++) {
    console.log(pais[i][0])
}
console.timeEnd('loop')
//tenemos como resultado el tiempo en que tarda en mostrar nuestros datos



const paiz=[['Bolivia','Sucre'],['Argentina','Buenos Aires'],['Colombia','Bogotá']]
console.time('loop')
for(let [name, city] of paiz){
    console.log(name, city);
}
console.timeEnd('loop')


const paiss=[['Bolivia','Sucre'],['Argentina','Buenos Aires'],['Colombia','Bogotá']]
console.time('loop')
paiss.forEach((name,city)=>{console.log(name,city)})
console.timeEnd('loop')



//
console.info('mensaje 1')

//cuando la afirmaciòn es cierta, no muestra nada
console.assert(4>3, '4 es mas grande que 3')

//cuando la afirmación es falsa, muestra la advertencia de error
console.assert(3>4, '3 es mas grande que 4')

//ejemplo de assert



//console.group     para agrupar datos

const nombres=['Maria', 'Susana', 'Alejandra']
const paisess = [['Bolivia','Sucre'],['Argentina','Buenos Aires'],['Colombia','Bogotá']]
const usuarioz = [
    {name:'Carlos', job:'Programmer', age: 30},
    {name:'Jhon', job:'Programmer', age: 25},
    {name:'Paola', job:'Programmer', age: 35}
]
console.group('Nombres')
console.log(nombres);
console.groupEnd()
console.group('Paises')
console.log(paisess);
console.groupEnd()


//CONTAR EL NÚMERO DE VECES QUE SE LLAMA A UNA FUNCIÓN
const func = ()=>{console.count('La función ha sido llamada')}
func()
func()
func()
func()


//para limpiar los datos
console.clear()



//! PARA PODER TRABAJAR CON JASON
//?diferencia entre un objeto en javascript
//*en javascript en el objeto no se usan comillas como en el json
let obj={
    name:'maria', country:'Bolivia'
}
console.log(obj);

//*convertir un objeto en javascript a JSON, en la consola muestra los datos en comillas
const objAjson = JSON.stringify(obj)
console.log(objAjson);


//?diferencia con un formato .json
const jsonExample=`{
    "usuarios":[
        {"nombre":"Maria",
        "pais":"Bolivia"}
    ]
}`

console.log(jsonExample);
//* el .parse se utiliza para convertir un JSON un objeto o viceversa
const usuarioObjeto=JSON.parse(jsonExample)
console.log(usuarioObjeto);