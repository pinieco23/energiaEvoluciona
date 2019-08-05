var Taller_realizado = ""
var fecha = ""
var Nombre_tallerId = ""
$(document).ready(function(){
	var pagina = $("#pageContentTitle a[title]").text();
	
	$("div#sec-logrosycompromisos").css("background","#fff")
	$("div#sec-logrosycompromisos").append("<div id='titulo-logro'><div>Logros</div><div>y Compromisos</div></div>")
	
	
	$.ajax({
		//url: "https://controlesempresarialesltda.sharepoint.com/sites/social/construyendopais/_api/web/GetFolderByServerRelativeUrl('Contructores')/files?$expand=Cargo,Orden,ListItemAllFields,ListItemAllFields/Modified&$orderby=ListItemAllFields/Orden asc&$top=100",
		
		url: _spPageContextInfo.webAbsoluteUrl+"/_api/web/GetFolderByServerRelativeUrl('Paginas')/files?$select=Name,ServerRelativeUrl,ListItemAllFields,Nombre_tallerId&$expand=ListItemAllFields&$filter=Name eq '"+pagina+".aspx'",
		type: "GET",
		headers: {
		     "accept": "application/json;odata=verbose",
		},
		success: function(data) {
		//console.log(data);
		
		var numarea = data.d.results.length;
		//alert(idtaller+"-"+ nombreTaller)
			for(i=0; i<numarea; i++){
			   Nombre_tallerId = data.d.results[i].ListItemAllFields.Nombre_tallerId;
			   var idtaller = data.d.results[i].ListItemAllFields.Nombre_tallerId;
			   Taller_realizado = data.d.results[i].ListItemAllFields.Taller_realizado;	
			   if(Taller_realizado == "No"){$("#sec-logrosycompromisos").remove();}		   
			   construirDetalle(idtaller);
			   galeria();		
			   mesas(idtaller);   
			   carruselMesas(idtaller);
			   comunidadosMesas(idtaller);

			   setTimeout(cargarScriptCarrusell,3000)
			   setTimeout(cargarScriptCarrusell,5000)

			   //setTimeout(carruselMesas,3000,idtaller);
			}			
			
			},
			error: function(error) {
			// alert(JSON.stringify(error));
			}
		});
});


function construirDetalle(idtaller){

	$.ajax({
            url: _spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Talleres')/items?$expand=FieldValuesAsHtml&$filter=Id eq "+idtaller+"",
            type: "GET",
            headers: {
                "accept": "application/json;odata=verbose",
            },
            success : function(data) {
            //console.log(data)
           	var imagenprincipal = data.d.results[0].FieldValuesAsHtml.__metadata.uri;
           	var TallerDepartamento = data.d.results[0].TallerDepartamento;
           	
           	imagenPrincipal(imagenprincipal)
           	mapaDepartamento(idtaller)
           	//$("#talleresrealizados").append(talleresrealizados+ " talleres")            	
            },
            failure : function(err) {
               // $("#message").text(JSON.stringify(err));
            }
        });
}


function imagenPrincipal(imagenprincipal ){
	$.ajax({
              url: ""+imagenprincipal+"",
              type: "GET",
              headers: {
                  "accept":"application/json; odata=verbose"
              },
              success: function onSuccess(data) {
              //console.log(data)
              	var imagenbanner_antes = data.d.TallerImagenBanner;
              	var imagenbanner_despues = data.d.TallerImagenBanner_x005f_Despues;
              	var participantes = data.d.TallerParticipantes;
              	var ciudad = data.d.TallerCiudadoMunicipio;
              	var departamento = data.d.TallerDepartamento;
              	var descripcionTaller = data.d.TallerDescripcion;
              	var lugar = data.d.TallerLugar;
              	var fecha =  data.d.Fecha_x005f_Taller;
              	var hora = data.d.Taller_x005f_Hora;
              	var categoria2 = data.d.TallerCategoria;
              	$("body").append("<div id='cat-oculta' style='display:none'>"+categoria2+"</div>")
              	var categoria = $("#cat-oculta").text();
              	var descripcioncategoria = data.d.TallerDescripcionCategoria;
              	var sabias1 = data.d.Taller_x005f_Imagen_x005f_1_x005f_SabiasQue;
	            var sabias2 = data.d.Taller_x005f_Imagen_x005f_2_x005f_SabiasQue;
	            var sabias3 = data.d.Taller_x005f_Imagen_x005f_3_x005f_SabiasQue;
	            var cuidad = data.d.TallerCiudadoMunicipio;
	            var videodespues = data.d.Taller_x005f_Video_x005f_Despues;
	            var videoantes = data.d.Taller_x005f_Video_x005f_Antes;
	            var videoMesa = data.d.Mesa_x005f_Video;
	            	fecha = data.d.Fecha_x005f_Taller;
	            	
				if(videoMesa != ""){
					$("#video-mesas").append(//'<div class="videofila1">Así <span>'+cuidad +'</span></div>'+
	              						 //'<div class="videofila2">Construye País</div>'+
	              						 '<div class="video-container">'+
	              						 	'<iframe width="760" height="515" src="https://www.youtube.com/embed/'+videoMesa +'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'+
	              						 '</div>');	
				}else{$("#video-mesas").remove();}
              	//if(videoMesa )
              	if(Taller_realizado == "Si"){
              		$("#sec-zonabanner").append(imagenbanner_despues)
	              	$("#sec-datos-taller-realizado").append("<div class='columna1'>"+
				              								  		"<div class='mapa'></div>"+
				              								  		"<div class='participantes'><span>"+participantes+"</span><span>participantes</span></div>"+
				              								  "</div>"+
				              								  "<div class='columna2'>"+
					              								  	"<div class='taller-ciudad'>"+ciudad +"</div>"+
					              								  	"<div class='taller-departamento'>("+departamento +")</div>"+
					              								  	"<div class='taller-descripcion'>"+descripcionTaller +"</div>"+
					              								  	"<div></div>"+
				              								  "</div>"+
				              								  "<div class='columna3'>"+              								  		
				              								  		"<div class='Lugar'>"+
					              								  		"<div>Lugar:</div>"+
					              								  		"<div>"+lugar+"</div>"+
					              								  		"<div>"+fecha+"</div>"+
					              								  		"<div>"+categoria +"</div>"+
					              								  		"<div>"+descripcioncategoria +"</div>"+
				              								  		"</div>"+
	              								 				"</div>");
	              		$("#sec-asi").append('<div class="videofila1">Así <span>'+cuidad +'</span></div>'+
	              						 '<div class="videofila2">Construye País</div>'+
	              						 '<div class="video-container">'+
	              						 	'<iframe width="760" height="515" src="https://www.youtube.com/embed/'+videodespues+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'+
	              						 '</div>');

	             }//final if  Taller realizado
	             if(Taller_realizado == "No"){
	             	$("#sec-zonabanner").append("<a href='/Paginas/construyendo-pais-inscripcion.aspx?id="+Nombre_tallerId+"'>"+imagenbanner_antes+"</a>")
		             /*var year = fecha.substring(6,10);
			         var month = fecha.substring(3,5);
			         var day = fecha.substring(0,2);*/
			         var arrayfecha = fecha.split("/");
        
			        var day = arrayfecha[0];
        			var month = arrayfecha[1];
      				var year = arrayfecha[2].substring(0,4);


			         var mes = parseInt(month);
			         var mes2 = mes - 1;		        
			         var mesarreglo =["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
	
			         var fecha2 = ""+year+"/"+month+"/"+day+""

			         
			         var x = new Date(fecha2);
			         var dias = ["Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

			         var dia = x.getDay();
	             	             
	             	$("#sec-datos-taller-proximo").append("<div id='sec-datos-taller-proximo'>"+
	             												"<div class='detalleTallerProximo'>"+
							    									"<div class='columa1'>"+
							    										"<div class='tituloTaller'>"+
							    											"<div>Seguimos <img alt='' src='/Style Library/construyendopais/img/icono-mano.jpg'/></div><div>Construyendo <span>País<span></div>"+
							    										"</div>"+
							    										"<div class='descripcionTaller'>"+descripcionTaller +"</div>"+
							    										"<div class='lugarTaller'>"+
							    											"<div class='fechaTaller'>"+
							    													"<div class='dia-detaller-Proximo'><div>"+dias[dia]+"</div><div><div class='triangulo'></div><div class='mes-detalle-Proximo'>"+mesarreglo[mes2]+"</div></div></div>"+
							    													"<div class='numero-detaller-Proximo'>"+day+"</div>"+
							    											"</div>"+
							    											"<div class='ubicacionTaller'>"+
							    												"<div class='lugar-detalle-Proximo'>Lugar:</div>"+
							    												"<div>"+lugar+"</div>"+
							    												"<div>"+hora+"</div>"+
							    											"</div>"+
							    										"</div>"+
							    										"<div class='participarTaller'><a href='/Paginas/construyendo-pais-inscripcion.aspx?id="+Nombre_tallerId+"'>Quiero participar</a></div>"+
							    									"</div>"+
							    									"<div class='columna2'></div>"+ 
							    								"</div>"+
							    							"</div>");
				
	             										  
	             	$("#sec-asi").append('<div class="videofila1">Así <span>'+cuidad +'</span></div>'+
	              						 '<div class="videofila2">Construye País</div>'+
	              						 '<div class="video-container">'+
	              						 	'<iframe width="760" height="515" src="https://www.youtube.com/embed/'+videoantes+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'+
	              						 '</div>');
	              consultadepartamento(departamento);	
	             }	              	
	              	$("#sec-sabiasque #sabias1").append(sabias1)
	              	$("#sec-sabiasque #sabias2").append(sabias2)
	              	$("#sec-sabiasque #sabias3").append(sabias3)	
			 },
              error: function onError(error) {
			        //alert('Error');
			   }
	});
}

function mapaDepartamento(idtaller){
	//var requestUri = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Departamentos')/items?$filter=TallerDepartamento eq '"+mapaDepartamento+"'";
	var requestUri = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Departamentos')/items?";

	$.ajax({
              url: requestUri,
              type: "GET",
              headers: {
                  "accept":"application/json; odata=verbose"
              },
              success: function onSuccess(data) {
              	//console.log(data)
              	var numarea = data.d.results.length;
              	
              	for(i=0; i < numarea; i++){
              		var Taller_IDId = data.d.results[i].Taller_IDId;
              		//console.log(TallerDepartamento)
              		if(Taller_IDId == idtaller){
              			var metadata = data.d.results[i].FieldValuesAsHtml.__deferred.uri;
		              	mostrarMapa(metadata )
		              	//console.log(metadata)
              		}
              	}              	
			 },
              error: function onError(error) {
			       // alert('Error');
			   }
	});
}

function mostrarMapa(metadata){
	var requestUri = metadata;
	//console.log(metadata)
		 $.ajax({
              url: ""+requestUri+"",
              type: "GET",
              headers: {
                  "accept":"application/json; odata=verbose"
              },
              success: function onSuccess(data) {              
              //console.log(data)
              	var imgmapa = data.d.Imagen1;
              	$(".columna1 .mapa").append(imgmapa)
			 },
              error: function onError(error) {
			        //alert('Error');
			   }
	});
}


function consultadepartamento(nombreDepartamento ){
		var requestUri = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Departamentos')/items?$filter=TallerDepartamento eq '"+nombreDepartamento +"'";
		 $.ajax({
              url: requestUri,
              type: "GET",
              headers: {
                  "accept":"application/json; odata=verbose"
              },
              success: function onSuccess(data) {
              //console.log(data)
              	var metadata = data.d.results[0].FieldValuesAsHtml.__deferred.uri;
              	mostrarPagina(metadata )
              	//console.log(metadata)
			 },
              error: function onError(error) {
			        //alert('Error');
			   }
});
}

function mostrarPagina(metadata ){
	var requestUri = metadata;
		 $.ajax({
              url: ""+requestUri+"",
              type: "GET",
              headers: {
                  "accept":"application/json; odata=verbose"
              },
              success: function onSuccess(data) {
              //console.log(data)
              	var imgmapa = data.d.Imagen2;
              	$(".detalleTallerProximo .columna2").append(imgmapa)
			 },
              error: function onError(error) {
			        //alert('Error');
			   }
	});
}


