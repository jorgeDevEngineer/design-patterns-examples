interface IBuilder<T> {
    build(): T | null;
}

class TargetObjectCasa {
    public cocina: OtherObjectCocina;
    public sala: OtherObjectSala;
    public cuarto: OtherObjectCuarto;
    public baño: OtherObjectBaño;
    constructor(objectCocina: OtherObjectCocina, objectSala: OtherObjectSala, objectCuarto: OtherObjectCuarto, objectBaño: OtherObjectBaño) {
        this.cocina = objectCocina;
        this.sala = objectSala;
        this.cuarto = objectCuarto;
        this.baño = objectBaño;
    }

    public describirCasa(): void {
        console.log(`
        🏠 Casa construida exitosamente:
        ----------------------------------
        - Cocina: ${this.cocina.tipo} (${this.cocina.gabinetes} gabinetes, ${this.cocina.refrigerador ? 'con' : 'sin'} refrigerador)
        - Sala: ${this.sala.tipo} (${this.sala.tieneTelevision ? 'con TV' : 'sin TV'})
        - Cuarto: ${this.cuarto.tipo} (Cama ${this.cuarto.tipoCama})
        - Baño: ${this.baño.tipo} (${this.baño.tieneBañera ? 'con bañera' : 'solo ducha'})
        `);
    }
}

class OtherObjectCocina {
    public tipo: string;
    public gabinetes: number;
    public refrigerador: boolean;
    constructor(tipo: string, gabinetes: number, refrigerador: boolean) {
        this.tipo = tipo;
        this.gabinetes = gabinetes;
        this.refrigerador = refrigerador;
    }
}
class OtherObjectSala {
    public tipo: string;
    public tieneMesa: boolean;
    public tieneTelevision: boolean;
    constructor(tipo: string, tieneMesa: boolean, tieneTelevision: boolean) {
        this.tipo = tipo;
        this.tieneMesa = tieneMesa;
        this.tieneTelevision = tieneTelevision;
    }
}

class OtherObjectCuarto {
    public tipo: string;
    public tipoCama: string;
    constructor(tipo: string, tipoCama: string) {
        this.tipo = tipo;
        this.tipoCama = tipoCama;
    }
}
class OtherObjectBaño {
    public tipo: string;
    public tieneBañera: boolean;
    constructor(tipo: string, tieneBañera: boolean) {
        this.tipo = tipo;
        this.tieneBañera = tieneBañera;
    }
}


class CasaBuilder implements IBuilder<TargetObjectCasa> {

    private cocina?: OtherObjectCocina;
    private sala?: OtherObjectSala;
    private cuarto?: OtherObjectCuarto;
    private baño?: OtherObjectBaño;

    public construirCocina(tipo: string, gabinetes: number, refrigerador: boolean): this {
        this.cocina = new OtherObjectCocina(tipo, gabinetes, refrigerador);
        return this;
    }

    public construirSala(tipo: string, tieneMesa: boolean, tieneTelevision: boolean): this {
        this.sala = new OtherObjectSala(tipo, tieneMesa, tieneTelevision);
        return this;
    }


    public construirCuarto(tipo: string, tipoCama: string): this {
        this.cuarto = new OtherObjectCuarto(tipo, tipoCama);
        return this;
    }


    public construirBaño(tipo: string, tieneBañera: boolean): this {
        this.baño = new OtherObjectBaño(tipo, tieneBañera);
        return this;
    }

    public build(): TargetObjectCasa | null {
        const partesFaltantes: string[] = [];

        if (!this.cocina) {
            partesFaltantes.push('Cocina');
        }
        if (!this.sala) {
            partesFaltantes.push('Sala');
        }
        if (!this.cuarto) {
            partesFaltantes.push('Cuarto');
        }
        if (!this.baño) {
            partesFaltantes.push('Baño');
        }

        if (partesFaltantes.length > 0) {
            const listaFaltantes = partesFaltantes.join(', ');
            console.log(`ERROR: No se puede construir TargetObjectCasa. Faltan los siguientes componentes obligatorios: ${listaFaltantes}.`); 
            return null;
        } else {
            // Usamos 'as' para asegurar a TypeScript que ya verificamos que no son null/undefined.
            return new TargetObjectCasa(
                this.cocina as OtherObjectCocina,
                this.sala as OtherObjectSala,
                this.cuarto as OtherObjectCuarto,
                this.baño as OtherObjectBaño
            );
        }

    }
}

export class Builder {
    public static main(): void {

        // --- 5. Demostración de Uso Directo ---
        console.log('================================================');
        console.log('      DEMOSTRACIÓN DEL CASA BUILDER             ');
        console.log('================================================');


        const casaVacaciones = new CasaBuilder()
            .construirCocina('Tipo Comedor', 10, true)
            .construirSala('Exterior (Terraza)', false, false) // Sin TV en la sala exterior
            .construirCuarto('Principal', 'Queen Size')
            .construirBaño('Piscina', false)
            .build(); // Llama a build para obtener el objeto

        casaVacaciones ? casaVacaciones.describirCasa() : undefined;

        console.log('================================================');
        console.log('      DEMOSTRACIÓN DEL CASA BUILDER CON ERROR   ');
        console.log('================================================');
        const apartamentoUrbano = new CasaBuilder()
            .construirCocina('Abierta con barra', 6, true)
            .construirSala('Minimalista', true, true)
            .build();
    }
}