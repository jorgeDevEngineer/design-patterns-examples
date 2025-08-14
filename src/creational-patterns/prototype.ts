/*
 * Este código implementa el **Patrón Prototype**, que nos permite crear nuevos objetos
 * copiando un objeto existente sin que nuestro código dependa de sus clases concretas.
 * El proceso de clonación es delegado a los propios objetos, que saben cómo duplicarse
 * a sí mismos y a sus propiedades. Esto es útil para generar de forma eficiente
 * múltiples copias de un objeto base, como un batallón de soldados idénticos,
 * sin tener que pasar por un proceso de inicialización complejo cada vez.
 * El patrón es especialmente útil para evitar el acoplamiento y reducir el código
 * repetitivo en la creación de objetos.
 */
/*
Prototipo base para un soldado
*/
class Soldado {
  ID: number;
  rango: string;
  equipo: string[];

  // Firmas del constructor
  constructor(ID: number, rango: string, equipo: string[]);
  constructor(soldado: Soldado);

  // Implementación única
  constructor(IDOrSoldado: number | Soldado, rango?: string, equipo?: string[]) {
    if (typeof IDOrSoldado === 'number') {
      // Caso: parámetros individuales
      this.ID = IDOrSoldado;
      this.rango = rango!;
      this.equipo = equipo!;
    } else {
      // Caso: objeto Soldado
      this.ID = IDOrSoldado.ID;
      this.rango = IDOrSoldado.rango;
      this.equipo = [...IDOrSoldado.equipo];
    }
  }
  clone(): Soldado {
    return new Soldado(this);
  }

}

class Stormtrooper extends Soldado {
  legion: string;
  constructor(source: Stormtrooper) {
    super(source);
    this.legion = source.legion;
  }
  clone(): Stormtrooper {
    return new Stormtrooper(this);
  }
}

export class Prototype {
  public static main(): void {
    console.log("Creando prototipo de stormtrooper");
    let prototipo = new Stormtrooper({ ID: 1, rango: "soldado", equipo: ["blaster"], legion: "501" } as Stormtrooper);
    // El 'as Stormtrooper' es necesario para que TypeScript sepa el tipo correcto

    const batallon: Stormtrooper[] = [];
    for (let index = 0; index < 4; index++) {
      const nuevoStormtrooper = prototipo.clone();
      batallon.push(nuevoStormtrooper);
      batallon[index].ID = index + 1900; // Asignar un ID único]
    }

    console.log("Batallon creado");

    batallon.forEach(stormtrooper => {
      console.log(`Stormtrooper ID: ${stormtrooper.ID}, Rango: ${stormtrooper.rango}, Legion: ${stormtrooper.legion}`);
    });

    console.log("Original: " + prototipo);
  }
} 