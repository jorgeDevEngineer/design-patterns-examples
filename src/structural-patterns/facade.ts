/*
 * Este ejemplo implementa el **Patrón Facade** usando una clase CafeteraFacade.
 * El proceso de hacer café involucra varios pasos: encender el calentador,
 * calentar agua, moler los granos y preparar la bebida.
 * 
 * En lugar de que el usuario interactúe con cada subsistema por separado,
 * la clase CafeteraFacade proporciona una interfaz simple (`hacerCafé()`)
 * que encapsula toda la complejidad del proceso.
 * 
 * Este patrón es útil para reducir la dependencia del cliente en múltiples clases
 * y para simplificar el uso de sistemas complejos.
 */

// Subsistemas
class Calentador {
    private encendido: boolean = false;
    private temperatura: number = 20; // Temperatura ambiente

    encender() {
        if (!this.encendido) {
            this.encendido = true;
            console.log("Calentador encendido");
        }
    }

    calentarAgua() {
        if (!this.encendido) {
            console.log("Error: El calentador está apagado");
            return;
        }

        while (this.temperatura < 90) {
            this.temperatura += 10;
            console.log(`Temperatura actual: ${this.temperatura}°C`);
        }

        console.log("Agua lista para preparar café");
    }

    apagar() {
        this.encendido = false;
        console.log("Calentador apagado");
    }
}

class Molino {
    private encendido: boolean = false;

    encender() {
        this.encendido = true;
        console.log("Molino encendido");
    }

    molerGranos() {
        if (!this.encendido) {
            console.log("Error: El molino está apagado");
            return;
        }

        console.log("Molino moliendo los granos de café...");
    }

    apagar() {
        this.encendido = false;
        console.log("Molino apagado");
    }
}

class Cafetera {
    private encendido: boolean = false;

    encender() {
        this.encendido = true;
        console.log("Cafetera encendida");
    }

    prepararCafé() {
        if (!this.encendido) {
            console.log("Error: La cafetera está apagada");
            return;
        }

        console.log("Preparando café...");
    }

    apagar() {
        this.encendido = false;
        console.log("Cafetera apagada");
    }
}

// Facade
class CafeteraFacade {
    private calentador: Calentador;
    private molino: Molino;
    private cafetera: Cafetera;

    constructor() {
        this.calentador = new Calentador();
        this.molino = new Molino();
        this.cafetera = new Cafetera();
    }

    hacerCafé() {
        console.log("☕ Iniciando proceso de preparación de café...");

        this.calentador.encender();
        this.calentador.calentarAgua();

        this.molino.encender();
        this.molino.molerGranos();

        this.cafetera.encender();
        this.cafetera.prepararCafé();

        console.log("✅ ¡Tu café está listo!");

        // Apagar subsistemas
        this.calentador.apagar();
        this.molino.apagar();
        this.cafetera.apagar();
    }
}

// Cliente
export class Facade {
    public static main(): void {
        const miCafetera = new CafeteraFacade();
        miCafetera.hacerCafé();
    }
}

