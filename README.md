
# 🧩 Ejemplos de Patrones de Diseño

Este repositorio contiene implementaciones simples y comentadas de los principales **patrones de diseño** en TypeScript. El objetivo es facilitar la comprensión de cada patrón y mostrar cómo pueden aplicarse en proyectos reales.

-----

## 📚 Categorías

  - 🔨 **Creacionales**: Singleton, Factory Method, Abstract Factory, etc.
  - 🧱 **Estructurales**: Adapter, Facade, Decorator, etc.
  - 🧠 **Comportamiento**: Strategy, Observer, Command, etc.

Cada ejemplo incluye una breve explicación y **código funcional** 💡.

-----

## 🚀 Instrucciones para Compilar y Ejecutar los Ejemplos

### 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

  - **Node.js** (versión recomendada: 18.x o superior)
  - **npm** (se instala automáticamente con Node.js)

Verifica la instalación con:

```bash
node -v
npm -v
```

### 🛠️ Instalación del Proyecto

1.  **Clona el repositorio:**

    ```bash
    git clone https://github.com/tu-usuario/design-patterns-examples.git
    cd design-patterns-examples
    ```

2.  **Instala las dependencias necesarias:**

    ```bash
    npm install
    ```

    Esto instalará TypeScript y otras dependencias definidas en `package.json`.

### ⚙️ Compilación del Código TypeScript

Para compilar todos los archivos `.ts` dentro de la carpeta `src/`, ejecuta:

```bash
npx tsc
```

Esto generará los archivos `.js` compilados dentro de la carpeta `dist/`.

### ▶️ Ejecución de Ejemplos

Una vez compilado, puedes ejecutar cualquier ejemplo desde la carpeta `dist/`. Por ejemplo, para ejecutar el patrón Strategy:

```bash
cd dist
node strategy-pattern.js
```

**⚠️ Recuerda:** ¡Compila siempre antes de ejecutar\! Los archivos `.js` no existen hasta que corres `npx tsc`.

-----

## 📁 Estructura del Proyecto

```
design-patterns-examples/
├── src/                  # Código fuente en TypeScript
│   ├── strategy-pattern.ts
│   └── singleton-pattern.ts
├── dist/                 # Archivos compilados en JavaScript
├── package.json          # Configuración del proyecto
├── tsconfig.json         # Configuración del compilador TypeScript
└── README.md             # Documentación del proyecto
```

-----