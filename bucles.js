//? ESTRUCTURA DEL BUCLE FOR
/*  for (inicialización, condición, incremento o decremento)  
{
    //aquí viene el código
}
*/
//! Bucle de incremento

for ( let i = 1; i<=5; i++)
{
    console.log(i)
}

//! Bucle de decremento

for ( let i = 5; i>=1; i--)
{
    console.log(i)
}

//! Bucle de tabla de multiplicar

for ( let i = 1; i<=5; i++)
{
    console.log(`${i} * ${i} = ${i*i}`);
}


//! Bucle multiplicación de la tabla del 8

let i
let j=8
for(i=1;i<=10;i++)
{
    console.log(`${i} * ${j} = ${i*j}`);
}

//! Convertir palabras en mayúscula de un array
let paises = ['Bolivia', 'Paraguay', 'Argentina', 'Brasil', 'Perú']




//! Sumas de números con bucle FOR

const numeros = [1,2,3,4,5] //sumaremos todo el array hasta obtener = 15
let suma = 0 

/*


*/

for (let i =0; i<numeros.length; i++)
{
    suma = suma + numeros[i]
}
console.log(suma);


//! nuevo array para multiplicar los datos del array number

//* Nota: Al crear arrays siempre crearemos las variables en plural porque almacena dos o mas datos
const numbers = [1,2,3,4,5] //sumaremos todo el array hasta obtener = 15
let newArray = []

/*


*/

for (let i =0; i<numbers.length; i++)
{
    newArray.push(numbers[i] ** 2) //Aquí multiplica cada número de number con exponente 2
}
console.log(newArray);

// Este es el resultado [ 1, 4, 9, 16, 25 ]

//! Otro tipo de uso del FOR

for (const elemento of array) 
{
    // Aquí viene el código;
    
}

const numeros2 = [1,2,3,4,5]

for(const nume of numeros2)
{
    console.log(nume+nume);
}

for (const num /*es un apodo de numeros2*/of numeros2)
{
    console.log(num*num);
}

//? ESTRUCTURA DE BUCLE WHILE || MIENTRAS



//! do While
let ii=0
do{
    console.log(ii);
    ii++
}
while(ii<=5)