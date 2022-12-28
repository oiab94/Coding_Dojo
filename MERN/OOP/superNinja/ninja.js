// * Clase Ninja
class ninja {
  // * Constructor de la clase ninja
  constructor(nombre, salud, velocidad = 3, fuerza = 3) {
    this.nombre = nombre;
    this.salud = salud;
    this.velocidad = velocidad;
    this.fuerza = fuerza;
  }

  // * Indica el nombre del Ninja
  sayName = () => console.log(`Hola mi nombre es ${this.nombre}`);

  // * Indica las estadísticas del Ninja
  showStats = () =>
    console.table({
      Fuerza: this.fuerza,
      Velocidad: this.velocidad,
      Salud: this.salud,
    });

  // * Aumenta la salud del Ninja
  drinkSake = () => (this.salud += 10);
}

// * Exportamos el nuevo módulo que contiene el objeto Ninja
module.exports = ninja;
