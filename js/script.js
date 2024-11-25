const togglebutton = document.querySelector("#togglebutton1")
const togglebutton2 = document.querySelector("#togglebutton")
const modal = document.querySelector("#Modal");
const close = document.querySelector(`#cerrar`)
const email = document.querySelector(`#contactForm`)
const emailInput = document.querySelector(`#correo`)
const p = document.querySelector(".espacio")
const error = document.querySelector(".error_message")
togglebutton.addEventListener("click", togglebutton1)
togglebutton2.addEventListener("click", togglebutton)
close.addEventListener("click", togglebutton1)

function togglebutton1() {
    let formdata = new FormData(email)
    let correo = formdata.get("correo")
    let arraycorreo = correo.split("@")
    console.log(correo)

    if (correo.includes("@") && arraycorreo.length <= 2 && arraycorreo[1].includes(".")) {
        modal.classList.toggle(`hidden`)
        espacio(correo)
        console.log(modal);
    }

}
function espacio(correo) {
    let espacio = ""
    espacio = "A confirmation email has been sent to <strong>" + correo + "</strong>. Please open it and click the button inside to confirm your subscription."
    p.innerHTML = espacio
}