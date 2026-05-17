# 📘 Manual de Estudio Completo: JavaScript I - VII

Este manual compila, organiza y estructura cronológicamente (desde los cimientos hasta los conceptos avanzados de ES6) todo el contenido del programa de **JavaScript** dictado por el profesor Fabián para la división 132 de la UTN. 

Se corrigió la ordenación inversa original del docente para ofrecer un hilo conductor lógico e interactivo, ideal para repasar antes de los exámenes.

---

## 🚀 Índice de Clases
1. [Clase I: Sintaxis Básica, Variables y Operadores](#-clase-i-sintaxis-básica-variables-y-operadores)
2. [Clase II: Estructuras de Control y Control de Flujo](#-clase-ii-estructuras-de-control-y-control-de-flujo)
3. [Clase III: Scopes, Hoisting y Arquitectura de Funciones](#-clase-iii-scopes-hoisting-y-arquitectura-de-funciones)
4. [Clase IV: Arrays, Objetos Literales y Métodos Nativos](#-clase-iv-arrays-objetos-literales-y-métodos-nativos)
5. [Clase V: Objetos Globales, Persistencia y Serialización JSON](#-clase-v-objetos-globales-persistencia-y-serialización-json)
6. [Clase VI: Manipulación del DOM y Gestión de Eventos](#-clase-vi-manipulación-del-dom-y-gestión-de-eventos)
7. [Clase VII: Callbacks, HOFs Avanzados, Destructuring y Spread Operator](#-clase-vii-callbacks-hofs-avanzados-destructuring-y-spread-operator)

---

## 📌 Clase I: Sintaxis Básica, Variables y Operadores

### 1. Variables y Ámbito de Memoria
JavaScript posee tres palabras clave para reservar espacio en memoria para guardar información:

| Palabra Clave | Tipo de Ámbito (Scope) | Reasignable | ¿Soporta Hoisting? | Recomendación de Uso |
|:---|:---|:---:|:---:|:---|
| `var` | De función (Function Scope) | Sí | Sí (Inicia en `undefined`) | **NUNCA usar**. Histórico. |
| `let` | De bloque (Block Scope `{}`) | Sí | No (Arroja error TDZ) | Usar para valores reasignables. |
| `const` | De bloque (Block Scope `{}`) | No | No (Arroja error TDZ) | **Usar por defecto**. Inmutable. |

### 2. Tipos de Datos Primitivos
*   **Number:** Todos los números (enteros, decimales).
*   **String:** Cadenas de caracteres delimitadas por `""`, `''` o `` ``.
*   **Boolean:** Solo admite estados `true` o `false`.
*   **null:** Representa la ausencia intencional de un valor u objeto.
*   **undefined:** Estado por defecto de una variable declarada sin inicialización.

### 3. Operadores Críticos
*   **Igualdad Simple (`==`):** Compara únicamente el valor, forzando la conversión implícita de tipos. (Evitar).
*   **Igualdad Estricta / Identidad (`===`):** Compara valor **y tipo** sin excepciones. (Usar siempre).
*   **Operador Typeof:** Permite inspeccionar el tipo de dato de cualquier operando en ejecución (`typeof 42` retorna `"number"`).

---

## 📌 Clase II: Estructuras de Control y Control de Flujo

### 1. Bifurcación Lógica (Condicionales)
*   **Estructura If-Else:** Permite ejecutar bloques de código alternativos basados en el valor de verdad de una condición.
*   **Operador Ternario:** Alternativa compacta y de una sola línea a la estructura `if-else` simple:
    ```js
    let acceso = edad >= 18 ? "Permitido ✅" : "Denegado ❌";
    ```
*   **Switch-Case:** Útil para evaluar una misma variable contra múltiples valores exactos, evitando anidamientos excesivos de `else if`.

### 2. Estructuras Iterativas (Bucles)
*   **Bucle `for`:** Para iteraciones basadas en contadores donde sabemos la cantidad exacta de ciclos de antemano.
*   **Bucle `while`:** Evalúa la condición **antes** de entrar al bucle. Si es falsa desde el inicio, nunca corre.
*   **Bucle `do...while`:** Corre el bloque de código **al menos una vez** y luego evalúa la condición de permanencia.
*   **Control del ciclo:**
    *   `break`: Interrumpe y sale del bucle inmediatamente.
    *   `continue`: Omite las líneas de código restantes en la iteración actual y salta al siguiente paso.

---

## 📌 Clase III: Scopes, Hoisting y Arquitectura de Funciones

### 1. Scopes y Hoisting
*   **Scope Global:** Asociado a la ventana del navegador (`window`). Accesible desde cualquier parte.
*   **Scope Local/Función:** Creado por variables `var` dentro de funciones.
*   **Block Scope:** Llaves de bloque `{}` que aíslan a variables `let` y `const`.
*   **Hoisting (Elevación):** JS lee y reserva espacio para declaraciones antes de ejecutar.
    *   `var`: Se eleva y se inicializa como `undefined`, provocando comportamientos erráticos.
    *   `let`/`const`: Se elevan pero entran en la *Temporal Dead Zone* (arrojan error si se accede antes de declararse).

### 2. Anatomía y Tipos de Funciones
Las funciones son bloques de código reutilizables y parametrizables que respetan el principio DRY (*Don't Repeat Yourself*).

1.  **Funciones Declaradas:** Tienen nombre, admiten hoisting y se declaran clásicamente:
    ```js
    function sumar(a, b) { return a + b; }
    ```
2.  **Funciones Expresadas:** Se guardan dentro de constantes/variables (no admiten hoisting):
    ```js
    const restar = function(a, b) { return a - b; };
    ```
3.  **Arrow Functions (Flechas):** Sintaxis moderna de ES6 con retorno implícito (si es de una sola línea) y contexto de `this` léxico:
    ```js
    const duplicar = x => x * 2;
    ```
4.  **Generadores:** Permiten pausar y reanudar ejecuciones produciendo iteradores paso a paso (`function*` y `yield`).

---

## 📌 Clase IV: Arrays, Objetos Literales y Métodos Nativos

### 1. Arrays (Vectores)
Listas indexadas y ordenadas de elementos.
```js
let lenguajes = ["JS", "Python", "Go"];
```

### 2. Objetos Literales
Colecciones dinámicas de propiedades en formato clave-valor.
```js
let usuario = {
    nombre: "Axel",
    edad: 25,
    saludar() { return `Hola, soy ${this.nombre}`; }
};
```
*   **Acceso:** Por punto (`usuario.nombre`) o por corchetes (`usuario["nombre"]`).
*   **Manipulación:** Se pueden agregar propiedades dinámicamente (`usuario.rol = "Dev"`) o borrarlas con `delete usuario.edad`.

### 3. Métodos Críticos de strings y arrays

| Tipo de Dato | Método | Descripción | ¿Muta el Original? |
|:---|:---|:---|:---:|
| **String** | `includes(sub)` | Retorna `true` si el texto contiene la subcadena. | No |
| **String** | `split(sep)` | Convierte un String en un Array separando por el carácter provisto. | No |
| **String** | `slice(ini, fin)` | Extrae un fragmento de la cadena desde el índice `ini` hasta `fin`. | No |
| **Array** | `push(elem)` | Agrega un elemento al final del array. | **Sí** |
| **Array** | `shift()` | Remueve y retorna el primer elemento del array. | **Sí** |
| **Array** | `splice(idx, cant)`| Inserta o borra elementos en el índice `idx`. | **Sí** |
| **Array** | `slice(ini, fin)` | Extrae una copia superficial de un fragmento del array. | No |

---

## 📌 Clase V: Objetos Globales, Persistencia y Serialización JSON

### 1. El Entorno `window`
En el navegador, `window` representa la pestaña global y expone APIs críticas:
*   `document`: Mapeo del DOM para manipulación de la interfaz.
*   `localStorage`/`sessionStorage`: Almacenamientos persistente y temporal.
*   Timers: `setTimeout()` (ejecuta una vez tras un retraso) y `setInterval()` (ejecuta de manera repetitiva).

### 2. Persistencia en Cliente
*   **`localStorage`:** Datos persistentes que sobreviven al reinicio de la PC. Límite de 5-10MB por dominio.
*   **`sessionStorage`:** Datos efímeros que se destruyen inmediatamente al cerrar la pestaña actual.

### 3. Serialización JSON Obligatoria
Dado que el almacenamiento local solo soporta cadenas de texto plano, es obligatorio convertir y decodificar las estructuras complejas (arrays u objetos):
```js
let carrito = [{ id: 1, prod: "Mouse" }];

// GUARDAR: De Objeto/Array a texto JSON
localStorage.setItem("carrito", JSON.stringify(carrito));

// LEER: De texto JSON a estructura de datos JS iterable
let carritoLeido = JSON.parse(localStorage.getItem("carrito"));
```

---

## 📌 Clase VI: Manipulación del DOM y Gestión de Eventos

### 1. El DOM (Document Object Model)
Es el mapeo en árbol de nodos que el navegador hace del HTML.
*   **Selectores recomendados:**
    *   `document.getElementById("id")`: Selección directa y optimizada por ID único.
    *   `document.querySelector(".clase")`: Selección del primer nodo coincidente con el selector CSS.
    *   `document.querySelectorAll("p")`: Retorna un listado inmutable de nodos `NodeList` con todas las coincidencias.

### 2. Manipulación Segura
*   **`textContent`:** Edita el texto de un elemento de manera segura. **Usar por defecto**.
*   **`innerHTML`:** Inserta y procesa código HTML de forma dinámica. Evitar cuando se inyectan variables que dependan de entradas del usuario (riesgo de inyección XSS).

---

## 📌 Clase VII: Callbacks, HOFs Avanzados, Destructuring y Spread Operator

### 1. Callbacks y Asincronía
Un **callback** es una función que se pasa como argumento a otra función para ser invocada de forma diferida o reactiva.
*   **Callback Hell:** Anidamiento excesivo de callbacks asincrónicos que arruina la legibilidad. Se soluciona hoy en día con Promesas y bloques de control `async/await`.

### 2. Funciones de Orden Superior (HOFs) sobre Arrays
Métodos nativos ultra eficientes para transformar e iterar listas sin mutar el array original (inmutabilidad):

```js
const productos = [
    { id: 1, nombre: "Teclado", precio: 30000 },
    { id: 2, nombre: "Mouse", precio: 15000 }
];

// 1. FILTER: Retorna una nueva lista que cumpla con la condición
const caros = productos.filter(p => p.precio >= 20000); // [{Teclado}]

// 2. MAP: Modifica o mapea cada ítem retornando una lista del mismo largo
const nombres = productos.map(p => p.nombre); // ["Teclado", "Mouse"]

// 3. REDUCE: Acumula los ítems en un único valor (ej. total de caja)
const total = productos.reduce((suma, p) => suma + p.precio, 0); // 45000
```

### 3. Desestructuración (Destructuring)
Sintaxis ágil para extraer variables directamente de objetos o arrays:
```js
const usuario = { nombre: "Axel", edad: 25, rol: "Developer" };

// Destructuring con renombrado de variable (alias) y valor por defecto
const { nombre, rol: puesto, activo = true } = usuario;
console.log(nombre, puesto, activo); // "Axel", "Developer", true
```

### 4. Operador Rest y Spread (`...`)
*   **Spread Operator:** Copia superficial e inmutable de arrays u objetos. Útil para fusionar:
    ```js
    const configBase = { tema: "oscuro", idioma: "es" };
    const configUsuario = { ...configBase, idioma: "en", fuente: "Inter" };
    ```
*   **Rest Operator:** Agrupa los argumentos restantes en una variable única de tipo lista:
    ```js
    function sumarTodo(...valores) {
        return valores.reduce((acc, v) => acc + v, 0);
    }
    ```

---

> [!TIP]
> **¿Querés poner a prueba alguno de estos temas?** Levantá tu servidor web local, entrá a tu laboratorio interactivo en el navegador y elegí el módulo en el dropdown de **JS PlayLab** para ver y ejecutar ejemplos prácticos en vivo.
