/**
 * 🚀 CLASE IV: Arrays, Objetos Literales y Métodos Nativos
 * -----------------------------------------------------------------
 * Resolvé los 10 ejercicios escribiendo tu código dentro de cada función.
 * Abrí index.html en tu navegador y abrí la consola (F12) para ver los tests en vivo.
 */

// ==========================================
// 🟢 NIVEL FÁCIL (1 - 6)
// ==========================================

/**
 * 01. CREACIÓN Y ACCESO A ARRAYS
 * -----------------------------------------------------------------
 * 1. Declará una variable llamada 'colores' que contenga un array con:
 *    "rojo", "verde", "azul", "amarillo".
 * 2. Retorná un objeto que contenga:
 *    - lista: el array completo de colores.
 *    - segundo: el color en la segunda posición del array ("verde").
 */
function crearAccederArray() {
    // Tu código aquí
}


/**
 * 02. MUTAR BORDES DE UN ARRAY (PUSH Y SHIFT)
 * -----------------------------------------------------------------
 * Recibís un 'array' por parámetro. Debés:
 * 1. Insertar el string "NUEVO" al final del array usando el método 'push'.
 * 2. Remover el primer elemento del array usando el método 'shift'.
 * 3. Retornar el array resultante (ya mutado).
 */
function mutarBordes(array) {
    // Tu código aquí
}


/**
 * 03. EXTRACCIÓN SUPERFICIAL (SLICE)
 * -----------------------------------------------------------------
 * Recibís un 'array'. Retorná una porción nueva (una copia parcial)
 * que contenga los elementos desde el índice 1 hasta el índice 3 inclusive
 * (es decir, posiciones 1, 2 y 3).
 * IMPORTANTE: No debés modificar el array original.
 */
function copiarPorcion(array) {
    // Tu código aquí
}


/**
 * 04. TROZADO Y BÚSQUEDA (SPLIT E INCLUDES)
 * -----------------------------------------------------------------
 * Recibís 'frase' (un string largo) y 'buscado' (una palabra).
 * Debés:
 * 1. Trozar 'frase' en palabras individuales usando el método 'split' con separador de espacio (" ").
 * 2. Comprobar si 'buscado' está incluido en el array resultante usando 'includes'.
 * 3. Retornar un objeto con:
 *    - palabras: el array de palabras trozadas.
 *    - existe: el booleano resultado del paso 2.
 */
function analizarTexto(frase, buscado) {
    // Tu código aquí
}


/**
 * 05. MODIFICACIÓN QUIRÚRGICA (SPLICE)
 * -----------------------------------------------------------------
 * Recibís un 'array'. Usando el método 'splice', debés:
 * 1. Remover 1 solo elemento en la posición de índice 2.
 * 2. Insertar el string "REEMPLAZO" exactamente en esa misma posición (índice 2).
 * 3. Retornar el array modificado.
 */
function reemplazarSplice(array) {
    // Tu código aquí
}


/**
 * 06. CREACIÓN DE OBJETOS LITERALES
 * -----------------------------------------------------------------
 * Creá y retorná un objeto literal que represente un 'libro' con:
 * - titulo: "El Aleph" (string)
 * - autor: "Jorge Luis Borges" (string)
 * - paginas: 150 (número)
 */
function crearObjeto() {
    // Tu código aquí
}



// ==========================================
// 🟡 NIVEL MEDIO (7 - 10)
// ==========================================

/**
 * 07. NOTACIÓN POR CORCHETES DINÁMICOS
 * -----------------------------------------------------------------
 * Recibís un 'objeto' (con varios campos) y una 'clave' (que es un String
 * que contiene el nombre de alguna propiedad).
 * Retorná el valor correspondiente a esa propiedad del objeto
 * usando acceso por corchetes [clave].
 */
function obtenerClaveDinamica(objeto, clave) {
    // Tu código aquí
}


/**
 * 08. EDICIÓN Y ELIMINACIÓN DINÁMICA
 * -----------------------------------------------------------------
 * Recibís un 'usuario' (objeto). Debés:
 * 1. Modificar o agregar la propiedad 'rol' asignándole el valor "admin".
 * 2. Eliminar de forma permanente la propiedad 'password' usando la palabra clave 'delete'.
 * 3. Retornar el objeto mutado.
 */
function mutarPropiedades(usuario) {
    // Tu código aquí
}


/**
 * 09. COMPORTAMIENTOS Y CONTEXTO (THIS)
 * -----------------------------------------------------------------
 * Recibís un string 'apodo'. Creá y retorná un objeto que contenga:
 * - apodo: el valor de la variable 'apodo'.
 * - presentarse: una función (método) que al ser ejecutada retorne el texto exacto:
 *   "Hola, mi nombre de usuario es [apodo]" (utilizando 'this.apodo' dentro de backticks).
 */
function crearMetodoContexto(apodo) {
    // Tu código aquí
}


/**
 * 10. LABORATORIO DE DATOS COMPLEJOS
 * -----------------------------------------------------------------
 * Recibís 'usuarios' (un array de objetos, donde cada objeto tiene { nombre: string, activo: boolean }).
 * Debés:
 * 1. Recorrer la lista y filtrar únicamente aquellos usuarios que tengan 'activo: true'.
 * 2. Extraer solo sus nombres y colocarlos en un nuevo array de strings.
 * 3. Retornar dicho array de nombres activos.
 * (Ejemplo de salida esperada si recibe [{nombre: "Ana", activo: true}, {nombre: "Sol", activo: false}] -> ["Ana"])
 */
function filtrarUsuariosActivos(usuarios) {
    // Tu código aquí
}





// ==========================================
// 🧪 FRAMEWORK DE AUTOTESTEO EN CONSOLA
// ==========================================

(function ejecutarTests() {
    setTimeout(() => {
        console.clear();
        console.log("%c🧪 INICIANDO AUTO-EVALUACIÓN CLASE IV - ARRAYS Y OBJETOS 🧪", "color: #ff80ab; font-weight: 800; font-size: 1.2rem;");
        console.log("-----------------------------------------------------------------");

        let totalTests = 10;
        let aprobados = 0;

        const printResult = (num, title, success, details, error = null) => {
            const icon = success ? "✅" : "❌";
            const badgeColor = success ? "background: #ff80ab; color: #000;" : "background: #ff1744; color: #fff;";
            console.group(`%c EJERCICIO ${num}: ${title} `, `${badgeColor} font-weight: bold; border-radius: 3px; padding: 2px 5px;`);
            if (success) {
                console.log(`%c${icon} Aprobado: ${details}`, "color: #ff80ab; font-weight: 500;");
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

        // 1. crearAccederArray
        try {
            const res = crearAccederArray();
            if (res && Array.isArray(res.lista) && res.lista.length === 4 && res.lista[0] === "rojo" && res.segundo === "verde") {
                printResult(1, "Acceso a Arreglos", true, "Arreglo inicializado e indexado correctamente.");
            } else {
                printResult(1, "Acceso a Arreglos", false, `Resultado incorrecto: ${JSON.stringify(res)}`);
            }
        } catch (e) {
            printResult(1, "Acceso a Arreglos", false, "Error en la ejecución.", e);
        }

        // 2. mutarBordes
        try {
            const entrada = ["A", "B", "C"];
            const res = mutarBordes([...entrada]);
            if (res && res[0] === "B" && res[res.length - 1] === "NUEVO") {
                printResult(2, "Mutación de Extremos (Push y Shift)", true, "Push y shift aplicados de forma sincronizada.");
            } else {
                printResult(2, "Mutación de Extremos (Push y Shift)", false, `Se esperaba ["B", "C", "NUEVO"] pero retornó ${JSON.stringify(res)}.`);
            }
        } catch (e) {
            printResult(2, "Mutación de Extremos (Push y Shift)", false, "Error en la ejecución.", e);
        }

        // 3. copiarPorcion
        try {
            const entrada = ["Manzana", "Pera", "Uva", "Sandía", "Melón"];
            const copiaEntrada = [...entrada];
            const res = copiarPorcion(entrada);
            const originalIntacto = JSON.stringify(entrada) === JSON.stringify(copiaEntrada);
            
            if (originalIntacto && res && res.length === 3 && res[0] === "Pera" && res[2] === "Sandía") {
                printResult(3, "Copiar Porción (Slice)", true, "Porción copiada perfectamente manteniendo intacto el array original.");
            } else {
                printResult(3, "Copiar Porción (Slice)", false, `Error. Entrada original modificada: ${!originalIntacto}. Retornado: ${JSON.stringify(res)}`);
            }
        } catch (e) {
            printResult(3, "Copiar Porción (Slice)", false, "Error en la ejecución.", e);
        }

        // 4. analizarTexto
        try {
            const frase = "JavaScript es el rey de la web";
            const res = analizarTexto(frase, "rey");
            if (res && res.palabras.length === 7 && res.existe === true) {
                printResult(4, "Trozado e Includes", true, "Métodos split e includes combinados a la perfección.");
            } else {
                printResult(4, "Trozado e Includes", false, `Resultado incorrecto: ${JSON.stringify(res)}`);
            }
        } catch (e) {
            printResult(4, "Trozado e Includes", false, "Error en la ejecución.", e);
        }

        // 5. reemplazarSplice
        try {
            const entrada = ["A", "B", "C", "D"];
            const res = reemplazarSplice(entrada);
            if (res && res[2] === "REEMPLAZO" && res.length === 4) {
                printResult(5, "Modificación con Splice", true, "Inserción y reemplazo en índices medios perfectos.");
            } else {
                printResult(5, "Modificación con Splice", false, `Resultado incorrecto: ${JSON.stringify(res)}.`);
            }
        } catch (e) {
            printResult(5, "Modificación con Splice", false, "Error en la ejecución.", e);
        }

        // 6. crearObjeto
        try {
            const res = crearObjeto();
            if (res && res.titulo === "El Aleph" && res.autor === "Jorge Luis Borges" && res.paginas === 150) {
                printResult(6, "Objetos Literales", true, "Objeto inicializado con sus campos exactos.");
            } else {
                printResult(6, "Objetos Literales", false, `Obtenido: ${JSON.stringify(res)}.`);
            }
        } catch (e) {
            printResult(6, "Objetos Literales", false, "Error en la ejecución.", e);
        }

        // 7. obtenerClaveDinamica
        try {
            const obj = { id: 101, alias: "Max", nivel: "Senior" };
            const r1 = obtenerClaveDinamica(obj, "alias");
            const r2 = obtenerClaveDinamica(obj, "nivel");
            if (r1 === "Max" && r2 === "Senior") {
                printResult(7, "Claves Dinámicas (Corchetes)", true, "Lecturas dinámicas por clave correctas.");
            } else {
                printResult(7, "Claves Dinámicas (Corchetes)", false, `Se esperaba ["Max", "Senior"] pero retornó [${r1}, ${r2}].`);
            }
        } catch (e) {
            printResult(7, "Claves Dinámicas (Corchetes)", false, "Error en la ejecución.", e);
        }

        // 8. mutarPropiedades
        try {
            const usr = { username: "axel", password: "123", email: "axel@test.com" };
            const res = mutarPropiedades(usr);
            if (res && res.rol === "admin" && !("password" in res)) {
                printResult(8, "Mutar y Eliminar Campos", true, "Edición de rol y eliminación segura de password realizadas.");
            } else {
                printResult(8, "Mutar y Eliminar Campos", false, `Obtenido: ${JSON.stringify(res)}.`);
            }
        } catch (e) {
            printResult(8, "Mutar y Eliminar Campos", false, "Error en la ejecución.", e);
        }

        // 9. crearMetodoContexto
        try {
            const res = crearMetodoContexto("AxelColder");
            const saludo = res.presentarse();
            if (res && res.apodo === "AxelColder" && saludo === "Hola, mi nombre de usuario es AxelColder") {
                printResult(9, "Comportamientos y this", true, "Método definido y enlace contextual this impecable.");
            } else {
                printResult(9, "Comportamientos y this", false, `Saludo obtenido: "${saludo}". Objeto: ${JSON.stringify(res)}.`);
            }
        } catch (e) {
            printResult(9, "Comportamientos y this", false, "Error en la ejecución.", e);
        }

        // 10. filtrarUsuariosActivos
        try {
            const usrList = [
                { nombre: "Alex", activo: true },
                { nombre: "Bruno", activo: false },
                { nombre: "Carla", activo: true },
                { nombre: "David", activo: false }
            ];
            const res = filtrarUsuariosActivos(usrList);
            if (res && res.length === 2 && res.includes("Alex") && res.includes("Carla") && !res.includes("Bruno")) {
                printResult(10, "Laboratorio Complejo", true, "Filtro y mapeo de estructuras compuestas resuelto de forma sobresaliente.");
            } else {
                printResult(10, "Laboratorio Complejo", false, `Se esperaba ["Alex", "Carla"] pero retornó ${JSON.stringify(res)}.`);
            }
        } catch (e) {
            printResult(10, "Laboratorio Complejo", false, "Error en la ejecución.", e);
        }

        // Resumen
        setTimeout(() => {
            console.log("-----------------------------------------------------------------");
            if (aprobados === totalTests) {
                console.log("%c🏆 ¡MAGNÍFICO! Sos el maestro absoluto de las estructuras de datos iniciales. 🏆", "color: #ff80ab; font-weight: bold; font-size: 1.1rem;");
            } else {
                console.log(`%c⚠️ Módulo IV en progreso: ${aprobados}/${totalTests} aprobados. ⚠️`, "color: #ff9100; font-weight: bold; font-size: 1.1rem;");
            }
            console.log("-----------------------------------------------------------------");
        }, 150);

    }, 200);
})();
