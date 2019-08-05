$(document).ready(function(){

var numeroTalleresProximos = 153;

var d = new Date();
var month = d.getMonth()+1;
var day = d.getDate();
fechaactual = d.getFullYear() + '-' +
    (month<10 ? '0' : '') + month + '-' +
    (day<10 ? '0' : '') + day;





	$.ajax({
            url: _spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Talleres')/items",
            type: "GET",
            headers: {
                "accept": "application/json;odata=verbose",
            },
            success : function(data) {
            //console.log(data)
           	var talleresrealizados = data.d.results.length;
						
           	$("#numero-talleres-proximos").append("<div id='encabezadotalleresproximos'>"+
           											"<div class='icono-arbol'><img alt='' src='/Style Library/construyendopais/img/icono-arbol.jpg' /></div>"+
           											"<div class='textoencabezado'>"+
           												"<div>Vamos a realizar</div>"+
           												"<div class='numerotalleresproximos'>152 talleres</div>"+
           												"<div>en diferentes municipios del país</div>"+
           											"</div>"+
           											"</div>");
           	if( $("#numero-talleres-proximos").length < 1 ){
				$(".itemtallerproximo:first-child").parent().prepend('<div id="numero-talleres-proximos-home">'+
																		'<div class="linea1">Vamos a realizar</div>'+
																		'<div class="linea2">'+numeroTalleresProximos+' talleres</div>'+
																		'<div class="linea3">en diferentes municipios del país</div>'+
																	'</div>')

			}
            	
            },
            failure : function(err) {
                //$("#message").text(JSON.stringify(err));
            }
        });
        
        

 setTimeout(cambiofechaproximo,1000)
 setTimeout(cambiofechaproximo,3000)
 setTimeout(cambiofechaproximo,5000)  
 setTimeout(cambiofechaproximo,8000)   
   

});


function cambiofechaproximo(){

	$(".itemtallerproximo").each(function(){
        var fechataller = $(this).find("div.fechataller").html();
        var arrayfecha = fechataller.split("/")
        var idTaller= $(this).find("div.imagentaller").attr("id");
        
        var day = arrayfecha[0];
        var month = arrayfecha[1];
        var year = arrayfecha[2].substring(0,4);
        
        var mes = parseInt(month);
        var mes2 = mes - 1;
       
        var mesarreglo =["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
         
         $(this).find("div.fechapersonalizada div").remove();
         $(this).find("div.fechapersonalizada").append("<div class='triangulo '></div><div class='mestaller'>"+mesarreglo[mes2]+".</div><div class='diataller'>"+day+"</div><div id='"+idTaller+"' class='vermas' onclick='abrirDetalleTallerProximo(this.id)'>Ver más</div>");
    });    
}

function abrirTallerProximo(id){

    var idTallerRealizado = id;
    var nombreTaller = ""
    $.ajax({
		//url: "https://controlesempresarialesltda.sharepoint.com/sites/social/construyendopais/_api/web/GetFolderByServerRelativeUrl('Contructores')/files?$expand=Cargo,Orden,ListItemAllFields,ListItemAllFields/Modified&$orderby=ListItemAllFields/Orden asc&$top=100",
		
		url: _spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Talleres')/items?$filter=Id eq "+idTallerRealizado+" ",
		type: "GET",
		headers: {
		     "accept": "application/json;odata=verbose",
		},
		success: function(data) {
		//console.log(data);
		var fechaorigen = $("#"+idTallerRealizado+" .fechataller").text();
		
		var arrayfecha = fechaorigen.split("/")
		var day = arrayfecha[0];
        var month = arrayfecha[1];
        var year = arrayfecha[2].substring(0,4);

		var fechaorigen2= ""+year+"/"+month+"/"+day+""

		var x = new Date(fechaorigen2);

         var dias = ["Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
         var dia = x.getDay();
         
		nombreDepartamento = data.d.results[0].TallerDepartamento;
		Taller_ID_Concat = data.d.results[0].Taller_ID;
		var numarea = data.d.results.length;
		
		var mestaller = $("#"+idTallerRealizado+" .mestaller ").text();
		var diataller = $("#"+idTallerRealizado+" .diataller").text();
		var horaTaller  = data.d.results[0].Taller_Hora;
		
			    $("#resultado-talleres .detalleTallerProximo").remove();
   				$("#resultado-talleres ").append("<div class='detalleTallerProximo'>"+
			    									"<div class='columa1'>"+
			    										"<div class='tituloTaller'>"+
			    											"<div>Seguimos <img alt='' src='/Style Library/construyendopais/img/icono-mano.jpg'/></div><div>Construyendo <span>País<span></div>"+
			    										"</div>"+
			    										"<div class='descripcionTaller'>"+data.d.results[0].TallerDescripcion+"</div>"+
			    										"<div class='lugarTaller'>"+
			    											"<div class='fechaTaller'>"+
			    													"<div class='dia-detaller-Proximo'><div>"+dias[x.getDay()]+"</div><div><div class='triangulo'></div><div class='mes-detalle-Proximo'>"+mestaller+"</div></div></div>"+
			    													"<div class='numero-detaller-Proximo'>"+diataller+"</div>"+
			    											"</div>"+
			    											"<div class='ubicacionTaller'>"+
			    												"<div class='lugar-detalle-Proximo'>Lugar:</div>"+
			    												"<div>"+data.d.results[0].TallerLugar+"</div>"+
			    												"<div>"+horaTaller+"</div>"+
			    										"</div>"+
			    										"</div>"+
			    										"<div class='participarTaller'><a href='/Paginas/construyendo-pais-inscripcion.aspx?id="+idTallerRealizado+"'>Quiero participar</a></div>"+
			    									"</div>"+
			    									"<div class='columna2'></div>"+ 
			    								"</div>");
			    //consultadepartamento(nombreDepartamento) funcion original consulta de solo por departamento
			    consultadepartamento(idTallerRealizado)//funcion posterior consulta por id de taller concatrado
			
			
			},
			error: function(error) {
			// alert(JSON.stringify(error));
			}
		});
	

    
}

function consultadepartamento(idTallerRealizado){

		//var requestUri = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Departamentos')/items?$filter=TallerDepartamento eq '"+nombreDepartamento +"'";
		var requestUri = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('Departamentos')/items?$filter=Taller_IDId eq '"+idTallerRealizado+"'";
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

function abrirDetalleTallerProximo(idtaller){
	$.ajax({
		//url: "https://controlesempresarialesltda.sharepoint.com/sites/social/construyendopais/_api/web/GetFolderByServerRelativeUrl('Contructores')/files?$expand=Cargo,Orden,ListItemAllFields,ListItemAllFields/Modified&$orderby=ListItemAllFields/Orden asc&$top=100",
		
		url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/GetFolderByServerRelativeUrl('Paginas')/files?$select=ServerRelativeUrl,ListItemAllFields,Nombre_tallerId&$expand=ListItemAllFields",
		type: "GET",
		headers: {
		     "accept": "application/json;odata=verbose",
		},
		success: function(data) {
		//console.log(data);
		
		var numarea = data.d.results.length;
		//alert(idtaller+"-"+ nombreTaller)
			for(i=0; i<numarea; i++){
			   var idTallerBusqueda = data.d.results[i].ListItemAllFields.Nombre_tallerId;
			   var Taller_realizado = data.d.results[i].ListItemAllFields.Taller_realizado;
			   var urlpagina = data.d.results[i].ServerRelativeUrl;			   
			   if(idTallerBusqueda == idtaller  && Taller_realizado == "No"){
			   //alert(urlpagina )
			   	window.location.href = urlpagina;
			   }
			}			
			
			},
			error: function(error) {
			// alert(JSON.stringify(error));
			}
		});

}
