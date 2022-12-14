// Imprimir impares 1-20
for (let index = 1; index < 21; index++) {
	if(index % 2 != 0) console.log(index);	
}
console.log();



// Disminuir multiplos de 3
for (let index = 100; index > -1; index--) {
	if (index % 3 == 0) console.log(index);
}
console.log();



// Imprime secuencia
var i = 4
while (i > -4) {
	console.log(i);
	i-= 1.5
}
console.log();



// Sigma
var i = 1;
var resul = 0
while (i < 101) {
	resul += i;
	i++;
}
console.log(resul);
console.log();



// Factorial
var i = 1;
var resul = i;
while (i < 13) {
	resul *= i;
	i++;
}
console.log(resul);
console.log();