// Variables Globales
var currentUserName = '';
var link 						= 'https://api.github.com/users/'
var cardsDiv				= document.querySelector('#cards');


// Obtener los datos del usuario
function getUserName(element) {
	currentUserName = element.value;
}



/*		Buscar el usuario en la API
Una función "async" indica a JS que se tome su tiempo
y espere que el servidor responda la petición que se 
esta realizando
*/
async function search() {
	// await indica que hay que esperar alguna información
	// por eso la necesidad de usar una función async
	var response 	= await fetch(link + currentUserName);
	var coderData = await response.json();
	
	cardsDiv.innerHTML = makeCoderCard(coderData);
}



// Realiza la presentación de la tarjeta del usuario
function makeCoderCard(data) {
	var response = 
			`<div class='card'>
				<img src="${data.avatar_url}" alt="${data.login}">
				<h3>${data.name} - ${data.login}</h3>
				<p>Location: ${data.location}</p>
				<p>Repositories: ${data.public_repos}</p>
			</div>`

	return response;
}