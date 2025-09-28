abstract class AbstractPanaderia{
    public abstract factoryMethodPan(): AbstractProductPan;
    public abstract factoryMethodTorta(): AbstractProductTorta;
}

interface AbstractProductPan {
    sound(): void;
}

interface AbstractProductTorta {
    sound(): void;
}

class ConcreteProductPanNormal implements AbstractProductPan {
    sound(): void {
        console.log("Product A1 sound: Beep Beep!");
    }
}

class ConcreteProductPanSinGluten implements AbstractProductPan {
    sound(): void {
        console.log("Product A2 sound: Boop Boop!");
    }
}

class ConcreteProductTortaNormal implements AbstractProductTorta {
    sound(): void {
        console.log("Product B2 sound: Tun Tun!");
    }
}

class ConcreteProductTortaSinAzucar implements AbstractProductTorta {
    sound(): void {
        console.log("Product B1 sound: Tan Tan!");
    }
}

class ConcreteFactoryPanaderiaComun implements AbstractPanaderia {
    factoryMethodPan(): AbstractProductPan {
        return new ConcreteProductPanNormal();
    }  
    public factoryMethodTorta(): AbstractProductTorta {
        return new ConcreteProductTortaNormal();
    }
}

class ConcreteFactoryPanaderiaInclusiva implements AbstractPanaderia {
    factoryMethodPan(): AbstractProductPan {
        return new ConcreteProductPanSinGluten();
    }  
    public factoryMethodTorta(): AbstractProductTorta {
        return new ConcreteProductTortaSinAzucar();
    }
}

class Cliente {
    private factory: AbstractPanaderia;
    private productA: AbstractProductPan;
    private productB: AbstractProductTorta;

    constructor(factory: AbstractPanaderia) {
        this.factory = factory;
        this.productA = this.factory.factoryMethodPan();
        this.productB = this.factory.factoryMethodTorta();
    }

    public interact(): void {
        this.productA.sound();
        this.productB.sound();
    }
}

export class AbstractFactory {
    public static main(): void {
        console.log("Ejemplo del Patrón Abstract Factory");
        
        const cliente1 = new Cliente(new ConcreteFactoryPanaderiaComun());
        cliente1.interact();

        const cliente2 = new Cliente(new ConcreteFactoryPanaderiaInclusiva());
        cliente2.interact();
    }
}