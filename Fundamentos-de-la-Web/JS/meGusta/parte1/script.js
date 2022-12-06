function addLike(element) {
	var texto = document.getElementById("numeroDeLikes");
	
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