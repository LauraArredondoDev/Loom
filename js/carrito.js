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

    iconoBasura.addEventListener('click', () => {
        divNuevo.remove();

        //Verifico si quedan items(prendas) en el carrito
        const item = cuerpoCarrito.querySelectorAll('.carrito-item');
        const btnComprar = cuerpoCarrito.querySelector('.btn-comprar');

        //Si no quedan prendas en el carrito y existe el botón de comprar lo elimino.
        if(item.length === 0 && btnComprar) {
            btnComprar.remove();
        }
    });

    const cuerpoCarrito = document.getElementById('cuerpo-carrito');
    cuerpoCarrito.appendChild(divNuevo);

    // Se comprueba si existe el botón de comprar y si no existe se crea.
    if(!cuerpoCarrito.querySelector('.btn-comprar')) {
        const btnComprar = document.createElement('button');
        btnComprar.classList.add('btn-comprar');
        btnComprar.innerHTML = 'Comprar';
        cuerpoCarrito.appendChild(btnComprar);
    }

    // Aquí se busca el botón ya existente y se mueve al final.
    const btnComprarExistente = cuerpoCarrito.querySelector('.btn-comprar');
    if(btnComprarExistente) {
        cuerpoCarrito.appendChild(btnComprarExistente);
    }

    
}


