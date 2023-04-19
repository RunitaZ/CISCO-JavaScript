

function obtenerTemperatura(temperaturas){
    if(!(temperaturas instanceof Array)){
        return NaN
    }
    let sum=0
    for (let i = 0; i < temperaturas.length; i++) {
        sum+= temperaturas[i]
    }
    return sum / temperaturas.length

}
console.log(obtenerTemperatura(10))
console.log(obtenerTemperatura([10,30]))