
//detector de errores

//*este es la estructura para usar el try and catch
try{

}
catch(err){
//*recive el objeto e imprimir el cuerpo del objeto del error, muestra mensajes de error
}
finally{

}



//*
try{
    let lastName='Zotar'
    let fullName=firstName+ '' + lastName
}
catch(error){
console.log('Nombre del error: ', error.name);
console.log('error mensaje: ', error.message);

}
finally{
    console.log('en cualquier caso vamos a ejecutar');
}

//! INSTRUCCIÒN ---        throw        ---
throw 'error2'

const throwError =()=>{
    let message
    let x = prompt('Introduce un número: ')
    try{
        if(x=='') throw 'vacío'
        if(isNaN(x)) throw 'no es un número'
        x= Number(x)
        if(x<5) throw 'es muy pequeño el número'
        if(x>10) throw 'es muy grande el número'
    }
    catch(error){
        console.log(error);
    }
}
throwError();