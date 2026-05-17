# 🎓 Programación 3 - Espacio de Trabajo JS

¡Bienvenido a tu entorno de estudio y práctica de JavaScript para la UTN (División 132)! Este repositorio fue reestructurado con una arquitectura limpia y modular para facilitar tu aprendizaje teórico y tu destreza práctica.

---

## 🗂️ Estructura del Workspace

*   [01-materia-oficial/](file:///home/axel/Escritorio/UTN/Programacion%203/01-materia-oficial/) (Ignorado por Git): Contiene el repositorio oficial de la cursada ([UTN2026_c1Div132](file:///home/axel/Escritorio/UTN/Programacion%203/01-materia-oficial/UTN2026_c1Div132/)). Podés sincronizarlo y tirar un `git pull` cuando quieras sin que afecte tus archivos locales.
*   [02-practicas-parciales/](file:///home/axel/Escritorio/UTN/Programacion%203/02-practicas-parciales/): Aloja los ejercicios prácticos de examen como la [Práctica Frutería](file:///home/axel/Escritorio/UTN/Programacion%203/02-practicas-parciales/practica-fruteria/).
*   [03-estudio-y-practica/](file:///home/axel/Escritorio/UTN/Programacion%203/03-estudio-y-practica/): **¡Tu Laboratorio de JavaScript (JS PlayLab)!** Un entorno web interactivo interactivo con consola integrada, editor de código en vivo y resúmenes teóricos interactivos de todos los módulos vistos (desde JS I hasta JS VII).

---

## 🚀 Cómo correr el Laboratorio Interactivo (JS PlayLab)

Para evitar problemas de CORS del navegador al cargar scripts locales y APIs del cliente, levantá un servidor web local en la raíz del espacio de trabajo:

```bash
python3 -m http.server 8000
```

Luego, abrí en tu navegador preferido:
👉 [http://localhost:8000/03-estudio-y-practica/](http://localhost:8000/03-estudio-y-practica/)

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

---

## 🛠️ Tecnologías y Librerías del Proyecto
*   **Lenguaje:** JavaScript ES6+ Vanila.
*   **Servidor de desarrollo:** Python HTTP Server.
*   **Estilos:** CSS Vanilla con diseño moderno Glassmorphic y fuentes web premium (Outfit y Fira Code).