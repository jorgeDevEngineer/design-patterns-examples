/*
 * Este código implementa el **Patrón Template Method**, definiendo el esqueleto de un algoritmo
 * para preparar comidas en una clase base (`MealPreparer`) y permitiendo que las subclases
 * sobrescriban pasos específicos como la preparación de ingredientes, la cocción y los acompañamientos.
 *
 * El método `prepareMeal()` establece una secuencia fija de pasos, mientras que las subclases como
 * `PastaMeal`, `RiceMeal` y `SaladMeal` personalizan el comportamiento sin alterar la estructura general.
 * Esto facilita la reutilización de lógica común, reduce la duplicación de código y permite extender
 * fácilmente el sistema con nuevos tipos de comidas.
 */
/* Contexto */


abstract class MealPreparer {
    // Método plantilla: define el flujo del algoritmo
    public prepareMeal(): void {
        this.prepareIngredients();
        this.cook();
        this.serve();
        this.addSides(); // Hook opcional
    }

    protected abstract prepareIngredients(): void;
    protected abstract cook(): void;

    protected serve(): void {
        console.log('Sirviendo el plato en la mesa...');
    }

    // Hook opcional
    protected addSides(): void {
        // Por defecto no se añaden acompañamientos
    }
}

// Clase concreta para preparar pasta
class PastaMeal extends MealPreparer {
    protected prepareIngredients(): void {
        console.log('Preparando pasta, salsa de tomate y queso...');
    }

    protected cook(): void {
        console.log('Cocinando la pasta y calentando la salsa...');
    }

    protected addSides(): void {
        console.log('Añadiendo pan de ajo como acompañamiento...');
    }
}

// Clase concreta para preparar arroz
class RiceMeal extends MealPreparer {
    protected prepareIngredients(): void {
        console.log('Lavando arroz y cortando vegetales...');
    }

    protected cook(): void {
        console.log('Cocinando arroz y salteando vegetales...');
    }

    protected addSides(): void {
        console.log('Sirviendo con plátano frito como acompañamiento...');
    }
}

// Clase concreta para preparar ensalada
class SaladMeal extends MealPreparer {
    protected prepareIngredients(): void {
        console.log('Lavando y cortando vegetales frescos...');
    }

    protected cook(): void {
        console.log('No se requiere cocción para ensalada...');
    }

    // No sobrescribe addSides: sin acompañamientos
}

// Define las clases e interfaces necesarias primero (MealPreparer, PastaMeal, etc.)
// ...

// Cliente
export class TemplateMethod {
    
    // Método de instancia
    clientCode(meal: MealPreparer) {
        meal.prepareMeal();
    }

    public static main(): void {
        // Para llamar a un método de instancia (clientCode) desde un método estático (main),
        // primero necesitas crear una instancia de la clase.
        const template = new TemplateMethod();

        // Ahora puedes llamar al método de instancia a través del objeto `template`.
        template.clientCode(new PastaMeal());
        template.clientCode(new RiceMeal());
        template.clientCode(new SaladMeal());
    }
}
