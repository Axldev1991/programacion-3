# 🚀 Clase III: Scopes, Hoisting y Arquitectura de Funciones

¡Bienvenido al módulo de estudio y práctica de **Funciones y Ámbitos**! En este espacio vas a dominar cómo estructurar código reutilizable (DRY), cómo controla JavaScript el acceso a las variables (Scopes), el misterioso comportamiento de elevación (Hoisting) y patrones avanzados de closures y callbacks.

---

## 💡 Resumen Teórico de Bolsillo

### 1. Scopes (Ámbito o Alcance)
El **Scope** determina qué partes de tu código pueden ver o usar una variable.
*   **Scope Global:** Variables declaradas fuera de cualquier función. Son accesibles en todo el archivo (y vinculadas a `window` en el navegador).
*   **Scope de Función (Local):** Variables creadas con `var`, `let` o `const` dentro de una función. Solo existen allí dentro.
*   **Scope de Bloque:** Introducido en ES6. Las variables declaradas con `let` o `const` dentro de llaves `{}` (como un `if` o `for`) solo existen dentro de ese bloque. ¡Las de tipo `var` se escapan de los bloques!

### 2. Hoisting (Elevación)
Es el comportamiento por el cual el intérprete de JS "eleva" virtualmente las declaraciones de variables y funciones al principio de su ámbito antes de ejecutar el código.
*   **Funciones Declaradas:** Tienen hoisting completo. Podés llamarlas antes de haberlas escrito en el código.
*   **Variables `var`:** Se elevan pero se inicializan como `undefined`. Si las usás antes de declararlas, valen `undefined`.
*   **Variables `let` y `const`:** Se elevan pero entran en la **Temporal Dead Zone (TDZ)**. Si intentás usarlas antes de su línea de declaración, el programa explota tirando un `ReferenceError`.
*   **Funciones Expresadas (`const miFunc = function() {}`):** Se comportan como variables comunes (dependen de si las declarás con `const`/`let` o `var`). No admiten hoisting completo.

### 3. Funciones Modernas y Parámetros
*   **Arrow Functions (Flechas):** Sintaxis compacta sin su propio contexto de `this` (tienen `this` léxico).
    ```js
    const sumar = (a, b) => a + b; // Retorno implícito si es una sola línea
    ```
*   **Parámetros Rest (`...args`):** Permiten recibir un número indeterminado de argumentos en forma de array.
    ```js
    function sumarTodo(...numeros) {
        return numeros.reduce((acc, num) => acc + num, 0);
    }
    ```

### 4. Closures (Clausuras)
Un **Closure** es la combinación de una función y el entorno léxico donde fue creada. Permite que una función interna **recuerde y acceda** a las variables de su función externa (padre), incluso después de que la función externa haya terminado de ejecutarse. Es el pilar fundamental para crear variables privadas en JavaScript.

---

## 📂 Estructura de esta carpeta de práctica

*   [practica.js](file:///home/axel/Escritorio/UTN/Programacion%203/03-estudio-y-practica/clase-3-funciones-y-scopes/practica.js): Plantilla con los **10 ejercicios** de menor a mayor complejidad sobre funciones, scopes y hoisting.
*   [index.html](file:///home/axel/Escritorio/UTN/Programacion%203/03-estudio-y-practica/clase-3-funciones-y-scopes/index.html): Panel interactivo visual para que corras y valides tus códigos directamente en tu navegador.

---

## 🛠️ Cómo correr y verificar tus soluciones

1.  Corré tu servidor local desde la raíz del proyecto si no lo tenés activo:
    ```bash
    python3 -m http.server 8000
    ```
2.  Abrí en tu navegador la ruta de este módulo:
    👉 [http://localhost:8000/03-estudio-y-practica/clase-3-funciones-y-scopes/](http://localhost:8000/03-estudio-y-practica/clase-3-funciones-y-scopes/)
3.  Presioná **F12 -> Consola** para ver las salidas en vivo y tus correcciones en tiempo real.
