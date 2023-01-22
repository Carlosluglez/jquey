    $(window).on("load", iniciar);

function iniciar(){ 
console.log("iniciar");
    let boton_mensaje = $("#boton_mensaje");
    boton_mensaje.disabled = true;
    // let boton_registro = document.getElementById("registro");
    let boton_registro = $("#registro");
    let aceptar = document.getElementById("aceptar");
    let cancelar = document.getElementById("cancelar");
    let boton_entrar = document.getElementById("entrar");

    // if (document.addEventListener) boton_registro.addEventListener("click", mostrarFormularioRegistro);
    // else if (document.attachEvent) boton_registro.attachEvent("onclick", mostrarFormularioRegistro);
    $(boton_registro).on("onclick",mostrarFormularioRegistro);

    if (document.addEventListener) {
        aceptar.addEventListener("click", comprobarNombreYcontrasenaYcrearCookie);
        cancelar.addEventListener("click", cerrarDialog);
        boton_entrar.addEventListener("click", abrirDialogComprobacion);
    } else if (document.attachEvent) {
        aceptar.addEventListener("onclick", comprobarNombreYcontrasenaYcrearCookie);
        cancelar.addEventListener("onclick", cerrarDialog);
        boton_entrar.addEventListener("onclick", abrirDialogComprobacion);

    }
}
function mostrarFormularioRegistro() {

    document.getElementById("nombre").value = "";
    document.getElementById("contrasena").value = "";
    document.getElementById("dialogo").setAttribute("open", "true");

}

function comprobarNombreYcontrasenaYcrearCookie() {

    let nombre = document.getElementById("nombre").value;
    let contrasena = document.getElementById("contrasena").value;
    let comprobarNombre = new RegExp("^[a-z]{3}[a-z\d]{5,9}$", "i");
    let comprobarContrasena = new RegExp("^[a-z]{2}\\w{6,12}[a-z0-9]$", "i");

    if (!comprobarNombre.test(nombre)) {
        alert("el nombre no es correcto");
    } else if (!comprobarContrasena.test(contrasena)) {
        alert("la contraseña no es correcta");
    } else {
        document.cookie = nombre + "=" + contrasena + ";expires=01 Jan 2030 00:00:00 GMT";
        document.getElementById("dialogo").close();
    }
}

function cerrarDialog() {
    document.getElementById("dialogo").close();
}

function cerrarDialog1() {
    document.getElementById("dialogo1").close();
}

function abrirDialogComprobacion() { //abrir el dialog
    document.getElementById("nombre1").value = "";
    document.getElementById("contrasena1").value = "";

    document.getElementById("dialogo1").setAttribute("open", "true");//abrimos el dialog

    let botonAcept = document.getElementById("aceptar1");
    let botonCancelar = document.getElementById("cancelar1");

    if (document.addEventListener) {
        botonAcept.addEventListener("click", comprobarCo);
        botonCancelar.addEventListener("click", cerrarDialog1);

    } else if (document.attachEvent) {
        botonAcept.addEventListener("onclick", comprobarCo);
        botonCancelar.addEventListener("onclick", cerrarDialog1);

    }
}

function comprobarCo() {

    let nombreUsu = document.getElementById("nombre1").value;
    let contrasenaUsu = document.getElementById("contrasena1").value;
    let cookies = document.cookie;
    // console.log(nombreUsu + " " + contrasenaUsu)

    if (cookies.length >= 0) {
        let usuarios = cookies.split(';');
        let credenciales = nombreUsu+"="+contrasenaUsu;
        let usuarioExiste = false;
        // let i = 0;
        // let longitudUsuarios = usuarios.length;
        if (usuarios.indexOf(credenciales) >=0)
            usuarioExiste=true;
        // while(i < longitudUsuarios && !usuarioExiste){
        //     if(usuarios[i].trim() == credenciales){
        //         usuarioExiste = true;
        //     }
        //     i++;
        // }

        if (!usuarioExiste) {
            alert("no existe el usuario o la contraseña");
        } else {
            cerrarDialog1();
            document.getElementById("usuario_activo").textContent = nombreUsu;
            let boton_entrar = document.getElementById("entrar");
            let boton_mensaje = document.getElementById("boton_mensaje");
            boton_mensaje.disabled = false;
            boton_entrar.value = "CerrarSesión";

            boton_entrar.removeEventListener("click", abrirDialogComprobacion);
            boton_entrar.addEventListener("click", cerrarSesion);

            }
        }
    }


function cerrarSesion(){

    let boton_entrar = document.getElementById("entrar");
    boton_entrar.addEventListener("click", abrirDialogComprobacion);
    boton_entrar.value = "entrar";
    let boton_mensaje = document.getElementById("boton_mensaje");
    boton_mensaje.disabled = true;
    let usu = document.getElementById("usuario_activo");
    usu.textContent="";

}


// function comprobarCo() {

//     let nombreUsu = document.getElementById("nombre1").value;
//     let contrasenaUsu = document.getElementById("contrasena1").value;
//     let cookies = document.cookie;
//     // console.log(nombreUsu + " " + contrasenaUsu)

//     if (cookies.length >= 0) {
//         let posicionCookie = cookies.indexOf(nombreUsu + "=" + contrasenaUsu);//devuelve posicion en el string
//         if (posicionCookie == -1) {
//             alert("no existe el usuario o la contraseña");
//         } else {
//             if (posicionCookie != 0) {//comprobamos que lleva delante un ; y termina en ;
//                 posicionCookie = cookies.indexOf("; " + nombreUsu + "=" + contrasenaUsu);
//             }
//             if (posicionCookie == -1) {
//                 alert("no existe)");
//             } else {//posicionCookie puede tener valor 0 o una posicion intermedia
//                 if (posicionCookie != 0) {
//                     posicionCookie += 2;
//                 }
//                 let posicionDelSiguinete = cookies.indexOf(";", (posicionCookie + 1));//buscar el siguiente ; desde la poscion anterior
//                 if (posicionDelSiguinete == -1) {//puede que sea el ultimo, por que no encuentra ;
//                     posicionDelSiguinete = cookies.length;
//                 }
//                 var cookieAcomprobar = cookies.substring(posicionCookie, posicionDelSiguinete);
//                 let usuario = cookieAcomprobar.substring(0, cookieAcomprobar.indexOf("="));

//                 cerrarDialog1();
//                 document.getElementById("usuario_activo").textContent = nombreUsu;
//                 let boton_entrar = document.getElementById("entrar");
//                 let boton_mensaje = document.getElementById("boton_mensaje");
//                 boton_mensaje.disabled = false;
//                 boton_entrar.value = "CerrarSesión";


//                 boton_entrar.removeEventListener("click", abrirDialogComprobacion);
//                 boton_entrar.addEventListener("click", cerrarSesion);
 // https://stackoverflow.com/questions/3922599/is-it-a-bad-practice-to-use-break-in-a-for-loop (Use of break)
//             }
//         }
//     }
// }