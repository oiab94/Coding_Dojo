import { pokemon } from "./pokemones.js";

// * Identificadores divisibles por algun valor
let idDivisiblePor = (array, valor) => {
  for (let index = 0; index < array.length; index++)
    if (array[index].id % 3 == 0) console.log(array[index]);
};

// * Pokemones con algun tipo de habilidad
let tipoDeHabilidades = (array, tipo) => {
  array.map((item) => {
    if (item.types.includes("fire")) console.log(item);
  });
};

// * Pokemones con más de un tipo
let conVariosTipos = (array) => {
  array.map((item) => {
    if (item.types.length > 1) console.log(item);
  });
};

// * Solamente nombres de los pokemones
let mostrarSoloNombres = (array) => {
  let nombres = [];

  array.filter((item) => nombres.push(item.name));

  return nombres;
};

// * Pokemones de tipo veneno
let mostrarConTipoVeneno = (array, tipo) => {
  let nombres = [];

  array.filter((item) => {
    if (item.types.includes(tipo)) nombres.push(item.name);
  });

  return nombres;
};

// * Prueba funciones
// idDivisiblePor(pokemon, 3);
// tipoDeHabilidades(pokemon, "fire");
// conVariosTipos(pokemon);
// console.log(mostrarSoloNombres(pokemon));
// console.log(mostrarSoloNombres(pokemon.filter((item) => item.id > 99)));
// console.log(mostrarConTipoVeneno(pokemon, "poison"));
// console.log(mostrarConTipoVeneno(pokemon, "flying"));
// console.log(mostrarConTipoVeneno(pokemon, "normal").length);