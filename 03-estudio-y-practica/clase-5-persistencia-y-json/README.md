# 🚀 Clase V: Objetos Globales, Persistencia y Serialización JSON

¡Bienvenido al módulo de Persistencia de Datos y APIs globales del navegador! Acá vas a aprender a utilizar el objeto global `window`, manejar el ciclo de vida del almacenamiento del cliente con `localStorage` y `sessionStorage`, y dominar el formato de intercambio de datos `JSON`.

---

## 💡 Resumen Teórico de Bolsillo

### 1. El Objeto Global `window`
En el entorno web, `window` es el objeto global supremo. Cualquier variable declarada con `var` o funciones declaradas clásicamente se adjuntan a él. Expone APIs nativas como:
*   `window.innerWidth` / `window.innerHeight`: Dimensiones de la pantalla.
*   `window.location`: Información de la URL actual.
*   `window.setTimeout()` y `window.setInterval()`: Control de ejecución en el tiempo.

### 2. Almacenamiento en el Cliente (Client-Side Storage)
*   **`localStorage`:** Guarda datos de forma **permanente** en el navegador del usuario. Sobrevive a cierres de pestaña y apagados de computadora.
*   **`sessionStorage`:** Guarda datos de forma **temporal**. Se destruyen automáticamente cuando el usuario cierra la pestaña.
*   *Nota:* Ambos solo almacenan **Strings (texto plano)**.

### 3. Serialización JSON (JavaScript Object Notation)
Dado que `localStorage` solo soporta strings, si queremos guardar un array u objeto, debemos convertirlo:
*   **`JSON.stringify(objeto)` (Serializar):** Convierte un objeto o array de JS a una cadena de texto en formato JSON.
*   **`JSON.parse(textoJSON)` (Deserializar):** Convierte una cadena de texto JSON válida de vuelta a un objeto o array de JS interactivo.

---

## 🛠️ Archivos de este módulo
*   [practica.js](file:///home/axel/Escritorio/UTN/Programacion%203/03-estudio-y-practica/clase-5-persistencia-y-json/practica.js): 10 ejercicios interactivos para dominar persistencia y serialización JSON.
*   [index.html](file:///home/axel/Escritorio/UTN/Programacion%203/03-estudio-y-practica/clase-5-persistencia-y-json/index.html): Panel para comprobar las soluciones en vivo en el navegador.
