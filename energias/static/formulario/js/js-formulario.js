var idurl = ""
var Taller = ""
var TallerCiudadoMunicipio = ""
var TallerDepartamento = ""
var TallerLugar = ""
var Fecha_Taller= ""

SP.SOD.executeFunc('SP.js', 'SP.ClientContext', function()
{
  var _ctx = SP.ClientContext.get_current();      
});


	var siteUrl = _spPageContextInfo.webAbsoluteUrl;


function validarRegistro(){
	var cedula = $("#cedula input").val();
	var nombres = $("#nombres input").val();
	var apellidos = $("#apellidos input").val();
	var correo = $("#correo input").val();
	var telefono = $("#telefono input").val();
	var entidad = $("#entidad input").val();
	var cargo = $("#cargo input").val();
	var ciudad = $("#ciudad input").val();
	
	if(cedula != "" && nombres != "" && apellidos != "" && telefono != "" && ciudad != "" && bot == "OK"){

	
		$.ajax({		
			url: _spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('InscripcionesTalleres')/items?$filter=(Title eq "+cedula+")and(CiudadTaller eq '"+TallerCiudadoMunicipio+"')",
			type: "GET",
			headers: {
			     "accept": "application/json;odata=verbose",
			},
			success: function(data) {
			console.log(data);
			var numarea = data.d.results.length;
				if(numarea < 1){
					createListItem();
				}
				else{
					alert("Ya esta registrado para este taller")
			   		window.location.href = siteUrl +"/Paginas/graciascp.aspx?id="+idurl+"";
				}			
			},
				error: function(error) {
				// alert(JSON.stringify(error));
			}
		});
	}//final if
	else{
		alert("Debe dilgenciar todos los campos obligatorios (*)")
	}


	
}

function createListItem() {
	var cedula = $("#cedula input").val();
	var nombres = $("#nombres input").val();
	var apellidos = $("#apellidos input").val();
	var correo = $("#correo input").val();
	var telefono = $("#telefono input").val();
	var entidad = $("#entidad input").val();
	var cargo = $("#cargo input").val();
	var ciudad = $("#ciudad input").val();
	//var taller = $("#nombres input").val();
	//var lugar = $("#nombres input").val();
	//var hora = $("#nombres input").val();


    var clientContext = new SP.ClientContext(siteUrl);
    var oList = clientContext.get_web().get_lists().getByTitle('InscripcionesTalleres');
        
    var itemCreateInfo = new SP.ListItemCreationInformation();
    this.oListItem = oList.addItem(itemCreateInfo);
        
    oListItem.set_item('Title', cedula);
    oListItem.set_item('Nombres', nombres);
    oListItem.set_item('Apellidos', apellidos );
    oListItem.set_item('Correo', correo );
    oListItem.set_item('Telefono', telefono );
    oListItem.set_item('Entidad', entidad );
    oListItem.set_item('Cargo', cargo );
    oListItem.set_item('Ciudad', ciudad );
    
    oListItem.set_item('Taller', Taller);
    oListItem.set_item('Fecha', Fecha_Taller);
    oListItem.set_item('Departamento', TallerDepartamento );
    oListItem.set_item('Lugar', TallerLugar);
    oListItem.set_item('CiudadTaller', TallerCiudadoMunicipio );
    
    //oListItem.set_item('Correo', correo);
        
    oListItem.update();

    clientContext.load(oListItem);
        
    clientContext.executeQueryAsync(function(){
    		alert("Registro exitoso")
		    window.location.href = siteUrl +"/Paginas/graciascp.aspx?id="+idurl+"";

    	},
    	function(){
	    	  //alert("Ya esta registrado para este taller")
	    	 // window.location.href = siteUrl +"/Paginas/graciascp.aspxid="+idurl+"";
    	});
}

$(document).ready(function(){
	var url = window.location.search;
	idurl = url.substring(url.lastIndexOf('=') + 1);
	
	$.ajax({		
		url: _spPageContextInfo.webAbsoluteUrl+"/_api/web/lists/getbytitle('Talleres')/items?$expand=FieldValuesAsHtml&$filter=Id eq "+idurl +" ",
		type: "GET",
		headers: {
		     "accept": "application/json;odata=verbose",
		},
		success: function(data) {
		console.log(data);
		//var numarea = data.d.results.length;
		Taller = TallerCiudadoMunicipio = data.d.results[0].Title;
		TallerCiudadoMunicipio = data.d.results[0].TallerCiudadoMunicipio;
		TallerDepartamento = data.d.results[0].TallerDepartamento;
		Fecha_Taller = data.d.results[0].Fecha_Taller;
		TallerLugar = data.d.results[0].TallerLugar;
		//alert(idtaller+"-"+ nombreTaller)
		$("#datos-taller #ciudad").append(TallerCiudadoMunicipio)
		$("#datos-taller #departamento").append(" "+TallerDepartamento)
		var arrayfecha = Fecha_Taller.split("-")
		var year = arrayfecha[0];
        var month = arrayfecha[1];
        var day = arrayfecha[2].substring(0,2);
        
        var fechaorigen2= ""+year+"/"+month+"/"+day+" "
        var x = new Date(fechaorigen2);
        console.log(x)

         var dias = ["domingo","lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
         var dia = dias[x.getDay()]

         
         var mes = parseInt(month);
         var mes2 = mes - 1;
         var mesarreglo =["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];         
         var mes3= mesarreglo[mes2];		

		$("#datos-taller #fecha").append(" "+dia+" "+day+" de "+mes3+" de "+year)
		$("#contenido-registro-exitoso #linea3 div").append("Lo esperamos el "+dia+" "+day+" de "+mes3+" de "+year+". "+TallerLugar+" - "+TallerCiudadoMunicipio +"  ")
			
			},
			error: function(error) {
			// alert(JSON.stringify(error));
			}
		});
		
    
    $('#cedula input').on('input', function () { //validacion campo cedula
	    this.value = this.value.replace(/[^0-9]/g,'');
	});


});


