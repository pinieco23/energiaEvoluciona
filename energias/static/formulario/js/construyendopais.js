$(document).ready(function(){

var urlsite=  _spPageContextInfo.webAbsoluteUrl;
    
//var top_pagina = $("#titlerow").offset();
//var top_pagina_px =  top_pagina.top; 
//var alto_menu = $("#titlerow").height();

setTimeout(function(){
	$("#miga div").css("display","block");
	}
	,1000);

	
$("#miga div span").each(function(){
	 	
        var pagina= $(this).text();
        if(pagina == "Páginas"){
        	$(this).css("display","none")
        	$(this).next().css("display","none");
        }
    });


$("#s4-workspace").scroll(function(){
	var top_pagina2 = $("#miga").offset();
	var top_pagina_px2 =  top_pagina2.top ; 
		
	redimensionar();
    function redimensionar(){
    	var ancho = $(window).width()
    	if(ancho > 800){
	    	var altoScroll = $("#s4-workspace").scrollTop();
	    	if( altoScroll > top_pagina_px2   ){
	    		$("#titlerow").addClass("fijo");
	    		$("#siteIcon").css({"height":"20px","margin":"0","line-height":"30px"})
	    		$(".ms-siteicon-img").css("max-height","40px")
	    		$(".ms-breadcrumb-box").css({"padding":"5px","height":"auto"})
	    		$(".ms-verticalAlignTop").css("vertical-align","middle")
	    		$("#searchInputBox").parent().css("display","none")
	    		$("div#zz10_V4QuickLaunchMenu ul li a").css("font-size","14px")
	
	    	}//final if
	    	else{
	    		$("#titlerow").removeClass("fijo")
	    		$("#siteIcon").css({"height":"64px","margin":"15px 20px auto 20px"})
	    		$(".ms-siteicon-img").css("max-height","64px")
	    		$(".ms-breadcrumb-box").css({"padding":"40px 0px 20px 0px","height":"64px"})
	    		$(".ms-verticalAlignTop").css("vertical-align","bottom")
	    		$("#searchInputBox").parent().css("display","block")
	    		$("div#zz10_V4QuickLaunchMenu ul li a").css("font-size","16px")
	
	    	}//final esle
    	}//final if ancho    	
    }
});


setTimeout(showfieldsedit,1000)
setTimeout(showfieldsedit,2000)
});

function showfieldsedit(){
	var edicion = $("#pageStatusBar").html();
	if($("#pageStatusBar").html()){
		$(".ocultar").removeClass("ocultar");
	}
	else{
		//alert("No contenido")
	}
}


$("input[type='color']").change(function(){
  	var color = $(this).val();
	$(this).parent().find(".ms-formfieldcontainer input").val(color);
	$(this).parent().find(".ms-formfieldcontainer input").attr("value",color);
});



$(document).ready(main);

var contadormenu = 1;
	function main(){	
			$('#menu-movil').click(function(){
				if(contadormenu == 1){
					$('#s4-bodyContainer').css({'position':'fixed'});
					$('.ms-breadcrumb-box ').animate({left: '0'},400);			
					$('#sideNavBox').css({'display':'none'});
					$("#sidebar").css("display","block");
					contadormenu = 0;
				}else{
						contadormenu = 1;
						$('#s4-bodyContainer').css({'position':'relative'})
						$('.ms-breadcrumb-box ').animate({left: '-100%'},600);
						$("#sidebar").css("display","none");
					}	
					
			});
	}


