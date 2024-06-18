$(document).ready(function(){
	
	
	let medida = medidasPorDefecto(screen.width);
	

	switch (medida) {
	  case 1:
	    console.log('pantalla pequeña') 
	    break;
	  case 2:
	    console.log('pantalla mediana')
	    break;
	  
	  case 3:
	    console.log('pantalla grande')
	    break;
	}

	document.querySelector("#sidebar").classList.toggle("expand");
	
	let objDivsInicioOcultar = {
		div1: 'contentEventos',
		div3: 'contentContacto',
		div5: 'contenedorubicacion',
		div6: 'divEntradas',
		div8: 'divPlatoFuertes',
		div9: 'divEnsaladas',
		div10: 'divChill',
		div11: 'divPostres',
		div12: 'divBebidas'

	};
	accionCapas(objDivsInicioOcultar, 'hide');
	accionCapas({div1: 'divHome'}, 'show');

	$("#home").on('click', function(){
		$(".button-container").show();
		let objDivsInicioOcultar = {
			div1: 'contentEventos',
			div3: 'contentContacto',
			div5: 'contenedorubicacion',
			div6: 'divEntradas',
			div8: 'divPlatoFuertes',
			div9: 'divEnsaladas',
			div10: 'divChill',
			div11: 'divPostres',
			div12: 'divBebidas'
		};
		accionCapas(objDivsInicioOcultar, 'hide');
		accionCapas({div1: 'divHome'}, 'show');
	});

    $("#entradas").on('click', function(){

    	$(".button-container").hide();
    	const objDivs = {
		  div1: 'contenedorubicacion',
		  div2: 'contentEventos',
		  div4: 'contentContacto',
		  div7: 'divHome',
		  div8: 'divPlatoFuertes',
		  div9: 'divEnsaladas',
		  div10: 'divChill',
		  div11: 'divPostres',
		  div12: 'divBebidas'
		};
    	accionCapas(objDivs, 'hide');
		accionCapas({div1: 'divEntradas'}, 'show');
    	


    });

	$("#fuerte").on('click', function(){
		$(".button-container").hide();
    	const objDivs = {
		  div1: 'contenedorubicacion',
		  div2: 'contentEventos',
		  div4: 'contentContacto',
		  div7: 'divHome',
		  div8: 'divEntradas',
		  div9: 'divEnsaladas',
		  div10: 'divChill',
		  div11: 'divPostres',
		  div12: 'divBebidas'
		};
    	accionCapas(objDivs, 'hide');
		accionCapas({div1: 'divPlatoFuertes'}, 'show');
    });

    $("#salad").on('click', function(){
    	const objDivs = {
		  div1: 'contenedorubicacion',
		  div2: 'contentEventos',
		  div4: 'contentContacto',
		  div7: 'divHome',
		  div8: 'divEntradas',
		  div9: 'divPlatoFuertes',
		  div10: 'divChill',
		  div11: 'divPostres',
		  div12: 'divBebidas'
		};
    	accionCapas(objDivs, 'hide');
		accionCapas({div1: 'divEnsaladas'}, 'show');
		
    });

    $("#chill").on('click', function(){
    	$(".button-container").hide();
    	const objDivs = {
		  div1: 'contenedorubicacion',
		  div2: 'contentEventos',
		  div4: 'contentContacto',
		  div7: 'divHome',
		  div8: 'divEntradas',
		  div9: 'divPlatoFuertes',
		  div10: 'divEnsaladas',
		  div11: 'divPostres',
		  div12: 'divBebidas'
		};
    	accionCapas(objDivs, 'hide');
		accionCapas({div1: 'divChill'}, 'show');
		
		
    });

	$("#postres").on('click', function(){
		$(".button-container").hide();
    	const objDivs = {
		  div1: 'contenedorubicacion',
		  div2: 'contentEventos',
		  div4: 'contentContacto',
		  div7: 'divHome',
		  div8: 'divEntradas',
		  div9: 'divPlatoFuertes',
		  div10: 'divEnsaladas',
		  div11: 'divChill',
		  div12: 'divBebidas'
		};
    	accionCapas(objDivs, 'hide');
		accionCapas({div1: 'divPostres'}, 'show');
		
    });

	$("#bebidas").on('click', function(){
		$(".button-container").hide();
    	const objDivs = {
		  div1: 'contenedorubicacion',
		  div2: 'contentEventos',
		  div4: 'contentContacto',
		  div7: 'divHome',
		  div8: 'divEntradas',
		  div9: 'divPlatoFuertes',
		  div10: 'divEnsaladas',
		  div11: 'divChill',
		  div12: 'divPostres'
		};
    	accionCapas(objDivs, 'hide');
		accionCapas({div1: 'divBebidas'}, 'show');
		
    });

    $("#pageEventos").on('click', function(){
    	$(".button-container").show();
		const objDivs = {
		  div1: 'contenedorubicacion',
		  div4: 'contentContacto',
		  div7: 'divHome',
		  div8: 'divEntradas',
		  div9: 'divPlatoFuertes',
		  div10: 'divEnsaladas',
		  div11: 'divChill',
		  div12: 'divPostres',
		  div6: 'divBebidas'
		};
		accionCapas(objDivs, 'hide');
		accionCapas({div1: 'contentEventos'}, 'show');
    	
    });

    $("#pageContacto").on('click', function(){
    	$(".button-container").show();
		const objDivs = {
		  div1: 'contenedorubicacion',
		  div2: 'contentEventos',
		  div7: 'divHome',
		  div8: 'divEntradas',
		  div9: 'divPlatoFuertes',
		  div10: 'divEnsaladas',
		  div11: 'divChill',
		  div13: 'divPostres',
		  div12: 'divBebidas'
		};
		accionCapas(objDivs, 'hide');
    	accionCapas({div1: 'contentContacto'}, 'show');
    });

    $("#ubicacion").on('click', function(){
    	$(".button-container").show();
		const objDivs = {
		  div1: 'contentContacto',
		  div2: 'contentEventos',
		  div7: 'divHome',
		  div8: 'divEntradas',
		  div9: 'divPlatoFuertes',
		  div10: 'divEnsaladas',
		  div11: 'divChill',
		  div12: 'divBebidas'
		};
		accionCapas(objDivs, 'hide');
		accionCapas({div1: 'contenedorubicacion'}, 'show');
    });
});

const hamBurger = document.querySelector(".toggle-btn");
hamBurger.addEventListener("click", function () {

	console.log('hicieron click')

	let contenedorMenu, sidebar, contenidoPagina, anchoPantalla;

	contenedorMenu = document.getElementById("main");
	sidebar = document.querySelector("#sidebar").classList;
	console.log(sidebar.value)

	document.querySelector("#sidebar").classList.toggle("expand");


	anchoPantalla = screen.width;
	//contenidoPagina	

	if (sidebar.value == "") {
		
		console.log('aumente ');

		if (anchoPantalla < 768) {
			contenedorMenu.style.marginLeft = "14%";
		} else if(anchoPantalla >= 768 && anchoPantalla <= 1024){
			contenedorMenu.style.marginLeft = "7%";
			//contenedorMenu.style.width = "100%";
		} else {

		}


	} else {
		console.log('minimice ');
		if (anchoPantalla < 768) {
			contenedorMenu.style.marginLeft = "16%";
		} else if(anchoPantalla >= 768 && anchoPantalla <= 1024){
			contenedorMenu.style.marginLeft = "27%";
			//contenedorMenu.style.width = "100%";
		} else {

		}
		
		
	}
   
});


function accionCapas(objCapas, accion){
	for (let clave in objCapas){
		if (accion == 'hide') {
			$("#"+objCapas[clave]).hide();
		}else{
			$("#"+objCapas[clave]).show();
		}
	}
}



function medidasPorDefecto(ancho){
	//console.log(ancho)

	let x,rango,contenedorMenu, btn;
	x = ancho;
	rango = 0;
	contenedorMenu = document.getElementById("main");

	if (x < 768) {
    	rango = 1;
    	btn = document.querySelector(".toggle-btn");
    	btn.click();
    	contenedorMenu.style.marginLeft = "16%";

	} else if (x >= 768 && x <= 1024) {
	    rango = 2;
	    contenedorMenu.style.marginLeft = "27%";
	} else {
	    rango = 3;
	}

	return rango;
}


const button = document.getElementById('rappi-button');

button.addEventListener('click', () => {

  let url = "https://www.rappi.com.co/restaurantes/900408615-totuma-express";
  window.open(url, '_blank');

});