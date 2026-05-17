/**
 * 🚀 CLASE VII: Callbacks, HOFs Avanzados, Destructuring y Spread Operator
 * -----------------------------------------------------------------
 * Resolvé los 10 ejercicios escribiendo tu código dentro de cada función.
 * Abrí index.html en tu navegador y abrí la consola (F12) para ver los tests en vivo.
 */

// ==========================================
// 🟢 NIVEL FÁCIL (1 - 7)
// ==========================================

/**
 * 01. CALLBACKS DIRECTOS
 * -----------------------------------------------------------------
 * Recibís un string 'valor' y una función 'cb'.
 * Ejecutá la función callback 'cb' pasándole el string 'valor' como argumento,
 * y retorná el resultado de esa ejecución.
 */
function ejecutarCallbackBasico(valor, cb) {
    // Tu código aquí
}


/**
 * 02. FILTRO DECLARATIVO (FILTER)
 * -----------------------------------------------------------------
 * Recibís un array 'numeros'.
 * Filtrá y retorná un nuevo array conteniendo únicamente los números pares
 * utilizando el método declarativo .filter(). No alteres el array original.
 */
function filtrarNumerosPares(numeros) {
    // Tu código aquí
}


/**
 * 03. MAPEAR ELEMENTOS (MAP)
 * -----------------------------------------------------------------
 * Recibís un array de strings 'nombres'.
 * Transformá y retorná un nuevo array con todos los nombres formateados en
 * mayúsculas utilizando el método declarativo .map().
 */
function mapearNombresMayusculas(nombres) {
    // Tu código aquí
}


/**
 * 04. REDUCCIÓN ACUMULATIVA (REDUCE)
 * -----------------------------------------------------------------
 * Recibís un array 'productos' donde cada elemento es `{ nombre: string, precio: number }`.
 * Calculá y retorná la suma total de los precios de todos los productos utilizando
 * el método declarativo .reduce().
 * Si la lista está vacía, debés retornar 0.
 */
function sumarPreciosProductos(productos) {
    // Tu código aquí
}


/**
 * 05. BÚSQUEDA UNITARIA (FIND)
 * -----------------------------------------------------------------
 * Recibís un array 'productos' donde cada uno es `{ nombre: string, activo: boolean }`.
 * Encontrá y retorná el PRIMER producto que tenga `activo === true` utilizando .find().
 */
function buscarProductoActivo(productos) {
    // Tu código aquí
}


/**
 * 06. DESESTRUCTURACIÓN DE OBJETOS
 * -----------------------------------------------------------------
 * Recibís un objeto 'usuario' (ej: `{ nombre: "Axel", edad: 21, rol: "admin" }`).
 * Utilizando desestructuración de objetos en una sola línea:
 * 1. Extraé las propiedades 'nombre' y 'rol'.
 * 2. Renombrá la variable 'rol' a 'puesto'.
 * 3. Retorná un nuevo objeto literal con el formato exacto: `{ nombre, puesto }`.
 */
function desestructurarObjeto(usuario) {
    // Tu código aquí
}


/**
 * 07. DESESTRUCTURACIÓN DE ARREGLOS
 * -----------------------------------------------------------------
 * Recibís un array 'numeros'.
 * Utilizando desestructuración de arrays, extraé posicionalmente el primer
 * y el segundo elemento de la lista.
 * Retorná un objeto literal con formato exacto: `{ primero: valor1, segundo: valor2 }`.
 */
function desestructurarArray(numeros) {
    // Tu código aquí
}



// ==========================================
// 🟡 NIVEL MEDIO (8 - 10)
// ==========================================

/**
 * 08. CLONADO Y FUSIÓN SPREAD
 * -----------------------------------------------------------------
 * Recibís dos objetos: 'base' y 'personalizaciones'.
 * Utilizando el operador de propagación Spread (...), combiná inmutablemente ambos
 * objetos en uno nuevo, donde las propiedades de 'personalizaciones' sobrescriban
 * a las de 'base'. Retorná el nuevo objeto.
 */
function fusionarConfiguraciones(base, personalizaciones) {
    // Tu código aquí
}


/**
 * 09. AGRUPAMIENTO DE PARÁMETROS REST
 * -----------------------------------------------------------------
 * Usá el operador Rest (...) en los parámetros de la función para recolectar
 * una cantidad indeterminada de números.
 * Sumalos a todos y retorná el total acumulado (usá .reduce si querés brillar).
 */
function sumarTodoRest(...valores) {
    // Tu código aquí
}


/**
 * 10. LABORATORIO AVANZADO INTEGRADO
 * -----------------------------------------------------------------
 * Recibís un array de órdenes de compra: `{ id: number, cliente: string, total: number, entregado: boolean }`.
 * 1. Filtrá solo las órdenes que hayan sido entregadas (`entregado === true`) con .filter().
 * 2. Del resultado, obtené un array únicamente con los montos `total` usando .map().
 * 3. Sumalos usando .reduce() para obtener el total de la facturación.
 * 
 * Retorná un objeto literal con este formato exacto:
 * `{ totalVentas: sumaDeTotales, cantidad: totalDeOrdenesEntregadas }`
 */
function laboratorioAvanzado(ordenes) {
    // Tu código aquí
}





// ==========================================
// 🧪 FRAMEWORK DE AUTOTESTEO EN CONSOLA
// ==========================================

(function ejecutarTests() {
    setTimeout(() => {
        console.clear();
        console.log("%c🧪 INICIANDO AUTO-EVALUACIÓN CLASE VII - ES6+ AVANZADO 🧪", "color: #ff3d00; font-weight: 800; font-size: 1.2rem;");
        console.log("-----------------------------------------------------------------");

        let totalTests = 10;
        let aprobados = 0;

        const printResult = (num, title, success, details, error = null) => {
            const icon = success ? "✅" : "❌";
            const badgeColor = success ? "background: #ff3d00; color: #fff;" : "background: #d50000; color: #fff;";
            console.group(`%c EJERCICIO ${num}: ${title} `, `${badgeColor} font-weight: bold; border-radius: 3px; padding: 2px 5px;`);
            if (success) {
                console.log(`%c${icon} Aprobado: ${details}`, "color: #ff3d00; font-weight: 500;");
                aprobados++;
            } else {
                console.log(`%c${icon} Fallido: ${details}`, "color: #d50000; font-weight: bold;");
                if (error) {
                    console.log("%cDetalle del error:", "color: #646a78; font-style: italic;");
                    console.error(error);
                }
            }
            console.groupEnd();
        };

        // 1. ejecutarCallbackBasico
        try {
            const res = ejecutarCallbackBasico("hola", (val) => val.toUpperCase() + "!");
            if (res === "HOLA!") {
                printResult(1, "Callbacks Directos", true, "Callback invocado con argumentos válidos.");
            } else {
                printResult(1, "Callbacks Directos", false, `Se esperaba 'HOLA!' pero se obtuvo '${res}'.`);
            }
        } catch (e) {
            printResult(1, "Callbacks Directos", false, "Error en la ejecución.", e);
        }

        // 2. filtrarNumerosPares
        try {
            const arr = [1, 2, 3, 4, 5, 6];
            const res = filtrarNumerosPares(arr);
            if (JSON.stringify(res) === "[2,4,6]" && arr.length === 6) {
                printResult(2, "Filtro Declarativo (.filter)", true, "Array filtrado inmutablemente.");
            } else {
                printResult(2, "Filtro Declarativo (.filter)", false, `Retornó '${JSON.stringify(res)}'. Original mutado?: ${arr.length !== 6}`);
            }
        } catch (e) {
            printResult(2, "Filtro Declarativo (.filter)", false, "Error en la ejecución.", e);
        }

        // 3. mapearNombresMayusculas
        try {
            const arr = ["axel", "messi", "javascript"];
            const res = mapearNombresMayusculas(arr);
            if (JSON.stringify(res) === '["AXEL","MESSI","JAVASCRIPT"]') {
                printResult(3, "Mapear Elementos (.map)", true, "Transformación declarativa completada.");
            } else {
                printResult(3, "Mapear Elementos (.map)", false, `Retornó '${JSON.stringify(res)}'.`);
            }
        } catch (e) {
            printResult(3, "Mapear Elementos (.map)", false, "Error en la ejecución.", e);
        }

        // 4. sumarPreciosProductos
        try {
            const prod = [{ nombre: "A", precio: 100 }, { nombre: "B", precio: 250 }, { nombre: "C", precio: 50 }];
            const res = sumarPreciosProductos(prod);
            const vacio = sumarPreciosProductos([]);
            if (res === 400 && vacio === 0) {
                printResult(4, "Reducción Acumulativa (.reduce)", true, "Precios totales reducidos a un único entero correcto.");
            } else {
                printResult(4, "Reducción Acumulativa (.reduce)", false, `Suma total: ${res}, Caso Vacío: ${vacio}.`);
            }
        } catch (e) {
            printResult(4, "Reducción Acumulativa (.reduce)", false, "Error en la ejecución.", e);
        }

        // 5. buscarProductoActivo
        try {
            const list = [{ nombre: "A", activo: false }, { nombre: "B", activo: true }, { nombre: "C", activo: true }];
            const res = buscarProductoActivo(list);
            if (res && res.nombre === "B") {
                printResult(5, "Búsqueda Unitaria (.find)", true, "Primer elemento activo localizado exitosamente.");
            } else {
                printResult(5, "Búsqueda Unitaria (.find)", false, "No retornó el primer elemento activo esperado.");
            }
        } catch (e) {
            printResult(5, "Búsqueda Unitaria (.find)", false, "Error en la ejecución.", e);
        }

        // 6. desestructurarObjeto
        try {
            const user = { nombre: "Axel", edad: 21, rol: "Tech Lead", pass: "12345" };
            const res = desestructurarObjeto(user);
            if (res && res.nombre === "Axel" && res.puesto === "Tech Lead" && !res.edad && !res.rol) {
                printResult(6, "Desestructuración de Objetos", true, "Propiedades extraídas y renombradas correctamente.");
            } else {
                printResult(6, "Desestructuración de Objetos", false, `Resultado: ${JSON.stringify(res)}`);
            }
        } catch (e) {
            printResult(6, "Desestructuración de Objetos", false, "Error en la ejecución.", e);
        }

        // 7. desestructurarArray
        try {
            const arr = [99, 88, 77, 66];
            const res = desestructurarArray(arr);
            if (res && res.primero === 99 && res.segundo === 88) {
                printResult(7, "Desestructuración de Arreglos", true, "Primeros dos elementos posicionados.");
            } else {
                printResult(7, "Desestructuración de Arreglos", false, `Resultado: ${JSON.stringify(res)}`);
            }
        } catch (e) {
            printResult(7, "Desestructuración de Arreglos", false, "Error en la ejecución.", e);
        }

        // 8. fusionarConfiguraciones
        try {
            const base = { theme: "dark", showSidebar: true, level: 1 };
            const custom = { level: 5, showSidebar: false };
            const res = fusionarConfiguraciones(base, custom);
            if (res && res.theme === "dark" && res.showSidebar === false && res.level === 5 && res !== base) {
                printResult(8, "Clonado y Fusión Spread", true, "Fusión inmutable de propiedades correcta.");
            } else {
                printResult(8, "Clonado y Fusión Spread", false, `Obtenido: ${JSON.stringify(res)}`);
            }
        } catch (e) {
            printResult(8, "Clonado y Fusión Spread", false, "Error en la ejecución.", e);
        }

        // 9. sumarTodoRest
        try {
            const res = sumarTodoRest(10, 20, 30, 40);
            const resVacio = sumarTodoRest();
            if (res === 100 && (resVacio === 0 || !resVacio)) {
                printResult(9, "Parámetros Rest (...)", true, "Argumentos dinámicos recolectados y sumados con éxito.");
            } else {
                printResult(9, "Parámetros Rest (...)", false, `Suma de 4 valores: ${res}, de ninguno: ${resVacio}`);
            }
        } catch (e) {
            printResult(9, "Parámetros Rest (...)", false, "Error en la ejecución.", e);
        }

        // 10. laboratorioAvanzado
        try {
            const ordenes = [
                { id: 1, cliente: "Axel", total: 1500, entregado: true },
                { id: 2, cliente: "Lucas", total: 3000, entregado: false },
                { id: 3, cliente: "Maria", total: 2000, entregado: true },
            ];
            const res = laboratorioAvanzado(ordenes);
            if (res && res.totalVentas === 3500 && res.cantidad === 2) {
                printResult(10, "Laboratorio Avanzado Integrado", true, "Secuencia declarativa (filter + map + reduce) ejecutada con éxito.");
            } else {
                printResult(10, "Laboratorio Avanzado Integrado", false, `Retornó: ${JSON.stringify(res)}`);
            }
        } catch (e) {
            printResult(10, "Laboratorio Avanzado Integrado", false, "Error en la ejecución.", e);
        }

        // Resumen
        setTimeout(() => {
            console.log("-----------------------------------------------------------------");
            if (aprobados === totalTests) {
                console.log("%c🏆 ¡NIVEL DIOS DE JS MODERNIZADO! Completaste el entrenamiento. 🏆", "color: #ff3d00; font-weight: bold; font-size: 1.1rem;");
            } else {
                console.log(`%c⚠️ Módulo VII en progreso: ${aprobados}/${totalTests} aprobados. ⚠️`, "color: #ff9100; font-weight: bold; font-size: 1.1rem;");
            }
            console.log("-----------------------------------------------------------------");
        }, 150);

    }, 200);
})();
