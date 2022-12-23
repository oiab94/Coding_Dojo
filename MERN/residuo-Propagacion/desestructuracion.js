const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// Dentro de otherAnimals conservamos los valores restantante de el array 
// animals
const [firstAnimal, secondAnimal, ...otherAnimals] = animals;
console.log(otherAnimals);