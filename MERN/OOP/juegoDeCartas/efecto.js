// * Importamos el módulo
const carta = require("./carta");

class efecto extends carta {
  // * Constructor
  constructor(nombre, costo, texto, stat, magnitud) {
    super(nombre, costo);
    this.texto = texto;
    this.stat = stat;
    this.magnitud = magnitud;
  }

  // * Aumenta o disminuye las estadísticas del objetivoo
  utilizarEfecto = (objetivo) => {
    // * Disminuye alguna estadística
    if (this.magnitud < 0) {
      if (this.stat == "Resiliencia") {
        objetivo.resiliencia -= this.magnitud;
        this.accion(
          `Disminuye resiliencia en ${objetivo.nombre} a: ${objetivo.resiliencia}`
        );
      } else{
        objetivo.poder -= this.magnitud;
        this.accion(
          `Disminuye poder en ${objetivo.nombre} a: ${objetivo.poder}`
        );
      }
      return;
    }

    // * Aumenta alguna estadística
    if (this.stat == "Resiliencia") {
      objetivo.resiliencia += this.magnitud;
      this.accion(
        `Aumento resiliencia en ${objetivo.nombre} a: ${objetivo.resiliencia}`
      );
    } else {
      objetivo.poder += this.magnitud;
      this.accion(
        `Aumento poder en ${objetivo.nombre} a: ${objetivo.poder}`
      );
    }
  };

  // * Muestra que acción va a realizar el objeto
  accion = (texto) => console.log(`${texto}`);
}

// * Exportamos el módulo
module.exports = efecto;
