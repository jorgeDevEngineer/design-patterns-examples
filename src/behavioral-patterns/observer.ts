// --- 1. Interfaces ---
// La interfaz del Suscriptor (Observer)
interface Suscriptor {
    // El método de actualización que el Notificador llamará
    actualizar(notificador: Notificador): void;
}

// La interfaz del Notificador (Subject)
interface Notificador {
    // Añade un suscriptor a la lista.
    suscribir(suscriptor: Suscriptor): void;
    // Elimina un suscriptor de la lista.
    cancelarSuscripcion(suscriptor: Suscriptor): void;
    // Notifica a todos los suscriptores sobre un evento.
    notificar(): void;
}

// --- 2. Clases Concretas ---

// El Notificador (Subject): el producto que cambia de estado
// La clase Producto implementa el notificador, por lo que debe trabajar con la interfaz Suscriptor.
class Producto implements Notificador {
    // El arreglo de suscriptores se define correctamente para aceptar cualquier objeto que implemente la interfaz.
    private suscriptores: Suscriptor[] = [];
    public nombre: string;
    public enStock: boolean = false;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    // --- CORRECCIÓN AQUÍ: Usamos la interfaz 'Suscriptor' en lugar de la clase 'Cliente' ---
    public suscribir(suscriptor: Suscriptor): void {
        const yaSuscrito = this.suscriptores.includes(suscriptor);
        if (yaSuscrito) {
            console.log(`- ${this.nombre}: El suscriptor ya está suscrito.`);
            return;
        }
        console.log(`✅ ${this.nombre}: Se ha agregado un nuevo suscriptor.`);
        this.suscriptores.push(suscriptor);
    }

    // --- CORRECCIÓN AQUÍ: Usamos la interfaz 'Suscriptor' en lugar de la clase 'Cliente' ---
    public cancelarSuscripcion(suscriptor: Suscriptor): void {
        const indice = this.suscriptores.indexOf(suscriptor);
        if (indice === -1) {
            console.log(`- ${this.nombre}: El suscriptor no existe.`);
            return;
        }
        this.suscriptores.splice(indice, 1);
        console.log(`❌ ${this.nombre}: Se ha cancelado la suscripción.`);
    }

    public notificar(): void {
        console.log(`\n🔔 ${this.nombre}: Notificando a los suscriptores...`);
        for (const suscriptor of this.suscriptores) {
            suscriptor.actualizar(this);
        }
    }

    public reabastecer(): void {
        console.log(`\n📦 El producto '${this.nombre}' acaba de ser reabastecido.`);
        this.enStock = true;
        this.notificar();
    }
}

// El Suscriptor (Observer): un cliente que espera el producto
class Cliente implements Suscriptor {
    public nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    public actualizar(notificador: Notificador): void {
        // En este ejemplo, el suscriptor (cliente) reacciona a la notificación.
        if (notificador instanceof Producto && notificador.enStock) {
            console.log(`  🛒 ${this.nombre} ha sido notificado: ¡El producto '${notificador.nombre}' ya está en stock!`);
        }
    }
}


export class Observer {
    public static main(): void {
        // --- 3. Código del Cliente (cómo se usa) ---
        // 1. Crear el notificador (el producto)
        const iphone = new Producto("iPhone 15");

        // 2. Crear los suscriptores (los clientes)
        const clienteAna = new Cliente("Ana");
        const clienteJuan = new Cliente("Juan");
        const clienteMaria = new Cliente("Maria");

        console.log("\n--- Clientes se suscriben al iPhone 15 ---\n");
        // 3.1 Suscribir a los clientes al producto
        iphone.suscribir(clienteAna);
        iphone.suscribir(clienteJuan);
        iphone.suscribir(clienteMaria);

        // 3.2 Suscribir a los clientes existente al producto
        iphone.suscribir(clienteAna);

        // 4. El evento ocurre: el producto vuelve a tener stock
        iphone.reabastecer();

        console.log("\n--- Juan ya compró el teléfono y cancela su suscripción ---\n");
        // 5. Un cliente decide cancelar su suscripción
        iphone.cancelarSuscripcion(clienteJuan);

        console.log("\n--- El iPhone se reabastece por segunda vez ---\n");
        // 6. El evento ocurre de nuevo
        iphone.reabastecer();
    }
}
