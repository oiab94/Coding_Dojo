// * Exportamos la clase ninja
const ninja = require("./ninja");

// * Creamos la clase Sensei
class sensei extends ninja {
  // * Constructor de Sensei
  constructor(
    nombre,
    salud = 200,
    velocidad = 10,
    fuerza = 10,
    sabiduria = 10
  ) {
    super(nombre, salud, velocidad, fuerza);
    this.sabiduria = sabiduria;
  }

  // * El método aumenta la salud del Sensei
  speakWisdom = () => {
    console.log(
      "Lo que un programador lo puede hacer en un mes," +
        "dos programadores pueden hacerlo en dos meses"
    );
		this.drinkSake();
		console.table({
      Nombre: this.nombre,
      Salud: this.salud,
      Velocidad: this.velocidad,
			Fuerza: this.fuerza,
			Sabiduria: this.sabiduria
    });
  };
}

// * Exportamos la clase
module.exports = sensei;