# 🚀 Clase VI: Manipulación del DOM y Gestión de Eventos

¡Bienvenido al módulo de Interactividad Web en Vivo! Acá vas a aprender a conectar JavaScript con el código HTML, manipulando nodos del documento en tiempo real (DOM) y respondiendo a las acciones de los usuarios mediante la escucha de Eventos.

---

## 💡 Resumen Teórico de Bolsillo

### 1. ¿Qué es el DOM (Document Object Model)?
Es la estructura de objetos (árbol de nodos) que genera el navegador al cargar un archivo HTML. JavaScript puede interactuar con ella para cambiar dinámicamente contenidos, estilos y clases.

### 2. Selectores de Nodos (Lecturas)
*   **`document.getElementById("id")`:** Retorna el nodo único cuyo atributo ID coincida. Es el más rápido y directo.
*   **`document.querySelector(".clase" / "#id" / "tag")`:** Selecciona el **primer** elemento que coincida con el selector CSS provisto.
*   **`document.querySelectorAll("selector")`:** Retorna una colección de nodos (`NodeList`) con todas las coincidencias. Es iterable mediante un `.forEach()`.

### 3. Modificaciones de Nodos (Escritura)
*   **`textContent`:** Cambia el texto interno de un elemento de manera segura. **Siempre preferir textContent**.
*   **`innerHTML`:** Inserta etiquetas HTML completas dentro del nodo. (Cuidado con entradas de usuario por ataques de inyección XSS).
*   **`createElement("tag")`:** Instancia en memoria un nuevo nodo de etiqueta HTML.
*   **`parent.appendChild(child)`:** Inserta físicamente el nodo hijo al final de un contenedor padre.
*   **`element.classList.add("clase")` / `remove("clase")` / `toggle("clase")`:** Edición ágil de estilos asignando y removiendo clases CSS predefinidas.

### 4. Gestión de Eventos
Hacen interactiva a la web al disparar lógica en base a acciones del usuario:
```js
let btn = document.getElementById("miBoton");
btn.addEventListener("click", (evento) => {
    console.log("¡Hiciste click en: ", evento.target);
});
```
*   **`evento.preventDefault()`:** Detiene el comportamiento nativo por defecto del navegador (por ejemplo, recargar la pantalla al enviar un formulario).

---

## 🛠️ Archivos de este módulo
*   [practica.js](file:///home/axel/Escritorio/UTN/Programacion%203/03-estudio-y-practica/clase-6-dom-y-eventos/practica.js): 10 ejercicios prácticos y vivos para manipular el HTML.
*   [index.html](file:///home/axel/Escritorio/UTN/Programacion%203/03-estudio-y-practica/clase-6-dom-y-eventos/index.html): Dashboard interactivo con elementos dinámicos listos para ser controlados por tus scripts.
