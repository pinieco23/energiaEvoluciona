function galeria(){
	$.ajax({
		url: _spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getByTitle('Galeria talleres')/items?$select=EncodedAbsUrl,Description,TallerId&$expand=FieldValuesAsHtml&$filter=TallerId eq "+Nombre_tallerId+"&$orderby=Id desc",
		type: "GET",
		headers: {
		     "accept": "application/json;odata=verbose",
		},
		success: function(data) {
				//console.log(data)	
				var numarea = data.d.results.length;
				if(numarea > 0){			
				$("#sec-galeria").append("<div id='titulo-galeria'><span><img alt='' src='/Style Library/construyendopais/img/camara.png'/><span>Galería</div>"+
											 "<div id='imagenesTalleres'></div>")
				}
				for(i=0; i<numarea; i++){
					if(i<9){
						var urlImagen = data.d.results[i].EncodedAbsUrl;					
						$("#sec-galeria #imagenesTalleres").append("<img alt='' src='"+urlImagen+"' ></img>")
					}
				}		   			   			
			},
			error: function(error) {
			// alert(JSON.stringify(error));
			}
		});

}



$(document).ready(function(){

	$.ajax({
		//url: _spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getByTitle('Galeria talleres')/items",
		url: _spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getByTitle('Galeria talleres')/items?$select=EncodedAbsUrl,Description,TallerId&$expand=FieldValuesAsHtml&$top=100&$orderby=Id desc",
		type: "GET",
		headers: {
		     "accept": "application/json;odata=verbose",
		},
		success: function(data) {
				var numarea = data.d.results.length;
					$("#zona8").append("<div id='sec-galeria' style='max-width:1000px;margin:auto;text-align: center;'>"+
											 "<div id='titulo-galeria' ><span><img alt='' src='/Style Library/construyendopais/img/camara.png'/><span>Galería</div>"+
											 "<div id='imagenesTalleres'></div>"+
										"</div>")
				for(i=0; i<numarea; i++){
					
				        var urlImagen = data.d.results[i].EncodedAbsUrl;
				        var IdTaller = data.d.results[i].TallerId;										
						
						$("#zona8 #sec-galeria #imagenesTalleres").append("<div class='itemgaleria' id='"+IdTaller+"' onmouseover='consultarTallerGaleria(this.id)' onmouseout='ocultarDatosGaleria(this.id)'>"+
																				"<img alt='' src='"+urlImagen+"' ></img>"+
																			"</div>")

						
					 	var seen = {};
						$("#zona8 #sec-galeria #imagenesTalleres .itemgaleria ").each(function() {
						    var txt = $(this).attr("id");
						    if (seen[txt])
						        $(this).remove();
						    else
						        seen[txt] = true;
						});
				}
								
		   			   			
			},
			error: function(error) {
			// alert(JSON.stringify(error));
			}
		});

});


function consultarTallerGaleria(IdTaller){
	$.ajax({
		url: _spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getByTitle('Talleres')/items?$filter=Id eq "+IdTaller +"",
		type: "GET",
		headers: {
		     "accept": "application/json;odata=verbose",
		},
		success: function(data) {
				//console.log(data)
				var hora = data.d.results[0].Taller_Hora;
				var lugar = data.d.results[0].TallerLugar;
				var ciudad = data.d.results[0].TallerCiudadoMunicipio;
				$("#zona8 #sec-galeria #imagenesTalleres div.itemgaleria[id='"+IdTaller+"']  .datosGaleria").remove();
				$("#zona8 #sec-galeria #imagenesTalleres div.itemgaleria[id='"+IdTaller+"']  ").append("<div class='datosGaleria'>"+
																											"<div>"+ciudad+"</div>"+
																											"<div>"+lugar+"</div>"+
																										"</div>")	
				//$("#zona8 #sec-galeria #imagenesTalleres div.itemgaleria[id='"+IdTaller+"']  .datosGaleria").css("bottom","0");
			},
			error: function(error) {
			// alert(JSON.stringify(error));
			}
		});
}

function ocultarDatosGaleria(IdTaller){
	//$("#zona8 #sec-galeria #imagenesTalleres div.itemgaleria[id='"+IdTaller+"']  .datosGaleria").css("bottom","-300px");
}

