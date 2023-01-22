$(window).on("load",inicio);

function inicio(){
	$("#aceptar").on("click", procesar);
}

function procesar(){
	let VstNombre=$("#nombre").val().trim();
	let milista=$("#listaNombre");
	let elementos=$("#listaNombre>li")
	if (VstNombre!=""){
		let VitIndice=0;
		let VboInexiste=true;
		while (VboInexiste && VitIndice < $(elementos).length){
			if (VstNombre==$(elementos).eq(VitIndice).text())
				VboInexiste=false;
			VitIndice+=1
		}
		if (VboInexiste)
			$(milista).append("<li>"+VstNombre+"</li>");
	}	
}