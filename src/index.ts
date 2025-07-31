import inquirer from 'inquirer';
import { Strategy } from './behavioral-patterns/strategy-pattern';
// import { Observer } from './behavioral-patterns/observer-pattern';
// import { FactoryMethod } from './creational-patterns/factory-method';
// import { AbstractFactory } from './creational-patterns/abstract-factory';
// import { Builder } from './creational-patterns/builder';
// import { Prototype } from './creational-patterns/prototype';
// import { Singleton } from './creational-patterns/singleton';
// import { Adapter } from './structural-patterns/adapter';
// import { Bridge } from './structural-patterns/bridge';
// import { Composite } from './structural-patterns/composite';
// import { Decorator } from './structural-patterns/decorator';
// import { Facade } from './structural-patterns/facade';
// import { Flyweight } from './structural-patterns/flyweight';
// import { Proxy } from './structural-patterns/proxy';
// import { ChainOfResponsibility } from './behavioral-patterns/chain-of-responsibility';
// import { Command } from './behavioral-patterns/command';
// import { Iterator } from './behavioral-patterns/iterator';
// import { Mediator } from './behavioral-patterns/mediator';
// import { Memento } from './behavioral-patterns/memento';
// import { State } from './behavioral-patterns/state';
// import { TemplateMethod } from './behavioral-patterns/template-method';
// import { Visitor } from './behavioral-patterns/visitor';

async function mostrarMenu() {
    try {
        console.clear();

        console.log(`\nMenú de Patrones de Diseño en TypeScript 💡\n`);

        const respuesta = await inquirer.prompt([
            {
                type: 'list',
                name: 'opcion',
                message: 'Selecciona un patrón:',
                choices: [
                    // Creacionales
                    // { name: '🏭 Factory Method', value: 'factoryMethod' },
                    // { name: '🏢 Abstract Factory', value: 'abstractFactory' },
                    // { name: '🔨 Builder', value: 'builder' },
                    // { name: '🧬 Prototype', value: 'prototype' },
                    // { name: '🔒 Singleton', value: 'singleton' },

                    // Estructurales
                    // { name: '🔌 Adapter', value: 'adapter' },
                    // { name: '🌉 Bridge', value: 'bridge' },
                    // { name: '🌿 Composite', value: 'composite' },
                    // { name: '🎨 Decorator', value: 'decorator' },
                    // { name: '🎭 Facade', value: 'facade' },
                    // { name: '🪶 Flyweight', value: 'flyweight' },
                    // { name: '🕵️ Proxy', value: 'proxy' },

                    // Comportamiento
                    // { name: '🔗 Chain of Responsibility', value: 'chain' },
                    // { name: '🧾 Command', value: 'command' },
                    // { name: '📚 Iterator', value: 'iterator' },
                    // { name: '🗣️ Mediator', value: 'mediator' },
                    // { name: '🧠 Memento', value: 'memento' },
                    // { name: '👀 Observer', value: 'observer' },
                    // { name: '🔄 State', value: 'state' },
                    { name: '🧠 Strategy', value: 'strategy' },
                    // { name: '📋 Template Method', value: 'template' },
                    // { name: '🧳 Visitor', value: 'visitor' },

                    { name: '❌ Salir', value: 'salir' },
                ],
            },
        ]);

        switch (respuesta.opcion) {
            // case 'factoryMethod':
            //     console.log(`\nEjemplo de Factory Method 🏭\n`);
            //     FactoryMethod.main();
            //     break;
            // case 'abstractFactory':
            //     console.log(`\nEjemplo de Abstract Factory 🏢\n`);
            //     AbstractFactory.main();
            //     break;
            // case 'builder':
            //     console.log(`\nEjemplo de Builder 🔨\n`);
            //     Builder.main();
            //     break;
            // case 'prototype':
            //     console.log(`\nEjemplo de Prototype 🧬\n`);
            //     Prototype.main();
            //     break;
            // case 'singleton':
            //     console.log(`\nEjemplo de Singleton 🔒\n`);
            //     Singleton.main();
            //     break;
            // case 'adapter':
            //     console.log(`\nEjemplo de Adapter 🔌\n`);
            //     Adapter.main();
            //     break;
            // case 'bridge':
            //     console.log(`\nEjemplo de Bridge 🌉\n`);
            //     Bridge.main();
            //     break;
            // case 'composite':
            //     console.log(`\nEjemplo de Composite 🌿\n`);
            //     Composite.main();
            //     break;
            // case 'decorator':
            //     console.log(`\nEjemplo de Decorator 🎨\n`);
            //     Decorator.main();
            //     break;
            // case 'facade':
            //     console.log(`\nEjemplo de Facade 🎭\n`);
            //     Facade.main();
            //     break;
            // case 'flyweight':
            //     console.log(`\nEjemplo de Flyweight 🪶\n`);
            //     Flyweight.main();
            //     break;
            // case 'proxy':
            //     console.log(`\nEjemplo de Proxy 🕵️\n`);
            //     Proxy.main();
            //     break;
            // case 'chain':
            //     console.log(`\nEjemplo de Chain of Responsibility 🔗\n`);
            //     ChainOfResponsibility.main();
            //     break;
            // case 'command':
            //     console.log(`\nEjemplo de Command 🧾\n`);
            //     Command.main();
            //     break;
            // case 'iterator':
            //     console.log(`\nEjemplo de Iterator 📚\n`);
            //     Iterator.main();
            //     break;
            // case 'mediator':
            //     console.log(`\nEjemplo de Mediator 🗣️\n`);
            //     Mediator.main();
            //     break;
            // case 'memento':
            //     console.log(`\nEjemplo de Memento 🧠\n`);
            //     Memento.main();
            //     break;
            // case 'observer':
            //     console.log(`\nEjemplo de Observer 👀\n`);
            //     Observer.main();
            //     break;
            // case 'state':
            //     console.log(`\nEjemplo de State 🔄\n`);
            //     State.main();
            //     break;
            case 'strategy':
                console.log(`\nEjemplo de Strategy 🧠\n`);
                Strategy.main();
                break;
            // case 'template':
            //     console.log(`\nEjemplo de Template Method 📋\n`);
            //     TemplateMethod.main();
            //     break;
            // case 'visitor':
            //     console.log(`\nEjemplo de Visitor 🧳\n`);
            //     Visitor.main();
            //     break;
            case 'salir':
                console.log('\n👋 Hasta luego!');
                process.exit(0);
        }

        await inquirer.prompt([{ type: 'input', name: 'continuar', message: `\nPresiona ENTER para continuar...\n` }]);
        await mostrarMenu();

    } catch (error) {
        console.error('❌ Error inesperado:', error);
        process.exit(1);
    }
}

mostrarMenu();