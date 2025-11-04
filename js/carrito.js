let contadorItemPrenda = 0;

function mostrarCarrito() {
    const carrito = document.getElementById('carrito');

    carrito.classList.replace('carrito-oculto', 'carrito-visible');
}

function ocultarCarrito() {
    const carrito = document.getElementById('carrito');

    carrito.classList.replace('carrito-visible', 'carrito-oculto');
}

function actualizarContador() {
    const item = document.querySelectorAll('.carrito-item');
    const contador = document.getElementById('contador-carrito');
    
    if(contador ) {
        contador.innerText = item.length;
    }

    if(item.length > 0) {
        contador.style.visibility = 'visible';
        contador.style.opacity = '1'

    }else {
        contador.style.visibility = 'hidden';
        contador.style.opacity = '0'
    }
}

function añadirContenidoCarrito(nombre, precio, imgUrl) {

    const divNuevo = document.createElement('div');
    divNuevo.classList.add('carrito-item');
    const idNuevoDiv = 'item-prenda-' + contadorItemPrenda;
    divNuevo.setAttribute('id', idNuevoDiv);
    contadorItemPrenda++;

    añadirImagen(imgUrl, divNuevo);
    añadirSpanPrenda(nombre, divNuevo);
    añadirSpanPrecio(precio, divNuevo);
    añadirIconoBasura(idNuevoDiv, divNuevo);

    const cuerpoCarrito = document.getElementById('cuerpo-carrito');
    cuerpoCarrito.appendChild(divNuevo);

    actualizarContador(); //Actualiza el contador al añadir

    crearBotonComprarSiNoExiste(cuerpoCarrito);
    
    // Aquí se busca el botón ya existente y se mueve al final.
    const btnComprarExistente = cuerpoCarrito.querySelector('.btn-comprar');
    if(btnComprarExistente) {
        cuerpoCarrito.appendChild(btnComprarExistente);
    }

    actualizarPrecioTotal();
}

function eliminarPrenda(idDiv) {
    const itemPrenda = document.getElementById(idDiv);
    
    itemPrenda.remove();

    const cuerpoCarrito = document.getElementById('cuerpo-carrito');

    //Verifico si quedan items(prendas) en el carrito
    const item = cuerpoCarrito.querySelectorAll('.carrito-item');
    const btnComprar = cuerpoCarrito.querySelector('.btn-comprar');

    //Si no quedan prendas en el carrito y existe el botón de comprar lo elimino.
    if(item.length === 0 && btnComprar) {
        btnComprar.remove();
    }

    actualizarContador(); //Actualiza el contador al eliminar

    actualizarPrecioTotal();
}

function añadirImagen(imgUrl, divNuevo) {
    const img = document.createElement('img');
    img.src = imgUrl;
    divNuevo.appendChild(img);
}

function añadirSpanPrenda(nombre, divNuevo) {
    const spanPrenda = document.createElement('span');
    spanPrenda.classList.add('span-prenda');
    spanPrenda.innerText = nombre || '';
    divNuevo.appendChild(spanPrenda);
}

function añadirSpanPrecio(precio, divNuevo) {
    const spanPrecio = document.createElement('span');
    spanPrecio.classList.add('span-precio');
    spanPrecio.innerText = precio || '';
    divNuevo.appendChild(spanPrecio);
}

function añadirIconoBasura(idNuevoDiv ,divNuevo) {
    const iconoBasura = document.createElement('i');
    iconoBasura.classList.add('fa-solid', 'fa-trash');
    iconoBasura.setAttribute('onclick', "eliminarPrenda('" + idNuevoDiv + "')");
    divNuevo.appendChild(iconoBasura);
}

function crearBotonComprarSiNoExiste(cuerpoCarrito) {

    if(!cuerpoCarrito.querySelector('.btn-comprar')) {
        const btnComprar = document.createElement('button');
        btnComprar.classList.add('btn-comprar');
        btnComprar.innerHTML = 'Comprar';
        cuerpoCarrito.appendChild(btnComprar);
    }
}

function actualizarPrecioTotal() {
    const listaPrecios = document.querySelectorAll('.span-precio');
    let total = 0;

    listaPrecios.forEach(precioElemento => {
        const textoPrecio = precioElemento.innerText.replace('€', '').replace(',', '.').trim();
        const numeroPrecio = Number(textoPrecio); //Convierte el string del precio en número

        if(typeof(numeroPrecio) == 'number') {
            total += numeroPrecio;
        }
    });

    const btnComprar = document.querySelector('.btn-comprar');
    if(btnComprar) {
        if(total > 0) {
            btnComprar.innerText = `Comprar ${total.toFixed(2)}€`;
            //toFixed(2) redondea un número a 2 decimales y lo convierte en un string

        }else {
            btnComprar.innerText = 'Comprar';
        }
    }
}


