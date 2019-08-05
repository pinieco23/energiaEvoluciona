function mesas(idTaller){
	$.ajax({
		//url: "https://controlesempresarialesltda.sharepoint.com/sites/social/construyendopais/_api/web/GetFolderByServerRelativeUrl('Contructores')/files?$expand=Cargo,Orden,ListItemAllFields,ListItemAllFields/Modified&$orderby=ListItemAllFields/Orden asc&$top=100",
		
		url: _spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Mesas')/items?$expand=FieldValuesAsHtml&$filter=Mesas_TallerId eq "+idTaller+"&$orderby=Mesas_Orden asc",
		type: "GET",
		headers: {
		     "accept": "application/json;odata=verbose",
		},
		success: function(data) {
		//console.log(data);
		var numarea = data.d.results.length;

		if(numarea > 0){
			//alert(idtaller+"-"+ nombreTaller)
			$("#mesas").append("<div id='contenido-mesas'>"+
									"<div id='titulo-mesas'>Mesas de trabajo</div>"+
									"<div id='datos-mesas'><div id='columna1'></div><div id='columna2'></div></div>"+
								"</div>")
	
				for(i=0; i<numarea; i++){
				var IdMesa = data.d.results[i].Id;
				var Mesas_Titulo = data.d.results[i].Mesas_Titulo;
				var Mesas_Descripcion_corta = data.d.results[i].Mesas_Descripcion_corta;
				var idcategoria = data.d.results[i].Mesas_CategoriaId;
				var participantes = data.d.results[i].Mesas_Participantes;
				var posicionItem = "mesa"+(i+1);
					if(i == "0"){
						$("#mesas #datos-mesas #columna1").append("<div id='"+posicionItem +"' class='item-mesa'>"+
				    									"<div class='iconoCategoria'></div>"+
				    									"<div class='tituloCategoria'></div>"+
				    									"<div class='titulo-mesa'>"+Mesas_Titulo+"<span class='participantes-mesas'>  ( "+participantes+" participantes )</span></div>"+
				    									"<div class='descripcion-mesa'>"+Mesas_Descripcion_corta+"</div>"+
				    									"<div class='vermasMesa'><button type='button' id='"+IdMesa +"' onclick='detalleGlobalMesa(this.id)'>Leer más</button><hr /></div>"+
				    								"</div>")
				    	crearIconoCategoria("mesas",idcategoria, posicionItem)								
					}else{
						$("#mesas #datos-mesas #columna2").append("<div id='"+posicionItem +"' class='item-mesa'>"+
				    									"<div class='iconoCategoria'></div>"+
				    									"<div class='tituloCategoria'></div>"+
				    									"<div class='titulo-mesa'>"+Mesas_Titulo+"<span class='participantes-mesas'>  ( "+participantes+" participantes )</span></div>"+
				    									"<div class='descripcion-mesa'>"+Mesas_Descripcion_corta+"</div>"+
				    									"<div class='vermasMesa'><button type='button' id='"+IdMesa +"' onclick='detalleGlobalMesa(this.id)'>Leer más</button><hr /></div>"+
				    								"</div>")
				    	crearIconoCategoria("mesas",idcategoria, posicionItem)								
					}			    
				}//final ciclo for
			}else{$("#mesas").remove();}//final if
			},
			error: function(error) {
			// alert(JSON.stringify(error));
			}
		});

}

function detalleGlobalMesa(idMesa){
	$.ajax({
		//url: "https://controlesempresarialesltda.sharepoint.com/sites/social/construyendopais/_api/web/GetFolderByServerRelativeUrl('Contructores')/files?$expand=Cargo,Orden,ListItemAllFields,ListItemAllFields/Modified&$orderby=ListItemAllFields/Orden asc&$top=100",
		
		url: _spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Mesas')/items?$expand=FieldValuesAsHtml&$filter=Id eq "+idMesa+" ",
		type: "GET",
		headers: {
		     "accept": "application/json;odata=verbose",
		},
		success: function(data) {
		//console.log(data);
		var numarea = data.d.results.length;
		var Mesas_Titulo = data.d.results[0].Mesas_Titulo;
		var Mesas_Descripcion_general = data.d.results[0].Mesas_Descripcion_general;
		//alert(idtaller+"-"+ nombreTaller)
		$("body").append("<div id='modal-mesa'>"+
						 	"<div id='content-modal-mesa'>"+
						 		"<div id='cerrarMesa'><img alt='' src='/Style Library/construyendopais/img/cancelar.png' title='Cerrar' onclick='cerrarMesa()'/></div>"+
						 		"<div id='titulo-modal'>"+Mesas_Titulo+"</div>"+
						 		"<div id='descripcion-mesa-modal'>"+Mesas_Descripcion_general+"</div>"+
						 	"</div>"+
						 "</div>")
			
			},
			error: function(error) {
			// alert(JSON.stringify(error));
			}
		});
}


function cerrarMesa(){
	$("#modal-mesa").remove();
}

function carruselMesas(idMesa){

	$("#carrusel-mesas ").after().load("/Style%20Library/carrusell/demo/carrusel-voceros.html")
	
}

function comunidadosMesas(idtaller){
	$.ajax({
            url: _spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Talleres')/items?$expand=FieldValuesAsHtml&$filter=Id eq "+idtaller+"",
            type: "GET",
            headers: {
                "accept": "application/json;odata=verbose",
            },
            success : function(data) {
            //console.log(data)
            var numarea = data.d.results.length;
            
	           	var comunicados = data.d.results[0].Mesas_Comunicados;
	           	if(comunicados != null){
	           	$("#comunicados-mesas").append("<div id='sec-comunicados'>"+
	           										"<div id='titulo-comunicados'>Comunicados</div>"+
	           										"<div id='contenido-comunicados'>"+comunicados+"</div>"+
	           									"</div>")
	           }
            },
            failure : function(err) {
               // $("#message").text(JSON.stringify(err));
            }
        });

}


function cargarScriptCarrusell(){

	 $('.flexslider').flexslider({
          animation: "slide",
          animationSpeed: 400,
          animationLoop: false,
          itemWidth: 210,
          itemMargin: 50,
          minItems: getGridSize(), // use function to pull in initial value
          maxItems: getGridSize(), // use function to pull in initial value
          start: function(slider){
            $('body').removeClass('loading');
            flexslider = slider;
          }
        });
        
        var gridSize = getGridSize();

        flexslider.vars.minItems = gridSize;
        flexslider.vars.maxItems = gridSize;
}

 function getGridSize() {
        return (window.innerWidth < 375) ? 1 :
        		(window.innerWidth < 600) ? 2 :
            	(window.innerWidth < 1000) ? 3 : 4;
      }

