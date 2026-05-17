/* ==========================================================================
   MAIN JS CONTROLLER - PLAYGROUND INTERACTIVO
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // --- ELEMENTOS DEL DOM ---
    const selector = document.getElementById("module-selector");
    const theoryContainer = document.getElementById("theory-content");
    const editor = document.getElementById("code-editor");
    const gutter = document.querySelector(".editor-gutter");
    const consoleOutput = document.getElementById("console-output");
    const btnRun = document.getElementById("btn-run");
    const btnReset = document.getElementById("btn-load-exercise");
    const btnClear = document.getElementById("btn-clear");

    // --- BASE DE DATOS DE MÓDULOS DE ESTUDIO (TEORÍA + EJERCICIOS) ---
    const modules = {
        js1: {
            title: "Módulo I: Sintaxis y Variables",
            theory: `
                <h3>Conceptos Elementales</h3>
                <p>JavaScript es un lenguaje dinámico de un solo hilo. Las variables nos permiten almacenar valores en memoria.</p>
                
                <h4>Declaración Moderna</h4>
                <ul>
                    <li><strong>const:</strong> Constantes inmutables. Preferila por defecto. Ámbito de bloque.</li>
                    <li><strong>let:</strong> Reasignables. Ámbito de bloque (evita los problemas históricos de <code>var</code>).</li>
                </ul>

                <div class="tip-box">
                    <p><strong>💡 Regla de oro:</strong> Nunca uses <code>var</code>. Genera fugas de memoria y Hoisting peligroso.</p>
                </div>

                <h4>Igualdad vs Identidad</h4>
                <div class="code-snippet">5 == "5"   // true (Conversión implícita)
5 === "5"  // false (Estricto - Recomendo)</div>
            `,
            exercise: `// ===== MÓDULO I: PRÁCTICA DE VARIABLES Y TIPOS =====

// 1. Declará una constante con tu nombre y una variable con tu edad
const nombre = "Axel";
let edad = 25;

console.log("Hola, mi nombre es " + nombre + " y tengo " + edad + " años.");

// 2. Probá la diferencia de igualdad estricta
console.log("¿Igualdad simple 10 == '10'?", 10 == '10');
console.log("¿Igualdad estricta 10 === '10'?", 10 === '10');

// 3. Verificá los tipos de datos en la consola
console.log("Tipo de nombre:", typeof nombre);
console.log("Tipo de edad:", typeof edad);
`
        },
        js2: {
            title: "Módulo II: Control de Flujo",
            theory: `
                <h3>Condicionales y Bucles</h3>
                <p>Las estructuras de control determinan el camino que toma la ejecución del código basado en condiciones lógicas.</p>

                <h4>El Operador Ternario</h4>
                <p>Una forma rápida y elegante de escribir un <code>if-else</code> simple:</p>
                <div class="code-snippet">let categoria = edad >= 18 ? "Adulto" : "Menor";</div>

                <h4>Estructuras Iterativas</h4>
                <ul>
                    <li><strong>for:</strong> Iteración predeterminada con contador.</li>
                    <li><strong>while:</strong> Bucle condicional (revalúa antes de entrar).</li>
                    <li><strong>do-while:</strong> Garantiza al menos UNA ejecución del bloque.</li>
                </ul>
            `,
            exercise: `// ===== MÓDULO II: PRÁCTICA DE CONTROL DE FLUJO =====

// 1. Condicionales e If-Else
let nota = 8.5;
if (nota >= 7) {
    console.log("¡Promocionado!");
} else if (nota >= 4) {
    console.log("Aprobado (va a final)");
} else {
    console.log("Desaprobado");
}

// 2. Operador Ternario
let saldo = 1200;
let compraPermitida = saldo >= 500 ? "Compra autorizada ✅" : "Fondos insuficientes ❌";
console.log("Estado de compra:", compraPermitida);

// 3. Bucle For (Tabla de multiplicar)
console.log("--- Tabla del 7 ---");
for (let i = 1; i <= 10; i++) {
    console.log("7 x " + i + " = " + (7 * i));
}
`
        },
        js3: {
            title: "Módulo III: Scopes y Funciones",
            theory: `
                <h3>Ámbitos y Abstracción</h3>
                <p>El scope define la visibilidad y accesibilidad de las variables.</p>

                <h4>Tipos de Ámbitos</h4>
                <ul>
                    <li><strong>Global:</strong> Accesible en toda la app (propiedad de <code>window</code>).</li>
                    <li><strong>Local / Función:</strong> Solo accesible dentro de la función donde se declaró.</li>
                    <li><strong>Bloque:</strong> Variables creadas con <code>let</code>/<code>const</code> dentro de llaves <code>{ }</code> no escapan de ellas.</li>
                </ul>

                <h4>Arrow Functions (Flecha)</h4>
                <p>Sintaxis concisa de ES6 con retorno implícito si se declara en una línea y contexto léxico de <code>this</code>.</p>
                <div class="code-snippet">const duplicar = x => x * 2;</div>
            `,
            exercise: `// ===== MÓDULO III: PRÁCTICA DE SCOPES Y FUNCIONES =====

// 1. Demostración de Scope de Bloque
{
    var variableGlobal = "Soy accesible afuera";
    let variableBloque = "Soy invisible afuera";
}
console.log(variableGlobal);
try {
    console.log(variableBloque);
} catch (e) {
    console.error("Error esperado: variableBloque no existe en este scope!");
}

// 2. Declaración clásica vs Arrow Function
function calcularIvaClasico(precio) {
    return precio * 0.21;
}

const calcularIvaArrow = precio => precio * 0.21;

console.log("IVA Clásico de 1000:", calcularIvaClasico(1000));
console.log("IVA Arrow de 1000:", calcularIvaArrow(1000));
`
        },
        js4: {
            title: "Módulo IV: Métodos de Datos",
            theory: `
                <h3>Manipulación de Datos</h3>
                <p>JavaScript posee potentes APIs nativas para transformar cadenas de caracteres y listas (arrays).</p>

                <h4>Métodos Esenciales de String</h4>
                <ul>
                    <li><strong>includes():</strong> Retorna booleano si contiene la subcadena.</li>
                    <li><strong>slice(inicio, fin):</strong> Extrae un fragmento de texto.</li>
                    <li><strong>split(separador):</strong> Convierte un String en un Array.</li>
                </ul>

                <h4>Métodos Esenciales de Array</h4>
                <ul>
                    <li><strong>push() / pop():</strong> Agrega / remueve al final.</li>
                    <li><strong>unshift() / shift():</strong> Agrega / remueve al principio.</li>
                    <li><strong>splice():</strong> Inserta o borra elementos en índices exactos (muta el array).</li>
                </ul>
            `,
            exercise: `// ===== MÓDULO IV: MÉTODOS DE STRINGS Y ARRAYS =====

// 1. Jugando con Strings
let frase = "Programacion 3 en la UTN Avellaneda";
console.log("¿Contiene 'UTN'?:", frase.includes("UTN"));
console.log("Palabras separadas:", frase.split(" "));

// 2. Operaciones con Arrays
let alumnos = ["Axel", "Lautaro", "Nicolas"];
console.log("Alumnos iniciales:", alumnos);

// Agregamos al final
alumnos.push("Matias");
console.log("Agregado al final:", alumnos);

// Removemos al principio
let primero = alumnos.shift();
console.log("Primer alumno removido:", primero);
console.log("Array resultante:", alumnos);
`
        },
        js5: {
            title: "Módulo V: Almacenamiento Persistente",
            theory: `
                <h3>Persistencia de Datos en Cliente</h3>
                <p>Permite guardar estados en el navegador para que persistan al refrescar o reiniciar la pestaña.</p>

                <h4>localStorage vs sessionStorage</h4>
                <ul>
                    <li><strong>localStorage:</strong> Permanente (hasta que se borre explícitamente).</li>
                    <li><strong>sessionStorage:</strong> Temporal (se borra al cerrar la pestaña).</li>
                </ul>

                <h4>Serialización JSON obligatoria</h4>
                <p>Las APIs de almacenamiento solo aceptan texto plano. Debemos serializar objetos usando JSON:</p>
                <div class="code-snippet">// Serializar a String
localStorage.setItem("key", JSON.stringify(objeto));
// Deserializar a Objeto
let obj = JSON.parse(localStorage.getItem("key"));</div>
            `,
            exercise: `// ===== MÓDULO V: PERSISTENCIA LOCALSTORAGE =====

// 1. Guardamos un dato simple
localStorage.setItem("usuario_activo", "Axel Div 132");
console.log("Dato recuperado de LS:", localStorage.getItem("usuario_activo"));

// 2. Guardando datos complejos (Array de Objetos)
let carrito = [
    { producto: "Teclado Mecánico", precio: 45000, cant: 1 },
    { producto: "Mouse Gamer", precio: 22000, cant: 2 }
];

// OJO: Si guardamos directo, se rompe (se guarda como [object Object])
localStorage.setItem("carrito_roto", carrito);
console.log("Carrito sin JSON.stringify:", localStorage.getItem("carrito_roto"));

// Forma CORRECTA:
localStorage.setItem("carrito_ok", JSON.stringify(carrito));
console.log("Carrito parseado desde LS:", JSON.parse(localStorage.getItem("carrito_ok")));
`
        },
        js6: {
            title: "Módulo VI: Manipulación del DOM",
            theory: `
                <h3>El Árbol del DOM</h3>
                <p>El DOM es la representación estructurada en memoria del documento HTML. Podemos modificarlo dinámicamente con JS.</p>

                <h4>Selectores Modernos</h4>
                <ul>
                    <li><code>querySelector('selector')</code>: Retorna la primera coincidencia que matchee con el selector CSS.</li>
                    <li><code>querySelectorAll('selector')</code>: Retorna una colección estática <code>NodeList</code> con todas las coincidencias.</li>
                </ul>

                <div class="tip-box">
                    <p><strong>💡 TIP:</strong> Es recomendable evitar el viejo <code>innerHTML</code> cuando insertamos datos que ingresa el usuario, para prevenir ataques de Cross-Site Scripting (XSS). Usá <code>textContent</code>.</p>
                </div>
            `,
            exercise: `// ===== MÓDULO VI: MANIPULACIÓN DEL DOM =====

// 1. Crear un contenedor temporal en nuestro documento
let tempDiv = document.createElement("div");
tempDiv.style.padding = "10px";
tempDiv.style.background = "rgba(124, 77, 255, 0.1)";
tempDiv.style.border = "1px solid #7c4dff";
tempDiv.style.borderRadius = "8px";
tempDiv.style.marginTop = "10px";

// 2. Insertar texto dinámicamente de forma segura
let parrafo = document.createElement("p");
parrafo.textContent = "¡Creado e insertado dinámicamente en el DOM! 🚀";
parrafo.style.color = "#00e5ff";

tempDiv.appendChild(parrafo);
document.body.appendChild(tempDiv);

console.log("Elemento insertado en el body de forma segura.");

// 3. Limpieza automática tras 5 segundos
console.log("El elemento se removerá automáticamente en 5 segundos...");
setTimeout(() => {
    tempDiv.remove();
    console.log("Elemento removido correctamente.");
}, 5000);
`
        },
        js7: {
            title: "Módulo VII: JS Avanzado (ES6 & HOFs)",
            theory: `
                <h3>Programación Funcional y ES6</h3>
                <p>Las mejoras introducidas desde ES6 potencian la legibilidad, inmutabilidad y reducen la sobrecarga cognitiva.</p>

                <h4>Funciones de Orden Superior (HOF)</h4>
                <p>Funciones que reciben otras funciones como argumentos o retornan una. Esenciales para iterar listas:</p>
                <ul>
                    <li><code>map()</code>: Crea un nuevo array aplicando una función transformadora a cada ítem.</li>
                    <li><code>filter()</code>: Retorna un nuevo array con los ítems que cumplen una condición.</li>
                    <li><code>reduce()</code>: Acumula los ítems del array en un único valor (ideal para sumas).</li>
                </ul>

                <h4>Destructuring y Rest/Spread (...)</h4>
                <div class="code-snippet">// Destructuring
const { nombre, edad } = usuario;
// Spread para clonado inmutable
const copia = { ...usuario, ocupacion: "Estudiante" };</div>
            `,
            exercise: `// ===== MÓDULO VII: CALLBACKS, HOFs Y ES6 AVANZADO =====

// Base de Datos de prueba para trabajar
const usuarios = [
    { id: 1, nombre: "Axel", edad: 25, rol: "Developer", activo: true },
    { id: 2, nombre: "Nicolas", edad: 22, rol: "Designer", activo: false },
    { id: 3, nombre: "Lautaro", edad: 20, rol: "Developer", activo: true },
    { id: 4, nombre: "Gaston", edad: 27, rol: "Project Manager", activo: true }
];

console.log("Lista completa de usuarios:", usuarios);

// 1. FILTER: Filtrar solo desarrolladores activos
const devsActivos = usuarios.filter(u => u.rol === "Developer" && u.activo);
console.log("Filtro - Developers Activos:", devsActivos);

// 2. MAP & DESTRUCTURING: Obtener un listado formateado
const resumenes = usuarios.map(({ nombre, rol }) => {
    return \`Usuario: \${nombre} | Rol: \${rol}\`;
});
console.log("Mapeo a string resumido:", resumenes);

// 3. REDUCE: Obtener el promedio de edad de todos los usuarios
const sumaEdades = usuarios.reduce((acumulador, usuario) => acumulador + usuario.edad, 0);
const promedioEdad = sumaEdades / usuarios.length;
console.log("Promedio de Edad total:", promedioEdad);

// 4. SPREAD OPERATOR: Agregar una propiedad de forma inmutable
const primerUsuarioClonado = { ...usuarios[0], certificado: "UTN Div 132" };
console.log("Original:", usuarios[0]);
console.log("Copia modificada sin mutar original:", primerUsuarioClonado);
`
        }
    };

    // --- HIJACK/INTERCEPTAR LA CONSOLA GLOBAL ---
    const originalConsole = {
        log: console.log,
        warn: console.warn,
        error: console.error,
        clear: console.clear
    };

    function formatConsoleArgument(arg) {
        if (arg === null) return "null";
        if (arg === undefined) return "undefined";
        if (typeof arg === "object") {
            try {
                return JSON.stringify(arg, null, 2);
            } catch (err) {
                return "[Objeto Complejo]";
            }
        }
        return arg.toString();
    }

    function appendToConsole(type, ...args) {
        const line = document.createElement("div");
        line.classList.add("console-line", type);
        
        // Agregar Timestamp
        const now = new Date();
        const timeStr = now.toTimeString().split(" ")[0];
        
        const timeSpan = document.createElement("span");
        timeSpan.classList.add("time");
        timeSpan.textContent = `[${timeStr}]`;
        
        const contentSpan = document.createElement("span");
        contentSpan.classList.add("content");
        contentSpan.textContent = args.map(formatConsoleArgument).join(" ");
        
        line.appendChild(timeSpan);
        line.appendChild(contentSpan);
        consoleOutput.appendChild(line);
        
        // Auto scroll al fondo
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
    }

    // Sobrescribimos console.log/warn/error en el ámbito global del playground
    console.log = (...args) => {
        originalConsole.log(...args);
        appendToConsole("log", ...args);
    };

    console.warn = (...args) => {
        originalConsole.warn(...args);
        appendToConsole("warn", ...args);
    };

    console.error = (...args) => {
        originalConsole.error(...args);
        appendToConsole("error", ...args);
    };

    console.clear = () => {
        originalConsole.clear();
        consoleOutput.innerHTML = "";
        appendToConsole("clear-msg", "--- Consola limpiada por el código ---");
    };

    // --- GESTIÓN DE NÚMEROS DE LÍNEA EN EL EDITOR ---
    function updateGutter() {
        const lines = editor.value.split("\n");
        const lineCount = lines.length;
        gutter.innerHTML = "";
        for (let i = 1; i <= lineCount; i++) {
            const lineNum = document.createElement("div");
            lineNum.textContent = i;
            gutter.appendChild(lineNum);
        }
    }

    // Sincronizar el scroll del textarea con el gutter
    editor.addEventListener("scroll", () => {
        gutter.scrollTop = editor.scrollTop;
    });

    editor.addEventListener("input", updateGutter);

    // --- SELECCIÓN Y CARGA DE MÓDULOS ---
    function loadModule(modKey) {
        const data = modules[modKey];
        if (!data) return;

        // Cargar Teoría
        theoryContainer.innerHTML = `
            <h2>${data.title}</h2>
            ${data.theory}
        `;

        // Cargar Código en el Editor
        editor.value = data.exercise;
        updateGutter();
        
        // Limpiar consola y notificar
        consoleOutput.innerHTML = "";
        appendToConsole("system-msg", `Módulo "${data.title}" cargado correctamente. Presioná 'Ejecutar' para ver su salida.`);
    }

    selector.addEventListener("change", (e) => {
        loadModule(e.target.value);
    });

    // --- ACCESO RÁPIDO CON BOTONES DE MÓDULO ---
    document.querySelectorAll(".quick-module-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const mod = btn.getAttribute("data-module");
            selector.value = mod;
            loadModule(mod);
        });
    });

    // --- MAPEO DE MÓDULOS A CARPETAS ---
    const moduleFolders = {
        js1: "clase-1-sintaxis-y-variables",
        js2: "clase-2-control-flujo",
        js3: "clase-3-funciones-y-scopes",
        js4: "clase-4-arrays-y-objetos",
        js5: "clase-5-persistencia-y-json",
        js6: "clase-6-dom-y-eventos",
        js7: "clase-7-es6-avanzado"
    };

    // --- ACCIONES ---
    
    // Ejecutar Código
    function runCode() {
        const code = editor.value;
        appendToConsole("system-msg", "--- Iniciando Ejecución ---");
        
        try {
            // Evaluamos el código usando new Function en un contexto limpio pero con console redefinido
            const runner = new Function(code);
            runner();
            appendToConsole("system-msg", "--- Ejecución Finalizada con Éxito ---");
        } catch (err) {
            console.error("Excepción en tiempo de ejecución:", err.message);
            appendToConsole("system-msg", "--- Ejecución Finalizada con Errores ---");
        }
    }

    btnRun.addEventListener("click", runCode);

    // Correr Tests Autoevaluación
    const btnRunTests = document.getElementById("btn-run-tests");
    if (btnRunTests) {
        btnRunTests.addEventListener("click", () => {
            const modKey = selector.value;
            const folder = moduleFolders[modKey];
            if (!folder) return;

            appendToConsole("system-msg", `--- Iniciando Autotesting: Módulo ${modKey.toUpperCase()} ---`);
            
            // Eliminar script anterior si existe
            const oldScript = document.getElementById("active-practice-script");
            if (oldScript) oldScript.remove();

            // Si es clase-6 (DOM y Eventos), limpiar y restablecer el sandbox DOM
            if (modKey === "js6") {
                const sandbox = document.getElementById("sandbox-dom");
                if (sandbox) {
                    sandbox.style.display = "block";
                    sandbox.innerHTML = `
                        <!-- Mocks para tests de Clase VI: DOM y Eventos -->
                        <h1 id="titulo-principal">PlayLab JS Playground</h1>
                        <p id="parrafo-intro">Este es un párrafo de introducción para testing.</p>
                        <button id="mi-boton">Click me</button>
                        <ul id="lista-tareas">
                            <li>Tarea inicial</li>
                        </ul>
                        <div id="contenedor-mensaje"></div>
                        <form id="formulario-contacto">
                            <input type="text" id="input-nombre" value="" />
                            <button type="submit">Enviar</button>
                        </form>
                    `;
                }
            } else {
                const sandbox = document.getElementById("sandbox-dom");
                if (sandbox) {
                    sandbox.innerHTML = "";
                }
            }

            // Crear y agregar el script
            const script = document.createElement("script");
            script.id = "active-practice-script";
            script.src = `./${folder}/practica.js?t=${Date.now()}`;
            
            script.onerror = () => {
                console.error(`Error al cargar el archivo de práctica. Verificá que exista '${folder}/practica.js'`);
                appendToConsole("error-msg", `❌ Error al cargar '${folder}/practica.js'. Asegurate de que el archivo exista en la ruta correcta.`);
            };

            document.body.appendChild(script);
        });
    }

    // Resetear código original del módulo
    btnReset.addEventListener("click", () => {
        if (confirm("¿Estás seguro de que querés restablecer este módulo? Se perderán las modificaciones locales.")) {
            loadModule(selector.value);
        }
    });

    // Limpiar Consola manualmente
    btnClear.addEventListener("click", () => {
        consoleOutput.innerHTML = "";
        appendToConsole("system-msg", "Consola interactiva limpiada.");
    });

    // Combinación de teclas Ctrl + Enter para ejecutar código
    editor.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key === "Enter") {
            e.preventDefault();
            runCode();
        }
        
        // Soporte para Tabulaciones (Tab)
        if (e.key === "Tab") {
            e.preventDefault();
            const start = editor.selectionStart;
            const end = editor.selectionEnd;
            
            editor.value = editor.value.substring(0, start) + "    " + editor.value.substring(end);
            editor.selectionStart = editor.selectionEnd = start + 4;
            updateGutter();
        }
    });

    // --- INICIALIZACIÓN ---
    loadModule("js1"); // Cargamos el Módulo I por defecto al iniciar
});
