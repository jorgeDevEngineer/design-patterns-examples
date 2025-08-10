/*
 * Este código implementa el **Patrón Estrategy**, permitiendo que un objeto (Personaje)
 * cambie su comportamiento (tipo de ataque) dinámicamente en tiempo de ejecución.
 * En lugar de tener una única clase con múltiples formas de atacar, cada método de ataque
 * se encapsula en una clase "estrategia" separada. Esto hace que el Personaje sea flexible
 * (puede cambiar entre ataque de espada o hechizo fácilmente) y fácil de extender con nuevas
 * habilidades sin modificar su código principal.
 */
/* Contexto */
class Personaje {
    private nombre:string;
    private habilidad: AtaquePersonaje;

    public constructor (nombre:string, ataque: AtaquePersonaje){
        this.nombre = nombre;
        this.habilidad = ataque;
    }

    public setEstrategia(ataque: AtaquePersonaje){
        this.habilidad = ataque;
    }
    public ejecutarAtaque(){
        this.habilidad.atacar();
    }
    public getNombre():string {
        return this.nombre;
    }
}
/* Estrategias interfaces y concretas  */
interface AtaquePersonaje {
    atacar():void; //Nota: interfaces no definen si los atributos a implementar ser[an de caracte publico o privado
}

class AtaqueEspada implements AtaquePersonaje{
    public atacar(){
        console.log("Estoy realizando ataque con mi espada");
    }
}

class AtaqueHechizo implements AtaquePersonaje{
    public atacar(){
        console.log("Estoy lanzando un hechizo de fuego");
    }
}
/* Estrategias interfaces y concretas  */
export class Strategy {
    public static main():void {
        let magoGuerrero:Personaje = new Personaje("hechicero", new AtaqueHechizo()); //Al instaciar una clase concreta se cierra con paréntesis
        magoGuerrero.ejecutarAtaque();
        magoGuerrero.setEstrategia(new AtaqueEspada());
        magoGuerrero.ejecutarAtaque();
        console.log("Yo soy un: " + magoGuerrero.getNombre());
    }
}