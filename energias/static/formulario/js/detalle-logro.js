var Nombre_tallerId = ""
var TipoContenidoPagina = ""
var idtaller = "";


$(document).ready(function(){
	var pagina = $("#pageContentTitle a[title]").text();
	
	
	$.ajax({		
		url: _spPageContextInfo.webAbsoluteUrl+"/_api/web/GetFolderByServerRelativeUrl('Paginas')/files?$select=Name,ServerRelativeUrl,ListItemAllFields,Nombre_tallerId&$expand=ListItemAllFields&$filter=Name eq '"+pagina+".aspx'",
		type: "GET",
		headers: {
		     "accept": "application/json;odata=verbose",
		},
		success: function(data) {
		//console.log(data)
		var numarea = data.d.results.length;
			for(i=0; i<numarea; i++){
			   Nombre_tallerId = data.d.results[i].ListItemAllFields.Nombre_tallerId;
			   idtaller = data.d.results[i].ListItemAllFields.Nombre_tallerId;
			   TipoContenidoPagina = data.d.results[i].ListItemAllFields.TipoContenidoPagina;
			   encabezadoTaller(idtaller);  			   
			   construirDetalleLogro(idtaller);	
			   construirDetalleTaller(idtaller);

			   //encabezadoTaller(idtaller)
			   if(TipoContenidoPagina == "Logros y Compromisos") {
			   		galeria();
			   		$("#sec-zonabanner").after('<div id="encadezado-logro">Logros y compromisos</div>')
			   }			   		   
			}						
			},
			error: function(error) {
			// alert(JSON.stringify(error));
			}
		});


});

function construirDetalleLogro(idtaller){

	$.ajax({
            url: _spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Logros y compromisos')/items?$expand=FieldValuesAsHtml&$filter=TallerId eq "+idtaller+"&$orderby=Orden_Logro_Compromiso asc",
            type: "GET",
            headers: {
                "accept": "application/json;odata=verbose",
            },
            success : function(data) {
           	$("#sec-logrosycompromisos").append("<div id='columna1'></div><div id='columna2'></div>")
           	var numarea = data.d.results.length;
           	if(numarea == "0"){$("#sec-logrosycompromisos").remove();}
           	for(i=0; i<numarea; i++){
           		var  idLogro=data.d.results[i].Id;
           		var  logro = data.d.results[i].Logro_Compromiso;
           		var  descripcionCorta = data.d.results[i].Descripcion_corta;
           		var  descripcionGeneral = data.d.results[i].Descripcion_general;
           		var  categoria = data.d.results[i].Categoria_Logro_CompromisoId;
           		var  idItemLogro = i+1;
           		
           		if(i ==  "0"){
           			$("#sec-logrosycompromisos #columna1").append("<div id='"+idItemLogro+"' class='itemLogro'>"+
           														  	"<div class='iconoCategoria'></div>"+
           														  	"<div class='tituloCategoria'></div>"+
           														  	"<div class='tituloLogro'>"+logro+"</div>"+
           														  	"<div class='descripcionLogro'>"+descripcionCorta+"</div>"+
           														  	"<div class='vermasLogro'><button type='button' id='"+idLogro+"' onclick='detalleGlobalLogro(this.id)'>Leer más</button><hr /></div>"+
           														  "</div>");
           			crearIconoCategoria("sec-logrosycompromisos",categoria,idItemLogro);
           		}else{
           			$("#sec-logrosycompromisos #columna2").append("<div id='"+idItemLogro+"' class='itemLogro'>"+
           														  	"<div class='iconoCategoria'></div>"+
           														  	"<div class='tituloCategoria'></div>"+
           														  	"<div class='tituloLogro'><img alt='' class='check' src='/Style Library/construyendopais/img/check.png'></img>"+logro+"</div>"+
           														  	"<div class='descripcionLogro'>"+descripcionCorta+"</div>"+
           														  	"<div class='vermasLogro'><button type='button' id='"+idLogro+"' onclick='detalleGlobalLogro(this.id)'>Leer más</button><hr /></div>"+
           														  "</div>");
           			crearIconoCategoria("sec-logrosycompromisos",categoria,idItemLogro);
           		}           		
           	}            	
            },
            failure : function(err) {
               // $("#message").text(JSON.stringify(err));
            }
        });
}

function crearIconoCategoria(seccion,idcategoria, posicionItem){
	$.ajax({
		url: _spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getByTitle('CategoriaLogros')/items?$select=Title,EncodedAbsUrl&$filter=Id eq "+idcategoria+"",
		type: "GET",
		headers: {
		     "accept": "application/json;odata=verbose",
		},
		success: function(data) {
			var urlImagen = data.d.results[0].EncodedAbsUrl;
			var titulo = data.d.results[0].Title;
			$("#"+seccion+" #"+posicionItem+" .iconoCategoria").append("<img alt='' src='"+urlImagen+"' ></img>")
			$("#"+seccion+" #"+posicionItem+" .tituloCategoria").append(titulo);							   			   			
		},
		error: function(error) {
			// alert(JSON.stringify(error));
		}
		});
}

function construirDetalleTaller(idtaller){
	if(TipoContenidoPagina == "Logros y Compromisos"){ 
		$.ajax({
			url: _spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getByTitle('Talleres')/items?$expand=FieldValuesAsHtml&$filter=Id eq "+idtaller+" ",
			type: "GET",
			headers: {
			     "accept": "application/json;odata=verbose",
			},
			success: function(data) {
			//console.log(data);
				var imagenbanner = data.d.results[0].FieldValuesAsHtml.__metadata.uri;
				  imagenBanner(imagenbanner);			   			
			},
			error: function(error) {
				// alert(JSON.stringify(error));
			}
		});
	}
}

function imagenBanner(imagenbanner){
	$.ajax({
              url: ""+imagenbanner+"",
              type: "GET",
              headers: {
                  "accept":"application/json; odata=verbose"
              },
              success: function onSuccess(data) {
              	var imagenbanner = data.d.TallerImagenBanner_x005f_Despues;  
              	$("#sec-zonabanner").append(imagenbanner)
              	//$("#sec-zonabanner").append("<div id='tituloBannerLogro'>Logros y Compromisos</div>")           
			 },
              error: function onError(error) {
			        //alert('Error');
			  }
	});
}

function detalleGlobalLogro(idtaller){

	$.ajax({
		url: _spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getByTitle('Logros y compromisos')/items?$expand=FieldValuesAsHtml&$filter=Id eq "+idtaller+" ",
		type: "GET",
		headers: {
		     "accept": "application/json;odata=verbose",
		},
		success: function(data) {
			//console.log(data)
			var Descripcion_general = data.d.results[0].Descripcion_general;
			var Logro_Compromiso = data.d.results[0].Logro_Compromiso;
			  $("body").append("<div id='modalLogro'>"+
			  						"<div class='contentModal'>"+
			  							"<div id='cerrar'><img alt='' src='/Style Library/construyendopais/img/cancelar.png' title='Cerrar' onclick='cerrar()'/></div>"+
			  							"<div id='data-modal'><div id='titulo-modal'>"+Logro_Compromiso+"</div><div>"+Descripcion_general+"</div></div>"+
			  						"</div>"+
			  				  "</div>")
			},
			error: function(error) {
			// alert(JSON.stringify(error));
			}
		});
}

function cerrar(){
	$("#modalLogro").remove();
}

function encabezadoTaller(idtaller){
	$.ajax({		
		url: _spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Talleres')/items?$expand=FieldValuesAsHtml&$filter=Id eq "+idtaller+" ",
		type: "GET",
		headers: {
		     "accept": "application/json;odata=verbose",
		},
		success: function(data) {
		//console.log(data);
		//var numarea = data.d.results.length;
		Taller = TallerCiudadoMunicipio = data.d.results[0].Title;
		TallerCiudadoMunicipio = data.d.results[0].TallerCiudadoMunicipio;
		TallerDepartamento = data.d.results[0].TallerDepartamento;
		Fecha_Taller = data.d.results[0].Fecha_Taller;
		TallerLugar = data.d.results[0].TallerLugar;

		var arrayfecha = Fecha_Taller.split("-")
		var year = arrayfecha[0];
        var month = arrayfecha[1];
        var day = arrayfecha[2].substring(0,2);
        
        var fechaorigen2= ""+year+"/"+month+"/"+day+""
        var x = new Date(fechaorigen2);
        //console.log(x)

         var dias = ["domingo","lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
         var dia = dias[x.getDay()]
         
         var mes = parseInt(month);
         var mes2 = mes - 1;
         var mesarreglo =["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];         
         var mes3= mesarreglo[mes2];		

		$("#sec-zonabanner ").after("<div id='encabezadoTaller'> "+TallerCiudadoMunicipio+", "+TallerDepartamento+", "+dia+" "+day+" de "+mes3+" de "+year+"</div>")
			
			},
			error: function(error) {
			// alert(JSON.stringify(error));
			}
		});


}

function encabezadoTaller(idtaller){
	$.ajax({		
		url: _spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Talleres')/items?$expand=FieldValuesAsHtml&$filter=Id eq "+idtaller+" ",
		type: "GET",
		headers: {
		     "accept": "application/json;odata=verbose",
		},
		success: function(data) {
		//console.log(data);
		//var numarea = data.d.results.length;
		Taller = TallerCiudadoMunicipio = data.d.results[0].Title;
		TallerCiudadoMunicipio = data.d.results[0].TallerCiudadoMunicipio;
		TallerDepartamento = data.d.results[0].TallerDepartamento;
		Fecha_Taller = data.d.results[0].Fecha_Taller;
		TallerLugar = data.d.results[0].TallerLugar;

		var arrayfecha = Fecha_Taller.split("-")
		var year = arrayfecha[0];
        var month = arrayfecha[1];
        var day = arrayfecha[2].substring(0,2);
        
        var fechaorigen2= ""+year+"/"+month+"/"+day+" "
        var x = new Date(fechaorigen2);

         var dias = ["domingo","lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
         var dia = dias[x.getDay()]
         
         var mes = parseInt(month);
         var mes2 = mes - 1;
         var mesarreglo =["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];         
         var mes3= mesarreglo[mes2];		

		$("#sec-zonabanner ").after("<div id='encabezadoTaller'> "+TallerCiudadoMunicipio+", "+TallerDepartamento+", "+dia+" "+day+" de "+mes3+" de "+year+"</div>")
			
			},
			error: function(error) {
			// alert(JSON.stringify(error));
			}
		});


}



