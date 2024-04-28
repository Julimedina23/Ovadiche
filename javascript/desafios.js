"use strict"
// hacer un programa que salude 
/*comsole.log("hola")
document.write("hola")*/

// hacer programa que salude por nombre, si no recibe nombre solo saludar
/* const nombreUsuario = prompt("ingrese su nombre")
console.log(nombreUsuario) */
"use strict"
// Hacer un programa  que pida al usuarui un numero entero y muestre los valores desde uno hasta el mumero ingresado.
const numero = parseInt(prompt('ingrese un numero entero'));
for ( let i = 1; i <= numero; i++) {
    console.log('valor en i: ', i)
    document.write(i)
}