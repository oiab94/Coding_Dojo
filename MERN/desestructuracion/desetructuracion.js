// Ejercicio 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)
/* Resultado
 * En el primer elemento la salida sera el primer elemento del array cars, en 
 * el segundo imprimira el segundo elemento del array
 */


// Ejercicio 2
const employee = {
	name		: 'Elon',
	age			: 47,
	company	: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);
/* Resultado
 * No se podra imprimir nada debido a que intentamos insertar un nuevo elemento 
 * en el objeto name.
 */



// Ejercicio 3
const person = {
	name	: 'Phil Smith',
	age		: 47,
	height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);
/* Resultado
 * La función imprimira el password que hemos creado después imprimira undefined
 * debido a que hashedPassword ha sido creado en el objeto person pero está se 
 * encuentra sin ningun valor interno
 */



// Ejercicio 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);
/* Resultado
 * El primer log imprira false dado que first = 2 y second = 5
 * El segundo log imprimira true dado que first = 2 y third = 2
 */



// Ejercicio 5
const lastTest = {
	key				: 'value',
	secondKey	: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
/* Resultado
 * El primer log imprimira la clave key que se encuentra en el objeto lastTest
 * El segundo log imprimira todo el array que se encuentra en secondKey
 * El tercer log imprimira el primer elemento del array secondKey
 * El cuarto log imprimira el último elemento del array secondKey
 */
