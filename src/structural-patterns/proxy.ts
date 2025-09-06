// Interfaz del servicio
interface Descargador {
  descargar(url: string): void;
}

// Clase del objeto real que realiza la descarga
class DescargadorDeArchivos implements Descargador {
  public descargar(url: string): void {
    console.log(`[Descargador Real] Descargando archivo desde: ${url}`);
    // Lógica compleja de descarga...
    console.log('[Descargador Real] Descarga completada.');
  }
}

class ProxyDescargador implements Descargador {
  private descargadorReal: DescargadorDeArchivos;

  constructor() {
    this.descargadorReal = new DescargadorDeArchivos();
  }

  public descargar(url: string): void {
    if (this.validarUrl(url)) {
      console.log(`[Proxy] La URL "${url}" es segura. Pasando la solicitud al descargador real.`);
      this.descargadorReal.descargar(url);
    } else {
      console.error(`[Proxy] ¡Acceso denegado! La URL "${url}" es de una fuente no permitida.`);
    }
  }

  // Método de validación adicional
  private validarUrl(url: string): boolean {
    // Ejemplo de validación simple
    if (url.includes('malware.com')) {
      return false;
    }
    return true;
  }
}

export class Proxy {
  public static main(): void {
    const proxy = new ProxyDescargador();
    proxy.descargar('https://misitio.com/documento.pdf');
    proxy.descargar('https://malware.com/virus.exe');
  }
}

Proxy.main();