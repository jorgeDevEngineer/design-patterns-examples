/*
 * Este ejemplo implementa el **Patrón Singleton** usando la clase Presidente.
 * Solo puede haber un presidente activo en la nación, y todos los ciudadanos
 * acceden a él mediante el método estático `getPresidente()`.
 * 
 * Este patrón garantiza que no se puedan crear múltiples presidentes por accidente.
 */

class Presidente {
    private static instance: Presidente;
    private name: string;

    private constructor(){
        this.name = "Default Name";
    }

    public static getInstance(): Presidente {
        if (!Presidente.instance) {
            Presidente.instance = new Presidente();
        }
        return Presidente.instance;
    }

    public setName(newName: string): void {
        this.name = newName;
    }

    public getName(): string {
        return this.name;
    }

    public govern(): void {
        console.log(`👑 The president ${this.name} is governing the nation.`);
    }
}

export class Singleton {
    public static main(): void {    
        let presidente1 = Presidente.getInstance();
        presidente1.getName(); // "Default Name"
        presidente1.setName("Simon");
        let presidente2 = Presidente.getInstance();
        presidente2.govern();
        console.log("Are both presidents the same instance? ", presidente1 === presidente2? "Yes" : "No"); // true
    }
}