// Cambiar nombre al presionar edit profile
function cambiarNombre() {
	var texto = document.getElementById('nombreUser')

	texto.innerHTML = 'Other name'
}


// Remover los botones
function removerLinea(lineaQueSeRemueve, botonSeleccionado) {
	var texto = document.getElementById(lineaQueSeRemueve);
	var numberRequest = document.getElementById('numberRequest');


	if (botonSeleccionado == 1) 
		numberRequest.innerText = parseInt(numberRequest.innerText) + 1;	
	else
		numberRequest.innerText = parseInt(numberRequest.innerText) - 1;
	

	texto.remove();
}