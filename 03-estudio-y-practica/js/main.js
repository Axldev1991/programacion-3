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

    // --- CACHE DE PROGRESO DE EJERCICIOS DEL ALUMNO ---
    const userSolutions = {
        js1: {}, js2: {}, js3: {}, js4: {}, js5: {}, js6: {}, js7: {}
    };

    const completedExercises = {
        js1: new Set(), js2: new Set(), js3: new Set(), js4: new Set(), js5: new Set(), js6: new Set(), js7: new Set()
    };

    let activeModuleKey = "";
    let activeExerciseIndex = null;

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

    // --- SELECCIÓN Y CARGA DE EJERCICIOS ---
    const selectorBar = document.getElementById("exercise-selector-bar");

    // Permitir scroll horizontal interactivo arrastrando con la rueda del mouse
    if (selectorBar) {
        selectorBar.addEventListener("wheel", (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                selectorBar.scrollLeft += e.deltaY;
            }
        });
    }

    function renderExerciseSelector(modKey) {
        selectorBar.innerHTML = "";
        const modData = window.PLAYLAB_EXERCISES[modKey];
        if (!modData || !modData.exercises || modData.exercises.length === 0) {
            selectorBar.style.display = "none";
            return;
        }
        selectorBar.style.display = "flex";

        modData.exercises.forEach((ex, idx) => {
            const btn = document.createElement("button");
            btn.className = "exercise-btn";
            if (idx === activeExerciseIndex) btn.classList.add("active");
            if (completedExercises[modKey].has(idx)) btn.classList.add("completed");
            
            btn.innerHTML = `<i class="fa-solid fa-code"></i> Ej ${ex.id}`;
            btn.addEventListener("click", () => {
                loadExercise(idx);
            });
            selectorBar.appendChild(btn);
        });
    }

    function loadExercise(index) {
        const modKey = activeModuleKey;
        const modData = window.PLAYLAB_EXERCISES[modKey];
        if (!modData) return;

        // 1. Guardar en caliente el código actual
        if (activeExerciseIndex !== null && activeExerciseIndex !== index) {
            userSolutions[modKey][activeExerciseIndex] = editor.value;
        }

        // 2. Establecer el índice activo
        activeExerciseIndex = index;

        // 3. Renderizar las píldoras selectoras con el estado activo correcto
        renderExerciseSelector(modKey);

        const exercise = modData.exercises[index];
        if (!exercise) return;

        // 4. Inyectar teoría y ejemplo en el panel izquierdo
        theoryContainer.innerHTML = `
            <h2>${exercise.title}</h2>
            ${exercise.theory}
        `;

        // 5. Cargar código en el editor (recuperado de caché o inicial de la BD)
        const savedCode = userSolutions[modKey][index];
        editor.value = savedCode !== undefined ? savedCode : exercise.starterCode;
        updateGutter();

        // Ocultar o mostrar el sandbox DOM si estamos en la clase de DOM
        const sandbox = document.getElementById("sandbox-dom");
        if (sandbox) {
            sandbox.style.display = modKey === "js6" ? "block" : "none";
        }
    }

    function loadModule(modKey) {
        // 1. Guardar progreso del ejercicio actual en el módulo previo
        if (activeModuleKey && activeExerciseIndex !== null) {
            userSolutions[activeModuleKey][activeExerciseIndex] = editor.value;
        }

        activeModuleKey = modKey;
        const data = window.PLAYLAB_EXERCISES[modKey];
        if (!data) return;

        // Limpiar consola
        consoleOutput.innerHTML = "";

        if (!data.exercises || data.exercises.length === 0) {
            selectorBar.innerHTML = "";
            selectorBar.style.display = "none";
            theoryContainer.innerHTML = `
                <h2>${data.title}</h2>
                <div class="theory-text">
                    <p>Este módulo está disponible en los archivos físicos locales.</p>
                    <p>Para ver el nuevo sistema interactivo de ejercicios paso a paso en el playground, por favor seleccioná el <strong>Módulo III: Scopes y Funciones</strong>.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p>Podés presionar <strong>'Correr Tests 🚀'</strong> para validar los archivos locales de cualquier clase directamente.</p>
                    </div>
                </div>
            `;
            editor.value = `// Módulo en desarrollo local.\n// Seleccioná "Módulo III: Scopes y Funciones" para probar el playground interactivo!`;
            activeExerciseIndex = null;
            updateGutter();
            return;
        }

        // Cargar primer ejercicio
        loadExercise(0);
        appendToConsole("system-msg", `Módulo "${data.title}" cargado. ¡Resolvé cada ejercicio y corré Ejecutar!`);
    }

    selector.addEventListener("change", (e) => {
        loadModule(e.target.value);
    });

    document.querySelectorAll(".quick-module-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const mod = btn.getAttribute("data-module");
            selector.value = mod;
            loadModule(mod);
        });
    });

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
    
    // Ejecutar y Validar Código
    function markExerciseCompleted(modKey, index) {
        completedExercises[modKey].add(index);
        renderExerciseSelector(modKey);
    }

    function runCode() {
        const code = editor.value;
        appendToConsole("system-msg", "--- Iniciando Ejecución ---");
        
        try {
            const modData = window.PLAYLAB_EXERCISES[activeModuleKey];
            const exercise = modData ? modData.exercises[activeExerciseIndex] : null;

            if (exercise && exercise.testFnCode) {
                // Concatenamos el código del alumno con la validación de test
                const fullCode = `
                    ${code}
                    
                    // --- SCRIPT DE VALIDACIÓN ---
                    ${exercise.testFnCode}
                `;
                const runner = new Function(fullCode);
                runner();
                
                // Si no lanzó ningún error, marcamos como aprobado
                markExerciseCompleted(activeModuleKey, activeExerciseIndex);
            } else {
                // Sandbox libre (módulos placeholders)
                const runner = new Function(code);
                runner();
            }
            appendToConsole("system-msg", "--- Ejecución Finalizada con Éxito ---");
        } catch (err) {
            console.error("Excepción/Test Fallido:", err.message);
            appendToConsole("system-msg", "--- Ejecución Finalizada con Errores ---");
        }
    }

    btnRun.addEventListener("click", runCode);

    // Correr Tests Autoevaluación
    // Correr Tests Autoevaluación Dinámicos e Integrados
    function runLocalPracticeTests(modKey) {
        const modData = window.PLAYLAB_EXERCISES[modKey];
        if (!modData) return;

        console.clear();
        console.log(`%c🧪 INICIANDO AUTO-EVALUACIÓN: ${modData.title.toUpperCase()} 🧪`, "color: #7c4dff; font-weight: 800; font-size: 1.2rem;");
        console.log("%cValidando tus respuestas locales...", "color: #a3a8b4; font-style: italic;");
        console.log("-----------------------------------------------------------------");

        let totalTests = modData.exercises.length;
        let aprobados = 0;

        modData.exercises.forEach((ex) => {
            let success = false;
            let errorMsg = "";
            let errorObj = null;

            try {
                // Ejecutar el script de validación (testFnCode) de la base de datos
                const runner = new Function(ex.testFnCode);
                runner();
                success = true;
            } catch (err) {
                errorMsg = err.message;
                errorObj = err;
            }

            const badgeColor = success ? "background: #00e676; color: #000;" : "background: #ff1744; color: #fff;";
            const icon = success ? "✅" : "❌";

            console.group(`%c EJERCICIO ${ex.id}: ${ex.title} `, `${badgeColor} font-weight: bold; border-radius: 3px; padding: 2px 5px;`);
            if (success) {
                console.log(`%c${icon} Aprobado: Test superado con éxito.`, "color: #00e676; font-weight: 500;");
                aprobados++;
            } else {
                console.log(`%c${icon} Fallido: ${errorMsg}`, "color: #ff1744; font-weight: bold;");
                if (errorObj) {
                    console.log("%cDetalle del error:", "color: #646a78; font-style: italic;");
                    console.error(errorObj);
                }
            }
            console.groupEnd();
        });

        console.log("-----------------------------------------------------------------");
        if (aprobados === totalTests) {
            console.log(`%c🏆 ¡EXCELENTE! Aprobaste todos los desafíos del módulo. ¡Escribís código de primer nivel! 🏆`, "color: #00e676; font-weight: bold; font-size: 1.1rem;");
        } else {
            console.log(`%c⚠️ Guía en desarrollo: ${aprobados}/${totalTests} aprobados. ¡A seguir practicando! ⚠️`, "color: #ff9100; font-weight: bold; font-size: 1.1rem;");
        }
        console.log("-----------------------------------------------------------------");
    }

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

            script.onload = () => {
                runLocalPracticeTests(modKey);
            };

            document.body.appendChild(script);
        });
    }

    // Resetear código original del ejercicio activo
    btnReset.addEventListener("click", () => {
        if (confirm("¿Estás seguro de que querés restablecer este ejercicio? Se perderán las modificaciones locales.")) {
            const modData = window.PLAYLAB_EXERCISES[activeModuleKey];
            const exercise = modData ? modData.exercises[activeExerciseIndex] : null;
            if (exercise) {
                editor.value = exercise.starterCode;
                userSolutions[activeModuleKey][activeExerciseIndex] = exercise.starterCode;
                updateGutter();
                appendToConsole("system-msg", "Código de pantalla restablecido al valor inicial por defecto.");
            } else {
                appendToConsole("warn-msg", "No hay un ejercicio activo para restablecer.");
            }
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
    loadModule("js3"); // Seleccionamos el Módulo III de Scopes y Funciones por defecto al iniciar
});
