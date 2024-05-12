$(document).ready(function(){
	document.querySelector("#sidebar").classList.toggle("expand");
	
	mostrarCapas("contentCarta")
	ocultarCapas("contentEventos");
	ocultarCapas("contentReserva");
	ocultarCapas("contentContacto");
	ocultarCapas("contentHistoria");
	ocultarCapas("contenedorubicacion");

    $("#pageCarta").on('click', function(){
    	$("#contenedorubicacion").hide();
    	$("#contentEventos").hide();
		$("#contentReserva").hide();
		$("#contentContacto").hide();
		$("#contentHistoria").hide();
    	mostrarCapas("contentCarta");
    });
    $("#pageEventos").on('click', function(){
    	$("#contenedorubicacion").hide();
    	$("#contentCarta").hide();
		$("#contentReserva").hide();
		$("#contentContacto").hide();
		$("#contentHistoria").hide();
    	mostrarCapas("contentEventos");
    });
    $("#pageReserva").on('click', function(){
    	$("#contenedorubicacion").hide();
    	$("#contentEventos").hide();
		$("#contentContacto").hide();
		$("#contentHistoria").hide();
		$("#contentCarta").hide();
    	mostrarCapas("contentReserva");
    });
    $("#pageContacto").on('click', function(){
    	$("#contenedorubicacion").hide();
    	$("#contentEventos").hide();
		$("#contentReserva").hide();
		$("#contentCarta").hide();
		$("#contentHistoria").hide();
    	mostrarCapas("contentContacto");
    });
    $("#PageHistoria").on('click', function(){
    	$("#contenedorubicacion").hide();
    	$("#contentEventos").hide();
		$("#contentReserva").hide();
		$("#contentContacto").hide();
		$("#contentCarta").hide();
    	mostrarCapas("contentHistoria");
    });
    $("#ubicacion").on('click', function(){
    	$("#contentEventos").hide();
		$("#contentReserva").hide();
		$("#contentContacto").hide();
		$("#contentCarta").hide();
		$("#contentHistoria").hide();
		mostrarCapas("contenedorubicacion");
    });
});

const hamBurger = document.querySelector(".toggle-btn");
hamBurger.addEventListener("click", function () {

	let contenedorMenu, sidebar, contenidoPagina;

	contenedorMenu = document.getElementById("main");
	sidebar = document.querySelector("#sidebar").classList;
	document.querySelector("#sidebar").classList.toggle("expand");

	//contenidoPagina	


	if (sidebar.value == "expand") {
		contenedorMenu.style.marginLeft = "18%";
		contenedorMenu.style.width = "82%";
		
	} else {
		contenedorMenu.style.marginLeft = "6%";
		contenedorMenu.style.width = "99%";
	}
   
});


function ocultarCapas(elemento){
	$("#"+elemento).hide();
}

function mostrarCapas(elemento){
	$("#"+elemento).show();
}