# 🚀 Clase IV: Arrays, Objetos Literales y Métodos Nativos

¡Bienvenido al módulo de Estructuras de Datos Básicas! Acá vas a aprender a organizar colecciones ordenadas (Arrays) e indexaciones dinámicas clave-valor (Objetos Literales), además de dominar los principales métodos nativos de JavaScript para manipularlos.

---

## 💡 Resumen Teórico de Bolsillo

### 1. Arrays (Listas Ordenadas)
Estructuras indexadas desde el índice `0`.
```js
let lenguajes = ["JavaScript", "Python", "Rust"];
```

### 2. Objetos Literales (Clave-Valor)
Colecciones dinámicas de propiedades y métodos.
```js
let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    arrancar() { return "Brumm! 🚗"; }
};
```
*   **Acceso por Punto:** `auto.marca` (Uso estándar cuando conocés la clave).
*   **Acceso por Corchetes:** `auto["marca"]` o `auto[variableConClave]` (Fundamental para accesos con claves dinámicas o caracteres especiales).

### 3. Métodos Nativos Esenciales (Muta vs No Muta)
*   **`push(elem)`:** Agrega al final. **Muta el original**.
*   **`shift()`:** Remueve y retorna el primer elemento. **Muta el original**.
*   **`slice(ini, fin)`:** Extrae una porción sin modificar el array original. **Retorna copia**.
*   **`splice(idx, cant, ...nuevos)`:** Inserta, borra o reemplaza elementos en `idx`. **Muta el original**.
*   **`split(separador)`:** Convierte un String en un Array trozándolo en el separador.
*   **`includes(buscado)`:** Retorna `true` si el elemento o subcadena existe.

---

## 🛠️ Archivos de este módulo
*   [practica.js](file:///home/axel/Escritorio/UTN/Programacion%203/03-estudio-y-practica/clase-4-arrays-y-objetos/practica.js): 10 ejercicios prácticos e interactivos de estructuras de datos.
*   [index.html](file:///home/axel/Escritorio/UTN/Programacion%203/03-estudio-y-practica/clase-4-arrays-y-objetos/index.html): Tu panel para correr los códigos y ver los diagnósticos de los tests directamente en el navegador.
