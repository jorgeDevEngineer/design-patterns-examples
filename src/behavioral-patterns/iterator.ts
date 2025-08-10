/*
 * Este ejemplo implementa el **Patrón Iterator** usando una clase IteradorDeCaja.
 * El objetivo es recorrer una colección de juguetes sin exponer cómo están almacenados.
 * 
 * En lugar de que el cliente acceda directamente al array de juguetes,
 * se utiliza un iterador que proporciona una interfaz simple (`siguiente()`, `tieneMas()`)
 * para recorrer los elementos de forma segura y ordenada.
 * 
 * Este patrón es útil para abstraer la lógica de recorrido, permitir múltiples formas
 * de iteración y proteger la colección frente a accesos indebidos.
 */

// Interfaz del iterador
interface JugueteIterator {
    siguiente(): string | null;
    tieneMas(): boolean;
}

// Colección: Caja de Juguetes
class CajaDeJuguetes {
    private juguetes: string[] = [];

    agregarJuguete(juguete: string) {
        this.juguetes.push(juguete);
    }

    crearIterador(): JugueteIterator {
        return new IteradorDeCaja(this);
    }

    obtenerJuguetes(): string[] {
        return this.juguetes;
    }
}

// Iterador concreto
class IteradorDeCaja implements JugueteIterator {
    private caja: CajaDeJuguetes;
    private posicion: number = 0;

    constructor(caja: CajaDeJuguetes) {
        this.caja = caja;
    }

    tieneMas(): boolean {
        return this.posicion < this.caja.obtenerJuguetes().length;
    }

    siguiente(): string | null {
        if (this.tieneMas()) {
            return this.caja.obtenerJuguetes()[this.posicion++]; //Devuelve el valor antes de incrementar y luego define el valor incrementado en 1

        }
        return null;
    }
}

export class Iterator {
    // Cliente
    public static main(): void {
        const miCaja = new CajaDeJuguetes();

        miCaja.agregarJuguete("🚗 Carrito");
        miCaja.agregarJuguete("🧸 Osito");
        miCaja.agregarJuguete("🪀 Yoyo");
        miCaja.agregarJuguete("🎯 Dardos");

        const iterador = miCaja.crearIterador();

        console.log("Recorriendo la caja de juguetes:");
        while (iterador.tieneMas()) {
            console.log("Encontré:", iterador.siguiente());
        }
    }

}
