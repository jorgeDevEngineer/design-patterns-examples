/*
 * El patrón Adapter (Adaptador) permite que dos interfaces incompatibles trabajen juntas.
 * Un "traductor" (adapter) envuelve un objeto con una interfaz incompatible y
 * lo adapta a la interfaz que el cliente espera.
 * En este ejemplo, el cliente solo entiende inglés, pero el servicio de traducción
 * solo recibe peticiones en español. El adaptador actúa como un traductor que
 * une ambos sistemas.
 */

// La Interfaz que nuestra aplicación ya utiliza
interface IPasarelaPago {
    procesarPago(monto: number): void;
    obtenerEstado(): string;
}

// Implementación original que cumple con la interfaz
class PayPalService implements IPasarelaPago {
    procesarPago(monto: number): void {
        console.log(`[PayPalService] Pago de $${monto.toFixed(2)} procesado.`);
    }

    obtenerEstado(): string {
        return "[PayPalService] Conectado y listo.";
    }
}

// La librería externa con una interfaz incompatible
class StripeAPI {
    sendTransaction(amount: number, currency: string): boolean {
        console.log(`[StripeAPI] Enviando transacción de ${amount} ${currency}.`);
        return true; // Simula éxito
    }

    getConnectivityStatus(): string {
        return "Conexión Stripe OK.";
    }
}

// El Adaptador que convierte la API de Stripe
class StripeAdapter implements IPasarelaPago {
    private stripe: StripeAPI;

    constructor(stripeInstance: StripeAPI) {
        this.stripe = stripeInstance;
    }

    // Adaptamos 'procesarPago' a 'sendTransaction'
    procesarPago(monto: number): void {
        // El adaptador realiza la traducción de la llamada y parámetros
        const resultado = this.stripe.sendTransaction(monto, "USD");
        if (resultado) {
            console.log("[StripeAdapter] Pago exitoso a través de Stripe.");
        }
    }

    // Adaptamos 'obtenerEstado' a 'getConnectivityStatus'
    obtenerEstado(): string {
        // El adaptador devuelve el estado en el formato esperado
        return "[StripeAdapter] Estado: " + this.stripe.getConnectivityStatus();
    }
}


export class Adapter {
    public static main(): void {

        function ejecutarPago(pasarela: IPasarelaPago, monto: number): void {
            console.log(`\n--- Ejecutando con ${pasarela.obtenerEstado()} ---`);
            pasarela.procesarPago(monto);
            console.log("--------------------------------------------------");
        }
        // 1. Uso del servicio original
        const paypal = new PayPalService();
        ejecutarPago(paypal, 50.75);

        // 2. Uso del nuevo servicio, adaptado
        const stripeIncompatible = new StripeAPI();
        const stripeAdaptado = new StripeAdapter(stripeIncompatible);
        ejecutarPago(stripeAdaptado, 120.50);
    }
}

/*
interface EnglishSpeaker {
    sayHello(): string;
}
class EnglishClient implements EnglishSpeaker {
    public sayHello(): string {
        return "Hello from the English client!";
    }
}
interface SpanishSpeaker {
    decirHola(): string;
}
class SpanishService implements SpanishSpeaker {
    public decirHola(): string {
        return "¡Hola del servicio en español!";
    }
}

class SpanishToEnglishAdapter implements EnglishSpeaker {
    private readonly spanishService: SpanishService;

    constructor(spanishService: SpanishService) {
        this.spanishService = spanishService;
    }

    // El adaptador implementa el método de la interfaz en inglés (Target),
    // pero delega la llamada a la interfaz incompatible en español (Adaptee).
    public sayHello(): string {
        const spanishResult = this.spanishService.decirHola();
        // El adaptador transforma el resultado de español a inglés.
        return `Adaptador traduce: '${spanishResult}' a 'Hello'`;
    }
}

export class Adapter {
    public static main(): void {
        const clienteIngles = new EnglishClient();
        console.log("El cliente inglés se comunica directamente:");
        console.log(clienteIngles.sayHello()); // Funciona sin adaptador.

        const servicioEspanol = new SpanishService();
        
        console.log("Usando el adaptador para que el cliente hable con el servicio en español:");
        const traductor = new SpanishToEnglishAdapter(servicioEspanol);
        console.log(traductor.sayHello()); 
    }
}
    */