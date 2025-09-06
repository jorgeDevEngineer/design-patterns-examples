/*
 * Este código simula el uso del Patrón Command en un entorno de backend
 * para una API.
 * El objetivo es desacoplar el controlador de la API (Invoker) de la
 * lógica de negocio real (Receiver), haciendo el sistema más flexible
 * y fácil de mantener.
 */

// 1. Receiver (Receptor): La clase que contiene la lógica de negocio.
// En un entorno real, esto interactuaría con una base de datos.
class UserService {
    public createUser(userName: string): void {
        console.log(`[UserService]: Creando nuevo usuario: ${userName}`);
        // Lógica para guardar el usuario en la base de datos.
    }

    public deleteUser(userId: string): void {
        console.log(`[UserService]: Eliminando usuario con ID: ${userId}`);
        // Lógica para eliminar el usuario de la base de datos.
    }

    public updateUser(userId: string, newName: string): void {
        console.log(`[UserService]: Actualizando usuario ${userId} a ${newName}`);
        // Lógica para actualizar el usuario en la base de datos.
    }
}

// 2. Command (Comando): Interfaz base para todas las operaciones.
interface ICommand {
    execute(): void;
}

// 3. ConcreteCommands (Comandos Concretos): Encapsulan las peticiones.
// Cada uno guarda la referencia al Receiver y los datos necesarios.
class CreateUserCommand implements ICommand {
    private receiver: UserService;
    private userName: string;

    constructor(receiver: UserService, userName: string) {
        this.receiver = receiver;
        this.userName = userName;
    }

    public execute(): void {
        this.receiver.createUser(this.userName);
    }
}

class DeleteUserCommand implements ICommand {
    private receiver: UserService;
    private userId: string;

    constructor(receiver: UserService, userId: string) {
        this.receiver = receiver;
        this.userId = userId;
    }

    public execute(): void {
        this.receiver.deleteUser(this.userId);
    }
}

class UpdateUserCommand implements ICommand {
    private receiver: UserService;
    private userId: string;
    private newName: string;

    constructor(receiver: UserService, userId: string, newName: string) {
        this.receiver = receiver;
        this.userId = userId;
        this.newName = newName;
    }

    public execute(): void {
        this.receiver.updateUser(this.userId, this.newName);
    }
}

// 4. Invoker (Invocador): El controlador de la API.
// Recibe las peticiones del cliente y ejecuta el comando sin saber los detalles.
class APIController {
    public handleRequest(command: ICommand): void {
        console.log("\n[APIController]: Recibiendo petición del frontend...");
        command.execute();
        console.log("[APIController]: Petición procesada.");
    }
}

// 5. Client (Cliente): El código del frontend o un script que simula las peticiones.
export class Command {
    public static main(): void {
        const userService = new UserService();
        const apiController = new APIController();

        // Simulación de peticiones desde el frontend.
        console.log("--- Petición de creación de usuario ---");
        const createUserRequest = new CreateUserCommand(userService, "ana.perez");
        apiController.handleRequest(createUserRequest);

        console.log("--- Petición de eliminación de usuario ---");
        const deleteUserRequest = new DeleteUserCommand(userService, "12345");
        apiController.handleRequest(deleteUserRequest);

        console.log("--- Petición de actualización de usuario ---");
        const updateUserRequest = new UpdateUserCommand(userService, "12345", "ana.perez_actualizado");
        apiController.handleRequest(updateUserRequest);
    }
}