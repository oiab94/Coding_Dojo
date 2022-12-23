// * Consideremos la siguiente función
var sayHello = function (name) {
	console.log('Hello ' + name);
};


// * Utilizando la función flecha podemos reescribir la función
var sayHello = (name) => { console.log(`Hello ${name}`); };


// * Para métodos más simples podemos refinar el algoritmo anterior
var sayHello = name => console.log(`Hello ${name}`);


// * En caso de que se desee retornar un objeto podemos realizar los siguiente
const returnObj = () => {
	return {
			name 		 : 'juan',
			lastName : 'perez'
	};
};

const returnObjShort = () => ({name:'juan', lastName: 'perez'})

console.log(returnObjShort());