// Interfaz del Mediador: La Torre de Control
interface MediadorTrafico {
    notificar(emisor: Avion, mensaje: string): void;
}

// Clase Base del Componente: El Avión
abstract class Avion {
    protected torre: MediadorTrafico;
    public nombre: string;

    constructor(torre: MediadorTrafico, nombre: string) {
        this.torre = torre;
        this.nombre = nombre;
    }

    public enviarMensaje(mensaje: string): void {
        console.log(`[${this.nombre}] >> ${mensaje}`);
        this.torre.notificar(this, mensaje);
    }

    public abstract recibirMensaje(mensaje: string): void;
}

// Componente Concreto
class AvionConcreto extends Avion {
    public solicitarAterrizaje(): void {
        this.enviarMensaje("SOLICITUD: Aterrizaje.");
    }
    
    public recibirMensaje(mensaje: string): void {
        console.log(`[${this.nombre}] << ${mensaje}`);
        if (mensaje.includes("Aterrizaje autorizado")) {
            console.log(`\t✅ [${this.nombre}] Pista libre. Iniciando descenso (3s)...`);
            // Aquí el avión podría simular el aterrizaje...
        } else if (mensaje.includes("En cola")) {
            console.log(`\t⏳ [${this.nombre}] Esperando turno en la cola.`);
        }
    }
}

class TorreDeControl implements MediadorTrafico {
    // Cola de aviones esperando el recurso de aterrizaje
    private colaAterrizaje: AvionConcreto[] = [];
    private pistaOcupada: boolean = false;
    private tiempoOcupacionSegundos: number = 3;

    // EL MÉTODO CLAVE: Gestiona todas las interacciones
    public notificar(emisor: AvionConcreto, mensaje: string): void {
        console.log(`\n[TORRE] Recibido de ${emisor.nombre}: "${mensaje}"`);

        if (mensaje.includes("SOLICITUD: Aterrizaje")) {
            this.gestionarAterrizaje(emisor);
        }
        // Otras lógicas (ej. solicitud de ascenso) se simplifican o eliminan
    }

    private gestionarAterrizaje(emisor: AvionConcreto): void {
        if (!this.pistaOcupada) {
            // Pista libre: Conceder inmediatamente
            this.concederAterrizaje(emisor);
        } else {
            // Pista ocupada: Poner en cola
            this.colaAterrizaje.push(emisor);
            emisor.recibirMensaje(`Torre: En cola. Pista ocupada por ${this.tiempoOcupacionSegundos} segundos.`);
        }
    }

    private concederAterrizaje(avion: AvionConcreto): void {
        this.pistaOcupada = true;
        avion.recibirMensaje("Torre: Aterrizaje autorizado.");

        // SIMULACIÓN DE SEMÁFORO (3 segundos de ocupación)
        setTimeout(() => {
            this.liberarPista();
        }, this.tiempoOcupacionSegundos * 1000);
    }

    private liberarPista(): void {
        this.pistaOcupada = false;
        console.log(`\n[TORRE] --- PISTA LIBERADA ---`);

        // Comprobar la cola y notificar al siguiente
        if (this.colaAterrizaje.length > 0) {
            const siguienteAvion = this.colaAterrizaje.shift(); // Quitar el primero de la cola (FIFO)
            if (siguienteAvion) {
                console.log(`[TORRE] Concediendo pista a: ${siguienteAvion.nombre}`);
                this.concederAterrizaje(siguienteAvion);
            }
        } else {
            console.log("[TORRE] Cola vacía. Pista en espera.");
        }
    }
}


export class Mediator {
    public static main(): void {
        console.log("--- INICIO DE SIMULACIÓN (MEDIADOR SEMÁFORO) ---");
        console.log("Nota: La simulación de aterrizaje dura 3 segundos.");

        const torre = new TorreDeControl();
        const vuelo101 = new AvionConcreto(torre, "Vuelo 101");
        const vuelo202 = new AvionConcreto(torre, "Vuelo 202");
        const vuelo303 = new AvionConcreto(torre, "Vuelo 303");
        // Simulación de solicitudes casi simultáneas
        vuelo101.solicitarAterrizaje(); // 1. Ocupa la pista inmediatamente
        setTimeout(() => vuelo202.solicitarAterrizaje(), 1000); // 2. Entra en cola (1s después)
        setTimeout(() => vuelo303.solicitarAterrizaje(), 1500); // 3. Entra en cola (1.5s después)

        // Flujo de la Torre:
        // 1. Vuelo 101 Aterriza (3s de ocupación).
        // 2. A los 3 segundos, la pista se libera y se llama a Vuelo 202.
        // 3. Vuelo 202 Aterriza (3s de ocupación).
        // 4. A los 6 segundos, la pista se libera y se llama a Vuelo 303.
    }

}

