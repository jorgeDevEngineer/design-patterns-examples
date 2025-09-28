// 1. EL FLYWEIGHT (Parte Intrínseca: Compartida y Pesada)
class CancionData {
    public readonly songBuffer: ArrayBuffer; 

    public constructor(size: number) {
        this.songBuffer = new ArrayBuffer(size); 
        console.log(`\t[Flyweight] Data creada: ${size} bytes.`);
    }
    // No hay ID ni nada único aquí
}

// 2. EL CONTEXTO (Parte Extrínseca: Única y Ligera)
class PlayItem {
    private id: number;
    private nombre: string;
    private data: CancionData; 
    
    public constructor(id: number, nombre: string, data: CancionData) {
        this.id = id;
        this.nombre = nombre;
        this.data = data;
    }
    
    public toString(): string {
        return `id: ${this.id}, nombre: ${this.nombre}, DataSize: ${this.data.songBuffer.byteLength} bytes`;
    }
}
export class cancionFactory {
    public static enableFlyweight: boolean = true;
    private static readonly SONG_DATA: Map<string, CancionData> = new Map<string, CancionData>();
    private static idSequence: number = 0;

    public static createcancion(songName: string, size: number = 1000000): PlayItem {
        let songData: CancionData;
        
        if (cancionFactory.enableFlyweight && cancionFactory.SONG_DATA.has(songName)) {
            console.log(`[Factory] Reutilizando data para: ${songName}`);
            songData = cancionFactory.SONG_DATA.get(songName)!;
        } else {
            songData = new CancionData(size);
            cancionFactory.SONG_DATA.set(songName, songData);
        }

        cancionFactory.idSequence++; 
        // Siempre crea un NUEVO PlayItem con un ID ÚNICO, 
        // pero le pasa el 'songData' COMPARTIDO.
        const playItem = new PlayItem(cancionFactory.idSequence, songName, songData);
        return playItem;
    }
}

class Playlist {
    private canciones: PlayItem[] = []; 
    private nombrePlaylist: string;

    public constructor(nombrePlaylist: string) {
        this.nombrePlaylist = nombrePlaylist;
    }

    public addSongByName(songName: string, size: number = 1000000): void {
        const nuevoPlayItem: PlayItem = cancionFactory.createcancion(songName, size);
        this.canciones.push(nuevoPlayItem);
        console.log(`[Playlist "${this.nombrePlaylist}"] Añadida: ${nuevoPlayItem.toString()}`);
    }

    public getCanciones(): PlayItem[] {
        return this.canciones;
    }
}

export class Flyweight {
    public static main(): void {
        const miPlaylist = new Playlist("Mis Favoritas");

        // Llama a la fábrica, si "Song A" no existe, crea una nueva CancionData (Flyweight) de 500KB.
        miPlaylist.addSongByName("Song A", 500000); 
        
        // Llama a la fábrica, si "Song B" no existe, crea una nueva CancionData (Flyweight) de 1MB.
        miPlaylist.addSongByName("Song B"); 
        
        // Llama a la fábrica, "Song A" ya existe. La fábrica REUTILIZA el CancionData de 500KB.
        miPlaylist.addSongByName("Song A"); 
    }
}

