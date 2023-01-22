$(window).on("load", iniciarListaDefinicion);
function iniciarListaDefinicion() {

    let boton_definicion = $("#boton_definicion");
    $(boton_definicion).on("click",crearDefinicion);

}
//de los elementos hijos del elemento con id clase 3, me cogera del quinto hasta que encuentre el primer span excluyendo el span
//$("#clase3").children().eq(5).nextUntil("span");
function crearDefinicion() {

    let palabra = document.getElementById("palabra").value.toLowerCase();
    let concepto = document.getElementById("concepto").value.toLowerCase();

    if (palabra.trim() != "" || concepto.trim() != "") {

        let pal = document.createElement("dt");//creamos el dt y el dd y les añadimos los nodos de texto 
        pal.setAttribute("id", palabra);//id al dt la palabra de la caja
        let def = document.createElement("dd");
        pal.appendChild(document.createTextNode(palabra));
        def.appendChild(document.createTextNode(concepto));

        let palabraNoRepetid = true;
        let conceptoNoRepetid = true;
        let dl = document.getElementById("listadef");
        let listadt = document.getElementsByTagName("dt"); //array de dt
        let listadd = document.getElementsByTagName("dd");//array dd
        let i = 0;
        let j = 0;

        while (i < listadt.length && palabraNoRepetid) {
            let tempdt = listadt.item(i);

            if (tempdt.textContent == palabra) {
                palabraNoRepetid = false;

                while (j < listadd && conceptoNoRepetid) {
                    let tempdd=listadd.item(j);

                    if(tempdd.textContent == concepto){
                        conceptoNoRepetid = false;
                    }else{
                        tempdd.appendChild(def); 
                        palabraNoRepetid=false;
                    }
                    j++;
                }
            }
            i++;
        }

        if (palabraNoRepetid) {//la primera vez
            // let dl = document.getElementById("listaDef");
            dl.appendChild(pal);
            dl.appendChild(def);
        }


    }
}