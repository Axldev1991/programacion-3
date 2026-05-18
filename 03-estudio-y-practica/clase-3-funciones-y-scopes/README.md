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

---

## 📘 Guía de Estudio Conceptual de los Ejercicios

Para ayudarte a asimilar la materia a fondo, acá tenés la explicación conceptual de cada ejercicio de la práctica, qué herramientas tenés que usar y qué trampas tenés que evitar.

### Nivel Básico

#### 01. CALCULADORA BÁSICA (Declaración vs Expresión)
*   **El Concepto:** Comparar la diferencia sintáctica y de comportamiento entre una función declarada tradicional y una función expresada (asignada a una variable).
*   **Qué tenés que saber:** Las funciones declaradas tienen hoisting (se pueden llamar antes de escribirlas). Las expresadas asociadas a `const` o `let` no se pueden usar antes de su línea de definición porque se comportan como variables comunes en la Zona Muerta Temporal (TDZ).

#### 02. CONVERSOR DE TEMPERATURA (Arrow Functions)
*   **El Concepto:** Dominar la sintaxis moderna de ES6 de las funciones flecha (`() => {}`).
*   **Qué tenés que saber:** Si tu función tiene una única expresión o línea de código, podés omitir las llaves `{}` y la palabra clave `return`. Esto se conoce como **retorno implícito**.
*   **Ejemplo:** `const duplicar = x => x * 2;`

#### 03. CONTADOR DE VISITAS (Scope Global vs Local)
*   **El Concepto:** Comprender el ciclo de vida de las variables y dónde residen en memoria.
*   **Qué tenés que saber:** Si declarás una variable dentro de una función, cada vez que llames a la función se volverá a crear desde cero y morirá al terminar. Si necesitás acumular un estado que persista entre llamadas, esa variable acumuladora debe vivir en un ámbito superior (ámbito global o de módulo) para que no sea destruida.

#### 04. SIMULADOR DE ACCESO (Scope de Bloque con Let/Const)
*   **El Concepto:** Aprender la diferencia entre el ámbito de función (`var`) y el ámbito de bloque (`let` y `const`).
*   **Qué tenés que saber:** Las llaves `{}` de un `if`, `for`, `while` o un simple bloque de código crean un **ámbito de bloque**. Las variables declaradas con `let` o `const` adentro de esas llaves son invisibles fuera de ellas. Si intentás usarlas afuera, JavaScript lanzará un error de referencia.

---

### Nivel Intermedio

#### 05. EL MISTERIO DEL HOISTING (Diagnóstico de Elevación)
*   **El Concepto:** Predecir cómo el motor de JavaScript reordena mentalmente la declaración de variables y funciones antes de ejecutar.
*   **Qué tenés que saber:** 
    *   Las variables declaradas con `var` se elevan al inicio y se inicializan como `undefined`.
    *   Las variables declared con `let` y `const` se elevan pero quedan en la Zona Muerta Temporal (TDZ). Usarlas antes de declararlas tira un error fatal.
    *   Las funciones tradicionales se elevan por completo con todo su cuerpo.

#### 06. PROMEDIO DE NOTAS (Parámetros Rest)
*   **El Concepto:** Manejar un número indefinido de argumentos de entrada usando la sintaxis `...notas`.
*   **Qué tenés que saber:** 
    *   Los parámetros rest empaquetan todos los argumentos adicionales recibidos en un **Array**.
    *   Si no se pasa ningún argumento, el parámetro rest crea un array vacío `[]`, nunca `null` ni `undefined`. Por ende, para validar si está vacío, tenés que evaluar su longitud (`array.length === 0`).
    *   Al acumular valores en un bucle, siempre inicializá tu acumulador en `0` (`let suma = 0;`), sino su valor inicial será `undefined` y cualquier suma te dará `NaN`.

#### 07. PROCESADOR DE COMPRA (Callbacks)
*   **El Concepto:** Pasar una función como argumento a otra función para delegar comportamiento.
*   **Qué tenés que saber:** 
    *   Un callback es una referencia a una función. Se invoca adentro de la función contenedora usando paréntesis: `callback(datos)`.
    *   Si la llamada al callback produce el resultado final que debe retornar la función principal, tenés que hacer un retorno explícito: `return callback(precio)`. Si omitís el `return`, tu función principal devolverá `undefined`.

---

### Nivel Difícil

#### 08. CREADOR DE PERFILES PRIVADOS (Factory Functions + Closures)
*   **El Concepto:** Ocultar información sensible y emular variables privadas en JavaScript usando ámbitos léxicos cerrados.
*   **Qué tenés que saber:** 
    *   Una Factory Function retorna un nuevo objeto.
    *   Para hacer variables privadas, no las guardes como propiedades del objeto (por ejemplo, NO hagas `return { nombre: nombre }`). Guardalas como variables locales normales de la función (`let nombre = ...`).
    *   Los métodos del objeto retornado (getters/setters) "recuerdan" el entorno donde nacieron y pueden leer y modificar estas variables privadas a través de un **Closure**, ofreciendo una interfaz pública controlada.

#### 09. SALUDO RETRASADO ASINCRÓNICO (Scopes y Timers)
*   **El Concepto:** Controlar la asincronía y el orden de los argumentos en temporizadores.
*   **Qué tenés que saber:**
    *   La sintaxis obligatoria es `setTimeout(funcionReferencia, milisegundos)`.
    *   **Peligro:** Si ponés `callback(argumento)` directamente dentro de los argumentos de `setTimeout`, JavaScript la ejecutará de inmediato.
    *   Para evitar la ejecución inmediata y pasar argumentos al callback, tenés que envolver la invocación en una función flecha anónima: `setTimeout(() => callback(mensaje), 100)`.

#### 10. GENERADOR INCREMENTAL DE IDS (Generators y Yield)
*   **El Concepto:** Crear funciones que pueden pausar y reanudar su ejecución a voluntad, reteniendo su estado interno.
*   **Qué tenés que saber:**
    *   Se declaran usando un asterisco: `function* miGenerador() {}`.
    *   Utilizan la palabra clave `yield` para devolver un valor y **pausar** la ejecución.
    *   Cuando llamás a la función generadora, no se ejecuta el código inmediatamente. Te devuelve un objeto iterador.
    *   Cada vez que invocás `.next()` en ese iterador, la función avanza hasta el siguiente `yield`, devolviendo un objeto con la estructura `{ value: valorRetornado, done: false }`.
    *   Un bucle infinito (como `while(true)`) es perfectamente seguro y normal dentro de un generador, porque `yield` pausa la ejecución en cada paso evitando que se bloquee el navegador.

