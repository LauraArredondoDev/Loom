function mostrarCarrito() {
    const carrito = document.getElementById('carrito');

    carrito.classList.replace('carrito-oculto', 'carrito-visible');
}

function ocultarCarrito() {
    const carrito = document.getElementById('carrito');

    carrito.classList.replace('carrito-visible', 'carrito-oculto');
}

function añadirContenidoCarrito(nombre, precio, imgUrl) {

    const divNuevo = document.createElement('div');
    divNuevo.classList.add('carrito-item');

    const img = document.createElement('img');
    img.src = imgUrl;
    divNuevo.appendChild(img);

    const spanPrenda = document.createElement('span');
    spanPrenda.classList.add('span-prenda');
    spanPrenda.innerText = nombre || '';
    divNuevo.appendChild(spanPrenda);

    const spanPrecio = document.createElement('span');
    spanPrecio.classList.add('span-precio');
    spanPrecio.innerText = precio || '';
    divNuevo.appendChild(spanPrecio);

    const iconoBasura = document.createElement('i');
    iconoBasura.classList.add('fa-solid', 'fa-trash');
    divNuevo.appendChild(iconoBasura);

    const cuerpoCarrito = document.getElementById('cuerpo-carrito');

    cuerpoCarrito.appendChild(divNuevo);

}


