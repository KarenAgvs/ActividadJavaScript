const nombreUsuario= document.querySelector("#txtNombre")
const edadUsuario= document.querySelector("#txtEdad")
const boton= document.querySelector("#botonVotar")
const mensaje= document.querySelector("#Mensaje")

boton.addEventListener('click', ValidarEdad) 

function ValidarEdad (){
    const Edad=parseInt(edadUsuario.value)
    if (Edad >=18) {
        mensaje.textContent=" ${nombreUusario.value} su voto es permitido"
        
    }
    if (Edad <18){
        mensaje.textContent=" ${nombreUusario.value} su voto no es permitido"
    }
    if(Edad <=0)
    mensaje.textContent= "Edad inválida"

}