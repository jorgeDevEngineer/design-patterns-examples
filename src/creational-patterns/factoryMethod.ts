// Factory Method Pattern Example
interface IProduct {
    eat(): void;
}

// Concrete Creators
class Bread implements IProduct {
    eat(): void {
        console.log("Eatin a bread 🍞");
    }
}

class Cake implements IProduct {
    eat(): void {
        console.log("Eatin a cake 🎂");
    }
}

class Cookie implements IProduct {
    eat(): void {
        console.log("Eatin a cookie 🍪");
    }
}

abstract class Factory {
    public abstract createBread(): IProduct;
    public abstract createCookie(): IProduct;
    public abstract createCake(): IProduct;
}

//Concrete Factory
class BakeryFactory implements Factory {
    public createBread(): IProduct {
        return new Bread();
    }
    public createCookie(): IProduct {
        return new Cookie();
    }
    public createCake(): IProduct {
        return new Cake();
    }
}

class Cliente {
    private cookie: IProduct;
    private cake: IProduct;
    private bread: IProduct;

    public factory: Factory;

    constructor() {
        this.factory = new BakeryFactory(); 
        console.log("Preparing some products with my personal factory 🏭");
        this.cake = this.factory.createCake();
        this.bread = this.factory.createBread();
        this.cookie = this.factory.createCookie();
    }
    public eatProduct(): void {
        console.log("Eating some products 😋");
        this.bread.eat();
        this.cake.eat();
        this.cookie.eat();
    }
}

export class FactoryMethodPattern {
    public static main(): void {
        console.log("Example of Factory Method Pattern");
        const cliente = new Cliente();
        cliente.eatProduct();
    }
}
