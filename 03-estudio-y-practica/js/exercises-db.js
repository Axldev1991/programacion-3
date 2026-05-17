/**
 * 🪐 JS PLAYLAB: Base de Datos de Ejercicios
 * -------------------------------------------------------------
 * Contiene la teoría, el código inicial y el script de validación
 * de cada uno de los ejercicios correspondientes a los 7 módulos.
 * Para probar de forma incremental, inicializamos Clase III de forma completa.
 */

window.PLAYLAB_EXERCISES = {
    js1: {
        title: "Módulo I: Sintaxis y Variables",
        exercises: []
    },
    js2: {
        title: "Módulo II: Control de Flujo",
        exercises: []
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
                        <p><strong>Desafío:</strong> Completá la función <code>crearContador</code> para que inicialice una variable privada <code>contador</code> en 0 y devuelva una función interna que la incremente en 1 y la retorne en cada llamada.</p>
                    </div>
                `,
                starterCode: `function crearContador() {
    // Escribí la variable local privada y retorná la función interna:
    
}`,
                testFnCode: `
                    if (typeof crearContador !== 'function') throw new Error("La función 'crearContador' no está definida.");
                    const miContador = crearContador();
                    if (typeof miContador !== 'function') throw new Error("crearContador() debe retornar otra función.");
                    const v1 = miContador();
                    const v2 = miContador();
                    const v3 = miContador();
                    if (v1 !== 1 || v2 !== 2 || v3 !== 3) throw new Error("Se esperaba la secuencia de incrementos 1, 2, 3 pero se obtuvo: " + v1 + ", " + v2 + ", " + v3);
                    console.log("✅ ¡Maravilloso! El closure encapsula el estado local y mantiene la persistencia.");
                `
            },
            {
                id: 5,
                title: "5. El Laberinto de Hoisting",
                theory: `
                    <p>El <strong>hoisting</strong> se comporta de manera distinta según el tipo de declaración. Las declaraciones con <code>var</code> se elevan inicializadas con el valor <code>undefined</code>. Por el contrario, las declaraciones con <code>let</code> y <code>const</code> se elevan pero permanecen inaccesibles en la <em>Temporal Dead Zone</em> hasta su línea de ejecución física, lanzando un error específico.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Completá el objeto de retorno con los valores correctos basados en la teoría JavaScript sin romper el programa.</p>
                    </div>
                `,
                starterCode: `function demostrarHoisting() {
    // ¿Qué valor tiene una variable declarada con 'var' antes de su inicialización?
    const valorAntesDeDeclararVar = null; // Reemplazá null por el valor correspondiente

    // ¿Qué tipo de Error (en string) lanza JS si intentamos usar let/const antes de declararlos?
    // (Ejemplos: "ReferenceError", "TypeError", "SyntaxError")
    const errorLetAntesDeDeclarar = ""; // Reemplazá por el nombre del error como string

    return {
        antesDeDeclararVar: valorAntesDeDeclararVar,
        errorLetAntesDeDeclarar: errorLetAntesDeDeclarar
    };
}`,
                testFnCode: `
                    const r = demostrarHoisting();
                    if (!r || typeof r !== 'object') throw new Error("demostrarHoisting() debe retornar un objeto.");
                    if (r.antesDeDeclararVar !== undefined) throw new Error("Falla teórica: una variable declarada con 'var' tiene valor 'undefined' antes de su línea de definición.");
                    if (typeof r.errorLetAntesDeDeclarar !== 'string' || !r.errorLetAntesDeDeclarar.toLowerCase().includes('reference')) throw new Error("Falla teórica: usar variables con let/const antes de su línea de declaración lanza un 'ReferenceError'.");
                    console.log("✅ ¡Excelente! Demostrás una sólida comprensión teórica del hoisting y la TDZ.");
                `
            },
            {
                id: 6,
                title: "6. Promedio con Parámetros Rest",
                theory: `
                    <p>Los <strong>parámetros REST</strong> se definen anteponiendo tres puntos (<code>...</code>) al último parámetro de una función. Permiten capturar un número indefinido de argumentos en forma de Array, lo que nos permite usar métodos de Array como <code>reduce()</code> o <code>length</code> directamente.</p>
                    <div class="code-example">
                        <pre><code>function sumarTodos(...numeros) {
    // 'numeros' es un Array real conteniendo todos los argumentos
    return numeros.reduce((acc, el) => acc + el, 0);
}</code></pre>
                    </div>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Completá la función <code>calcularPromedio</code> para recibir múltiples notas con parámetros Rest, calcular su promedio y retornarlo. Si no recibe ninguna nota, debe retornar 0.</p>
                    </div>
                `,
                starterCode: `// Modificá la firma de la función para declarar los parámetros rest y calculá el promedio:
function calcularPromedio() {
    // Tu código aquí
    
}`,
                testFnCode: `
                    if (typeof calcularPromedio !== 'function') throw new Error("La función 'calcularPromedio' no está definida.");
                    const prom1 = calcularPromedio(10, 8, 6);
                    const prom2 = calcularPromedio(5, 5);
                    const promVacio = calcularPromedio();
                    if (prom1 !== 8) throw new Error("El promedio de 10, 8 y 6 debe ser 8. Se obtuvo: " + prom1);
                    if (prom2 !== 5) throw new Error("El promedio de 5 y 5 debe ser 5. Se obtuvo: " + prom2);
                    if (promVacio !== 0) throw new Error("Manejo incorrecto de lista vacía. Se esperaba 0, se obtuvo: " + promVacio);
                    console.log("✅ ¡Perfecto! Parámetros rest controlados y promedios bien calculados.");
                `
            },
            {
                id: 7,
                title: "7. Procesador de Compra (Callbacks)",
                theory: `
                    <p>Un <strong>callback</strong> es una función que se pasa a otra función como argumento, para ser ejecutada ("llamada de vuelta") en un momento específico. Permite delegar comportamientos dinámicamente.</p>
                    <div class="code-example">
                        <pre><code>function operacion(a, b, callback) {
    return callback(a, b);
}</code></pre>
                    </div>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Escribí la función <code>procesarCompra</code>. Si el <code>precio</code> es mayor o igual a 1000, llamá a <code>aplicarDescuento(precio)</code> y retorná su resultado. De lo contrario, retorná el precio original sin llamar al callback.</p>
                    </div>
                `,
                starterCode: `function procesarCompra(precio, aplicarDescuento) {
    // Tu código aquí
    
}`,
                testFnCode: `
                    if (typeof procesarCompra !== 'function') throw new Error("La función 'procesarCompra' no está definida.");
                    let callbackLlamado = false;
                    const callbackDummy = (p) => {
                        callbackLlamado = true;
                        return p * 0.9;
                    };
                    const compraChica = procesarCompra(800, callbackDummy);
                    const llamadoChica = callbackLlamado;
                    callbackLlamado = false;
                    const compraGrande = procesarCompra(1500, callbackDummy);
                    const llamadoGrande = callbackLlamado;
                    if (compraChica !== 800 || llamadoChica) throw new Error("Error: Para compras menores a 1000 no se debe aplicar descuento ni invocar callback.");
                    if (compraGrande !== 1350 || !llamadoGrande) throw new Error("Error: Para compras de 1000 o más se debió llamar al callback y aplicar el descuento.");
                    console.log("✅ ¡Excelente! Callback controlado y comportamiento condicional validado.");
                `
            },
            {
                id: 8,
                title: "8. Creador de Perfiles Privados (Factory + Closures)",
                theory: `
                    <p>Las <strong>Factory Functions</strong> son funciones que retornan un objeto. Combinadas con closures, nos permiten ocultar completamente variables internas dentro del scope léxico de la función. El objeto devuelto solo accede a ellas mediante sus métodos (getters/setters), protegiendo la integridad de los datos.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Completá la función <code>crearUsuario(nombreInicial, rolInicial)</code>. Debe retornar un objeto con exactamente tres métodos: <code>getNombre()</code>, <code>getRol()</code> y <code>setRol(nuevoRol)</code>. Las variables no deben estar expuestas directamente en el objeto.</p>
                    </div>
                `,
                starterCode: `function crearUsuario(nombreInicial, rolInicial) {
    // Inicializá variables de scope local y retorná el objeto con sus closures:
    
}`,
                testFnCode: `
                    if (typeof crearUsuario !== 'function') throw new Error("La función 'crearUsuario' no está definida.");
                    const user = crearUsuario("Axel", "Estudiante");
                    if (!user || typeof user.getNombre !== 'function' || typeof user.getRol !== 'function' || typeof user.setRol !== 'function') {
                        throw new Error("El objeto retornado debe tener exactamente los métodos getNombre(), getRol() y setRol(nuevoRol).");
                    }
                    if (user.getNombre() !== "Axel" || user.getRol() !== "Estudiante") throw new Error("El getter no retornó los valores esperados.");
                    user.setRol("Desarrollador");
                    if (user.getRol() !== "Desarrollador") throw new Error("El setter setRol() no actualizó el rol adecuadamente.");
                    const keys = Object.keys(user);
                    if (keys.includes("nombreInicial") || keys.includes("rolInicial") || user.nombre || user.rol) {
                        throw new Error("Violación de encapsulamiento: las variables internas se expusieron como campos públicos del objeto.");
                    }
                    console.log("✅ ¡Maravilloso! Encapsulamiento perfecto. Ningún dato interno quedó expuesto.");
                `
            },
            {
                id: 9,
                title: "9. Saludo Asincrónico (setTimeout & Scopes)",
                theory: `
                    <p>El asincronismo en JavaScript permite programar operaciones que se completarán en el futuro sin bloquear la ejecución de la app. La función global <code>setTimeout(callback, delay)</code> recibe una función callback y un tiempo en milisegundos para esperar antes de invocarla.</p>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Completá <code>saludoRetrasado(nombre, callback)</code>. Debe programar un <code>setTimeout</code> de 100ms. Cuando se cumpla, ejecutá el <code>callback</code> pasándole como argumento: <code>"¡Hola, [nombre] tras la espera!"</code></p>
                    </div>
                `,
                starterCode: `function saludoRetrasado(nombre, callback) {
    // Programá el setTimeout de 100ms:
    
}`,
                testFnCode: `
                    if (typeof saludoRetrasado !== 'function') throw new Error("La función 'saludoRetrasado' no está definida.");
                    const inicio = Date.now();
                    saludoRetrasado("Matias", (msg) => {
                        const delta = Date.now() - inicio;
                        if (msg !== "¡Hola, Matias tras la espera!") throw new Error("Mensaje incorrecto: " + msg);
                        if (delta < 80) throw new Error("El temporizador se completó demasiado rápido. Se esperaba un timeout de 100ms.");
                        console.log("✅ ¡Excelente asincronismo! Callback asincrónico ejecutado correctamente tras " + delta + "ms.");
                    });
                `
            },
            {
                id: 10,
                title: "10. Generador Incremental de IDs (Generators & Yield)",
                theory: `
                    <p>Las <strong>funciones generadoras</strong> (declaradas con un asterisco: <code>function*</code>) retornan un objeto iterador. Usando la palabra clave <code>yield</code>, la ejecución de la función puede pausarse y ceder el control al invocador, guardando su estado interno hasta la próxima llamada a <code>.next()</code>.</p>
                    <div class="code-example">
                        <pre><code>function* contadorInfinito() {
    let i = 0;
    while(true) {
        i++;
        yield i; // Pausa aquí y devuelve 'i'
    }
}</code></pre>
                    </div>
                    <div class="tip-box">
                        <i class="fa-solid fa-lightbulb"></i>
                        <p><strong>Desafío:</strong> Escribí una función generadora llamada <code>generadorIds</code> que reciba un <code>prefijo</code> y devuelva secuencialmente IDs infinitos formateados como: <code>"[prefijo]-1"</code>, <code>"[prefijo]-2"</code>, etc.</p>
                    </div>
                `,
                starterCode: `// Escribí la firma y la lógica de la función generadora completa:
function* generadorIds(prefijo) {
    // Tu código aquí
    
}`,
                testFnCode: `
                    const esGenerador = generadorIds && generadorIds.constructor && generadorIds.constructor.name === 'GeneratorFunction';
                    if (!esGenerador) throw new Error("La función 'generadorIds' no fue declarada como una función generadora (function*).");
                    const iterador = generadorIds("USER");
                    const id1 = iterador.next().value;
                    const id2 = iterador.next().value;
                    const id3 = iterador.next().value;
                    if (id1 !== "USER-1" || id2 !== "USER-2" || id3 !== "USER-3") {
                        throw new Error("Secuencia incorrecta. Se esperaba ['USER-1', 'USER-2', 'USER-3'], pero se obtuvo: " + [id1, id2, id3].join(", "));
                    }
                    console.log("✅ ¡Espectacular! Generador incremental de IDs secuenciales infinitos completado con éxito.");
                `
            }
        ]
    },
    js4: {
        title: "Módulo IV: Métodos & Datos",
        exercises: []
    },
    js5: {
        title: "Módulo V: Persistencia & Globals",
        exercises: []
    },
    js6: {
        title: "Módulo VI: Manipulación DOM",
        exercises: []
    },
    js7: {
        title: "Módulo VII: JS Avanzado (HOFs, ES6)",
        exercises: []
    }
};
