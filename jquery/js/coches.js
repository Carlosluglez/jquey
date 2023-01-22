$(window).on("load",iniciarCoches);
function iniciarCoches() {
    $("#boton_coche").on("click",crearCoches);
    $("#quitar_coche").on("click",quitarCoche);
}
function crearCoches() {

    let marca= $("#marca").val().toLowerCase().trim();
    let modelo=$("#modelo").val().toLowerCase().trim();
    let precio=$("#precio").val().toLowerCase().trim();

    marca = tratarCoche(marca);
    modelo = tratarCoche(modelo);

    if (marca !== "" && modelo !== "" && precio !== "") {

        let elementosTr=$("#table>tbody>tr");
        let cocheNorepetido = true;
        let i = 0;

        while (cocheNorepetido && i < elementosTr.length) {
            let celdasTd=$(elementosTr).eq(i).find("td");

            if (celdasTd.eq(0).text() > marca) {
                elementosTr.eq(i).before("<tr> <td>"+marca+
                    "</td><td>"+modelo+
                    "</td><td>"+precio+"</td></tr>");
                cocheNorepetido = false;

            } else if (celdasTd.eq(0).text() === marca && celdasTd.eq(1).text() === modelo) {
                celdasTd.eq(2).text(precio);
                cocheNorepetido = false;

            } else if (celdasTd.eq(0).text() === marca && celdasTd.eq(1).text() > modelo) {

                elementosTr.eq(i).before("<tr> <td>"+marca+
                    "</td><td>"+modelo+
                    "</td><td>"+precio+"</td></tr>");
                cocheNorepetido = false;
            }
            i++;
        }

        if (cocheNorepetido) {

            $("#tbody").append("<tr> <td>"+marca+
                "</td><td>"+modelo+
                "</td><td>"+precio+"</td></tr>");
        }

    }
}

function quitarCoche(){
    let marca= $("#marca").val().toLowerCase().trim();
    let modelo=$("#modelo").val().toLowerCase().trim();
    marca = tratarCoche(marca);
    modelo = tratarCoche(modelo);
    if (marca !== "" && modelo !== ""){
        console.log("entro");
        let cocheNorepetido = true;
        let i = 0;
        let elementosTr=$("#table>tbody>tr");

        while(cocheNorepetido && i < elementosTr.length){
            console.log("entro bucle");
            let celdasTd=$(elementosTr).eq(i).find("td");
            if(celdasTd.eq(0).text() === marca && celdasTd.eq(1).text() === modelo){
               elementosTr.eq(i).remove();
            }
            i++;
        }
    }
}
function tratarCoche(variable) {
    let tildes = ["á", "é", "í", "ó", "ú", "Á", "É", "Í", "Ó", "Ú", "ñ"];
    let vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U", "nzzzz"];
    //variable = variable.toLowerCase();
    for (let i = 0; i < tildes.length; i++) {
        variable = variable.replace(tildes[i], vocales[i]);
    }
    return variable;
}



