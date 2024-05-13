$(document).ready(function(){
	document.querySelector("#sidebar").classList.toggle("expand");
	
	let objDivsInicioOcultar = {
		div1: 'contentEventos',
		div2: 'contentReserva',
		div3: 'contentContacto',
		div4: 'contentHistoria',
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
		let objDivsInicioOcultar = {
			div1: 'contentEventos',
			div2: 'contentReserva',
			div3: 'contentContacto',
			div4: 'contentHistoria',
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
    	const objDivs = {
		  div1: 'contenedorubicacion',
		  div2: 'contentEventos',
		  div3: 'contentReserva',
		  div4: 'contentContacto',
		  div5: 'contentHistoria',
		  div7: 'divHome',
		  div8: 'divPlatoFuertes',
		  div9: 'divEnsaladas',
		  div10: 'divChill',
		  div11: 'divPostres'
		};
    	accionCapas(objDivs, 'hide');
		accionCapas({div1: 'divEntradas'}, 'show');
    	


    });

	$("#fuerte").on('click', function(){
    	const objDivs = {
		  div1: 'contenedorubicacion',
		  div2: 'contentEventos',
		  div3: 'contentReserva',
		  div4: 'contentContacto',
		  div5: 'contentHistoria',
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
		  div3: 'contentReserva',
		  div4: 'contentContacto',
		  div5: 'contentHistoria',
		  div6: 'contentCarta',
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
    	const objDivs = {
		  div1: 'contenedorubicacion',
		  div2: 'contentEventos',
		  div3: 'contentReserva',
		  div4: 'contentContacto',
		  div5: 'contentHistoria',
		  div6: 'contentCarta',
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
    	const objDivs = {
		  div1: 'contenedorubicacion',
		  div2: 'contentEventos',
		  div3: 'contentReserva',
		  div4: 'contentContacto',
		  div5: 'contentHistoria',
		  div6: 'contentCarta',
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
    	const objDivs = {
		  div1: 'contenedorubicacion',
		  div2: 'contentEventos',
		  div3: 'contentReserva',
		  div4: 'contentContacto',
		  div5: 'contentHistoria',
		  div6: 'contentCarta',
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
		const objDivs = {
		  div1: 'contenedorubicacion',
		  div3: 'contentReserva',
		  div4: 'contentContacto',
		  div5: 'contentHistoria'
		};
		accionCapas(objDivs, 'hide');
		accionCapas({div1: 'contentEventos'}, 'show');
    	
    });
    $("#pageReserva").on('click', function(){
		const objDivs = {
		  div1: 'contenedorubicacion',
		  div2: 'contentEventos',
		  div4: 'contentContacto',
		  div5: 'contentHistoria'
		};
		accionCapas(objDivs, 'hide');
		accionCapas({div1: 'contentReserva'}, 'show');

    });
    $("#pageContacto").on('click', function(){
		const objDivs = {
		  div1: 'contenedorubicacion',
		  div2: 'contentEventos',
		  div4: 'contentReserva',
		  div5: 'contentHistoria'
		};
		accionCapas(objDivs, 'hide');
    	accionCapas({div1: 'contentContacto'}, 'show');
    });
    $("#PageHistoria").on('click', function(){
		const objDivs = {
		  div1: 'contenedorubicacion',
		  div2: 'contentEventos',
		  div4: 'contentReserva',
		  div5: 'contentContacto'
		};
		accionCapas(objDivs, 'hide');
    	accionCapas({div1: 'contentHistoria'}, 'show');
    });
    $("#ubicacion").on('click', function(){
		const objDivs = {
		  div1: 'contentContacto',
		  div2: 'contentEventos',
		  div4: 'contentReserva',
		  div5: 'contentHistoria'
		};
		accionCapas(objDivs, 'hide');
		accionCapas({div1: 'contenedorubicacion'}, 'show');
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


function accionCapas(objCapas, accion){
	console.log(accion)
	for (let clave in objCapas){
		if (accion == 'hide') {
			console.log('ocultar');
			$("#"+objCapas[clave]).hide();
		}else{
			console.log('mostrar');
			$("#"+objCapas[clave]).show();
		}
	}
}
