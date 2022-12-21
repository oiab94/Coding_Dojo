// Ejercicio 1
console.log(example);
let example = "I'm the example!";
/* Resultado
 * Indicaria que no se puede acceder al objeto example
*/


// Ejercicio 2
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}
/* Resultado
 * Las elevaciones se conservan lo unica que cambia es el objeto a otro objeto
*/


// Ejericio 3
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
/* Resultado
 * Imprime el primer objeto dado que nunca fue llamada la función print
*/


// Ejercicio 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
/* Resultado
 * Primero imprime el primer objeto, después llama a la función eat
 * modifica el objeto eat, imprime el nuevo objeto y por último modifica
 * de nuevo el objeto a otro texto
*/


// Ejercicio 5
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
/* Resultado
 * Arrojara un error debido a que no existe la función mean
*/


// Ejercicio 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
/* Resultado
 * El log imprime un objeto undefined, la función rewind indica que el objeto 
 * genre tendra un nuevo valor, se imprimira, el segundo genre tendra un nuevo 
 * objeto un nuevo valor
*/


// Ejercicio 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
/* Resultado
 * Arrojara un error debido a que dojo no se encuentra declarada como variable
*/


// Ejercicio 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
	const dojo = {};
	dojo.name = name;
	dojo.students = students;
	if(dojo.students > 50){
		dojo.hiring = true;
	}
	else if(dojo.students <= 0){
		dojo = "closed for now";
	}
	return dojo;
}
/* Resultado
 * El segundo log dará error debido a que la variabes dojo es una constante y 
 * no puede modificarse dado que el primer log ya escribio la primera variable.
*/