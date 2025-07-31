## 📝 README.md actualizado

```markdown
# 🧩 Ejemplos de Patrones de Diseño

Este repositorio contiene implementaciones simples y comentadas de los principales **patrones de diseño** en TypeScript. El objetivo es facilitar la comprensión de cada patrón y mostrar cómo pueden aplicarse en proyectos reales.

Además, incluye un **menú interactivo en consola** que permite explorar los patrones disponibles de forma dinámica.

-----

## 📚 Categorías

Aquí encontrarás los patrones clasificados por su propósito:

- 🔨 **Creacionales** (`creational-patterns/`): Patrones que se encargan de la creación de objetos, aumentando la flexibilidad y reutilización del código. Ejemplos como Singleton, Factory Method, Abstract Factory, etc.
- 🧱 **Estructurales** (`structural-patterns/`): Patrones que se ocupan de la composición de clases y objetos, formando estructuras más grandes y eficientes. Ejemplos como Adapter, Facade, Decorator, etc.
- 🧠 **Comportamiento** (`behavioral-patterns/`): Patrones que se enfocan en la comunicación y las interacciones entre objetos, mejorando la flexibilidad en la asignación de responsabilidades. Ejemplos como Strategy, Observer, Command, etc.

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

1. **Clona el repositorio:**

    ```bash
    git clone https://github.com/tu-usuario/design-patterns-examples.git
    cd design-patterns-examples
    ```

2. **Instala las dependencias necesarias:**

    ```bash
    npm install
    ```

    Esto instalará TypeScript y otras dependencias definidas en `package.json`.

-----

## 🧪 Scripts Disponibles

Estos comandos están definidos en el archivo `package.json` para facilitar el desarrollo:

| Comando        | Descripción                                                                 |
|----------------|------------------------------------------------------------------------------|
| `npm run build`   | Compila el proyecto TypeScript y genera los archivos en `dist/`             |
| `npm run watch`   | Compila en tiempo real mientras editas los archivos `.ts`                   |
| `npm run clean`   | Elimina la carpeta `dist/` para limpiar los archivos compilados             |
| `npm start`       | Ejecuta el menú interactivo desde `dist/index.js` (requiere compilación previa) |

-----

## ▶️ Menú Interactivo

El archivo `src/index.ts` contiene un menú en consola que te permite seleccionar y ejecutar ejemplos de patrones de diseño. Para usarlo:

1. Compila el proyecto:

    ```bash
    npm run build
    ```

2. Ejecuta el menú:

    ```bash
    npm start
    ```

3. Selecciona el patrón que deseas explorar. Los patrones están comentados por defecto y puedes ir activándolos uno por uno.

-----

## 📁 Estructura del Proyecto

```
design-patterns-examples/
├── src/                      # Código fuente en TypeScript
│   ├── behavioral-patterns/  # Patrones de Comportamiento
│   │   └── strategy-pattern.ts
│   ├── creational-patterns/  # Patrones Creacionales
│   │   └── singleton-pattern.ts
│   └── structural-patterns/  # Patrones Estructurales
│       └── decorator-pattern.ts
├── dist/                     # Archivos compilados en JavaScript (refleja la estructura de src/)
│   ├── behavioral-patterns/
│   │   └── strategy-pattern.js
│   ├── creational-patterns/
│   │   └── singleton-pattern.js
│   └── structural-patterns/
│       └── decorator-pattern.js
├── package.json              # Configuración del proyecto y scripts
├── tsconfig.json             # Configuración del compilador TypeScript
└── README.md                 # Documentación del proyecto
```