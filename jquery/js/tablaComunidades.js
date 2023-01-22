$(window).on("load",inicio);

function inicio() {
  crearTabla();
    $("#quitar_coche").on("click",quitarCoche);
    $("#colores").on("click",generarColores);

}
function crearTabla(){

  let $select = $("#comunidades").find("option");
  let comunidades = [];
  let arrayCiudadesImportantes=["Sevilla","Zaragoza","Oviedo","Palma De Malloraca","Las Palmas de Gran Canaria",
    "Santander","Valladolid","Toledo","Barcelona","Ceuta","Valencia","Caceres","Coruña","Logroño",
    "Madrid","Melilla","Murcia","Pamplona","Bilbao"];

  for(let i = 0; i < $select.length; i++){

    comunidades.push($select.eq(i).text());
  }
  comunidades.sort();

  for (let i = 1; i < comunidades.length; i++) {
    $("#tbodyComunidad").append("<tr> <td>"+comunidades[i]+"</td><td>"+arrayCiudadesImportantes[i-1]+
        "</td></tr>");
  }
}
function generarColores(){

  let num1=Math.round(Math.random() * 255);
  let num2=Math.round(Math.random() * 255);
  let num3=Math.round(Math.random() * 255);
//  let rgb1="rgb("+num1+","+num2+","+num3+")";
  let num4=Math.round(Math.random() * 255);
  let num5=Math.round(Math.random() * 255);
  let num6=Math.round(Math.random() * 255);
  let rgb2="rgb("+num4+","+num5+","+num6+")";

// Obtenemos todas las filas de la tabla
  let filas = $("#tableComunidad").find("tr");

// Recorremos las filas de la tabla
  for(let i = 0; i < filas.length; i++){
    // Si el índice es par
    if(i % 2 === 0){
      filas.eq(i).addClass("par");
    }else{
      filas.eq(i).addClass("impar");
    }
  }
  $(".par").css("background-color", "rgb("+num1+","+num2+","+num3+")");
  $(".impar").css("background-color", rgb2);
}

