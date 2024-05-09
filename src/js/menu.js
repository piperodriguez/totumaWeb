$(document).ready(function(){
	document.querySelector("#sidebar").classList.toggle("expand");
	$("#contentCarta").show();
	$("#contentEventos").hide();
	$("#contentReserva").hide();
	$("#contentContacto").hide();
	$("#contentHistoria").hide();

    $("#pageCarta").on('click', function(){
    	$("#contentEventos").hide();
		$("#contentReserva").hide();
		$("#contentContacto").hide();
		$("#contentHistoria").hide();
    	$("#contentCarta").show();
    });
	$("#home").on('click', function(){
    	$("#contentCarta").hide();
		$("#contentReserva").hide();
		$("#contentContacto").hide();
		$("#contentHistoria").hide();
    	$("#contentEventos").hide();
    });
    $("#pageEventos").on('click', function(){
    	$("#contentCarta").hide();
		$("#contentReserva").hide();
		$("#contentContacto").hide();
		$("#contentHistoria").hide();
    	$("#contentEventos").show();
    });
    $("#pageReserva").on('click', function(){
    	$("#contentEventos").hide();
		$("#contentContacto").hide();
		$("#contentHistoria").hide();
		$("#contentCarta").hide();
    	$("#contentReserva").show();
    });
    $("#pageContacto").on('click', function(){
    	$("#contentEventos").hide();
		$("#contentReserva").hide();
		$("#contentCarta").hide();
		$("#contentHistoria").hide();
    	$("#contentContacto").show();
    });
    $("#PageHistoria").on('click', function(){
    	$("#contentEventos").hide();
		$("#contentReserva").hide();
		$("#contentContacto").hide();
		$("#contentCarta").hide();
    	$("#contentHistoria").show();
    });
});
const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
   document.querySelector("#sidebar").classList.toggle("expand");
});