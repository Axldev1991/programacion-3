# 🚀 Clase I: Sintaxis Básica, Variables y Operadores

¡Bienvenido al primer módulo del laboratorio de práctica! Acá vas a dominar los cimientos absolutos de JavaScript: cómo maneja la memoria (`let`, `const`, `var`), los tipos de datos fundamentales y la diferencia crítica de comparación de tipos.

---

## 💡 Resumen Teórico de Bolsillo

### 1. Variables y Mutabilidad
*   **`const`:** Para valores que no van a cambiar su referencia. **Usalo por defecto**. Previene la reasignación accidental.
*   **`let`:** Para variables que van a mutar (ej. contadores, flags). Ámbito limitado al bloque `{}` donde se declara.
*   **`var`:** Ámbito de función. Admite hoisting inicializando en `undefined`. **No lo uses nunca**. Es propenso a bugs.

### 2. Tipos de Datos Primitivos
*   `Number` (ej: `42`, `-3.14`)
*   `String` (ej: `"Hola"`, `'Mundo'`, `` `Valor: ${x}` ``)
*   `Boolean` (`true` o `false`)
*   `null` (ausencia explícita de valor)
*   `undefined` (variable declarada sin valor asignado)

### 3. Operadores y Comparaciones
*   `==` (Igualdad débil): Convierte tipos antes de comparar (coerción). Genera falsos positivos. ¡Evitalo!
*   `===` (Igualdad estricta): Compara valor **y tipo** sin excepciones. Usalo siempre.
*   `typeof`: Operador unario que te indica el tipo de dato de una expresión en tiempo de ejecución.
*   `parseInt()` / `parseFloat()`: Funciones globales para parsear Strings a números.

---

## 🛠️ Archivos de este módulo
*   [practica.js](file:///home/axel/Escritorio/UTN/Programacion%203/03-estudio-y-practica/clase-1-sintaxis-y-variables/practica.js): Contiene 10 ejercicios interactivos.
*   [index.html](file:///home/axel/Escritorio/UTN/Programacion%203/03-estudio-y-practica/clase-1-sintaxis-y-variables/index.html): Tu banco de pruebas gráfico para correr y visualizar tus avances en tiempo real.
