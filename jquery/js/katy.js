function anadirDef() {
    let contenidoPalabra = $('#palabra').val().trim();
    let contenidoConcepto = $('#concepto').val().trim();
    let milista = $("#lista_definiciones");

    // let milistadt = $("#lista_definiciones>dt");
    if (contenidoPalabra !== "" || contenidoConcepto !== "") {
        let ausente = true;
        let indice = 0;
        let todosdt = $(milista).find("dt");
        let todosdd = $(milista).find("dd");
        // let todosdt=$("#lista_definiciones>dt")
        // let todosdd=$("#lista_definiciones>dd");

        while (ausente && indice < $(todosdt).length) {
            let auxdt = $(todosdt).eq(indice);
            let auxdd = $(todosdd).eq(indice);
            // console.log(auxdt.text()+'dt');
            // console.log(auxdd.text()+'dd');
            if (auxdt.text() === contenidoPalabra && auxdd.text() !== contenidoConcepto) {
                $(auxdt).after("<dd>" + contenidoConcepto + "</dd>");
                ausente = false;
            } else if (auxdt.text() === contenidoPalabra && auxdd.eq(indice).text() === contenidoConcepto) {
                ausente = false;
            }
            indice += 1
        }
        if (ausente) {
            $(milista).append("<dt>" + contenidoPalabra + "</dt>");
            $(milista).append("<dd>" + contenidoConcepto + "</dd>");
        }
    }
}