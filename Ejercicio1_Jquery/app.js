$(document).ready(function(){
    
    $("#anadir").click(function(){
        
        var nuevoTexto = $("#compra").val().trim();
        
        if (nuevoTexto === '') {
            alert("Por favor, escribe un producto.");
            return;
        }
        
        var $nuevoLi = $("<li>").text(nuevoTexto);
        
        
        $("#listaCompra").append($nuevoLi);
        
        
        $("#compra").val("").focus();
        
        $nuevoLi.on({
            click: function(){
                $(this).css({
                    "text-decoration": "line-through",
                    "font-style": "italic",
                    "color": "#888"
                });
            },
            dblclick: function(){
                $(this).remove();
            }
        });
        

        actualizarContador();
    });
    
    $("#reset").click(function(){
        $("#listaCompra").empty();
        actualizarContador();
    });
    
    
    function actualizarContador() {
        $("#contadorProductos").text($("#listaCompra li").length);
    }
    
    
    $("#compra").keypress(function(e){
        if(e.which == 13) { 
            $("#anadir").click();
        }
    });
    
    
    actualizarContador();
});