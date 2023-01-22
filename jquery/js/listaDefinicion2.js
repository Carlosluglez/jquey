$(window).on("load",iniciarListaDefinicion);
function iniciarListaDefinicion() {

    $("#boton_definicion").on("click", crearDefinicion);
    $("#boton_quitar_definicion").on("click",quitarElemento);
}
/*function crearDefinicion() {

    let palabra =$("#palabra").val().toLowerCase().trim();
    let concepto=$("#concepto").val().toLowerCase().trim();

    if(palabra !== "" && concepto !== ""){
        let palabraNoRepetida=true;
        let i=0;
        let listadl = $("#listadef");//recuperamos el dl

        let listadt = $(listadl).find("dt"); //dl.find("dt") elementos "dt" dentro del elemento con id "listadef" y los almacena en "listadt".
        let listadd = $(listadl).find("dd"); //  dl.find("dd")  "dd" dentro del elemento con id "listadef" y los almacena en  "listadd".


        while(palabraNoRepetida && i < listadt.length){

            let tempdt = $(listadt).eq(i);
            let tempdd = $(listadd).eq(i);

            if(tempdt.text() === palabra && tempdd.text() === concepto ){
                palabraNoRepetida = false;
                console.log("los dos iguales");
            } else if(tempdt.text() === palabra && tempdd.text() !== concepto){
                console.log("diferente definicion")
                $(tempdt).after("<dd>"+concepto+"</dd>");
                palabraNoRepetida = false;
            }
            console.log(i);
            i++;
        }
        if(palabraNoRepetida){//la primera vez
           // let dl = document.getElementById("listaDef");
            console.log("la primera vez");
            listadl.append("<dt>"+ palabra + "</dt>");
            listadl.append("<dd>"+ concepto + "</dd>");
        }

    }
}*/
/*
Cuando se pulse el botón de Quitar Definiciones vamos a coger el valor de la caja de
texto de palabra y vamos a borrar de la tabla de definición el término correspondiente a esa
palabra así como todas las definiciones de ese término*/
function quitarElemento() {


    let palabra = $("#palabra").val().toLowerCase().trim();
    let listadl = $("#listadef");//recuperamos el dl

    if (palabra !== "") {
        let palabraNoRepetida = true;
        let i = 0;
        let listadl = $("#listadef");
        let listadt = $(listadl).find("dt");
        let listadd = $(listadl).find("dd");

        while(palabraNoRepetida && i < listadt.length) {

            if(palabra === listadt.eq(i).text()){
                $(listadl).children().eq(i).nextUntil("dt").remove();
                $(listadl).children().eq(i).remove();
            }
            i++;
        }
    }
}
function crearDefinicion() {
    let palabra = $('#palabra').val().trim();
    let concepto = $('#concepto').val().trim();
    let listadl = $("#listadef");

    // let milistadt = $("#lista_definiciones>dt");
    if (palabra !== "" || concepto !== "") {
        let ausente = true;
        let indice = 0;
        let todosdt = $(listadl).find("dt");
        let todosdd = $(listadl).find("dd");
        // let todosdt=$("#lista_definiciones>dt")
        // let todosdd=$("#lista_definiciones>dd");

        while (ausente && indice < $(todosdt).length) {
            let auxdt = $(todosdt).eq(indice);
            let auxdd = $(todosdd).eq(indice);
            // console.log(auxdt.text()+'dt');
            // console.log(auxdd.text()+'dd');
            if (auxdt.text() === palabra && auxdd.text() !== concepto) {
                $(auxdt).after("<dd>" + concepto + "</dd>");
                ausente = false;
            } else if (auxdt.text() === palabra && auxdd.eq(indice).text() === concepto) {
                ausente = false;
            }
            indice += 1
        }
        if (ausente) {
            $(listadl).append("<dt>" + palabra + "</dt>");
            $(listadl).append("<dd>" + concepto + "</dd>");
        }
    }
}