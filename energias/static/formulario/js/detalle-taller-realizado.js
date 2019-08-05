$(document).ready(function(){

var d = new Date();
var month = d.getMonth()+1;
var day = d.getDate();
fechaactual = d.getFullYear() + '-' +
    (month<10 ? '0' : '') + month + '-' +
    (day<10 ? '0' : '') + day;



	 $.ajax({
            url: _spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Talleres')/items?$filter=Fecha_Taller le datetime'"+fechaactual+"T00:00:00Z' ",
            type: "GET",
            headers: {
                "accept": "application/json;odata=verbose",
            },
            success : function(data) {
            //console.log(data)
           	var talleresrealizados = data.d.results.length;
			$(".itemtallerrealizado:first-child").parent().prepend('<div id="numero-talleres">'+
																		'<div class="linea1">Ya hemos realizado</div>'+
																		'<div id="talleresrealizados" class="linea2"></div>'+
																		'<div class="linea3">&quot;Construyendo País&quot;</div>'+
																	'</div>');
           	$("#talleresrealizados").append(talleresrealizados+ " talleres")
            	
            },
            failure : function(err) {
                $("#message").text(JSON.stringify(err));
            }
        });
        
        

 setTimeout(cambiofecha,1000)
 setTimeout(cambiofecha,3000)
 setTimeout(cambiofecha,5000)  
 setTimeout(cambiofecha,8000)   
   

});


function cambiofecha(){
$	(".itemtallerrealizado").each(function(){
        var fechataller = $(this).find("div.fechataller").html();
        var arrayfecha = fechataller.split("/");
        
        var day = arrayfecha[0];
        var month = arrayfecha[1];
        var year = arrayfecha[2].substring(0,4);

        
       /* var year = fechataller.substring(0,4);
        var month = fechataller.substring(5,7);
        var day = fechataller.substring(8,10);*/
        var mes = parseInt(month);
        var mes2 = mes - 1;
        
        var mesarreglo =["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
         
          $(this).find("div.fechapersonalizada div").remove();
         $(this).find("div.fechapersonalizada ").append("<div class='diataller'>"+day+"</div><div class='mestaller'>"+mesarreglo[mes2]+"</div>");
    });    
}

function abrirTallerRealizado(id){

	var idtaller = id;
	var nombreTaller= $("#"+idtaller+" ").attr("name");
	
	$.ajax({
		//url: "https://controlesempresarialesltda.sharepoint.com/sites/social/construyendopais/_api/web/GetFolderByServerRelativeUrl('Contructores')/files?$expand=Cargo,Orden,ListItemAllFields,ListItemAllFields/Modified&$orderby=ListItemAllFields/Orden asc&$top=100",
		
		url: _spPageContextInfo.webAbsoluteUrl+"/_api/web/GetFolderByServerRelativeUrl('Paginas')/files?$select=ServerRelativeUrl,ListItemAllFields,Nombre_tallerId&$expand=ListItemAllFields",
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
			   if(idTallerBusqueda == idtaller  && Taller_realizado == "Si"){
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
