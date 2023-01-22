$(window).on("load",listacomunidades);
function listacomunidades() {
    $("#comunidades").on("change",crearSelect);
}
function crearSelect() {

    let listaParrafos=$("div#parrafos p");
    let provincia=$("#provincias option");
    let seleccion =$("#comunidades").val();//el del evento onchange

    for(let i = 0 ; i < provincia.length ; i++){
        $(provincia[i]).css("display", "none");
    }

    for(let i = 0 ; i < provincia.length ; i++){
     // let miClase = $("#mi-elemento").attr("class");
        if($(provincia[i]).hasClass(seleccion)){
            $(provincia[i]).css("display","block");
        }        
    }
   // document.getElementById("provincias").selectedIndex=-1;
    for(let i = 0 ; i < listaParrafos.length ; i++){
        if($(listaParrafos[i]).hasClass(seleccion)){//compara la clase de un elemento
            $("#mostrar_parrafo").text(listaParrafos[i].textContent);
        }        
    }
  
}




