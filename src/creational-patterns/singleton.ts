class President {
    private static instance: President;
    private name: string;

    private constructor(){
        this.name = "Default Name";
    }

    public static getInstance(): President {
        if (!President.instance) {
            President.instance = new President();
        } 
        return President.instance;
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

export class SingletonPattern {
    public static main(): void {    
        let president1 = President.getInstance();
        president1.getName(); // "Default Name"
        president1.setName("Simon");
        let president2 = President.getInstance();
        president2.govern();
        console.log("Are both presidents the same instance? ", president1 === president2? "Yes" : "No"); // true
    }
}