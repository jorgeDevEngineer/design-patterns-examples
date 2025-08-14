/*
 * El patrón Adapter (Adaptador) permite que dos interfaces incompatibles trabajen juntas.
 * Un "traductor" (adapter) envuelve un objeto con una interfaz incompatible y
 * lo adapta a la interfaz que el cliente espera.
 * En este ejemplo, el cliente solo entiende inglés, pero el servicio de traducción
 * solo recibe peticiones en español. El adaptador actúa como un traductor que
 * une ambos sistemas.
 */


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