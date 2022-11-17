/**
 * La aplicación debe medir la altura de un niño, puede mostrar si el niño es 
 * suficientemente alto para subirse a la montaña rusa. Mostrara el mensaje 
 * correcto al niño.
 */
// Paso 1
var alturaNiño = 145;

// Paso 2
function muestraSiElNiñoPuedeSubirALaMontañaRusa() {
// Paso 3
	if (alturaNiño > 52) console.log("Subete niño!");
	else console.log("Lo siento chico. Tal vez el proximo año");
}

// Ejecución función
//muestraSiElNiñoPuedeSubirALaMontañaRusa();

var number = '';
var x = 5;

while (x < 10) {
	number += x;
	x++;
}

console.log(number);

function name12() {
	var msg = 'codingdojo';
	for(var x = 1; x < msg.length - 5; x+=2){
		if (msg.length == 8) {
			for(var i = 0; i < 5; i++)
				console.log(i);
		}
		else{
			for(var i = msg.length; i > (msg.length - 3); i -= 2)
				console.log(i);
		}
	}
}
name12();