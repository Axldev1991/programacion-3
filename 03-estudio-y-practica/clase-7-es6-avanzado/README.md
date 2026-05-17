# 🚀 Clase VII: Callbacks, HOFs Avanzados, Destructuring y Spread Operator

¡Bienvenido al último y más avanzado módulo de JavaScript Moderno (ES6+)! Acá vas a dominar las características arquitectónicas del lenguaje: las Funciones de Orden Superior (HOFs) para programar de forma declarativa e inmutable, y los atajos de sintaxis (Destructuring, Spread y Rest) que hacen a tu código limpio y profesional.

---

## 💡 Resumen Teórico de Bolsillo

### 1. Programación Declarativa y HOFs (High Order Functions)
Son métodos nativos iterativos que reciben una función como argumento y devuelven un nuevo resultado sin mutar el array original (principio de inmutabilidad):
*   **`.filter(fn)`:** Retorna un nuevo array con todos los elementos que pasen el filtro de verdad.
*   **`.map(fn)`:** Transforma cada elemento uno a uno, retornando un nuevo array del mismo largo.
*   **`.reduce(fn, inicio)`:** Acumula todos los ítems reduciendo la colección a un único valor (ej. una suma total).
*   **`.find(fn)`:** Retorna el **primer** elemento que cumpla con la condición de verdad (o `undefined` si ninguno coincide).

### 2. Desestructuración (Destructuring)
Sintaxis limpia para extraer campos específicos de estructuras complejas a variables individuales:
*   **Objetos:** `const { nombre, rol: puesto } = usuario;` (con renombrado a `puesto`).
*   **Arrays:** `const [primero, segundo] = lista;` (extracción por posición ordenada).

### 3. Operador de Propagación y Agrupación (`...`)
*   **Spread Operator (Propagación):** Esparce elementos para clonar o fusionar colecciones sin mutar las originales.
    ```js
    const copiaArray = [...original];
    const fusionObj = { ...base, ...usuario };
    ```
*   **Rest Operator (Agrupamiento):** Se usa en la firma de funciones para agrupar múltiples argumentos indefinidos en un único Array iterable:
    ```js
    function sumar(...valores) {
        return valores.reduce((acc, v) => acc + v, 0);
    }
    ```

---

## 🛠️ Archivos de este módulo
*   [practica.js](file:///home/axel/Escritorio/UTN/Programacion%203/03-estudio-y-practica/clase-7-es6-avanzado/practica.js): 10 ejercicios avanzados de HOFs, desestructuraciones y combinaciones.
*   [index.html](file:///home/axel/Escritorio/UTN/Programacion%203/03-estudio-y-practica/clase-7-es6-avanzado/index.html): Panel para comprobar las soluciones en vivo en el navegador.
