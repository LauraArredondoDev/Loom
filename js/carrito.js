//Paso 1: obtener la barra lateral y guardarla en una constante
//Paso 2: hacer un if que compruebe si la barra lateral tiene la clase .nav-lat-oculta

function mostrarCarrito() {
    const carrito = document.getElementById('carrito');

    carrito.classList.replace('carrito-oculto', 'carrito-visible');
}

function ocultarCarrito() {
    const carrito = document.getElementById('carrito');

    carrito.classList.replace('carrito-visible', 'carrito-oculto');
}