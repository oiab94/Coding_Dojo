var userLike = document.getElementsByClassName('user')
var users = ['neil_m', 'nichole_k', 'jim_r'];


// Busca en que posicion está el usuario
function findIndex(name) {
	for (let i = 0; i < users.length; i++)
		if (users[i] == name) 
			return i;
}


// Identifica sobre que usuario presiono el like
function whatUser(name) {
	index = findIndex(name);

	addLike(userLike[index]);
}


// Añade el like al texto correspondiente
function addLike(texto) {
	
	// Obtenemos el texto en formato string
	var textoString = texto.innerText;
	// console.log(textoString);


	// Separar el texto en un array 
	var arrayTexto = textoString.split(' ');
	// console.log(arrayTexto);


	// Verificar y aumentar la cantidad de like(s)
	var numeroDeLikes = arrayTexto[0];

	if (numeroDeLikes == '#') {
		texto.innerText = '1 like(s)'
		// console.log('1 like(s)');
	} else {;
		numeroDeLikes++;
		texto.innerText = numeroDeLikes + ' like(s)'
		// console.log(numeroDeLikes);
	}
}