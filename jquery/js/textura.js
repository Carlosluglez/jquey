$(window).on("load",inicio);
//https://es.javascript.info/mousemove-mouseover-mouseout-mouseenter-mouseleave
function inicio(){
    let parrafo=$("#texto");
    parrafo.on("mouseover", function() {
        $("#texto").css({"font-family":"Comic Sans MS", "font-size":"16pt",
            "font-weight":"bold", "background-color":"green", "color":"white"});
    });
    parrafo.on("mouseout", function() {
        $("#texto").css({ "font-size":"",
            "font-weight":"", "background-color":"", "color":""});
    });
}


