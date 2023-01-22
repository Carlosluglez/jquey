$(window).on("load",iniciarListaProvincias);
function iniciarListaProvincias() {

    $('#boton_localidad').on('click',anadirLocalidad);
}
 function anadirLocalidad() {

     let localidad=$("#localidad").val().trim();
     let milista=$("#listaLocalidades");
     let listali=$("#listaLocalidades>li")
     localidad=tratarContenido(localidad);
     if (localidad!==""){
         let indice=0;
         let localidadNoRepetida=true;

         while (localidadNoRepetida && indice < $(listali).length ){
             if (localidad===$(listali).eq(indice).text()) {
                 localidadNoRepetida = false;
             }else if(localidad < $(listali).eq(indice).text() ){
                 $(listali).eq(indice).before("<li>"+localidad+"</li>");
                 localidadNoRepetida = false;
             }
             indice+=1
         }
         if (localidadNoRepetida)
             $(milista).append("<li>"+localidad+"</li>");
     }
 }
 
 function tratarContenido(variable) {
    let tildes = ["á", "é", "í", "ó", "ú", "Á", "É", "Í", "Ó", "Ú", "ñ"];
    let vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U", "nzzzz"];
    //variable = variable.toLowerCase();
    for (let i = 0; i < tildes.length; i++) {
        variable = variable.replace(tildes[i], vocales[i]);
    }
    return variable;
}



/* } else if (tempListali.eq(indice).text() > contenido) {
                     console.log("ordenar");
                     $(lista).insertBefore("<li>" + contenido + "</li>");
                     noRepetido = false;
                 }*/


// function ordenarLista(){
//     //Obtenemos el elemento ul
//     let ul = document.getElementById("listaLocalidades");    
//     //Obtenemos la lista de li
//     let lista = ul.getElementsByTagName("li");
//     //Creamos el array a partir de los elementos li
//     //A continuación ordenamos con sort (hay que ordenar mirando el textContent y evitando la etiqueta li
//     //Por último recorremos el array ya ordenado y vamos haciendo el append en el elemento ul (sobrescribiéndolo)
//     let arrayLocalidades = Array.from(lista);
//     arrayLocalidades.sort((a, b) => 
//     a.textContent.localeCompare(b.textContent)).forEach(li => ul.appendChild(li));
   
// }

