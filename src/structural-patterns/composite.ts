// ------------------------------
// 1. CLASE ABSTRACTA (Componente)
// ------------------------------
abstract class ComponetAbstractProduct {
    protected name: string;
    protected price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    // El método clave que las hojas y los compuestos deben implementar
    abstract getPrice(): number;

    // Métodos opcionales para manejar la estructura (solo necesarios en el Composite)
    public addProduct(product: ComponetAbstractProduct): void {
        throw new Error(`El producto simple ${this.name} no puede añadir componentes.`);
    }

    public removeProduct(product: ComponetAbstractProduct): boolean {
        throw new Error(`El producto simple ${this.name} no puede eliminar componentes.`);
    }

    // Getters comunes
    public getName(): string {
        return this.name;
    }
}

// ------------------------------
// 2. HOJA (Leaf - Elemento simple)
// ------------------------------
class LeafSimpleProduct extends ComponetAbstractProduct {
    protected brand: string;

    constructor(name: string, price: number, brand: string) {
        // La hoja hereda el constructor base
        super(name, price);
        this.brand = brand;
    }

    // IMPLEMENTACIÓN CLAVE: La hoja devuelve su propio precio
    public getPrice(): number {
        return this.price;
    }

    public getBrand(): string {
        return this.brand;
    }
}

// ------------------------------
// 3. COMPUESTO (Composite - Elemento contenedor)
// ------------------------------
class CompositeProduct extends ComponetAbstractProduct {
    private listProducts: ComponetAbstractProduct[] = [];

    // En el compuesto, el precio base es 0, se calcula sumando los hijos
    public constructor(name: string) {
        super(name, 0);
    }

    // IMPLEMENTACIÓN CLAVE: El compuesto suma los precios de todos sus hijos (recursividad)
    public getPrice(): number {
        let total = 0;
        for (const product of this.listProducts) {
            // Llama a getPrice() en cada hijo, que a su vez puede ser otro Composite (recursión)
            total += product.getPrice();
        }
        return total;
    }

    // Métodos para manejar la estructura (Añadir y eliminar hijos)
    public addProduct(product: ComponetAbstractProduct) {
        this.listProducts.push(product);
    }

    public removeProduct(product: ComponetAbstractProduct): boolean {
        const index = this.listProducts.indexOf(product);
        if (index > -1) {
            this.listProducts.splice(index, 1);
            return true;
        }
        return false;
    }
}

// ------------------------------
// 4. CÓDIGO DE PRUEBA (Ejemplo de uso)
// ------------------------------
export class Composite {
    public static main(): void {
        // a) Creación de productos simples (Hojas)
        const teclado = new LeafSimpleProduct("Teclado Mecánico", 80, "Razer");
        const mouse = new LeafSimpleProduct("Mouse Óptico", 40, "Logitech");
        const monitor = new LeafSimpleProduct("Monitor 27 Pulgadas", 300, "Dell");
        const cableHdmi = new LeafSimpleProduct("Cable HDMI", 10, "Genérico");

        // b) Creación de un paquete compuesto (Composite)
        const paquetePC = new CompositeProduct("Paquete PC Básico");
        paquetePC.addProduct(teclado);
        paquetePC.addProduct(mouse);
        paquetePC.addProduct(monitor);

        // c) Creación de un paquete compuesto dentro de otro compuesto
        const paqueteAccesorios = new CompositeProduct("Accesorios Extras");
        paqueteAccesorios.addProduct(cableHdmi);

        // d) Añadir el compuesto de accesorios al compuesto principal
        paquetePC.addProduct(paqueteAccesorios);

        // Prueba de funcionalidad (El patrón Composite permite tratar la hoja y el compuesto de forma uniforme)
        console.log("--- Patrón Composite: Ejemplo de Componentes ---");

        // Precio de una HOJA (se llama getPrice() directamente)
        console.log(`Precio del monitor (${monitor.getName()}): $${monitor.getPrice()}`);

        // Precio del COMPUESTO (se llama getPrice() y se suma recursivamente)
        console.log(`\nPrecio total del ${paquetePC.getName()} (incluye sub-paquetes): $${paquetePC.getPrice()}`);

        // Si eliminamos un producto del compuesto y calculamos de nuevo
        paquetePC.removeProduct(monitor);
        console.log(`\n--- Después de eliminar el monitor ---`);
        console.log(`Nuevo precio del ${paquetePC.getName()}: $${paquetePC.getPrice()}`);
    }
}
