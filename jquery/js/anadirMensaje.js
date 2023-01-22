if (document.addEventListener)
    window.addEventListener("load", cargar)
else if (document.attachEvent)
    window.attachEvent("onload", cargar);

function cargar() {

    let boton_anadir_sms = document.getElementById("boton_mensaje");
    let boton_aceptar_sms = document.getElementById("crearMensaje");
    let boton_cancelar_sms = document.getElementById("cancelarMensaje");

    if (document.addEventListener) {
        boton_anadir_sms.addEventListener("click", crearDialogSms)
        boton_aceptar_sms.addEventListener("click", anadirMensaje)
        boton_cancelar_sms.addEventListener("click", cerrarDialogMensaje);
    } else if (document.attachEvent) {
        boton_anadir_sms.attachEvent("onclick", crearDialogSms);
        boton_aceptar_sms.attachEvent("onclick", anadirMensaje);
        boton_cancelar_sms.attachEvent("onclick", cerrarDialogMensaje);
    }



}

function crearDialogSms() {

    document.getElementById("titulo").value = "";
    document.getElementById("comentario").value = "";
    document.getElementById("dialogoSms").setAttribute("open", "true");
}

function cerrarDialogMensaje() {

    document.getElementById("dialogoSms").close();

}

function anadirMensaje() {

    let titulo = document.getElementById("titulo").value;
    let comentario = document.getElementById("comentario").value;
    let usuario = document.getElementById("usuario_activo").textContent;
    let cajaMensaje = document.getElementById("cajaMensaje");

    let divMensajes = document.createElement("div");
    let parrafo = document.createElement("p");   
    let h3 = document.createElement("h3");   
    h3.appendChild(document.createTextNode(titulo));
    let comt = document.createTextNode(comentario);
    let nombreUsuario = document.createTextNode(usuario);
    let imagen = document.createElement("img");

    let rutaImagenElegida = document.querySelector('input[name="icono"]:checked')?.value;

    if (rutaImagenElegida != "") {

        imagen.setAttribute("src", rutaImagenElegida);
        divMensajes.appendChild(imagen);
    }

    divMensajes.appendChild(nombreUsuario);  
    divMensajes.appendChild(h3);
    parrafo.appendChild(comt);
    divMensajes.appendChild(parrafo);
    cajaMensaje.appendChild(divMensajes);

}



