/**
 * 🪐 JS PLAYLAB: Base de Datos de Ejercicios
 * -------------------------------------------------------------
 * Contiene la teoría, el código inicial y el script de validación
 * de cada uno de los ejercicios correspondientes a los 7 módulos.
 */

window.PLAYLAB_EXERCISES = {
    js1: {
        title: "Módulo I: Sintaxis y Variables",
        exercises: [
            {
                id: 1,
                title: "1. Creación de Variables",
                theory: `
                    <p>Las variables declaredas con <code>let</code> son <strong>mutables</strong> (su valor puede cambiar en el tiempo) y poseen un ámbito de bloque (block scope).</p>
                    <div class="code-example">
                        <pre><code>let edad = 20;
edad = 21; // Permitido</code></pre>
                    </div>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Declará una variable mutable llamada <code>edad</code> usando la palabra clave <code>let</code> y asignale el número <code>25</code>. Luego, retornala.</p>
                    </div>
                `,
                starterCode: `function crearVariable() {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof crearVariable !== 'function') throw new Error("La función 'crearVariable' no está declarada.");
                    const res = crearVariable();
                    if (res !== 25) throw new Error("Se esperaba 25, pero retornó: " + res);
                    console.log("✅ ¡Excelente! Variable creada y retornada con éxito.");
                `
            },
            {
                id: 2,
                title: "2. Asignación de Constantes",
                theory: `
                    <p>Las constantes declaradas con <code>const</code> son <strong>inmutables</strong> en su referencia. Deben inicializarse obligatoriamente en la misma línea de su declaración.</p>
                    <div class="code-example">
                        <pre><code>const NOMBRE = "Axel";
// NOMBRE = "Juan"; // Error</code></pre>
                    </div>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Declará una constante llamada <code>PAIS</code> usando <code>const</code> y asignale el string <code>"Argentina"</code>. Luego, retornala.</p>
                    </div>
                `,
                starterCode: `function crearConstante() {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof crearConstante !== 'function') throw new Error("La función 'crearConstante' no está declarada.");
                    const res = crearConstante();
                    if (res !== "Argentina") throw new Error("Se esperaba 'Argentina', pero retornó: " + res);
                    console.log("✅ ¡Excelente! Constante declarada e inyectada con éxito.");
                `
            },
            {
                id: 3,
                title: "3. Operaciones Aritméticas",
                theory: `
                    <p>JavaScript admite todos los operadores matemáticos tradicionales: <code>+</code> (suma), <code>-</code> (resta), <code>*</code> (multiplicación), y <code>/</code> (división).</p>
                    <div class="code-example">
                        <pre><code>const suma = 5 + 3; // 8</code></pre>
                    </div>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Recibís dos números <code>a</code> y <code>b</code>. Retorná un objeto con las propiedades exactas: <code>suma</code>, <code>resta</code>, y <code>multiplicacion</code>.</p>
                    </div>
                `,
                starterCode: `function calcularMatematica(a, b) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof calcularMatematica !== 'function') throw new Error("La función 'calcularMatematica' no está declarada.");
                    const res = calcularMatematica(10, 5);
                    if (!res || res.suma !== 15 || res.resta !== 5 || res.multiplicacion !== 50) throw new Error("Los cálculos no son correctos: " + JSON.stringify(res));
                    console.log("✅ ¡Cálculos matemáticos perfectos!");
                `
            },
            {
                id: 4,
                title: "4. Concatenación con Template Literals",
                theory: `
                    <p>Los <strong>Template Literals</strong> (plantillas de cadena) delimitados por backticks (<code>\`</code>) permiten incrustar expresiones de forma limpia usando <code>\${expresion}</code>.</p>
                    <div class="code-example">
                        <pre><code>const msj = \`Hola \${nombre}\`;</code></pre>
                    </div>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Retorná la cadena exacta usando template literals: <code>"El alumno [nombre] está inscripto en [curso]."</code></p>
                    </div>
                `,
                starterCode: `function unirMensaje(nombre, curso) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof unirMensaje !== 'function') throw new Error("La función 'unirMensaje' no está declarada.");
                    const res = unirMensaje("Axel", "Programación III");
                    if (res !== "El alumno Axel está inscripto en Programación III.") throw new Error("Cadena incorrecta: " + res);
                    console.log("✅ Concatenación con Template Literals impecable.");
                `
            },
            {
                id: 5,
                title: "5. Igualdad Simple vs Estricta",
                theory: `
                    <p>El operador <code>==</code> compara únicamente el valor (realizando coerción de tipos tácita), mientras que <code>===</code> compara de forma estricta tanto el <strong>valor</strong> como el <strong>tipo de dato</strong>.</p>
                    <div class="code-example">
                        <pre><code>5 == "5"  // true
5 === "5" // false</code></pre>
                    </div>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Retorná un objeto con las propiedades <code>simple</code> y <code>estricta</code> evaluando la igualdad de <code>a</code> y <code>b</code>.</p>
                    </div>
                `,
                starterCode: `function evaluarEqualidades(a, b) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof evaluarEqualidades !== 'function') throw new Error("La función 'evaluarEqualidades' no está declarada.");
                    const res = evaluarEqualidades(5, "5");
                    if (!res || res.simple !== true || res.estricta !== false) throw new Error("Igualdades erróneas: " + JSON.stringify(res));
                    console.log("✅ Comparaciones lógicas evaluadas a la perfección.");
                `
            },
            {
                id: 6,
                title: "6. Inspección con Typeof",
                theory: `
                    <p>El operador unitario <code>typeof</code> retorna una cadena de texto que describe el tipo de dato actual del operando.</p>
                    <div class="code-example">
                        <pre><code>typeof 42; // "number"</code></pre>
                    </div>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Retorná la cadena con el tipo de dato del <code>valor</code> recibido por parámetro.</p>
                    </div>
                `,
                starterCode: `function obtenerTipo(valor) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof obtenerTipo !== 'function') throw new Error("La función 'obtenerTipo' no está declarada.");
                    if (obtenerTipo(10) !== "number" || obtenerTipo("hola") !== "string" || obtenerTipo(true) !== "boolean") throw new Error("Tipo devuelto incorrecto.");
                    console.log("✅ Inspección del tipo de dato impecable.");
                `
            },
            {
                id: 7,
                title: "7. Operadores Lógicos",
                theory: `
                    <p>El operador de conjunción lógica <code>&&</code> (AND) requiere que todas las condiciones evaluadas sean verdaderas para retornar <code>true</code>.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Retorná <code>true</code> si <code>edad</code> es mayor o igual a 18 <strong>Y además</strong> <code>tieneEntrada</code> es <code>true</code>.</p>
                    </div>
                `,
                starterCode: `function verificarPermisoAcceso(edad, tieneEntrada) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof verificarPermisoAcceso !== 'function') throw new Error("La función 'verificarPermisoAcceso' no está declarada.");
                    if (verificarPermisoAcceso(18, true) !== true || verificarPermisoAcceso(17, true) !== false || verificarPermisoAcceso(20, false) !== false) throw new Error("Validación de lógica fallida.");
                    console.log("✅ Permiso de acceso lógico validado exitosamente.");
                `
            },
            {
                id: 8,
                title: "8. Diferencia entre Null y Undefined",
                theory: `
                    <p><code>null</code> es un valor de asignación intencional que representa "vacío", mientras que <code>undefined</code> denota que una variable ha sido declarada pero no se le ha inicializado ningún valor.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Recibís una <code>opcion</code>. Si es <code>"vaciar"</code>, retorná <code>null</code>. Si es <code>"declarar"</code>, retorná una variable declarada sin asignar.</p>
                    </div>
                `,
                starterCode: `function identificarVacio(opcion) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof identificarVacio !== 'function') throw new Error("La función 'identificarVacio' no está declarada.");
                    if (identificarVacio("vaciar") !== null) throw new Error("Se esperaba null para 'vaciar'.");
                    if (identificarVacio("declarar") !== undefined) throw new Error("Se esperaba undefined para 'declarar'.");
                    console.log("✅ Comprensión de vacíos (null vs undefined) espectacular.");
                `
            },
            {
                id: 9,
                title: "9. Conversión Numérica Explícita",
                theory: `
                    <p>Para convertir cadenas a números de forma controlada, usamos las funciones globales <code>parseInt</code> (para números enteros) y <code>parseFloat</code> (para números decimales).</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Convertí <code>strEntero</code> a un entero y <code>strDecimal</code> a un decimal. Retorná un objeto con las propiedades <code>entero</code> y <code>decimal</code>.</p>
                    </div>
                `,
                starterCode: `function parsearSeguro(strEntero, strDecimal) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof parsearSeguro !== 'function') throw new Error("La función 'parsearSeguro' no está declarada.");
                    const res = parsearSeguro("42", "3.14");
                    if (!res || res.entero !== 42 || res.decimal !== 3.14) throw new Error("Parseo erróneo: " + JSON.stringify(res));
                    console.log("✅ Conversiones numéricas y parseos perfectos.");
                `
            },
            {
                id: 10,
                title: "10. Prioridad de Operadores",
                theory: `
                    <p>El uso de paréntesis <code>()</code> altera el orden natural de la precedencia matemática, forzando la evaluación de las sumas/restas antes de los productos/divisiones.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Sumá <code>a</code> y <code>b</code>, y al resultado multiplicalo por <code>c</code>. Retorná el total garantizando la precedencia con paréntesis.</p>
                    </div>
                `,
                starterCode: `function desafioPrecedencia(a, b, c) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof desafioPrecedencia !== 'function') throw new Error("La función 'desafioPrecedencia' no está declarada.");
                    const res = desafioPrecedencia(2, 3, 4);
                    if (res !== 20) throw new Error("Se esperaba 20, obtenido: " + res);
                    console.log("✅ ¡Precedencia de operadores excelente! Completaste el Módulo I.");
                `
            }
        ]
    },
    js2: {
        title: "Módulo II: Control de Flujo",
        exercises: [
            {
                id: 1,
                title: "1. Calificación de Examen",
                theory: `
                    <p>Las estructuras <code>if-else if-else</code> permiten ramificar el flujo de ejecución evaluando condiciones secuenciales en orden de arriba hacia abajo.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Evaluá la <code>nota</code> recibida y retorná:
                        <br>- <code>"Desaprobado ❌"</code> si nota < 4.
                        <br>- <code>"Aprobado 📚"</code> si nota está entre 4 y 6.9.
                        <br>- <code>"Promocionado 🏆"</code> si nota >= 7.</p>
                    </div>
                `,
                starterCode: `function evaluarNota(nota) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof evaluarNota !== 'function') throw new Error("La función 'evaluarNota' no está declarada.");
                    if (!evaluarNota(3).includes("Desaprobado") || !evaluarNota(5.5).includes("Aprobado") || !evaluarNota(9).includes("Promocionado")) throw new Error("Control condicional erróneo.");
                    console.log("✅ ¡Excelente! Ramificaciones condicionales correctas.");
                `
            },
            {
                id: 2,
                title: "2. Par o Impar (Ternario)",
                theory: `
                    <p>El operador ternario es la única expresión en JS con tres operandos: <code>condicion ? valorSiVerdadero : valorSiFalso</code>. Sirve para inlinear ramificaciones condicionales.</p>
                    <div class="code-example">
                        <pre><code>const msj = (edad >= 18) ? "Adulto" : "Menor";</code></pre>
                    </div>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Retorná usando ternarios: <code>"El número [numero] es Par"</code> o <code>"El número [numero] es Impar"</code>.</p>
                    </div>
                `,
                starterCode: `function evaluarParImpar(numero) {
    // Escribí tu código acá usando el operador ternario:

}`,
                testFnCode: `
                    if (typeof evaluarParImpar !== 'function') throw new Error("La función 'evaluarParImpar' no está declarada.");
                    if (evaluarParImpar(14) !== "El número 14 es Par") throw new Error("Falla para número par.");
                    if (evaluarParImpar(7) !== "El número 7 es Impar") throw new Error("Falla para número impar.");
                    console.log("✅ Operador ternario implementado a la perfección.");
                `
            },
            {
                id: 3,
                title: "3. Día de la Semana (Switch)",
                theory: `
                    <p>La estructura <code>switch</code> evalúa una expresión y empareja su resultado con múltiples etiquetas <code>case</code>. Es ideal para evaluar múltiples opciones discretas con una sintaxis limpia.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Retorná el nombre del día para <code>diaId</code> del 1 al 7 ("Lunes" a "Domingo"). Si está fuera de rango, retorná: <code>"Día no válido ❌"</code>.</p>
                    </div>
                `,
                starterCode: `function obtenerDiaSemana(diaId) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof obtenerDiaSemana !== 'function') throw new Error("La función 'obtenerDiaSemana' no está declarada.");
                    if (obtenerDiaSemana(1) !== "Lunes" || obtenerDiaSemana(7) !== "Domingo" || obtenerDiaSemana(10) !== "Día no válido ❌") throw new Error("Error en la asignación de días.");
                    console.log("✅ Estructura Switch selectora funcionando a la perfección.");
                `
            },
            {
                id: 4,
                title: "4. Lanzamiento de Cohete (While)",
                theory: `
                    <p>El bucle <code>while</code> ejecuta repetidamente un bloque de instrucciones siempre y cuando la condición evaluada resulte verdadera.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Inicializá en 10, recorré en cuenta regresiva usando <code>while</code> agregando los números a un array, e inyectá <code>"¡Despegue! 🚀"</code> al final.</p>
                    </div>
                `,
                starterCode: `function cuentaRegresiva() {
    // Escribí tu código acá usando un bucle while:

}`,
                testFnCode: `
                    if (typeof cuentaRegresiva !== 'function') throw new Error("La función 'cuentaRegresiva' no está declarada.");
                    const res = cuentaRegresiva();
                    if (!res || res[0] !== 10 || res[9] !== 1 || res[10] !== "¡Despegue! 🚀") throw new Error("Error en la cuenta regresiva: " + JSON.stringify(res));
                    console.log("✅ Bucle While para cuenta regresiva validado.");
                `
            },
            {
                id: 5,
                title: "5. Salteando Múltiplos (For + Continue)",
                theory: `
                    <p>La directiva <code>continue</code> interrumpe de forma inmediata la iteración actual de un bucle y salta a la evaluación de la siguiente iteración.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Recorré los números del 1 al 25. Usando <code>continue</code>, omití los múltiplos de 5 y retorná la lista de números filtrados en un array.</p>
                    </div>
                `,
                starterCode: `function saltearMultiplosDeCinco() {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof saltearMultiplosDeCinco !== 'function') throw new Error("La función 'saltearMultiplosDeCinco' no está declarada.");
                    const res = saltearMultiplosDeCinco();
                    if (!res || res.length !== 20 || res.includes(5) || res.includes(15)) throw new Error("Omisiones incorrectas: " + JSON.stringify(res));
                    console.log("✅ Directiva 'continue' implementada con éxito.");
                `
            },
            {
                id: 6,
                title: "6. Buscando el Tesoro (For + Break)",
                theory: `
                    <p>La directiva <code>break</code> rompe de manera absoluta la ejecución de un bucle, saliendo de él de forma inmediata.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Buscá en la lista <code>cofres</code> el elemento que posea <code>tesoro: true</code>, retorná su <code>id</code> e interrumpí la iteración inmediatamente con <code>break</code>.</p>
                    </div>
                `,
                starterCode: `function buscarTesoro(cofres) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof buscarTesoro !== 'function') throw new Error("La función 'buscarTesoro' no está declarada.");
                    const list = [{id: "Madera", tesoro: false}, {id: "Plata", tesoro: true}, {id: "Oro", tesoro: false}];
                    if (buscarTesoro(list) !== "Plata") throw new Error("Cofre correcto no hallado.");
                    console.log("✅ Búsqueda interrumpida con 'break' exitosa.");
                `
            },
            {
                id: 7,
                title: "7. Menú Simulado (Do-While)",
                theory: `
                    <p>El bucle <code>do-while</code> garantiza que el bloque de código interno se ejecute **al menos una vez** antes de evaluar la condición de parada.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Simulá el menú interactivo con do-while:
                        <br>- Si <code>opcion</code> === 1: agregá "Jugando partida... 🎮" e incrementá a 2.
                        <br>- Si <code>opcion</code> === 2: agregá "Mostrando configuraciones... ⚙️" e incrementá a 3.
                        <br>- Si <code>opcion</code> === 3: agregá "Saliendo del juego... 👋" e incrementá a 4.
                        <br>Retorná el array de acciones.</p>
                    </div>
                `,
                starterCode: `function simularMenu(opcionSeleccionada = 1) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof simularMenu !== 'function') throw new Error("La función 'simularMenu' no está declarada.");
                    const res = simularMenu(1);
                    if (!res || res.length !== 3 || !res[0].includes("Jugando") || !res[2].includes("Saliendo")) throw new Error("Flujo de menú erróneo: " + JSON.stringify(res));
                    console.log("✅ Bucle Do-While y simulación de estados exitosa.");
                `
            },
            {
                id: 8,
                title: "8. Pirámide de Asteriscos",
                theory: `
                    <p>Los bucles anidados ocurren al insertar un bucle interno dentro de la estructura de otro bucle externo, multiplicando su complejidad de iteración.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Recibís una <code>altura</code>. Dibujá una pirámide de asteriscos y retorná cada línea dentro de un array. Ejemplo altura 3 -> <code>["*", "**", "***"]</code>.</p>
                    </div>
                `,
                starterCode: `function generarPiramide(altura) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof generarPiramide !== 'function') throw new Error("La función 'generarPiramide' no está declarada.");
                    const res = generarPiramide(4);
                    if (!res || res.length !== 4 || res[0] !== "*" || res[3] !== "****") throw new Error("Pirámide incorrecta: " + JSON.stringify(res));
                    console.log("✅ Bucles anidados de construcción geométrica impecables.");
                `
            },
            {
                id: 9,
                title: "9. Serie de Fibonacci",
                theory: `
                    <p>La serie de Fibonacci calcula cada nuevo término sumando los dos valores previos de la secuencia: 0, 1, 1, 2, 3, 5, 8, 13...</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Recibís <code>terminos</code>. Retorná un array con la secuencia Fibonacci de esa cantidad de elementos.</p>
                    </div>
                `,
                starterCode: `function generarFibonacci(terminos) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof generarFibonacci !== 'function') throw new Error("La función 'generarFibonacci' no está declarada.");
                    const res = generarFibonacci(7);
                    if (JSON.stringify(res) !== "[0,1,1,2,3,5,8]") throw new Error("Secuencia incorrecta: " + JSON.stringify(res));
                    console.log("✅ Serie de Fibonacci matemática resuelta con éxito.");
                `
            },
            {
                id: 10,
                title: "10. Validador de Primos",
                theory: `
                    <p>Un número primo es un entero mayor que 1 divisible únicamente por sí mismo y por 1. Requiere evaluar la divisibilidad mediante un algoritmo optimizado.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Retorná <code>true</code> si el <code>candidato</code> recibido es primo, y <code>false</code> de lo contrario.</p>
                    </div>
                `,
                starterCode: `function esNumeroPrimo(candidato) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof esNumeroPrimo !== 'function') throw new Error("La función 'esNumeroPrimo' no está declarada.");
                    if (esNumeroPrimo(29) !== true || esNumeroPrimo(12) !== false || esNumeroPrimo(1) !== false) throw new Error("Validaciones de primalidad erróneas.");
                    console.log("✅ Algoritmo de chequeo de números primos fantástico. ¡Módulo II completado!");
                `
            }
        ]
    },
    js3: {
        title: "Módulo III: Scopes y Funciones",
        exercises: [
            {
                id: 1,
                title: "1. Calculadora de Área (Declarada)",
                theory: `
                    <p>Las <strong>funciones declaradas</strong> se definen usando la palabra clave <code>function</code> seguida de su nombre. Una característica única de estas funciones es el <strong>hoisting</strong>: JavaScript las "eleva" al inicio de su scope, permitiendo invocarlas incluso antes de su línea de definición física.</p>
                    <div class="code-example">
                        <pre><code>// Invocación previa permitida gracias al hoisting:
const area = calcularArea(5, 4); 

function calcularArea(base, altura) {
    return base * altura;
}</code></pre>
                    </div>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Escribí una función declarada llamada <code>calcularAreaRectangulo</code> que reciba <code>base</code> y <code>altura</code> y retorne el área.</p>
                    </div>
                `,
                starterCode: `// Escribí tu función declarada 'calcularAreaRectangulo' acá:
function calcularAreaRectangulo(base, altura) {
    // Tu código aquí
    
}`,
                testFnCode: `
                    if (typeof calcularAreaRectangulo !== 'function') throw new Error("La función 'calcularAreaRectangulo' no está declarada.");
                    const area = calcularAreaRectangulo(5, 4);
                    if (area !== 20) throw new Error("Se esperaba 20 para base 5 y altura 4, pero retornó: " + area);
                    const area2 = calcularAreaRectangulo(10, 5);
                    if (area2 !== 50) throw new Error("Se esperaba 50 para base 10 y altura 5, pero retornó: " + area2);
                    console.log("✅ ¡Excelente! 'calcularAreaRectangulo' calcula correctamente el área.");
                `
            },
            {
                id: 2,
                title: "2. Conversor de Temperatura (Expresada)",
                theory: `
                    <p>Las <strong>funciones expresadas</strong> se crean asignando una función (usualmente anónima) a una variable o constante. Al usar <code>const</code> o <code>let</code>, estas funciones están sujetas a la <em>Temporal Dead Zone</em> y <strong>no admiten hoisting</strong>; no pueden ser invocadas antes de su definición.</p>
                    <div class="code-example">
                        <pre><code>// Esto lanzará un ReferenceError:
// fahrenheit(20); 

const fahrenheit = function(celsius) {
    return celsius * 1.8 + 32;
};</code></pre>
                    </div>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Escribí una función expresada asignada a la constante <code>celsiusAFahrenheit</code> que convierta grados celsius a fahrenheit (celsius * 1.8 + 32).</p>
                    </div>
                `,
                starterCode: `// Declará la constante y asignale la función expresada:
const celsiusAFahrenheit = function(celsius) {
    // Tu código aquí
    
};`,
                testFnCode: `
                    if (typeof celsiusAFahrenheit !== 'function') throw new Error("La constante/función 'celsiusAFahrenheit' no está asignada o definida.");
                    const fahr = celsiusAFahrenheit(20);
                    const fahrZero = celsiusAFahrenheit(0);
                    if (fahr !== 68 || fahrZero !== 32) throw new Error("Cálculos erróneos. 20°C deberia ser 68°F y 0°C deberia ser 32°F.");
                    console.log("✅ ¡Perfecto! Grados Celsius convertidos a Fahrenheit correctamente.");
                `
            },
            {
                id: 3,
                title: "3. Saludo Personalizado (Arrow Function)",
                theory: `
                    <p>Las <strong>Arrow Functions</strong> (funciones flecha) introducidas en ES6 ofrecen una sintaxis ultra compacta. Si el cuerpo de la función consta de una sola expresión, podemos omitir las llaves <code>{}</code> y la palabra clave <code>return</code> (retorno implícito).</p>
                    <div class="code-example">
                        <pre><code>// Arrow function con retorno implícito en una sola línea:
const duplicar = num => num * 2;</code></pre>
                    </div>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Escribí una Arrow Function llamada <code>saludarUsuario</code> que reciba <code>nombre</code> por parámetro y retorne de forma implícita la cadena: <code>"¡Hola, [nombre]! Bienvenido."</code></p>
                    </div>
                `,
                starterCode: `// Escribí la arrow function saludarUsuario con retorno implícito:
const saludarUsuario = (nombre) => /* tu código acá */;`,
                testFnCode: `
                    if (typeof saludarUsuario !== 'function') throw new Error("La función 'saludarUsuario' no está definida.");
                    const saludo = saludarUsuario("Axel");
                    if (!saludo || !saludo.includes("¡Hola, Axel! Bienvenido.")) throw new Error("Se esperaba '¡Hola, Axel! Bienvenido.' pero retornó: " + saludo);
                    const esFlecha = !saludarUsuario.hasOwnProperty('prototype');
                    if (!esFlecha) throw new Error("La función debe ser declarada como una Arrow Function (flecha).");
                    console.log("✅ ¡Espectacular! Arrow function declarada y retornando el saludo esperado.");
                `
            },
            {
                id: 4,
                title: "4. Contador Privado (Closures)",
                theory: `
                    <p>Un <strong>closure</strong> (clausura) ocurre cuando una función interna "recuerda" y tiene acceso al scope de su función padre, incluso después de que la función padre haya terminado de ejecutarse. Es el pilar para emular variables privadas en JavaScript.</p>
                    <div class="code-example">
                        <pre><code>function crearContador() {
    let contador = 0; // Variable privada encerrada
    return function() {
        contador++;
        return contador;
    };
}</code></pre>
                    </div>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Completá la función <code>crearContador</code> para que retorne una función anónima que incremente la variable privada <code>contador</code> en 1 y la retorne en cada invocación.</p>
                    </div>
                `,
                starterCode: `function crearContador() {
    let contador = 0; // Variable privada encerrada
    
    // Escribí la función que se retorna acá:
    
}`,
                testFnCode: `
                    if (typeof crearContador !== 'function') throw new Error("La función creadora 'crearContador' no está definida.");
                    const contar = crearContador();
                    if (typeof contar !== 'function') throw new Error("crearContador debe retornar una función closure.");
                    const val1 = contar();
                    const val2 = contar();
                    if (val1 !== 1 || val2 !== 2) throw new Error("El contador no retiene el estado privado correctamente. Esperaba 1 y 2, obtuvo: " + val1 + " y " + val2);
                    console.log("✅ ¡Magia de Closures! Variable privada encapsulada y protegida exitosamente.");
                `
            },
            {
                id: 5,
                title: "5. Variable de Scope Global",
                theory: `
                    <p>Las variables declaradas en el nivel más alto de un archivo de JS pertenecen al <strong>Scope Global</strong>. Son accesibles por cualquier función en cualquier parte del código, lo que puede provocar colisiones si no se administran con precaución.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Creá una variable global mutable llamada <code>contadorGlobal</code> con valor inicial <code>0</code>. Luego, creá la función <code>incrementarGlobal()</code> que le sume 1 y no retorne nada.</p>
                    </div>
                `,
                starterCode: `// Declará la variable global acá:


function incrementarGlobal() {
    // Incrementá el valor acá:
    
}`,
                testFnCode: `
                    if (typeof incrementarGlobal !== 'function') throw new Error("La función 'incrementarGlobal' no está declarada.");
                    if (typeof contadorGlobal === 'undefined') throw new Error("La variable global 'contadorGlobal' no está definida.");
                    const inicial = contadorGlobal;
                    incrementarGlobal();
                    if (contadorGlobal !== inicial + 1) throw new Error("El contador global no aumentó su valor.");
                    console.log("✅ Manipulación de Scope Global realizada de forma exitosa.");
                `
            },
            {
                id: 6,
                title: "6. Scope de Bloque (Block Scope)",
                theory: `
                    <p>Las variables declaradas con <code>let</code> y <code>const</code> están restringidas al bloque (entre llaves <code>{}</code>) donde se definieron. Al salir de ese bloque, son recolectadas y dejan de existir en memoria.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Dentro de la función, creá una estructura condicional <code>if(true)</code>. Adentro definí <code>const secreto = "shh";</code>. Fuera del <code>if</code>, intentá retornar ` + "`secreto`" + ` atrapando el error mediante <code>try-catch</code> y retornando la cadena <code>"Secreto inaccesible"</code>.</p>
                    </div>
                `,
                starterCode: `function probarBlockScope() {
    // Escribí tu bloque e intentá acceder desde fuera:
    
}`,
                testFnCode: `
                    if (typeof probarBlockScope !== 'function') throw new Error("La función 'probarBlockScope' no está declarada.");
                    const res = probarBlockScope();
                    if (res !== "Secreto inaccesible") throw new Error("Se esperaba capturar el ReferenceError y retornar 'Secreto inaccesible'. Obtenido: " + res);
                    console.log("✅ ¡Excelente! Entendés a la perfección el comportamiento del Block Scope.");
                `
            },
            {
                id: 7,
                title: "7. Colisión de Variables (Shadowing)",
                theory: `
                    <p>El <strong>variable shadowing</strong> ocurre cuando declaramos una variable en un ámbito local con el mismo nombre exacto de otra en un ámbito externo. La variable local "sombra" u oculta temporalmente a la externa.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Recibís una variable global <code>usuario = "Invitado"</code>. Dentro de la función <code>presentarShadowing</code>, declará otra variable local usando <code>let usuario = "Alumno"</code> y retornala. No alteres la global.</p>
                    </div>
                `,
                starterCode: `let usuario = "Invitado"; // Variable externa

function presentarShadowing() {
    // Declará la variable local y retornala:
    
}`,
                testFnCode: `
                    if (typeof presentarShadowing !== 'function') throw new Error("La función 'presentarShadowing' no está declarada.");
                    const local = presentarShadowing();
                    if (local !== "Alumno") throw new Error("El retorno local debería ser 'Alumno'.");
                    if (usuario !== "Invitado") throw new Error("¡Peligro! Sobrescribiste la variable global.");
                    console.log("✅ ¡Shadowing dominado! Ocultación de variables locales correcta.");
                `
            },
            {
                id: 8,
                title: "8. Callback de Operación",
                theory: `
                    <p>Un <strong>callback</strong> es una función que se pasa a otra función como argumento para ser ejecutada más tarde (programación asíncrona o flujo modular).</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Escribí una función llamada <code>procesarNumero</code> que reciba un <code>numero</code> y una función <code>callback</code>. Retorná el resultado de pasar el número por dicho callback.</p>
                    </div>
                `,
                starterCode: `function procesarNumero(numero, callback) {
    // Tu código aquí:
    
}`,
                testFnCode: `
                    if (typeof procesarNumero !== 'function') throw new Error("La función 'procesarNumero' no está declarada.");
                    const res = procesarNumero(5, x => x * 2);
                    if (res !== 10) throw new Error("Se esperaba 10 al pasar 5 y un callback multiplicador por 2, obtenido: " + res);
                    console.log("✅ Mapeo modular de funciones a través de Callbacks excelente.");
                `
            },
            {
                id: 9,
                title: "9. IIFE (Auto-Ejecutable)",
                theory: `
                    <p>Las <strong>IIFE</strong> (Immediately Invoked Function Expressions) se ejecutan de manera inmediata tras ser definidas. Se utilizan para encapsular variables y evitar polucionar el Ámbito Global.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Completá la IIFE para que retorne el string <code>"Modulo cargado"</code> encapsulando todo dentro de la variable de retorno.</p>
                    </div>
                `,
                starterCode: `const moduloEjecutado = (function() {
    // Escribí el código interno y su retorno:
    
})();`,
                testFnCode: `
                    if (typeof moduloEjecutado === 'undefined') throw new Error("La IIFE no se ejecutó o no asignó el retorno.");
                    if (moduloEjecutado !== "Modulo cargado") throw new Error("IIFE retornó un valor erróneo: " + moduloEjecutado);
                    console.log("✅ ¡IIFE ejecutada! Ámbito local aislado herméticamente del exterior.");
                `
            },
            {
                id: 10,
                title: "10. Hoisting en Variables (var)",
                theory: `
                    <p>Las variables declaradas con <code>var</code> sufren de <strong>hoisting</strong> parcial: su declaración física es elevada al inicio del scope, pero su inicialización no. Intentar leerlas antes de su línea de asignación retorna <code>undefined</code>.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Escribí una función que contenga <code>var secretoVar = "secreto";</code> al final de su cuerpo, pero antes de declararla intente retornarla para demostrar el hoisting parcial (retornando ` + "`undefined`" + `).</p>
                    </div>
                `,
                starterCode: `function demostrarHoisting() {
    // Intentá retornar la variable secretaVar antes de declararla:
    
    
    // Declaración física con var:
    
}`,
                testFnCode: `
                    if (typeof demostrarHoisting !== 'function') throw new Error("La función 'demostrarHoisting' no está declarada.");
                    const res = demostrarHoisting();
                    if (typeof res !== 'undefined') throw new Error("Se esperaba undefined debido al hoisting parcial, pero retornó: " + res);
                    console.log("✅ ¡Felicidades! Completaste las aserciones de Scope, Funciones y Hoisting.");
                `
            }
        ]
    },
    js4: {
        title: "Módulo IV: Arrays y Objetos",
        exercises: [
            {
                id: 1,
                title: "1. Creación y Acceso a Arrays",
                theory: `
                    <p>Los arrays son estructuras indexadas ordenadas. Los elementos se acceden de forma posicional indexados a partir del número <code>0</code>.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Declará un array mutable llamado <code>colores</code> con los strings <code>"rojo", "verde", "azul", "amarillo"</code>. Retorná un objeto con las propiedades <code>lista</code> (el array completo) y <code>segundo</code> (el color en la posición de índice 1).</p>
                    </div>
                `,
                starterCode: `function crearAccederArray() {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof crearAccederArray !== 'function') throw new Error("La función 'crearAccederArray' no está declarada.");
                    const res = crearAccederArray();
                    if (!res || !Array.isArray(res.lista) || res.segundo !== "verde") throw new Error("Estructura de array o acceso erróneo.");
                    console.log("✅ Array estructurado y leído de forma indexada correctamente.");
                `
            },
            {
                id: 2,
                title: "2. Mutar Bordes (Push y Shift)",
                theory: `
                    <p>El método <code>push()</code> añade un elemento al final del array (mutándolo en caliente), mientras que <code>shift()</code> remueve el primer elemento desplazando todos los índices hacia la izquierda.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Recibís un <code>array</code>. Añadí el string <code>"NUEVO"</code> al final usando <code>push</code>, remové el primer elemento usando <code>shift</code>, y retorná el array modificado.</p>
                    </div>
                `,
                starterCode: `function mutarBordes(array) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof mutarBordes !== 'function') throw new Error("La función 'mutarBordes' no está declarada.");
                    const res = mutarBordes(["A", "B", "C"]);
                    if (res[0] !== "B" || res[2] !== "NUEVO" || res.length !== 3) throw new Error("Modificaciones de bordes erróneas: " + JSON.stringify(res));
                    console.log("✅ Operaciones push() y shift() mutadas con éxito.");
                `
            },
            {
                id: 3,
                title: "3. Extracción Superficial (Slice)",
                theory: `
                    <p>El método <code>slice(start, end)</code> copia una porción superficial de un array sin mutar el original. El índice final es excluyente.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Recibís un <code>array</code>. Retorná una porción nueva (copia parcial inmutable) conteniendo desde el índice 1 al índice 3 inclusive.</p>
                    </div>
                `,
                starterCode: `function copiarPorcion(array) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof copiarPorcion !== 'function') throw new Error("La función 'copiarPorcion' no está declarada.");
                    const orig = [10, 20, 30, 40, 50];
                    const res = copiarPorcion(orig);
                    if (JSON.stringify(res) !== "[20,30,40]") throw new Error("Extracción incorrecta: " + JSON.stringify(res));
                    if (orig.length !== 5) throw new Error("¡Error! El array original fue mutado.");
                    console.log("✅ Extracción inmutable con slice() excelente.");
                `
            },
            {
                id: 4,
                title: "4. Trozado y Búsqueda (Split e Includes)",
                theory: `
                    <p><code>split()</code> fragmenta un string en un array usando un delimitador, y <code>includes()</code> evalúa con un booleano la presencia de un elemento en un array.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Recibís <code>frase</code> y <code>buscado</code>. Fragmentá frase en palabras usando <code>split(" ")</code>, y verificá si <code>buscado</code> existe en ella usando <code>includes</code>. Retorná un objeto con las claves: <code>palabras</code> y <code>existe</code>.</p>
                    </div>
                `,
                starterCode: `function analizarTexto(frase, buscado) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof analizarTexto !== 'function') throw new Error("La función 'analizarTexto' no está declarada.");
                    const res = analizarTexto("Programar en JS es espectacular", "JS");
                    if (!res || !res.palabras.includes("JS") || res.existe !== true) throw new Error("Análisis de texto erróneo: " + JSON.stringify(res));
                    console.log("✅ Procesamiento de cadenas con split() e includes() fantástico.");
                `
            },
            {
                id: 5,
                title: "5. Modificación Quirúrgica (Splice)",
                theory: `
                    <p>El método destructivo <code>splice(start, deleteCount, ...items)</code> añade o remueve elementos quirúrgicamente en cualquier índice de un array, mutándolo en el proceso.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Recibís un <code>array</code>. Usá <code>splice</code> para remover 1 elemento en el índice 2 e insertar <code>"REEMPLAZO"</code> en ese mismo lugar. Retorná el array mutado.</p>
                    </div>
                `,
                starterCode: `function reemplazarSplice(array) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof reemplazarSplice !== 'function') throw new Error("La función 'reemplazarSplice' no está declarada.");
                    const res = reemplazarSplice(["A", "B", "C", "D"]);
                    if (res[2] !== "REEMPLAZO" || res.length !== 4 || res[3] !== "D") throw new Error("Splice erróneo: " + JSON.stringify(res));
                    console.log("✅ Mutación quirúrgica en array con splice() perfecta.");
                `
            },
            {
                id: 6,
                title: "6. Creación de Objetos Literales",
                theory: `
                    <p>Los objetos literales estructuran datos complejos agrupando pares clave-valor encerrados entre llaves <code>{}</code>.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Retorná un objeto literal que represente un libro con las propiedades: <code>titulo: "El Aleph"</code>, <code>autor: "Jorge Luis Borges"</code> y <code>paginas: 150</code>.</p>
                    </div>
                `,
                starterCode: `function crearObjeto() {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof crearObjeto !== 'function') throw new Error("La función 'crearObjeto' no está declarada.");
                    const res = crearObjeto();
                    if (!res || res.titulo !== "El Aleph" || res.autor !== "Jorge Luis Borges" || res.paginas !== 150) throw new Error("Objeto estructurado incorrectamente.");
                    console.log("✅ Objeto literal modelado con éxito.");
                `
            },
            {
                id: 7,
                title: "7. Corchetes Dinámicos",
                theory: `
                    <p>La notación por corchetes <code>objeto[clave]</code> nos permite acceder de forma dinámica a las propiedades de un objeto usando variables que contienen strings.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Recibís un <code>objeto</code> y una <code>clave</code> (string). Retorná el valor correspondiente a esa clave usando corchetes dinámicos.</p>
                    </div>
                `,
                starterCode: `function obtenerClaveDinamica(objeto, clave) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof obtenerClaveDinamica !== 'function') throw new Error("La función 'obtenerClaveDinamica' no está declarada.");
                    if (obtenerClaveDinamica({nombre: "Axel"}, "nombre") !== "Axel") throw new Error("Falla de acceso dinámico.");
                    console.log("✅ Acceso dinámico por corchetes dominado.");
                `
            },
            {
                id: 8,
                title: "8. Edición y Eliminación Dinámica",
                theory: `
                    <p>La palabra clave <code>delete</code> remueve quirúrgicamente un par clave-valor de un objeto literal mutándolo en caliente.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Recibís un objeto <code>usuario</code>. Asignale a la propiedad <code>rol</code> el valor <code>"admin"</code>, y eliminá por completo la propiedad <code>password</code> con <code>delete</code>. Retorná el objeto.</p>
                    </div>
                `,
                starterCode: `function mutarPropiedades(usuario) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof mutarPropiedades !== 'function') throw new Error("La función 'mutarPropiedades' no está declarada.");
                    const res = mutarPropiedades({rol: "guest", password: "123", email: "a@a.com"});
                    if (res.rol !== "admin" || res.hasOwnProperty("password")) throw new Error("Edición o remoción incorrecta.");
                    console.log("✅ Propiedades mutadas y removidas con delete exitosamente.");
                `
            },
            {
                id: 9,
                title: "9. Comportamientos y Contexto (this)",
                theory: `
                    <p>Cuando declaramos un método dentro de un objeto literal, la palabra clave <code>this</code> hace referencia al propio objeto que está invocando el método.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Recibís un string <code>apodo</code>. Retorná un objeto con las propiedades <code>apodo</code> y una función <code>presentarse()</code> que retorne: <code>"Hola, mi nombre de usuario es [apodo]"</code> utilizando <code>this.apodo</code>.</p>
                    </div>
                `,
                starterCode: `function crearMetodoContexto(apodo) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof crearMetodoContexto !== 'function') throw new Error("La función 'crearMetodoContexto' no está declarada.");
                    const res = crearMetodoContexto("Axel");
                    if (!res || res.presentarse() !== "Hola, mi nombre de usuario es Axel") throw new Error("Contexto this o string incorrecto.");
                    console.log("✅ Contexto de ejecución 'this' y métodos integrados fantásticos.");
                `
            },
            {
                id: 10,
                title: "10. Laboratorio de Datos Complejos",
                theory: `
                    <p>Modelar y filtrar datos complejos combinando arrays y objetos literales es un requerimiento fundamental en el desarrollo web moderno.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Recibís un array de objetos <code>usuarios</code>, cada uno con <code>nombre</code> y <code>activo</code> (booleano). Recorré la lista, filtrá los usuarios activos, extraé sus nombres, y retorná el array de strings con los nombres activos.</p>
                    </div>
                `,
                starterCode: `function filtrarUsuariosActivos(usuarios) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof filtrarUsuariosActivos !== 'function') throw new Error("La función 'filtrarUsuariosActivos' no está declarada.");
                    const list = [{nombre: "Ana", activo: true}, {nombre: "Lucas", activo: false}, {nombre: "Marta", activo: true}];
                    const res = filtrarUsuariosActivos(list);
                    if (JSON.stringify(res) !== '["Ana","Marta"]') throw new Error("Filtrado de datos complejos erróneo: " + JSON.stringify(res));
                    console.log("✅ Procesamiento y filtrado de datos complejos impecable. ¡Módulo IV superado!");
                `
            }
        ]
    },
    js5: {
        title: "Módulo V: Almacenamiento Persistente (JSON & Storages)",
        exercises: [
            {
                id: 1,
                title: "1. Inspeccionar Window",
                theory: `
                    <p>El objeto global <code>window</code> representa la ventana del navegador. Propiedades como <code>window.innerWidth</code> y <code>window.innerHeight</code> exponen dinámicamente las dimensiones en píxeles del viewport.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Retorná un objeto literal con las claves <code>ancho</code> y <code>alto</code> mapeando los atributos dinámicos del tamaño del navegador.</p>
                    </div>
                `,
                starterCode: `function obtenerDimensionesPantalla() {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof obtenerDimensionesPantalla !== 'function') throw new Error("La función 'obtenerDimensionesPantalla' no está declarada.");
                    const res = obtenerDimensionesPantalla();
                    if (!res || typeof res.ancho !== "number" || typeof res.alto !== "number") throw new Error("Dimensiones leídas de forma incorrecta.");
                    console.log("✅ Dimensiones del viewport leídas exitosamente de window.");
                `
            },
            {
                id: 2,
                title: "2. Temporizador Diferido (setTimeout)",
                theory: `
                    <p>El temporizador global <code>window.setTimeout(callback, delay)</code> programa la ejecución de una función asíncrona tras transcurrir una cantidad exacta de milisegundos.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Programá la ejecución de <code>callback</code> para que ocurra tras el tiempo indicado en <code>ms</code>. Usá explícitamente la API asíncrona de window.</p>
                    </div>
                `,
                starterCode: `function programarAlerta(callback, ms) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof programarAlerta !== 'function') throw new Error("La función 'programarAlerta' no está declarada.");
                    let llamado = false;
                    programarAlerta(() => { llamado = true; }, 30);
                    setTimeout(() => {
                        if (!llamado) throw new Error("El temporizador diferido asíncrono no se activó en el tiempo estipulado.");
                        console.log("✅ Temporizador diferido asíncrono asertado.");
                    }, 50);
                `
            },
            {
                id: 3,
                title: "3. Escribir en LocalStorage",
                theory: `
                    <p>La API de persistencia local <code>localStorage.setItem(clave, valor)</code> almacena de manera no volátil (persiste tras reiniciar el navegador) strings en el navegador.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Almacená de forma persistente el <code>valor</code> bajo el identificador <code>clave</code> en el localStorage. No retornes nada.</p>
                    </div>
                `,
                starterCode: `function guardarTexto(clave, valor) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof guardarTexto !== 'function') throw new Error("La función 'guardarTexto' no está declarada.");
                    localStorage.clear();
                    guardarTexto("clavePrueba", "UTN-A");
                    if (localStorage.getItem("clavePrueba") !== "UTN-A") throw new Error("El texto no fue almacenado correctamente.");
                    console.log("✅ Texto persistido quirúrgicamente en LocalStorage.");
                `
            },
            {
                id: 4,
                title: "4. Leer desde LocalStorage",
                theory: `
                    <p>El método <code>localStorage.getItem(clave)</code> lee y retorna el valor de tipo string guardado bajo dicha clave. Retorna <code>null</code> si no existe.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Recibís una <code>clave</code>. Leé y retorná el string correspondiente desde el almacén persistente.</p>
                    </div>
                `,
                starterCode: `function obtenerTexto(clave) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof obtenerTexto !== 'function') throw new Error("La función 'obtenerTexto' no está declarada.");
                    localStorage.setItem("claveL", "Estudio");
                    if (obtenerTexto("claveL") !== "Estudio") throw new Error("Lectura persistente errónea.");
                    console.log("✅ Datos leídos desde LocalStorage correctamente.");
                `
            },
            {
                id: 5,
                title: "5. Remoción de Claves Persistentes",
                theory: `
                    <p>Podemos borrar selectivamente pares clave-valor de nuestro almacén local sin alterar los demás datos usando <code>localStorage.removeItem(clave)</code>.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Eliminá quirúrgicamente la <code>clave</code> y su valor asociado del almacén persistente.</p>
                    </div>
                `,
                starterCode: `function eliminarDato(clave) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof eliminarDato !== 'function') throw new Error("La función 'eliminarDato' no está declarada.");
                    localStorage.setItem("claveB", "Chau");
                    eliminarDato("claveB");
                    if (localStorage.getItem("claveB") !== null) throw new Error("La clave persiste en el storage.");
                    console.log("✅ Clave eliminada de forma exitosa de LocalStorage.");
                `
            },
            {
                id: 6,
                title: "6. Serialización JSON",
                theory: `
                    <p>Dado que los storages del navegador solo admiten strings, para almacenar objetos y arrays complejos debemos convertirlos a texto JSON usando <code>JSON.stringify(objeto)</code>.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Convertí el <code>objeto</code> literal a un string JSON serializado y retornalo.</p>
                    </div>
                `,
                starterCode: `function serializarObjeto(objeto) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof serializarObjeto !== 'function') throw new Error("La función 'serializarObjeto' no está declarada.");
                    const res = serializarObjeto({id: 5});
                    if (typeof res !== "string" || !res.includes('"id":5')) throw new Error("Conversión JSON incorrecta.");
                    console.log("✅ Serialización a string JSON perfecta.");
                `
            },
            {
                id: 7,
                title: "7. Deserialización JSON",
                theory: `
                    <p>El método inverso <code>JSON.parse(cadenaJSON)</code> decodifica un string formateado en JSON restituyendo el tipo de dato original complejo de JavaScript.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Decodificá el string <code>stringJSON</code> y retorná su tipo de dato original reconstruido.</p>
                    </div>
                `,
                starterCode: `function deserializarObjeto(stringJSON) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof deserializarObjeto !== 'function') throw new Error("La función 'deserializarObjeto' no está declarada.");
                    const res = deserializarObjeto('{"ok":true}');
                    if (!res || res.ok !== true) throw new Error("Deserialización errónea.");
                    console.log("✅ Deserialización y reconversión JSON exitosa.");
                `
            },
            {
                id: 8,
                title: "8. Persistencia de Datos Complejos",
                theory: `
                    <p>Para persistir colecciones complejas (arrays de objetos), debemos serializarlas de forma explícita antes de escribirlas en el almacén persistente.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Serializá el array <code>carrito</code> y guardalo persistido bajo la clave exacta: <code>"miCarrito"</code>.</p>
                    </div>
                `,
                starterCode: `function guardarCarrito(carrito) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof guardarCarrito !== 'function') throw new Error("La función 'guardarCarrito' no está declarada.");
                    localStorage.removeItem("miCarrito");
                    guardarCarrito([{id: 1, prod: "Mouse"}]);
                    const guardado = localStorage.getItem("miCarrito");
                    if (!guardado || !guardado.includes("Mouse")) throw new Error("Colección de datos complejos persistida erróneamente.");
                    console.log("✅ Datos estructurados complejos persistidos con éxito.");
                `
            },
            {
                id: 9,
                title: "9. Carga Segura con Fallback",
                theory: `
                    <p>Al leer del storage, siempre debemos controlar nulos mediante un valor de contingencia o fallback (ej: <code>[]</code>) para evitar que la aplicación arroje errores de tipo.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Leé <code>"miCarrito"</code> de LocalStorage. Deserializalo y retornalo. Si NO existe (retorna null), debés retornar un array vacío <code>[]</code> como fallback seguro.</p>
                    </div>
                `,
                starterCode: `function cargarCarrito() {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof cargarCarrito !== 'function') throw new Error("La función 'cargarCarrito' no está declarada.");
                    localStorage.removeItem("miCarrito");
                    const vacio = cargarCarrito();
                    if (!Array.isArray(vacio) || vacio.length !== 0) throw new Error("Falla al aplicar fallback de carrito vacío.");
                    localStorage.setItem("miCarrito", JSON.stringify([{prod: "Teclado"}]));
                    const cargado = cargarCarrito();
                    if (cargado[0].prod !== "Teclado") throw new Error("Error al cargar carrito existente.");
                    console.log("✅ Carga persistente segura con fallback asertada.");
                `
            },
            {
                id: 10,
                title: "10. Limpieza Completa de Sesión",
                theory: `
                    <p>Para cerrar una sesión del usuario de forma limpia y segura, vaciamos todos los datos del cliente invocando el vaciado de los almacenes locales y temporales.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Vaciá por completo todos los registros de <code>localStorage</code> y <code>sessionStorage</code> simultáneamente.</p>
                    </div>
                `,
                starterCode: `function limpiarPersistencia() {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof limpiarPersistencia !== 'function') throw new Error("La función 'limpiarPersistencia' no está declarada.");
                    localStorage.setItem("testL", "1");
                    sessionStorage.setItem("testS", "2");
                    limpiarPersistencia();
                    if (localStorage.length !== 0 || sessionStorage.length !== 0) throw new Error("Los almacenes no fueron vaciados a cero.");
                    console.log("✅ Limpieza absoluta de almacenes (LocalStorage/SessionStorage). ¡Módulo V completado!");
                `
            }
        ]
    },
    js6: {
        title: "Módulo VI: Manipulación DOM",
        exercises: [
            {
                id: 1,
                title: "1. Lectura por ID",
                theory: `
                    <p>El método de búsqueda unitaria ultra rápido <code>document.getElementById(id)</code> localiza y retorna el elemento HTML cuyo atributo ID coincida exactamente con la clave provista.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Seleccioná y retorná el nodo HTML que posea el identificador único <code>"titulo-principal"</code>.</p>
                    </div>
                `,
                starterCode: `function obtenerElementoPorId() {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof obtenerElementoPorId !== 'function') throw new Error("La función 'obtenerElementoPorId' no está declarada.");
                    // Setup Sandbox
                    let sand = document.getElementById("titulo-principal");
                    if (!sand) {
                        sand = document.createElement("h1");
                        sand.id = "titulo-principal";
                        document.body.appendChild(sand);
                    }
                    const res = obtenerElementoPorId();
                    if (!res || res.id !== "titulo-principal") throw new Error("No se localizó el nodo esperado.");
                    console.log("✅ Lectura de elemento por ID exitosa.");
                `
            },
            {
                id: 2,
                title: "2. Modificar Texto de Nodo",
                theory: `
                    <p>La propiedad <code>textContent</code> nos permite leer o modificar de manera limpia y 100% segura frente a ataques XSS el contenido de texto plano dentro de un nodo HTML.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Asignale de forma segura el string <code>texto</code> recibido a la propiedad de texto interno de <code>elemento</code>. No retornes nada.</p>
                    </div>
                `,
                starterCode: `function modificarTextoElemento(elemento, texto) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof modificarTextoElemento !== 'function') throw new Error("La función 'modificarTextoElemento' no está declarada.");
                    const mock = document.createElement("div");
                    modificarTextoElemento(mock, "Prueba");
                    if (mock.textContent !== "Prueba") throw new Error("No se actualizó el texto interno.");
                    console.log("✅ Modificación de textContent realizada correctamente.");
                `
            },
            {
                id: 3,
                title: "3. Seleccionar Múltiples Elementos (Clases)",
                theory: `
                    <p>Para seleccionar conjuntos de nodos basados en selectores CSS complejos (como clases, atributos, etiquetas), utilizamos <code>document.querySelectorAll(selector)</code>, el cual retorna una lista de nodos estática (NodeList).</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Seleccioná y retorná todos los elementos del documento que posean la clase CSS exactas: <code>"parrafo-estudio"</code>.</p>
                    </div>
                `,
                starterCode: `function obtenerParrafosClase() {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof obtenerParrafosClase !== 'function') throw new Error("La función 'obtenerParrafosClase' no está declarada.");
                    // Setup Sandbox
                    let nodes = document.querySelectorAll(".parrafo-estudio");
                    if (nodes.length < 2) {
                        const p1 = document.createElement("p"); p1.className = "parrafo-estudio";
                        const p2 = document.createElement("p"); p2.className = "parrafo-estudio";
                        document.body.appendChild(p1);
                        document.body.appendChild(p2);
                    }
                    const res = obtenerParrafosClase();
                    if (!res || res.length < 2 || !res[0].classList.contains("parrafo-estudio")) throw new Error("No se seleccionaron los párrafos de clase.");
                    console.log("✅ Selección de nodos múltiple por querySelectorAll dominada.");
                `
            },
            {
                id: 4,
                title: "4. Mutar Estilos en Línea",
                theory: `
                    <p>La propiedad <code>style</code> expone los estilos en línea de un elemento HTML, permitiendo redefinir atributos individuales (en camelCase) en tiempo de ejecución.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Seleccioná el elemento con ID <code>"boton-estilo"</code> y modificalo en línea asignándole a su color de fondo (<code>backgroundColor</code>) el valor exacto: <code>"rgb(0, 230, 118)"</code>.</p>
                    </div>
                `,
                starterCode: `function cambiarColorBoton() {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof cambiarColorBoton !== 'function') throw new Error("La función 'cambiarColorBoton' no está declarada.");
                    // Setup
                    let btn = document.getElementById("boton-estilo");
                    if (!btn) {
                        btn = document.createElement("button");
                        btn.id = "boton-estilo";
                        document.body.appendChild(btn);
                    }
                    btn.style.backgroundColor = "";
                    cambiarColorBoton();
                    if (btn.style.backgroundColor !== "rgb(0, 230, 118)") throw new Error("El fondo obtenido fue: " + btn.style.backgroundColor);
                    console.log("✅ Mutación dinámica de estilos inline perfecta.");
                `
            },
            {
                id: 5,
                title: "5. Creación y Anexado de Nodos",
                theory: `
                    <p>Para inyectar elementos nuevos al DOM de manera dinámica:
                    <br>1. Los creamos flotantes en memoria usando <code>document.createElement(tagName)</code>.
                    <br>2. Definimos su contenido.
                    <br>3. Los insertamos en el árbol del DOM invocando <code>parent.appendChild(child)</code>.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Creá un nuevo párrafo <code>&lt;p&gt;</code>, asignale el <code>texto</code> y agregalo al final del contenedor con ID <code>"contenedor-dinamico"</code>.</p>
                    </div>
                `,
                starterCode: `function crearParrafoDinamico(texto) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof crearParrafoDinamico !== 'function') throw new Error("La función 'crearParrafoDinamico' no está declarada.");
                    // Setup
                    let cont = document.getElementById("contenedor-dinamico");
                    if (!cont) {
                        cont = document.createElement("div");
                        cont.id = "contenedor-dinamico";
                        document.body.appendChild(cont);
                    }
                    cont.innerHTML = "";
                    crearParrafoDinamico("Inyectado");
                    if (cont.children.length !== 1 || cont.firstChild.textContent !== "Inyectado") throw new Error("No se inyectó el párrafo.");
                    console.log("✅ Instanciación e inserción de nuevos elementos correcta.");
                `
            },
            {
                id: 6,
                title: "6. Asignación Dinámica de Clases",
                theory: `
                    <p>La API nativa <code>element.classList</code> expone utilidades avanzadas (como <code>add()</code>, <code>remove()</code>, y <code>toggle()</code>) para manipular las clases CSS asociadas a un elemento de forma limpia.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Seleccioná el elemento con ID <code>"titulo-principal"</code> y agregale la clase CSS llamada <code>"destacado"</code>.</p>
                    </div>
                `,
                starterCode: `function agregarClaseElemento() {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof agregarClaseElemento !== 'function') throw new Error("La función 'agregarClaseElemento' no está declarada.");
                    // Setup
                    let tit = document.getElementById("titulo-principal");
                    if (!tit) {
                        tit = document.createElement("h1");
                        tit.id = "titulo-principal";
                        document.body.appendChild(tit);
                    }
                    tit.classList.remove("destacado");
                    agregarClaseElemento();
                    if (!tit.classList.contains("destacado")) throw new Error("Clase 'destacado' no asignada.");
                    console.log("✅ Asignación de clase dinámica asertada con éxito.");
                `
            },
            {
                id: 7,
                title: "7. Lectura de Valores en Inputs",
                theory: `
                    <p>Los elementos interactivos de formulario contienen lo que escribe el usuario accesible en tiempo real a través de su atributo de valor <code>.value</code>.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Seleccioná el campo con ID <code>"entrada-usuario"</code> y retorná el string escrito en él.</p>
                    </div>
                `,
                starterCode: `function leerValorInput() {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof leerValorInput !== 'function') throw new Error("La función 'leerValorInput' no está declarada.");
                    // Setup
                    let input = document.getElementById("entrada-usuario");
                    if (!input) {
                        input = document.createElement("input");
                        input.id = "entrada-usuario";
                        document.body.appendChild(input);
                    }
                    input.value = "TextoPrueba";
                    if (leerValorInput() !== "TextoPrueba") throw new Error("Lectura de input incorrecta.");
                    console.log("✅ Valor leído desde el input interactivo con éxito.");
                `
            },
            {
                id: 8,
                title: "8. Suscripción de Eventos de Click",
                theory: `
                    <p>El método de escucha <code>element.addEventListener(event, callback)</code> suscribe un callback que se disparará de forma reactiva cada vez que ocurra la interacción física del usuario.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Seleccioná el botón con ID <code>"boton-estilo"</code> y agregale un escuchador para el evento <code>"click"</code> que ejecute el callback provisto.</p>
                    </div>
                `,
                starterCode: `function escucharClickBoton(callback) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof escucharClickBoton !== 'function') throw new Error("La función 'escucharClickBoton' no está declarada.");
                    // Setup
                    let btn = document.getElementById("boton-estilo");
                    if (!btn) {
                        btn = document.createElement("button");
                        btn.id = "boton-estilo";
                        document.body.appendChild(btn);
                    }
                    let run = false;
                    escucharClickBoton(() => { run = true; });
                    btn.click();
                    if (!run) throw new Error("El click listener registrado no se disparó.");
                    console.log("✅ Escuchador de eventos de click registrado exitosamente.");
                `
            },
            {
                id: 9,
                title: "9. Prevenir Comportamiento Nativo",
                theory: `
                    <p>El método <code>event.preventDefault()</code> detiene de forma absoluta el comportamiento nativo por defecto del navegador para un evento (por ejemplo, el refresco del sitio al enviar un formulario).</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Recibís un objeto de evento. Cancela su acción nativa predeterminada y retorná <code>true</code>.</p>
                    </div>
                `,
                starterCode: `function prevenirEnvioFormulario(evento) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof prevenirEnvioFormulario !== 'function') throw new Error("La función 'prevenirEnvioFormulario' no está declarada.");
                    let prevented = false;
                    prevenirEnvioFormulario({ preventDefault: () => { prevented = true; } });
                    if (!prevented) throw new Error("No se invocó preventDefault en el evento.");
                    console.log("✅ Comportamiento por defecto cancelado quirúrgicamente.");
                `
            },
            {
                id: 10,
                title: "10. Destrucción Dinámica de Hijos",
                theory: `
                    <p>Para eliminar de forma definitiva nodos hijos del DOM, localizamos al padre y removemos a su primer hijo invocando <code>parent.removeChild(child)</code>.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Seleccioná <code>"contenedor-dinamico"</code>. Si posee elementos hijos dentro, eliminá su primer hijo.</p>
                    </div>
                `,
                starterCode: `function eliminarHijoContenedor() {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof eliminarHijoContenedor !== 'function') throw new Error("La función 'eliminarHijoContenedor' no está declarada.");
                    // Setup
                    let cont = document.getElementById("contenedor-dinamico");
                    if (!cont) {
                        cont = document.createElement("div");
                        cont.id = "contenedor-dinamico";
                        document.body.appendChild(cont);
                    }
                    cont.innerHTML = "";
                    const p1 = document.createElement("p"); p1.textContent = "1";
                    const p2 = document.createElement("p"); p2.textContent = "2";
                    cont.appendChild(p1);
                    cont.appendChild(p2);
                    eliminarHijoContenedor();
                    if (cont.children.length !== 1 || cont.firstChild.textContent !== "2") throw new Error("Hijo remanente incorrecto o no borrado.");
                    console.log("✅ Nodo del DOM destruido dinámicamente con éxito. ¡Módulo VI completado!");
                `
            }
        ]
    },
    js7: {
        title: "Módulo VII: ES6+ Avanzado",
        exercises: [
            {
                id: 1,
                title: "1. Callbacks Directos",
                theory: `
                    <p>Un callback es simplemente una referencia de función delegada que se invoca de forma diferida o estructurada pasando parámetros específicos.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Ejecutá el callback <code>cb</code> pasándole <code>valor</code> por argumento, y retorná el resultado de esa ejecución.</p>
                    </div>
                `,
                starterCode: `function ejecutarCallbackBasico(valor, cb) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof ejecutarCallbackBasico !== 'function') throw new Error("La función 'ejecutarCallbackBasico' no está declarada.");
                    const res = ejecutarCallbackBasico("hola", x => x.toUpperCase());
                    if (res !== "HOLA") throw new Error("Callback invocado erróneamente: " + res);
                    console.log("✅ Invocación de callbacks asíncronos asertada.");
                `
            },
            {
                id: 2,
                title: "2. Filtro Declarativo (Filter)",
                theory: `
                    <p>El método HOF inmutable <code>filter(callback)</code> evalúa cada elemento con un booleano, y retorna un array nuevo con los elementos que resulten aprobados.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Recibís un array <code>numeros</code>. Filtrá y retorná un nuevo array con los números pares utilizando <code>.filter()</code>. No alteres la lista original.</p>
                    </div>
                `,
                starterCode: `function filtrarNumerosPares(numeros) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof filtrarNumerosPares !== 'function') throw new Error("La función 'filtrarNumerosPares' no está declarada.");
                    const orig = [1, 2, 3, 4, 5];
                    const res = filtrarNumerosPares(orig);
                    if (JSON.stringify(res) !== "[2,4]") throw new Error("Filtro erróneo: " + JSON.stringify(res));
                    if (orig.length !== 5) throw new Error("¡Error! Modificaste el array original.");
                    console.log("✅ Filtrado declarativo con .filter() impecable.");
                `
            },
            {
                id: 3,
                title: "3. Mapear Elementos (Map)",
                theory: `
                    <p>El método HOF <code>map(callback)</code> transforma cada elemento de un array uno a uno de forma inmutable, retornando una lista nueva del mismo tamaño original.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Recibís <code>nombres</code> (array). Retorná un array nuevo con todos los nombres en mayúsculas usando <code>.map()</code>.</p>
                    </div>
                `,
                starterCode: `function mapearNombresMayusculas(nombres) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof mapearNombresMayusculas !== 'function') throw new Error("La función 'mapearNombresMayusculas' no está declarada.");
                    const res = mapearNombresMayusculas(["axel", "lucas"]);
                    if (JSON.stringify(res) !== '["AXEL","LUCAS"]') throw new Error("Mapeo incorrecto: " + JSON.stringify(res));
                    console.log("✅ Transformación declarativa con .map() impecable.");
                `
            },
            {
                id: 4,
                title: "4. Reducción Acumulativa (Reduce)",
                theory: `
                    <p>El método HOF acumulador <code>reduce(callback, initialValue)</code> colapsa una lista de valores a un único resultado acumulado.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Recibís <code>productos</code> (array con <code>{nombre, precio}</code>). Calculá y retorná la suma de todos sus precios con <code>.reduce()</code>. Si está vacío, retorná 0.</p>
                    </div>
                `,
                starterCode: `function sumarPreciosProductos(productos) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof sumarPreciosProductos !== 'function') throw new Error("La función 'sumarPreciosProductos' no está declarada.");
                    const list = [{precio: 100}, {precio: 250}, {precio: 50}];
                    if (sumarPreciosProductos(list) !== 400 || sumarPreciosProductos([]) !== 0) throw new Error("Reducción errónea.");
                    console.log("✅ Reducción total de precios con .reduce() dominada.");
                `
            },
            {
                id: 5,
                title: "5. Búsqueda Unitaria (Find)",
                theory: `
                    <p>El método HOF de búsqueda <code>find(callback)</code> localiza y retorna de forma rápida el primer elemento del array que cumpla con el criterio lógico, deteniendo la búsqueda inmediatamente.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Recibís <code>productos</code> (con <code>{nombre, activo}</code>). Encontrá y retorná el primer producto que tenga <code>activo === true</code> con <code>.find()</code>.</p>
                    </div>
                `,
                starterCode: `function buscarProductoActivo(productos) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof buscarProductoActivo !== 'function') throw new Error("La función 'buscarProductoActivo' no está declarada.");
                    const list = [{nombre: "A", activo: false}, {nombre: "B", activo: true}, {nombre: "C", activo: true}];
                    const res = buscarProductoActivo(list);
                    if (!res || res.nombre !== "B") throw new Error("Elemento localizado incorrecto.");
                    console.log("✅ Búsqueda declarativa de elemento activo con .find() exitosa.");
                `
            },
            {
                id: 6,
                title: "6. Desestructuración de Objetos",
                theory: `
                    <p>La desestructuración de ES6 permite extraer de manera posicional campos de objetos directamente asignándolos a nuevas variables en una única expresión.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Recibís <code>usuario</code>. Desestructurá en una sola línea <code>nombre</code> y <code>rol</code>, renombrando <code>rol</code> a <code>puesto</code>. Retorná un objeto con el formato: <code>{ nombre, puesto }</code>.</p>
                    </div>
                `,
                starterCode: `function desestructurarObjeto(usuario) {
    // Escribí tu código acá en una sola línea:

}`,
                testFnCode: `
                    if (typeof desestructurarObjeto !== 'function') throw new Error("La función 'desestructurarObjeto' no está declarada.");
                    const res = desestructurarObjeto({nombre: "Axel", edad: 21, rol: "Developer"});
                    if (!res || res.nombre !== "Axel" || res.puesto !== "Developer" || res.rol) throw new Error("Desestructuración o renombrado erróneo.");
                    console.log("✅ Desestructuración de objetos con renombrado exitosa.");
                `
            },
            {
                id: 7,
                title: "7. Desestructuración de Arreglos",
                theory: `
                    <p>De igual forma, la desestructuración posicional de arrays nos permite extraer elementos según su orden de índice en el array.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Recibís un array <code>numeros</code>. Extraé posicionalmente el primero y segundo elemento, y retorná el objeto literal exacto: <code>{ primero, segundo }</code>.</p>
                    </div>
                `,
                starterCode: `function desestructurarArray(numeros) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof desestructurarArray !== 'function') throw new Error("La función 'desestructurarArray' no está declarada.");
                    const res = desestructurarArray([99, 88, 77]);
                    if (!res || res.primero !== 99 || res.segundo !== 88) throw new Error("Desestructuración de array posicional incorrecta.");
                    console.log("✅ Desestructuración posicional de arrays asertada.");
                `
            },
            {
                id: 8,
                title: "8. Clonado y Fusión Spread",
                theory: `
                    <p>El operador de propagación Spread <code>...</code> realiza copias superficiales inmutables de forma ultra concisa, combinando propiedades de forma declarativa.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Recibís <code>base</code> y <code>personalizaciones</code>. Fusionalos inmutablemente usando Spread, donde <code>personalizaciones</code> sobrescriba a <code>base</code>. Retorná el resultado.</p>
                    </div>
                `,
                starterCode: `function fusionarConfiguraciones(base, personalizaciones) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof fusionarConfiguraciones !== 'function') throw new Error("La función 'fusionarConfiguraciones' no está declarada.");
                    const base = { theme: "light", show: true };
                    const custom = { theme: "dark" };
                    const res = fusionarConfiguraciones(base, custom);
                    if (res.theme !== "dark" || res.show !== true || res === base) throw new Error("Fusión Spread errónea o mutación del objeto base.");
                    console.log("✅ Clonado inmutable y fusión por Spread Operator excelente.");
                `
            },
            {
                id: 9,
                title: "9. Parámetros Rest",
                theory: `
                    <p>El operador Rest <code>...</code> en la firma de una función empaqueta todos los argumentos recibidos sobrantes en una lista limpia en forma de array.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Utilizá parámetros Rest para acumular una cantidad indeterminada de números en la función. Sumalos a todos y retorná el total.</p>
                    </div>
                `,
                starterCode: `function sumarTodoRest(...valores) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof sumarTodoRest !== 'function') throw new Error("La función 'sumarTodoRest' no está declarada.");
                    if (sumarTodoRest(10, 20, 30, 40) !== 100 || sumarTodoRest() !== 0) throw new Error("Suma Rest incorrecta.");
                    console.log("✅ Parámetros Rest capturados y sumados con éxito.");
                `
            },
            {
                id: 10,
                title: "10. Laboratorio Avanzado Integrado",
                theory: `
                    <p>El paradigma funcional brilla de manera absoluta al encadenar métodos declarativos (pipelines de transformación) resolviendo flujos de datos complejos en una sola expresión fluida.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Recibís un array de ordenes: <code>{ id, cliente, total, entregado }</code>.
                        <br>1. Filtrá solo las ordenes entregadas (<code>entregado === true</code>).
                        <br>2. Obtené del resultado únicamente los montos <code>total</code> mapeados.
                        <br>3. Reducilos sumándolos.
                        <br>Retorná un objeto literal: <code>{ totalVentas: sumaDeTotales, cantidad: totalEntregadas }</code>.</p>
                    </div>
                `,
                starterCode: `function laboratorioAvanzado(ordenes) {
    // Escribí tu código acá:

}`,
                testFnCode: `
                    if (typeof laboratorioAvanzado !== 'function') throw new Error("La función 'laboratorioAvanzado' no está declarada.");
                    const list = [
                        {id: 1, total: 1000, entregado: true},
                        {id: 2, total: 2000, entregado: false},
                        {id: 3, total: 1500, entregado: true}
                    ];
                    const res = laboratorioAvanzado(list);
                    if (!res || res.totalVentas !== 2500 || res.cantidad !== 2) throw new Error("Resultados de laboratorio avanzados incorrectos: " + JSON.stringify(res));
                    console.log("✅ ¡Hazaña sublime! Pipeline funcional con filter, map y reduce impecable. Completaste el JS PlayLab.");
                `
            }
        ]
    }
};
