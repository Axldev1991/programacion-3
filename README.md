# 🎓 Programación 3 - Espacio de Trabajo JS & PlayLab

¡Bienvenido a tu entorno de estudio y práctica de JavaScript para la UTN (División 132)! Este repositorio cuenta con una arquitectura optimizada, limpia y modular para facilitar tu aprendizaje teórico y tu destreza práctica a través de una consola interactiva en vivo y autoevaluaciones inteligentes.

---

## 🗂️ Estructura del Workspace

*   **[01-materia-oficial/](file:///home/axel/Escritorio/UTN/Programacion%203/01-materia-oficial/) (Ignorado por Git):** Contiene el repositorio oficial de la cursada ([UTN2026_c1Div132](file:///home/axel/Escritorio/UTN/Programacion%203/01-materia-oficial/UTN2026_c1Div132/)). Podés sincronizarlo y tirar un `git pull` cuando quieras sin que afecte tus archivos locales o personales.
*   **[02-practicas-parciales/](file:///home/axel/Escritorio/UTN/Programacion%203/02-practicas-parciales/):** Aloja los ejercicios prácticos de examen como la [Práctica Frutería](file:///home/axel/Escritorio/UTN/Programacion%203/02-practicas-parciales/practica-fruteria/).
*   **[03-estudio-y-practica/](file:///home/axel/Escritorio/UTN/Programacion%203/03-estudio-y-practica/):** **¡Tu Laboratorio de JavaScript (JS PlayLab)!** Un entorno Single-Page Application (SPA) interactivo con consola integrada, editor de código en vivo y resúmenes teóricos interactivos de todos los módulos vistos (desde JS I hasta JS VII).

---

## 🚀 Arquitectura del Laboratorio Centralizado (SPA)

Para maximizar el rendimiento y la facilidad de estudio, hemos consolidado el laboratorio interactivo eliminando los archivos `index.html` redundantes en cada carpeta de clase. Todo se gestiona desde el root de **JS PlayLab** mediante una arquitectura desacoplada:

1.  **Carga Teórica Instantánea:** Mediante botones de acceso rápido o el menú de selección de módulos, la teoría y un ejercicio de prueba se cargan en tiempo real sin recargar la página.
2.  **Runner de Autotesting Dinámico:** El botón **"Correr Tests 🚀"** inyecta de forma segura el script `practica.js` de la clase seleccionada en el cuerpo del documento.
    *   **Bypass de CORS en entorno local (`file://`):** La inyección se realiza a través de tags `<script>` nativos con un parámetro de invalidación de caché (`?t=timestamp`), lo que te permite abrir la aplicación haciendo doble click sobre el archivo HTML sin necesidad de configuraciones CORS complejas.
    *   **Sandboxing de DOM (Clase VI):** Para evitar colisiones visuales y del DOM durante las pruebas de la clase de DOM y Eventos, PlayLab levanta dinámicamente un sandbox mockeado oculto (`#sandbox-dom`) al final del body que se resetea automáticamente en cada ejecución.

---

## 🎓 Módulos de Aprendizaje Disponibles

| ID | Clase / Módulo | Descripción / Contenido Clave |
| :--- | :--- | :--- |
| **JS1** | Clase I: Sintaxis y Variables | Variables (`let`, `const`), tipos de datos primitivos, operadores aritméticos/lógicos. |
| **JS2** | Clase II: Control de Flujo | Condicionales (`if/else`, `switch`), bucles (`for`, `while`, `do-while`), iteración estructurada. |
| **JS3** | Clase III: Scopes, Hoisting y Funciones | Ámbito de variables (léxico, bloque, global), alzamiento (*hoisting*), closures y tipos de funciones. |
| **JS4** | Clase IV: Arrays y Objetos | Manipulación de arreglos, destructuración, objetos literales, métodos avanzados de array (`map`, `filter`, `reduce`). |
| **JS5** | Clase V: Persistencia y JSON | Serialización de objetos (`JSON.stringify`, `JSON.parse`), almacenamiento web (`localStorage`, `sessionStorage`). |
| **JS6** | Clase VI: DOM y Eventos | Selección y manipulación de nodos, creación de elementos dinámicos, escucha de eventos nativos. |
| **JS7** | Clase VII: ES6 Avanzado | Promesas, asincronía (`async/await`), desestructuración anidada, operador spread/rest. |

---

## 🛠️ Cómo Utilizar el Entorno de Práctica

1.  Abrí el archivo [index.html](file:///home/axel/Escritorio/UTN/Programacion%203/03-estudio-y-practica/index.html) directamente en tu navegador (doble click) o levantá un servidor local en la raíz con `python3 -m http.server 8000`.
2.  Editá los archivos `practica.js` de cada módulo en tu editor de código preferido (VS Code, Cursor, etc.) resolviendo los 10 desafíos propuestos.
3.  Presioná **"Correr Tests 🚀"** en el Dashboard interactivo para ver los resultados de tu autoevaluación en la Consola Integrada del sitio al instante.

---

## 🔄 Cómo mantener actualizada la materia oficial

Para sincronizar el material docente y traer los nuevos archivos que suba el profesor a lo largo de la cursada:

```bash
cd 01-materia-oficial/UTN2026_c1Div132
git pull
cd ../..
```

> [!NOTE]
> De esta forma, el repositorio del docente se mantiene aislado e independiente, evitando conflictos de ramas o sub-módulos sucios en tu propio espacio de estudio.