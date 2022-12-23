/**
 * * Haciendo copias de objetos o matrices
 */
const numeros = [1, 2, 3, 4, 5];
var numerosCopy = [...numeros];
console.log(numerosCopy);



/**
 * * Copia de objeto
 */
const 
	person = {
		firstName : 'Juan',
		lastName	: 'Perez',
		userName	: 'americo',
		addres		: {
			street 			 : 'Americo Pico',
			numberStreet : 221,
			zipcode			 : '193BE215',
		}
	};
const personCopy = { ...person };

// * Con esto muestra que la copia no hace referencia al objeto original
console.log(personCopy === person);

// * Aqui demuestra que la copia es superficial
console.log(personCopy.addres === person.addres);