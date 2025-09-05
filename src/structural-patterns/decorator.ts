abstract class Pizza {
    public abstract getCost(): number;
    public abstract getDescription(): string;
}

class BasicPizza extends Pizza {
    private cost: number = 5;
    private description: string = "Pizza base";

    public getCost(): number {
        return this.cost;
    }

    public getDescription(): string {
        return this.description;
    }
}

// --- Decorador para Queso Extra ---

// Primero, creamos una clase abstracta para nuestros decoradores de pizza.
// Esta clase extiende Pizza, lo cual es crucial porque un decorador
// DEBE ser del mismo tipo que el objeto que decora.

abstract class PizzaDecorator extends Pizza {
    protected decoratedPizza: Pizza; // Aquí guardaremos la pizza (o decorador) a la que estamos añadiendo algo

    constructor(pizza: Pizza) {
        super();
        this.decoratedPizza = pizza;
    }

    // Implementamos los métodos abstractos de Pizza, delegando la llamada
    // a la pizza decorada. Los decoradores añadirán su propia lógica ANTES
    // o DESPUÉS de esta delegación.
    public getCost(): number {
        return this.decoratedPizza.getCost();
    }

    public getDescription(): string {
        return this.decoratedPizza.getDescription();
    }
}

class QuesoExtraDecorator extends PizzaDecorator {
    private extraCost: number = 2;
    private extraDescription: string = " + Extra Cheese";

    constructor(pizza: Pizza) {
        super(pizza); // Llamamos al constructor de PizzaDecorator, pasándole la pizza que vamos a decorar
    }

    public getCost(): number {
        return this.decoratedPizza.getCost() + this.extraCost;
    }

    // Implementación de getDescription:
    // Obtenemos la descripción de la pizza decorada y le añadimos la descripción del queso extra.
    public getDescription(): string {
        return `${this.decoratedPizza.getDescription()}, ${this.extraDescription}`;
    }
}

class SalchichonDecorator extends PizzaDecorator {
    private extraCost: number = 4;
    private extraDescription: string = " + Salchichon";

    constructor(pizza: Pizza) {
        super(pizza); // Llamamos al constructor de PizzaDecorator, pasándole la pizza que vamos a decorar
    }

    public getCost(): number {
        return this.decoratedPizza.getCost() + this.extraCost;
    }

    // Implementación de getDescription:
    // Obtenemos la descripción de la pizza decorada y le añadimos la descripción del queso extra.
    public getDescription(): string {
        return `${this.decoratedPizza.getDescription()}, ${this.extraDescription}`;
    }
}

export class Decorator {
    public static main(): void {
        // 1. Creamos una pizza base
        let myPizza: Pizza = new BasicPizza();
        console.log(`Pizza: ${myPizza.getDescription()}, Costo: $${myPizza.getCost()}`);
        // Salida esperada: Pizza: Pizza base, Costo: $5

        // 2. Decoramos la pizza base con queso extra
        myPizza = new QuesoExtraDecorator(myPizza);
        console.log(`Pizza: ${myPizza.getDescription()}, Costo: $${myPizza.getCost()}`);
        // Salida esperada: Pizza: Pizza base, con queso extra, Costo: $7

        // ¡Podríamos incluso decorarla más! Por ejemplo, añadiendo otro tipo de ingrediente
        // (si tuviéramos otro decorador).
        myPizza = new SalchichonDecorator(myPizza);
        console.log(`Pizza: ${myPizza.getDescription()}, Costo: $${myPizza.getCost()}`);
    }
}
