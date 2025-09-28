/*
 * Este código implementa el **Patrón Memento**, que permite guardar y restaurar
 * el estado de un objeto (Originator) sin violar su encapsulamiento.
 * Es perfecto para funcionalidades como "deshacer" o "historial".
 * El Originator delega la creación de un Memento (que guarda su estado interno)
 * y el Caretaker (Guardián) se encarga de almacenar y gestionar esos Mementos.
 */

// 1. Memento (Recuerdo): Guarda el estado del Originator.
// Es una clase simple que encapsula el estado.
class EditorState {
    private readonly content: string;

    constructor(content: string) {
        this.content = content;
    }

    public getContent(): string {
        return this.content;
    }
}

// 2. Originator (Originador): El objeto cuyo estado se quiere guardar.
// Contiene la lógica para crear un Memento y restaurar su estado a partir de uno.
class Editor {
    private content: string;

    constructor(content: string) {
        this.content = content;
    }

    public setContent(content: string): void {
        this.content = content;
    }

    public getContent(): string {
        return this.content;
    }

    // Crea un memento para guardar el estado actual.
    public createMemento(): EditorState {
        return new EditorState(this.content);
    }

    // Restaura el estado a partir de un memento.
    public restoreFromMemento(memento: EditorState): void {
        this.content = memento.getContent();
    }
}

// 3. Caretaker (Guardián): Almacena los mementos.
// Es el que se comunica con el Originator para pedir y guardar estados.
class History {
    private history: EditorState[] = [];

    // Añade un memento al historial.
    public push(state: EditorState): void {
        this.history.push(state);
    }

    // Saca el último memento del historial.
    public pop(): EditorState | undefined {
        return this.history.pop();
    }
}

// Uso del patrón
export class Memento {
    public static main(): void {
        const editor = new Editor("¡Hola, mundo!");
        const history = new History();

        console.log("Estado inicial del editor:", editor.getContent());

        // Guardamos el estado inicial.
        history.push(editor.createMemento());

        // El usuario edita el contenido.
        editor.setContent("El patrón Memento es muy útil para la función de deshacer.");
        console.log("Nuevo estado del editor:", editor.getContent());

        // Guardamos el nuevo estado.
        history.push(editor.createMemento());

        // El usuario sigue editando.
        editor.setContent("¡El patrón Memento es genial!");
        console.log("Estado final del editor (antes de deshacer):", editor.getContent());

        // Restauramos el estado anterior.
        const previousState = history.pop();
        if (previousState) {
            editor.restoreFromMemento(previousState);
            console.log("Estado restaurado (undo):", editor.getContent());
        }

        // Restauramos al estado inicial.
        const initialState = history.pop();
        if (initialState) {
            editor.restoreFromMemento(initialState);
            console.log("Estado restaurado (undo 2):", editor.getContent());
        }
    }
}