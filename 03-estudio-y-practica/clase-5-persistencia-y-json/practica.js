/**
 * 🚀 CLASE V: Objetos Globales, Persistencia y Serialización JSON
 * -----------------------------------------------------------------
 * Resolvé los 10 ejercicios escribiendo tu código dentro de cada función.
 * Abrí index.html en tu navegador y abrí la consola (F12) para ver los tests en vivo.
 */

// ==========================================
// 🟢 NIVEL FÁCIL (1 - 7)
// ==========================================

/**
 * 01. INSPECCIONAR WINDOW
 * -----------------------------------------------------------------
 * Retorná un objeto que contenga las dimensiones internas actuales de la pantalla
 * del navegador de forma dinámica:
 * - ancho: utilizando window.innerWidth
 * - alto: utilizando window.innerHeight
 */
function obtenerDimensionesPantalla() {
    // Tu código aquí
}


/**
 * 02. TEMPORIZADOR DIFERIDO (SETTIMEOUT)
 * -----------------------------------------------------------------
 * Recibís un 'callback' y un retraso en 'ms' (milisegundos).
 * Programá la ejecución de 'callback' para que se dispare tras el retraso exacto.
 * Usá explícitamente el objeto global 'window.setTimeout'.
 */
function programarAlerta(callback, ms) {
    // Tu código aquí
}


/**
 * 03. ESCRIBIR EN LOCALSTORAGE
 * -----------------------------------------------------------------
 * Recibís una 'clave' (string) y un 'valor' (string).
 * Guardalos de forma persistente en 'localStorage'. No retornes nada.
 */
function guardarTexto(clave, valor) {
    // Tu código aquí
}


/**
 * 04. LEER DESDE LOCALSTORAGE
 * -----------------------------------------------------------------
 * Recibís una 'clave' (string).
 * Recuperá el valor previamente guardado desde 'localStorage' y retornalo.
 */
function obtenerTexto(clave) {
    // Tu código aquí
}


/**
 * 05. REMOCIÓN DE CLAVES PERSISTENTES
 * -----------------------------------------------------------------
 * Recibís una 'clave' (string).
 * Remové dicha clave y su valor asociado del almacén de 'localStorage'.
 */
function eliminarDato(clave) {
    // Tu código aquí
}


/**
 * 06. SERIALIZACIÓN JSON
 * -----------------------------------------------------------------
 * Recibís un 'objeto' de JavaScript.
 * Convertilo a formato de texto plano string JSON y retorná ese texto (usá JSON.stringify).
 */
function serializarObjeto(objeto) {
    // Tu código aquí
}


/**
 * 07. DESERIALIZACIÓN JSON
 * -----------------------------------------------------------------
 * Recibís una cadena de texto 'stringJSON'.
 * Decodificala de vuelta a su tipo de dato original en JavaScript (Objeto/Array) y retornala.
 */
function deserializarObjeto(stringJSON) {
    // Tu código aquí
}



// ==========================================
// 🟡 NIVEL MEDIO (8 - 10)
// ==========================================

/**
 * 08. PERSISTENCIA DE DATOS COMPLEJOS
 * -----------------------------------------------------------------
 * Recibís un 'carrito' (que es un Array con objetos adentro).
 * Serializá ese array usando stringify y guardalo en 'localStorage'
 * bajo la clave exacta "miCarrito".
 */
function guardarCarrito(carrito) {
    // Tu código aquí
}


/**
 * 09. CARGA DE DATOS SEGURA CON FALLBACK
 * -----------------------------------------------------------------
 * Cargá y decodificá el carrito previamente guardado bajo la clave "miCarrito"
 * desde 'localStorage'.
 * - Si "miCarrito" existe en localStorage, retorná el array/objeto JS deserializado.
 * - Si NO existe (retorna null), debés retornar un array vacío [] como fallback.
 */
function cargarCarrito() {
    // Tu código aquí
}


/**
 * 10. LIMPIEZA COMPLETA DE SESIÓN
 * -----------------------------------------------------------------
 * Escribí una función que vacíe/limpie por completo TODOS los almacenes del navegador:
 * - Vaciá 'localStorage'.
 * - Vaciá 'sessionStorage'.
 */
function limpiarPersistencia() {
    // Tu código aquí
}





// ==========================================
// 🧪 FRAMEWORK DE AUTOTESTEO EN CONSOLA
// ==========================================

(function ejecutarTests() {
    setTimeout(() => {
        console.clear();
        console.log("%c🧪 INICIANDO AUTO-EVALUACIÓN CLASE V - PERSISTENCIA Y JSON 🧪", "color: #ff9100; font-weight: 800; font-size: 1.2rem;");
        console.log("-----------------------------------------------------------------");

        let totalTests = 10;
        let aprobados = 0;

        const printResult = (num, title, success, details, error = null) => {
            const icon = success ? "✅" : "❌";
            const badgeColor = success ? "background: #ff9100; color: #000;" : "background: #ff1744; color: #fff;";
            console.group(`%c EJERCICIO ${num}: ${title} `, `${badgeColor} font-weight: bold; border-radius: 3px; padding: 2px 5px;`);
            if (success) {
                console.log(`%c${icon} Aprobado: ${details}`, "color: #ff9100; font-weight: 500;");
                aprobados++;
            } else {
                console.log(`%c${icon} Fallido: ${details}`, "color: #ff1744; font-weight: bold;");
                if (error) {
                    console.log("%cDetalle del error:", "color: #646a78; font-style: italic;");
                    console.error(error);
                }
            }
            console.groupEnd();
        };

        // 1. obtenerDimensionesPantalla
        try {
            const res = obtenerDimensionesPantalla();
            if (res && typeof res.ancho === "number" && typeof res.alto === "number") {
                printResult(1, "Inspección Window Viewport", true, `Leídas dimensiones: ${res.ancho}px x ${res.alto}px.`);
            } else {
                printResult(1, "Inspección Window Viewport", false, `Obtenido: ${JSON.stringify(res)}`);
            }
        } catch (e) {
            printResult(1, "Inspección Window Viewport", false, "Error en la ejecución.", e);
        }

        // 2. programarAlerta
        try {
            let llamado = false;
            programarAlerta(() => { llamado = true; }, 50);
            setTimeout(() => {
                if (llamado) {
                    printResult(2, "Temporizador Diferido", true, "Llamada asíncrona programada con window.setTimeout exitosamente.");
                } else {
                    printResult(2, "Temporizador Diferido", false, "La ejecución diferida no culminó en el tiempo estipulado.");
                }
            }, 80);
        } catch (e) {
            printResult(2, "Temporizador Diferido", false, "Error en la ejecución.", e);
        }

        // 3. guardarTexto
        try {
            localStorage.clear();
            guardarTexto("clavePrueba", "UTN Avellaneda");
            if (localStorage.getItem("clavePrueba") === "UTN Avellaneda") {
                printResult(3, "Escribir LocalStorage", true, "String plano guardado en localStorage exitosamente.");
            } else {
                printResult(3, "Escribir LocalStorage", false, "No se guardó el valor esperado.");
            }
        } catch (e) {
            printResult(3, "Escribir LocalStorage", false, "Error en la ejecución.", e);
        }

        // 4. obtenerTexto
        try {
            localStorage.setItem("claveLectura", "Estudiando JS");
            const res = obtenerTexto("claveLectura");
            if (res === "Estudiando JS") {
                printResult(4, "Leer LocalStorage", true, "Valor leído correctamente de localStorage.");
            } else {
                printResult(4, "Leer LocalStorage", false, `Se esperaba "Estudiando JS" pero retornó ${res}.`);
            }
        } catch (e) {
            printResult(4, "Leer LocalStorage", false, "Error en la ejecución.", e);
        }

        // 5. eliminarDato
        try {
            localStorage.setItem("claveBorrar", "Chau");
            eliminarDato("claveBorrar");
            if (localStorage.getItem("claveBorrar") === null) {
                printResult(5, "Remoción de Claves (removeItem)", true, "Clave removida quirúrgicamente de localStorage.");
            } else {
                printResult(5, "Remoción de Claves (removeItem)", false, "La clave no fue eliminada.");
            }
        } catch (e) {
            printResult(5, "Remoción de Claves (removeItem)", false, "Error en la ejecución.", e);
        }

        // 6. serializarObjeto
        try {
            const obj = { id: 7, nombre: "Axel" };
            const res = serializarObjeto(obj);
            if (typeof res === "string" && res.includes('"id":7') && res.includes('"nombre":"Axel"')) {
                printResult(6, "Serialización JSON (stringify)", true, "Estructura serializada a texto plano JSON.");
            } else {
                printResult(6, "Serialización JSON (stringify)", false, `Se esperaba String JSON. Obtenido: ${res}`);
            }
        } catch (e) {
            printResult(6, "Serialización JSON (stringify)", false, "Error en la ejecución.", e);
        }

        // 7. deserializarObjeto
        try {
            const json = '{"curso":"Programacion III","nota":10}';
            const res = deserializarObjeto(json);
            if (res && res.curso === "Programacion III" && res.nota === 10) {
                printResult(7, "Deserialización JSON (parse)", true, "Texto JSON decodificado a Objeto literal JS con éxito.");
            } else {
                printResult(7, "Deserialización JSON (parse)", false, `Resultado incorrecto: ${JSON.stringify(res)}`);
            }
        } catch (e) {
            printResult(7, "Deserialización JSON (parse)", false, "Error en la ejecución.", e);
        }

        // 8. guardarCarrito
        try {
            localStorage.removeItem("miCarrito");
            const car = [{ id: 101, prod: "Teclado" }, { id: 102, prod: "Mouse" }];
            guardarCarrito(car);
            const guardado = localStorage.getItem("miCarrito");
            if (guardado && guardado.includes("Teclado") && guardado.includes("Mouse")) {
                printResult(8, "Persistencia Compleja (Carrito)", true, "Colección serializada y persistida con éxito.");
            } else {
                printResult(8, "Persistencia Compleja (Carrito)", false, `Guardado en storage: ${guardado}`);
            }
        } catch (e) {
            printResult(8, "Persistencia Compleja (Carrito)", false, "Error en la ejecución.", e);
        }

        // 9. cargarCarrito
        try {
            localStorage.removeItem("miCarrito");
            const vacio = cargarCarrito();
            
            const car = [{ id: 200, prod: "Monitor" }];
            localStorage.setItem("miCarrito", JSON.stringify(car));
            const cargado = cargarCarrito();
            
            if (Array.isArray(vacio) && vacio.length === 0 && Array.isArray(cargado) && cargado[0].prod === "Monitor") {
                printResult(9, "Carga Segura con Fallback []", true, "Carga recuperada exitosamente controlando nulos con fallback de lista vacía.");
            } else {
                printResult(9, "Carga Segura con Fallback []", false, `Vacio: ${JSON.stringify(vacio)}. Cargado: ${JSON.stringify(cargado)}`);
            }
        } catch (e) {
            printResult(9, "Carga Segura con Fallback []", false, "Error en la ejecución.", e);
        }

        // 10. limpiarPersistencia
        try {
            localStorage.setItem("localTest", "1");
            sessionStorage.setItem("sessionTest", "2");
            limpiarPersistencia();
            if (localStorage.length === 0 && sessionStorage.length === 0) {
                printResult(10, "Vaciar Storages", true, "LocalStorage y SessionStorage limpios a cero con éxito.");
            } else {
                printResult(10, "Vaciar Storages", false, `Local size: ${localStorage.length}, Session size: ${sessionStorage.length}`);
            }
        } catch (e) {
            printResult(10, "Vaciar Storages", false, "Error en la ejecución.", e);
        }

        // Resumen
        setTimeout(() => {
            console.log("-----------------------------------------------------------------");
            if (aprobados === totalTests) {
                console.log("%c🏆 ¡ESPECTACULAR! Dominás el ciclo de persistencia de datos al 100%. 🏆", "color: #ff9100; font-weight: bold; font-size: 1.1rem;");
            } else {
                console.log(`%c⚠️ Módulo V en progreso: ${aprobados}/${totalTests} aprobados. ⚠️`, "color: #ff9100; font-weight: bold; font-size: 1.1rem;");
            }
            console.log("-----------------------------------------------------------------");
        }, 150);

    }, 200);
})();
