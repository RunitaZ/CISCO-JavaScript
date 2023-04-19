let num = prompt('Ingrese un número')

for(let i =1; i<=10; i++)
{
    let x=i * num
    console.log(`${i} x ${num} = ${x}`);
}

function calculadora(a, b)
{
    let suma = a + b
    let resta = a - b
    
    console.log({suma, resta});
}
calculadora(2,4)

function name(params) {
    console.log(); // con los datos que queremos ver
    return 2 //
}
name()