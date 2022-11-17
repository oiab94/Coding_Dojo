// Prediccion 1:
// Cuando está función se llamada indicara
// en la pantalla -> Naci en 1980
function myBirthYearFunc() {
	console.log("Naci en " + 1980);
}

// Predicción 2:
// Cuando está función sea llamada indicara
// en la pantalla -> Naci en (variable ingresada)
function myBirthYearFunc(EntradaAñoNacimiento) {
	console.log("Naci en " + EntradaAñoNacimiento);
}

// Predicción 3:
// Cuando esta función sea llamada indicara
// la suma de ambos numerós -> 30
function add(num1, num2) {
	console.log("Sumando números");
	console.log("num1 es: " + num1);
	console.log("num2 es: " + num2);
	var sum = num1 + num2;
	console.log(sum);
}

for (i = 0; i < 5; i++) {
	console.log(i);	
}