//Interface for Products
interface IProductBread {
    eat(): void;
}

interface IProductDessert {
    eat(): void;
}

//Family of two products. 
class NormalBread implements IProductBread {
    eat(): void {
        console.log("Eating regular Bread 🍞");
    }
}

class GlutenFreeBread implements IProductBread {
    eat(): void {
        console.log("Eating gluten-free Bread 🫓");
    }
}

class NormalCake implements IProductDessert {
    eat(): void {
        console.log("Eating regular Cake 🎂");
    }
}

class SugarFreeCake implements IProductDessert {
    eat(): void {
        console.log("Eating sugar-free Cake 🍮");
    }
}

//Abstract Factory
abstract class BakeryFactory {
    public abstract createBread(): IProductBread;
    public abstract createCake(): IProductDessert;
}


//Concretes factories
class RegularBakery implements BakeryFactory {
    createBread(): IProductBread {
        return new NormalBread();
    }  
    public createCake(): IProductDessert {
        return new NormalCake();
    }
}

class FitnessBakery implements BakeryFactory {
    createBread(): IProductBread {
        return new GlutenFreeBread();
    }  
    public createCake(): IProductDessert {
        return new SugarFreeCake();
    }
}

//Clients

interface Client {
    factory: BakeryFactory;
    eatProducts(): void;
}
class NormalClient implements Client{
    factory: BakeryFactory;
    bread: IProductBread;
    cake: IProductDessert;

    constructor() {
        this.factory = new RegularBakery();
        this.bread = this.factory.createBread();
        this.cake = this.factory.createCake();
    }

    public eatProducts(): void {
        this.bread.eat();
        this.cake.eat();
    }
}

class FitnessClient {
    factory: BakeryFactory;
    bread: IProductBread;
    cake: IProductDessert;

    constructor() {
        this.factory = new FitnessBakery();
        this.bread = this.factory.createBread();
        this.cake = this.factory.createCake();
    }

    public eatProducts(): void {
        this.bread.eat();
        this.cake.eat();
    }
}

export class AbstractFactoryPattern {
    public static main(): void {
        console.log("Example of Abstract Factory Pattern");
        
        const cliente1 = new FitnessClient();
        cliente1.eatProducts();

        const cliente2 = new NormalClient();
        cliente2.eatProducts();
    }
}