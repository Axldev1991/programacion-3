# Propuesta de Arquitectura: Integración Masiva del Playground (Clases I-VII)

## 1. Objetivo
Unificar y enriquecer todo el plan de estudios interactivo (Módulos I a VII) dentro del **JS PlayLab Playground**. El objetivo es migrar todos los ejercicios de práctica de cada una de las clases a una base de datos centralizada y dinámica (`js/exercises-db.js`), estructurada de forma modular con su respectiva teoría enriquecida (con tips, advertencias, ejemplos de código formateados), plantillas iniciales de código limpias, y funciones de autotesteo que se ejecutan directamente en la consola del playground.

---

## 2. Decisiones de Arquitectura e Impacto

1. **Estructura Centralizada de Datos (`js/exercises-db.js`)**:
   - **Problema**: El playground original solo cargaba la Clase III. Necesitamos cargar dinámicamente las otras 6 clases.
   - **Solución**: Modularizar `exercises-db.js` con las claves `js1`, `js2`, `js3`, `js4`, `js5`, `js6`, `js7` expuestas en el objeto global `window.PLAYLAB_EXERCISES`.
   - **Ventaja**: Carga perezosa del estado, desacoplamiento absoluto de la lógica de renderizado en `js/main.js` y el contenido educativo.

2. **Funcionalización Limpia de Ejercicios en Clase II**:
   - **Problema**: Clase II original (`practica.js`) utiliza scripting lineal con variables sueltas y declaraciones `console.log` directas. Esto no es encapsulable ni testeable dinámicamente en el editor de código del playground sin pisar variables globales o causar colisiones de ámbito.
   - **Solución**: Convertir los 10 ejercicios de la Clase II a funciones puras equivalentes (ej: `evaluarNota(nota)`, `evaluarParImpar(numero)`, `esNumeroPrimo(candidato)`). Esto eleva la calidad técnica y de diseño de los algoritmos del estudiante y se alinea perfectamente con la pedagogía del PlayLab.

3. **Verificadores Robustos y Específicos (`testFnCode`)**:
   - **Problema**: Los ejercicios de manipulación del DOM (Clase VI) y persistencia (Clase V) requieren elementos de interfaz específicos y estados del storage limpios antes y después del test.
   - **Solución**: Cada `testFnCode` incluirá un pre-bloque que limpia y monta elementos auxiliares sintéticos (en el DOM) o borra claves específicas de `localStorage`/`sessionStorage` para garantizar la reproducibilidad matemática de las pruebas.

---

## 3. Experiencia de Usuario (UI/UX)
- **Selectores de Clases y Ejercicios Completamente Integrados**: El usuario podrá cambiar de módulo e instantáneamente se poblará la barra de píldoras de ejercicios del 1 al 10.
- **Teoría Contextualizada por Ejercicio**: Ya no hay teoría genérica. Cada ejercicio mostrará exactamente qué necesita resolver con un bloque de ejemplo sintáctico resaltado.
- **Micro-Runner en Tiempo Real**: Ejecución inmediata con reporte detallado de aserciones en el panel de consola del Playground.
