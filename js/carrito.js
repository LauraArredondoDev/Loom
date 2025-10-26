function mostrarCarrito() {
    const carrito = document.getElementById('carrito');

    carrito.classList.replace('carrito-oculto', 'carrito-visible');
}

function ocultarCarrito() {
    const carrito = document.getElementById('carrito');

    carrito.classList.replace('carrito-visible', 'carrito-oculto');
}