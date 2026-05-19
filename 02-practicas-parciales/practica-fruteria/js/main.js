const FRUTAS_BASE = [
    { nombre: "Ananá", precio: 350, imagen: "img/anana.jpg" },
    { nombre: "Arándano", precio: 450, imagen: "img/arandano.jpg" },
    { nombre: "Banana", precio: 180, imagen: "img/banana.jpg" },
    { nombre: "Frambuesa", precio: 600, imagen: "img/frambuesa.png" },
    { nombre: "Frutilla", precio: 500, imagen: "img/frutilla.jpg" },
    { nombre: "Kiwi", precio: 400, imagen: "img/kiwi.jpg" },
    { nombre: "Mandarina", precio: 130, imagen: "img/mandarina.jpg" },
    { nombre: "Manzana", precio: 220, imagen: "img/manzana.jpg" },
    { nombre: "Naranja", precio: 170, imagen: "img/naranja.jpg" },
    { nombre: "Pera", precio: 200, imagen: "img/pera.jpg" },
    { nombre: "Pomelo Amarillo", precio: 240, imagen: "img/pomelo-amarillo.jpg" },
    { nombre: "Pomelo Rojo", precio: 260, imagen: "img/pomelo-rojo.jpg" },
    { nombre: "Sandía", precio: 380, imagen: "img/sandia.jpg" }
];

const frutas = FRUTAS_BASE.map((fruta,index) =>{
    return{
        id: index + 1,
        ...fruta
    };
}); 

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function imprimirDatosAlumno(){
    const alumno = {
        dni: "36.111.222",
        nombre: "Axel",
        apellido: "Castellano"
    };

    const nombreAlumno = document.querySelector(".nombreAlumno");

    nombreAlumno.textContent = `${alumno.nombre} ${alumno.apellido}`;

    console.log(`El alumno ${alumno.apellido} ${alumno.nombre}, con dni: ${alumno.dni}, está conectado`);

}

function imprimirProductos(lista){
    const contenedor = document.querySelector(".contenedor-productos");
    contenedor.innerHTML = "";

    lista.forEach(fruta => {
        contenedor.innerHTML += `
            <div class="card-producto">
                <img src="${fruta.imagen}" alt="${fruta.nombre}">
                <h3>${fruta.nombre}</h3>
                <p>$ ${fruta.precio}</p>
                <button data-id="${fruta.id}">Agregar al carrito</button>
            </div>
        `;
    });
}

function filtrarProductos(){
    const busqueda = document.querySelector(".barra-busqueda");
    

    busqueda.addEventListener("input", (event) =>{
        const texto = event.target.value;

        const encontrado = frutas.filter(fruta => 
            fruta.nombre.toLowerCase().includes(texto.toLowerCase())
        );

        imprimirProductos(encontrado);
    });

    
}

function configurarEventos(){
    const contenedor = document.querySelector(".contenedor-productos");
    const itemsCarrito = document.querySelector("#items-carrito");

    contenedor.addEventListener("click", (event) =>{
        if(event.target.tagName === "BUTTON"){
            const dataId = parseInt(event.target.dataset.id);
            const producto = frutas.find(fruta => fruta.id === dataId);
            agregarAlCarrito(producto);
        }
    });

    itemsCarrito.addEventListener("click", (event) =>{
        const dataId = parseInt(event.target.dataset.id);
        if(event.target.classList.contains("boton-eliminar")){
            eliminarProducto(dataId);
        }else if(event.target.classList.contains("boton-sumar")){
            sumarCantidad(dataId)
        }else if(event.target.classList.contains("boton-restar")){
            restarCantidad(dataId)
        }
    });

    document.querySelector("#btn-ordenar-az").addEventListener("click", () => ordenarProductos("az"));
    document.querySelector("#btn-ordenar-za").addEventListener("click", () => ordenarProductos("za"));
    document.querySelector("#btn-ordenar-precio-menor").addEventListener("click", () => ordenarProductos("precio-menor"));
    document.querySelector("#btn-ordenar-precio-mayor").addEventListener("click", () => ordenarProductos("precio-mayor"));
    document.querySelector("#btn-vaciar-carrito").addEventListener("click", vaciarCarrito);

}

function sumarCantidad(id){
    const item = carrito.find(fruta => fruta.id === id);
    if(item){
        item.cantidad++;
    }
    mostrarCarrito();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function restarCantidad(id){
    const item = carrito.find(fruta => fruta.id === id);
    if(item){
        item.cantidad--;
        if(item.cantidad === 0){
            eliminarProducto(id);
            return;
        }
    }
    mostrarCarrito();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarAlCarrito(producto){
    const itemExistente = carrito.find(item => item.id === producto.id);
    if(itemExistente){
        itemExistente.cantidad++;
    }else{
        carrito.push({...producto, cantidad: 1});
    }
    console.log(carrito);
    mostrarCarrito();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function mostrarCarrito(){
    actualizarTotales()
    const contenedor = document.querySelector("#items-carrito");
    const btnVaciar = document.querySelector("#btn-vaciar-carrito");

    if(carrito.length === 0){
        if(btnVaciar) btnVaciar.style.display = "none";
        contenedor.innerHTML = `
            <div class="carrito-vacio-contenedor" style="text-align: center; padding: 30px 10px;">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#bbb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto 15px; display: block;">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <p class="texto-carrito-vacio" style="color: #888; font-size: 1.1em; font-weight: 500; margin: 0;">no hay productos en el carrito</p>
            </div>
        `;
        return;
    }

    if(btnVaciar) btnVaciar.style.display = "block";

    let listaCarrito = "<ul>";
        carrito.forEach(fruta => {
        listaCarrito += `
            <li class="bloque-item">
                <p class="nombre-item">${fruta.nombre} - $${fruta.precio}</p>
                <div class="cantidad-controles">
                    <button class="boton-sumar" data-id="${fruta.id}">+</button>
                    <span class="cantidad-item">${fruta.cantidad}</span>
                    <button class="boton-restar" data-id="${fruta.id}">-</button>
                </div>
                <button class="boton-eliminar" data-id="${fruta.id}">Eliminar</button>
            </li>
        `;
    });

    listaCarrito += "</ul>";

    contenedor.innerHTML = listaCarrito;
}

function eliminarProducto(id){
    const index = carrito.findIndex(fruta => fruta.id === id);
    
    if(index !== -1){
        carrito.splice(index, 1);
    }
    
    console.log(carrito);
    mostrarCarrito();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function actualizarTotales(){
    const contador = document.querySelector("#contador-carrito");
    const precioTotal = document.querySelector("#precio-total");

    const cantidadTotal = carrito.reduce((acumulador,fruta) => {
        return acumulador + fruta.cantidad;
    }, 0);

    contador.textContent = cantidadTotal;
    
    const total = carrito.reduce((acumulador,fruta) => {
        return acumulador + (fruta.precio * fruta.cantidad)
    }, 0);
    precioTotal.textContent = `$ ${total.toFixed(2)}`;
}

function ordenarProductos(criterio){
    const copia = [...frutas];

    if (criterio === "az") {
        copia.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (criterio === "za") {
        copia.sort((a, b) => b.nombre.localeCompare(a.nombre));
    } else if (criterio === "precio-menor") {
        copia.sort((a, b) => a.precio - b.precio);
    } else if (criterio === "precio-mayor") {
        copia.sort((a, b) => b.precio - a.precio);
    }
    
    imprimirProductos(copia);
}

function vaciarCarrito(){
    carrito = [];
    mostrarCarrito();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


function init(){
    imprimirDatosAlumno();
    imprimirProductos(frutas);
    filtrarProductos();
    configurarEventos();
    mostrarCarrito();
    
}

document.addEventListener("DOMContentLoaded", init);