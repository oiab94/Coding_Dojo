// * Importamos la clase padre
const carta = require("./carta");

class unidad extends carta {
  // * Constructor de la clase unit
  constructor(nombre, costo, poder, resiliencia) {
    super(nombre, costo);
    this.poder = poder;
    this.resiliencia = resiliencia;
  }

  atacar = (objetivo) => {
    objetivo.resiliencia -= this.poder;
    console.log(
      `Disminuyo la resiliencia del ${objetivo.nombre} a ${objetivo.resiliencia}`
    );
  };

  // * Muestra que acción va a realizar el objeto
  accion = (texto) => console.log(`${texto} "${this.nombre}"`);

  toString = () => {
    console.table({
      Nombre: this.nombre,
      Costo: this.costo,
      Poder: this.poder,
      Resiliencia: this.resiliencia,
    });
  };
}

// * Exportamos el módulo
module.exports = unidad;
