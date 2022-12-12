// Cuando el usuario presiona una cuidad despliega una alerta
function whenPressCity() {
	window.alert('Loading weather report!');
}



// -------------------------------------------------------
// Convertir Temperaturas
function convertTemperature() {
	let element = document.getElementById('temperature');

	if (element.value == 'celsius'){
		changeTemperatureCelsius();
		return;
	}
	changeTemperatureFahrenheit();
}

// Temperaturas almacenadas en diccionarios
let temperature_celsius = {
	'today' 	: ['24°', '18°'],
	'tomorrow': ['27°', '19°'],
	'friday' 	: ['21°', '16°'],
	'saturday': ['26°', '21°']
}
let temperature_fahrenheit = {
	'today'		: ['75°', '64°'],
	'tomorrow': ['80°', '66°'],
	'friday' 	: ['70°', '60°'],
	'saturday': ['79°', '70°']	
}
let ids = {
	'today' 	: ['today_max', 'today_min'],
	'tomorrow': ['tomorrow_max', 'tomorrow_min'],
	'friday'	: ['friday_max', 'friday_min'],
	'saturday': ['saturday_max', 'saturday_min']
}
// Cambiar el texto de las temperaturas
function changeTemperatureCelsius() {
	for (var key in ids) {
		var max = ids[key][0];
		var min = ids[key][1];

		document.getElementById(max).innerText = temperature_celsius[key][0];
		document.getElementById(min).innerText = temperature_celsius[key][1];
	}
}
function changeTemperatureFahrenheit() {
	for (var key in ids) {
		var max = ids[key][0];
		var min = ids[key][1];

		document.getElementById(max).innerText = temperature_fahrenheit[key][0];
		document.getElementById(min).innerText = temperature_fahrenheit[key][1];
	}
}


// -------------------------------------------------------
// Remover el elemento COOKIES
function removeCookies() {
	let element = document.getElementById('cookies');

	element.remove();
}