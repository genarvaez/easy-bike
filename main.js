alert("hola");

function initMapa(){
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 5;
		center: {lat: -9.1191427, lng: -77.0349046}
		mapTypeControl: false;
		zoomControl: false;
		streetViewControl: false;
	})

	function buscar(){
		if(navigagtion.geolocation){
			navigator.geolocation.getCurrentPosition(funcionExito, funcionError)
		}
	}

	documen.getElementById("found").addEventListener("click", buscar);
	var longitud, latitud;

	var funcionExito = function(posicion){
		latitud = posicion.coords.latitude;
		longitud = posicion.coords.longitude;
	}

	var miUbicacion = new google.maps.Marker({
		postion: {lat: latitud, lng: longitud},
		animation: google.maps.Animation.DROP, map: map
	})

	map.setZoom(17);
	map.setCenter({lat: latitud, lng:longitud})

	var funcionError = function(error){
		alert("tenemos problemas para encontrar tu ubicacion")
	}
}