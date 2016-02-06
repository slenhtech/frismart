var geocoder = new google.maps.Geocoder();
function initialize() {

}

var survId;


if(navigator.geolocation) {

	survId =  navigator.geolocation.watchPosition(envoyerCoordonnees);


} else {

	var weatherCity = "http://api.openweathermap.org/data/2.5/weather?";
	$.getJSON( weatherCity, {
	lat: "0.4315",
	lon: "9.483448800000001",
	units: "metric",
	lang: "fr",
	appid: "9a9acabf3ab23a9c69117a55c819667a"
	})
	.done(function(data) {
	var a = data.dt;
	var datesss = new Date(a*1000);
	  document.getElementById("weather_city").innerHTML = data.name;
	  document.getElementById("weather_temp").innerHTML = Math.round(data.main.temp)+"°C";
	  document.getElementById("weather_lbl").innerHTML = data.weather[0].description;
	  document.getElementById("weather_icon").innerHTML = "<img src='./img/"+data.weather[0].icon+".svg' alt='"+data.weather[0].icon+"'>";
	    });

	Cookies.set("ville", "Libreville");



}



function envoyerCoordonnees(position){

	navigator.geolocation.clearWatch(survId);

	Cookies.set('latitude', position.coords.latitude);
	Cookies.set('longitude', position.coords.longitude);

	var weatherCity = "http://api.openweathermap.org/data/2.5/weather?";
	$.getJSON( weatherCity, {
	lat: position.coords.latitude,
	lon: position.coords.longitude,
	units: "metric",
	lang: "fr",
	appid: "9a9acabf3ab23a9c69117a55c819667a"
	})
	.done(function(data) {
	var a = data.dt;
	var datesss = new Date(a*1000);
	  document.getElementById("weather_city").innerHTML = data.name;
	  document.getElementById("weather_temp").innerHTML = Math.round(data.main.temp)+"°C";
	  document.getElementById("weather_lbl").innerHTML = data.weather[0].description;
	  document.getElementById("weather_icon").innerHTML = "<img src='./img/"+data.weather[0].icon+".svg' alt='"+data.weather[0].icon+"'>";
	  
	  Cookies.set("ville", data.name);	

	  

	});


	
} 

function envoyerGeocodage(latitude, longitude){

	var weatherCity = "http://api.openweathermap.org/data/2.5/weather?";
	$.getJSON( weatherCity, {
	lat: latitude,
	lon: longitude,
	units: "metric",
	lang: "fr",
	appid: "9a9acabf3ab23a9c69117a55c819667a"
	})
	.done(function(data) {
	var a = data.dt;
	var datesss = new Date(a*1000);
	  document.getElementById("weather_city").innerHTML = data.name;
	  document.getElementById("weather_temp").innerHTML = Math.round(data.main.temp)+"°C";
	  document.getElementById("weather_lbl").innerHTML = data.weather[0].description;
	  document.getElementById("weather_icon").innerHTML = "<img src='./img/"+data.weather[0].icon+".svg' alt='"+data.weather[0].icon+"'>";
	    });
	
} 

function searchAddress(){
	var adresse = document.getElementById("champ_meteo_city").value;
	geocoder.geocode({
	address: adresse
	}, function(results, status){
	if (status == google.maps.GeocoderStatus.OK){

		envoyerGeocodage(results[0].geometry.location.lat(),results[0].geometry.location.lng());

		
	} else {

		var weatherCity = "http://api.openweathermap.org/data/2.5/weather?";
		$.getJSON( weatherCity, {
		lat: "0.4315",
		lon: "9.483448800000001",
		units: "metric",
		lang: "fr",
		appid: "9a9acabf3ab23a9c69117a55c819667a"
		})
		.done(function(data) {
		var a = data.dt;
		var datesss = new Date(a*1000);
		  document.getElementById("weather_city").innerHTML = data.name;
		  document.getElementById("weather_temp").innerHTML = Math.round(data.main.temp)+"°C";
		  document.getElementById("weather_lbl").innerHTML = data.weather[0].description;
		  document.getElementById("weather_icon").innerHTML = "<img src='./img/"+data.weather[0].icon+".svg' alt='"+data.weather[0].icon+"'>";
		    });

	}
	});
}

