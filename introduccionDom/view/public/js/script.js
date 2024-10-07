// console.log(document.getElementById("usuario").textContent = prompt('Un nuevo Usuario'))

// SELECTORES
// getElement
// querySelector

// console.log(document.getElementById("usuario"))

// console.log(document.getElementsByClassName("form"))

// console.log(document.getElementsByTagName("form"))

// console.log(document.querySelector("form"))
// console.log(document.querySelectorAll("form"))

//funciones
//funciones declarativas: Se almacenana en el alcance global de la aplicacion

// iniciarSesion() //llamado

// function iniciarSesion() {
//   let usuario = document.getElementById("#usuario");
//   let contraseña = document.getElementById("#contraseña");
//   console.log("Iniciar Sesión")
// }

//Funcion de expresion: Siempre se debe invocar despues de su definicion
// let iniciarSesion = function () {
//   let usuario = document.getElementById("#usuario");
//   let contraseña = document.getElementById("#contraseña");
//   console.log(usuario);
//   console.log(contraseña);
//   console.log("Iniciar Sesión");
// };

// iniciarSesion()

// iniciarSesion() //llamado

// function iniciarSesion() {
//   let usuario = document.getElementById("#usuario");
//   let contraseña = document.getElementById("#contraseña");
//   console.log("Iniciar Sesión")
// }

// value --> para ver el valor de un input
//si no es un 
import {usuarios} from "../../../model/modelUsuarios.js"
function iniciarSesion(){
    let usuario = document.querySelector("#usuario").value
    let contraseña = document.querySelector("#contraseña").value
    if(usuario == 'admin' && contraseña == '12345'){
        console.log('Bienvenido')
    }else{
        console.log('Error de credenciales')
    }

}
console.log(usuarios)