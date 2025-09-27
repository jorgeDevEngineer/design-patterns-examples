// Factory Method Pattern Example
interface IProductPanaderia {
    venderse(): void;
}

abstract class PanaderiaFactory {
    public abstract factoryMethod(): IProductPanaderia;
    public ejecutarVenta(): void {
        const producto = this.factoryMethod();
        producto.venderse();
    }
}

// Concrete Creators
class Pan implements IProductPanaderia {
    venderse(): void {
        console.log("Vendiendo pan 🍞");
    }
}

class Pastel implements IProductPanaderia {
    venderse(): void {
        console.log("Vendiendo pastel 🎂");
    }
}

class Galleta implements IProductPanaderia {
    venderse(): void {
        console.log("Vendiendo galleta 🍪");
    }
}
// Concrete Creators
class PanConcreteFactory extends PanaderiaFactory {
    public factoryMethod(): IProductPanaderia {
        return new Pan();
    }
}
class PastelConcreteFactory extends PanaderiaFactory {
    public factoryMethod(): IProductPanaderia {
        return new Pastel();
    }
}

class GalletaConcreteFactory extends PanaderiaFactory {
    public factoryMethod(): IProductPanaderia {
        return new Galleta();
    }
}

class Cliente {
    public ordenarProducto(creador: PanaderiaFactory): void {
        console.log("Cliente: Hago el pedido y dejo que la fábrica se encargue de crearlo.");
        creador.ejecutarVenta();
        console.log("Cliente: Pedido completado.");
    }
}

export class FactoryMethod {
    public static main(): void {
        console.log("Ejemplo del Patrón Factory Method");
        const cliente = new Cliente();

        console.log("Cliente necesita Pan:");
        // El cliente le pasa un creador de Pan
        cliente.ordenarProducto(new PanConcreteFactory());

        console.log("Cliente necesita Pastel:");
        // El cliente le pasa un creador de Pastel
        cliente.ordenarProducto(new PastelConcreteFactory());

        console.log("Cliente necesita Galleta:");
        // El cliente le pasa un creador de Galleta
        cliente.ordenarProducto(new GalletaConcreteFactory());
    }
}
