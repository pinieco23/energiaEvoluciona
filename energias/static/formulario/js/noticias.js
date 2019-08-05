cargueNoticias = "No"
numeroNoticias = 0;
$(document).ready(function(){
	setTimeout(cambioFechaNoticia,300)
	//setTimeout(verificarNoticias,500);
	
	/*
	var numeroNoticias = "10"
	
	$.ajax({
            url: _spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Noticias')/items?$expand=FieldValuesAsHtml&$top="+numeroNoticias+"&$orderby=Noticia_Fecha desc",
            type: "GET",
            headers: {
                "accept": "application/json;odata=verbose",
            },
            success : function(data) {
            console.log(data)
            var numarea = data.d.results.length;
	            for(i=0;i<numarea;i++){
	           		//var comunicados = data.d.results[0].Mesas_Comunicados;
	           		var Id_Noticia = data.d.results[i].Id;
	           		var Noticia_Titulo= data.d.results[i].Title;
	           		var Noticia_Fecha= data.d.results[i].Noticia_Fecha;
	           		var Noticia_Descripcion_corta= data.d.results[i].Noticia_Descripcion_corta;
	           		//var Noticia_Titulo= data.d.results[i].Noticia_Titulo;
	           		$("#noticias").append("<div class='item-noticias' id='"+Id_Noticia+"'>"+
	           									"<div class='titulo-noticia'>"+Noticia_Titulo+"</div>"+
	           									"<div class='fecha-noticia'>"+Noticia_Fecha+"</div>"+
	           									"<div class='imagen-noticia'></div>"+
	           									"<div class='decripcion-noticias'>"+Noticia_Descripcion_corta+"</div>"+
	           									"<div></div>"+
	           							  "</div>")
	           	}//final ciclo for
            },
            failure : function(err) {
               // $("#message").text(JSON.stringify(err));
            }
        });

*/	
	
});

function verificarNoticias(){
	$("#noticias .contenido-noticias").remove();
	$("#noticias .ms-srch-result-groups").append("<div id='contenido-noticias'>"+
								"<div id='columna1'></div>"+
								"<div id='columna2'></div>"+
								"</div>")
								
	var numero_Noticias = $(".item-noticia").length;
	if (numero_Noticias > 0 && cargueNoticias == "No"){
		cargueNoticias == "Si"
		ordenarNoticias();
	}	
}

function ordenarNoticias(){

	var noticia1= $(".item-noticia:nth-child(1)").html();
	var noticia2_titulo= $(".item-noticia:nth-child(2) .titulo-noticia").text();
	var noticia2_fecha= $(".item-noticia:nth-child(2) .fecha-noticia").text();
	var noticia2_imagen= $(".item-noticia:nth-child(2) .imagen-noticia").html();
	var noticia2_descripcion= $(".item-noticia:nth-child(2) .descripcion-noticia").text();
	var noticia2_enlace= $(".item-noticia:nth-child(2) .enlace-noticia").text();
	
	var noticia3_titulo= $(".item-noticia:nth-child(3) .titulo-noticia").text();
	var noticia3_fecha= $(".item-noticia:nth-child(3) .fecha-noticia").text();
	var noticia3_imagen= $(".item-noticia:nth-child(3) .imagen-noticia").html();
	var noticia3_descripcion= $(".item-noticia:nth-child(3) .descripcion-noticia").text();
	var noticia3_enlace= $(".item-noticia:nth-child(2) .enlace-noticia").text();
	
	var noticia3= $(".item-noticia:nth-child(3)").html();
	$("#contenido-noticias #columna1").append("<div class='item-noticia2'>"+noticia1+"</div>");
	$("#contenido-noticias #columna1").append("<div class='item-noticia2'>"+
												"<div class='columna11'>"+
													"<div class='imagen-noticia'>"+noticia2_imagen+"</div>"+
												"</div>"+
												"<div class='columna22'>"+
													"<div class='titulo-noticia'>"+noticia2_titulo+"</div>"+
													"<div class='fecha-noticia'>"+noticia2_fecha+"</div>"+
													"<div class='descripcion-noticia'>"+noticia2_descripcion+"</div>"+
													"<div class='descripcion-noticia'>"+noticia2_enlace+"</div>"+
												"</div>"+
											  "</div>"+
											  //Noticia 3
											  "<div class='item-noticia2'>"+
												"<div class='columna11'>"+
													"<div class='imagen-noticia'>"+noticia3_imagen+"</div>"+
												"</div>"+
												"<div class='columna22'>"+
													"<div class='titulo-noticia'>"+noticia3_titulo+"</div>"+
													"<div class='fecha-noticia'>"+noticia3_fecha+"</div>"+
													"<div class='descripcion-noticia'>"+noticia3_descripcion+"</div>"+
													"<div class='descripcion-noticia'>"+noticia3_enlace+"</div>"+
												"</div>"+
											  "</div>");
	
											  
	$(".item-noticia:nth-child(1n+4)").each(function(){
	var noticiasColumna2 = $(this).html();
			$("#contenido-noticias #columna2").append("<div class='item-noticia2'>"+noticiasColumna2 +"</div>");

	  })
	

}

function cambioFechaNoticia(){

	var altoColumna1 = $("#noticias #col1").height();
	$("#noticias #col2").css("max-height",altoColumna1);
	//console.log(altoColumna1)
	$(".item-noticia").each(function(){
	 	var fecha = $(this).find(".fecha-noticia").text();
	 	$(this).find(".fecha-noticia").html("aaa ");
	 	var fechaCambio = fecha.substring(0,10);
	 	$(this).find(".fecha-noticia").html(fechaCambio);
	  });
}

window.onhashchange = function() { 
	numeroNoticias = 0;
	
}

