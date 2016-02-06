var latitude;
var longitude;
var maPosition;
var positionEtab;
var survId;

if(navigator.geolocation) {

	survId =  navigator.geolocation.watchPosition(recupCoordonnees);

} else {


	latitude = Cookies.get("latitude");
    longitude = Cookies.get("longitude");
}

function recupCoordonnees(position){

	navigator.geolocation.clearWatch(survId);
	latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    Cookies.set('latitude', position.coords.latitude);
	Cookies.set('longitude', position.coords.longitude);
}

var map;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();


function initialize() {

	maPosition = new google.maps.LatLng(latitude, longitude);

	positionEtab = new google.maps.LatLng(latEtab, lonEtab);

	var iconOrigine = new google.maps.MarkerImage("./img/pin_origine.svg",
	new google.maps.Size(48, 48), new google.maps.Point(0, 0),
	new google.maps.Point(24, 48));

	var iconDestination = new google.maps.MarkerImage("./img/pin_destination.svg",
	new google.maps.Size(48, 48), new google.maps.Point(0, 0),
	new google.maps.Point(24, 48));

	var myOptions = {
	zoom: 16,
	center: positionEtab,
	mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	map = new google.maps.Map(
	document.getElementById("map_etab"), myOptions);

	var markerOrigine = new google.maps.Marker({
	position: maPosition,
	map: map,
	icon: iconOrigine
	});

	var markerDestination = new google.maps.Marker({
	position: positionEtab,
	map: map,
	icon: iconDestination
	});

	directionsDisplay = new google.maps.DirectionsRenderer(
	{
		suppressMarkers: true
	});
	directionsDisplay.setMap(map);
	directionsDisplay.setPanel(document.getElementById('displayinfo_canvas'));

	directionsService.route({
	origin: maPosition,
	destination: positionEtab,
	unitSystem: google.maps.DirectionsUnitSystem.METRIC,
	travelMode: google.maps.DirectionsTravelMode.DRIVING
	}, function(result, status){
		if (status == google.maps.DirectionsStatus.OK){
			directionsDisplay.setDirections(result);
		}

	});

}

function showItineraire(){
	

	directionsService.route({
	origin: maPosition,
	destination: positionEtab,
	unitSystem: google.maps.DirectionsUnitSystem.METRIC,
	travelMode: google.maps.DirectionsTravelMode.DRIVING
	}, function(result, status){
		if (status == google.maps.DirectionsStatus.OK){
			directionsDisplay.setDirections(result);
		}
	});
}

$("#autour").click(function(){

	Cookies.set('proximite', $("#autour").is(':checked'));
	console.log(Cookies.get('proximite'));

});

$("#autour_view").click(function(){

	Cookies.set('proximite', $("#autour_view").is(':checked'));
	console.log(Cookies.get('proximite'));

});
