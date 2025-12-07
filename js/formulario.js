function comprobarCorreoCorrecto(idCampo) {
    const campo = document.getElementById(idCampo)
    const spanCaracteresIncorrectosCorreo = document.getElementById('error-caracteres-input-correo');
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(correoRegex.test(campo.value)) { //Si el texto tiene forma de correo
        campo.style.borderColor = '#dee2e6';
        spanCaracteresIncorrectosCorreo.style.display = 'none';
        return true;

    }else { //Si el texto no tiene forma de correo
        campo.style.borderColor = 'red';
        spanCaracteresIncorrectosCorreo.style.display = 'block';
        spanCaracteresIncorrectosCorreo.style.color = 'red';
        return false;
    }

}

function comprobarTelefonoCorrecto(idCampo) {
    const campo = document.getElementById(idCampo);
    const caracteresIncorrectosTelefono = document.getElementById('error-caracteres-input-telefono');
    const esTelefonoValido = /^\d{9}$/;

    if(esTelefonoValido.test(campo.value)) { //Si el teléfono tiene 9 números
        campo.style.borderColor = '#dee2e6';
        caracteresIncorrectosTelefono.style.display = 'none';
        return true;

    }else { //Si el teléfono no es válido 
        campo.style.borderColor = 'red';
        caracteresIncorrectosTelefono.style.display = 'block';
        caracteresIncorrectosTelefono.style.color = 'red';
        return false;
    }
}

function comprobarCaracteresCorrectos(idCampo) {
    if(idCampo === 'input-correo') {
        return comprobarCorreoCorrecto(idCampo);

    }else if (idCampo === 'input-telefono') {
        return comprobarTelefonoCorrecto(idCampo);
    }
}

function comprobarCampoVacio(idCampo) { 
    const campo = document.getElementById(idCampo);

    const spanVacioNombre = document.getElementById('error-vacio-input-nombre');
    const spanVacioApellidos = document.getElementById('error-vacio-input-apellidos');
    const spanVacioTelefono = document.getElementById('error-vacio-input-telefono');
    const spanVacioCorreo = document.getElementById('error-vacio-input-correo');
    const spanVacioMensaje = document.getElementById('error-vacio-input-mensaje');

    let campoVacio = campo.value.trim() === '';

    if(!campoVacio) { //Si el campo NO está vacío
        campo.style.borderColor = '#dee2e6';

        switch(idCampo) {
            case 'input-nombre':
                spanVacioNombre.style.display = 'none';
                break;
            case 'input-apellidos':
                spanVacioApellidos.style.display = 'none';
                break;
            case 'input-telefono':
                spanVacioTelefono.style.display = 'none';
                break;
            case 'input-correo':
                spanVacioCorreo.style.display = 'none';
                break;
            case 'input-mensaje':
                spanVacioMensaje.style.display = 'none';
                break;
            default:
                break;
        }

    }else { //Si el campo SI está vacío
        campo.style.borderColor = 'red';

        switch(idCampo) {
            case 'input-nombre':
                spanVacioNombre.style.display = 'block';
                spanVacioNombre.style.color = 'red';
                break;
            case 'input-apellidos':
                spanVacioApellidos.style.display = 'block';
                spanVacioApellidos.style.color = 'red';
                break;
            case 'input-telefono':
                spanVacioTelefono.style.display = 'block';
                spanVacioTelefono.style.color = 'red';
                break;
            case 'input-correo':
                spanVacioCorreo.style.display = 'block';
                spanVacioCorreo.style.color = 'red';
                break;
            case 'input-mensaje':
                spanVacioMensaje.style.display = 'block';
                spanVacioMensaje.style.color = 'red';
                break;
            default:
                break;
        }
    }

    return campoVacio;
}

function comprobarCampoCorrecto(idCampo) {
    const esVacio = comprobarCampoVacio(idCampo); // esVacio devolverá true o false
    const campo = document.getElementById(idCampo);
    let caracteresCorrectos = false;

    if(campo.value.trim() !== '') { // si el campo NO está vacío se llama a la función comprobarCaracteresCorrectos para validar el campo de teléfono y correo
        caracteresCorrectos = comprobarCaracteresCorrectos(idCampo);
    }

    const todoCorrecto = !esVacio && caracteresCorrectos;

    return todoCorrecto;
}

function enviarMail() {
    const listaInputs = document.querySelectorAll('form input, form textarea');
    let deboEnviarMail = true;

    for(const input of listaInputs) { //se recorre la lista y si algún campo no es válido deboEnviarMail se cambia a false, si es correcto se deja en true y comprobamos el siguiente campo.

        if(comprobarCampoCorrecto(input.id) == false) {

            deboEnviarMail = false;
        }
    }

    if(deboEnviarMail) {
        const nombre = document.getElementById('input-nombre');
        const apellidos = document.getElementById('input-apellidos');
        const telefono = document.getElementById('input-telefono');
        const correo = document.getElementById('input-correo');
        const textarea = document.getElementById('input-mensaje');
        const saltoLineaGmail = '%0D%0A';
        const mensajeCorreo = textarea.value + saltoLineaGmail + 'Un saludo' + saltoLineaGmail + nombre.value + ' ' + apellidos.value + ' ' + telefono.value + ' ' + correo.value;
        const correoTienda = 'lauraarredondodev@gmail.com';
        const urlGmail = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + correoTienda + '&su=Cita&body=' + mensajeCorreo;

        window.open(urlGmail, '_blank');
    }
}