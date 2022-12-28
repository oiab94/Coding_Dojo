const unidad = require("./unidad");
const efecto = require("./efecto");

/**
 * * Cartas que se pueden utilizar
 */
let unidades = {
  unidad_1: new unidad("Ninja Cinturon Rojo", 3, 3, 4),
  unidad_2: new unidad("Ninja Cinturon Negro", 4, 5, 4),
};

let efectos = {
  efecto_1: new efecto(
    "Algoritmo Difícil",
    2,
    "Aumentar la resistencia del objetivo en 2",
    "Resiliencia",
    3
  ),
  efecto_2: new efecto(
    "Rechazo de promesa no manejando",
    1,
    "Reducir la resistencia del objetivo en 2",
    "Resiliencia",
    -2
  ),
  efecto_3: new efecto(
    "Programación en pareja",
    3,
    "Aumentar el poder del objetivo en 2",
    "Poder",
    2
  ),
};

/**
 * * Muestra como se juega las cartas
 */
// * Jugador 1 convoca a "Ninja Cinturon Rojo"
// * Jugador 1 juega a "Algoritmo Dificil" en "Ninja Cinturon Rojo"
efectos.efecto_1.utilizarEfecto(unidades.unidad_1);

// * Jugador 2 convoca a "Ninja Cinturon Negro"
// * Jugador 2 juega a "Rechazo de promesa no manejado" en "NinjaCinturonRojo"
efectos.efecto_2.utilizarEfecto(unidades.unidad_1);

// * Jugador 1 juega "Programación en pareja" en "NinjaCinturonRojo"
efectos.efecto_3.utilizarEfecto(unidades.unidad_1);

// * Jugador 1 tiene el ataque "NinjaCinturonRojo" "Ninja Cinturon Negro"
unidades.unidad_1.atacar(unidades.unidad_2);