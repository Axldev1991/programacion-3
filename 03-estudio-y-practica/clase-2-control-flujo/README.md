# 🌀 Clase II: Estructuras de Control y Control de Flujo

¡Bienvenido a tu módulo práctico de Control de Flujo! En este espacio vas a dominar cómo tomar decisiones y repetir acciones de forma eficiente en JavaScript.

---

## 💡 Resumen Teórico de Bolsillo

### 1. Condicionales (Tomar Decisiones)
*   **`if-else if-else`:** Evalúa condiciones de forma secuencial de arriba a abajo.
*   **Operador Ternario (`? :`):** Alternativa inline para `if-else` sencillos que retornan un valor.
    ```js
    const estado = aprobado ? "Celebrar 🎉" : "Seguir practicando 📚";
    ```
*   **`switch-case`:** Evaluación estricta (`===`) de una sola variable contra múltiples valores posibles. ¡No olvides el `break` al final de cada caso!

### 2. Bucles (Repetir Tareas)
*   **`for` (Controlado por contador):** Ideal cuando sabés cuántas veces necesitás repetir el código.
*   **`while` (Condición inicial):** Evalúa la condición antes de ejecutar. Si es falsa, no entra nunca.
*   **`do-while` (Condición final):** Ejecuta al menos una vez, y luego decide si continúa iterando.

### 3. Palabras Clave de Salto
*   **`break`:** Detiene la ejecución del bucle por completo y salta a la primera línea fuera de él.
*   **`continue`:** Salta el resto de la iteración actual y avanza directo al siguiente ciclo del bucle.

---

## 📂 Estructura de esta carpeta de práctica

*   [practica.js](file:///home/axel/Escritorio/UTN/Programacion%203/03-estudio-y-practica/clase-2-control-flujo/practica.js): Archivo JavaScript preparado con la plantilla de los **10 ejercicios**. Escribí tu código debajo del comentario de cada ejercicio.
*   [index.html](file:///home/axel/Escritorio/UTN/Programacion%203/03-estudio-y-practica/clase-2-control-flujo/index.html): Documento HTML enlazado para que puedas correr y probar tus soluciones cómodamente en tu navegador.

---

## 🛠️ Cómo correr y verificar tus soluciones

1.  Asegurate de tener el servidor local levantado en la raíz del espacio de trabajo:
    ```bash
    python3 -m http.server 8000
    ```
2.  Abrí en tu navegador la ruta de esta carpeta:
    👉 [http://localhost:8000/03-estudio-y-practica/clase-2-control-flujo/](http://localhost:8000/03-estudio-y-practica/clase-2-control-flujo/)
3.  Abrí la consola de desarrollador del navegador (**F12 -> Pestaña Consola**) para ver las salidas y errores de tus soluciones.
