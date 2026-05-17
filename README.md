# Programación 3 - Espacio de Estudio

Espacio de trabajo y repositorio personal para el estudio de JavaScript de la UTN (División 132).

## Estructura del Proyecto

*   `js/main.js` e `index.html`: Tu entorno limpio de pruebas para escribir, experimentar y practicar código JS.
*   `Parcial practicaFruteria EXTRA sin CSS/`: Ejercicios de práctica locales de parcial.
*   `UTN2026_c1Div132/` (Clonado y Git-ignorado): Repositorio oficial de la materia con las notas, explicaciones de callbacks, HOFs, DOM, y guías del profesor.

## Cómo mantener actualizado el repositorio de la materia

Para sincronizar y traer el contenido nuevo que vaya subiendo el profesor a lo largo de la cursada:

```bash
cd UTN2026_c1Div132
git pull
cd ..
```

> [!NOTE]
> De esta forma, el repositorio del profesor está totalmente aislado y podés actualizarlo sin que ensucie o interfiera con el historial de Git de tus propios archivos de estudio.

## Cómo probar tu código en el navegador

Para ejecutar tus archivos y ver las salidas por consola de forma segura sin problemas de CORS del navegador, levantá un servidor web local en la carpeta del proyecto:

**Opción rápida con Python:**
```bash
python3 -m http.server 8000
```
Y luego abrí en el navegador: [http://localhost:8000](http://localhost:8000)