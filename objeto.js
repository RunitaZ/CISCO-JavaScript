
const persona={
    nombre:"maria",
    apellido:"Ramos",
    pais:"Bolivia",
    hobbies:["leer","programar","diseñar"],
    estaCasada:false,
    obtenerNombreCompleto: function(numero){
        return `${this.nombre} ${this.apellido} ${numero}`
    }
}
console.log(persona.nombre)
console.log(persona.pais);
console.log(persona.obtenerNombreCompleto(2));



//! Objetc.assign

//*copiando el objeto persona con el .assign

const copiaPersona=Object.assign({},persona)
console.log(copiaPersona);
const keys = Object.keys(copiaPersona)

console.log(keys);
const direccion=Object.keys(copiaPersona.direccion)
console.log(direccion);

//!ObjectValues

const values = Object.values(copiaPersona)
console.log(values);

//objetc.entries
const entries = Object.entries(copiaPersona)
console.log(entries);

// [][] matrices
// [] vectores