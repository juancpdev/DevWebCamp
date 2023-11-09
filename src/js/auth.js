(function() {
    // Variables para almacenar los valores originales de los campos
    let nombreOriginal = '';
    let apellidoOriginal = '';
    let emailOriginal = '';
    let passOriginal = '';
    let pass2Original = '';



    async function manejarFormularioRegistro(formulario) {
        const datos = new FormData();
        datos.append("nombre", formulario.elements['nombre'].value);
        datos.append("apellido", formulario.elements['apellido'].value);
        datos.append("email", formulario.elements['email'].value);
        datos.append("password", formulario.elements['password'].value);
        datos.append("password2", formulario.elements['password2'].value);

        const respuesta = await fetch('/api/usuarios/registro', {
            method: 'POST',
            body: datos
        });
        
        try {
            const resultado = await respuesta.json();
            if (resultado.tipo === 'error') {
               // Guarda los valores originales de los campos
               nombreOriginal = formulario.elements['nombre'].value;
               apellidoOriginal = formulario.elements['apellido'].value;
               emailOriginal = formulario.elements['email'].value;

               // Limpia el campo de contraseña
               formulario.elements['password'].value = '';
               formulario.elements['password2'].value = '';

               // Mostrar alertas
               mostrarAlertas(resultado.alertas.error);

            } else if (resultado.tipo === 'exito') {
                // Restablece los valores originales de los campos
                formulario.elements['nombre'].value = nombreOriginal;
                formulario.elements['apellido'].value = apellidoOriginal;
                formulario.elements['email'].value = emailOriginal;
                formulario.elements['password'].value = passOriginal;
                formulario.elements['password2'].value = pass2Original;

                // Manejar éxito
                console.log(resultado.datos);

                // Cerrar Modal
                cerrarModal();
                const modales = document.querySelectorAll(".modal");
                modales.forEach(modal => {
                    modal.style.display = "none";
                })

                // Alerta de éxito
                usuarioCreado();
            }
        } catch (error) {
            // Manejar el caso en que no se reciba una respuesta JSON válida
            console.error("Error al analizar la respuesta JSON del servidor");
        }
    }

    function mostrarAlertas(alertas) {
        const alertasContainer = document.getElementById('alertas-container');
        alertasContainer.innerHTML = ''; // Limpia el contenido anterior

        if (alertas && alertas.length > 0) {
            setTimeout(() => {
                const alertasDiv = document.createElement('div');
                alertasDiv.classList.add('alert', 'alert-danger');

                const ul = document.createElement('ul');
                alertas.forEach(alerta => {
                    const li = document.createElement('li');
                    li.textContent = alerta;
                    ul.appendChild(li);
                });

                alertasDiv.appendChild(ul);
                alertasContainer.appendChild(alertasDiv);
            }, 200);
        }
    }

    

    async function manejarFormularioLogin(formulario) {
        const datos = new FormData();
        datos.append("email", formulario.elements['email'].value);
        datos.append("password", formulario.elements['password'].value);

        const respuesta = await fetch('/api/usuarios/login', {
            method: 'POST',
            body: datos
        });
        
        const resultado = await respuesta.json();

        // Maneja la respuesta del servidor
        // ...
    }

    async function manejarFormularioOlvidePassword(formulario) {
        const datos = new FormData();
        datos.append("email", formulario.elements['email'].value);

        const respuesta = await fetch('/api/usuarios/olvidePassword', {
            method: 'POST',
            body: datos
        });
        
        const resultado = await respuesta.json();

        // Maneja la respuesta del servidor
        // ...
    }

    const formularioRegistro = document.querySelector('#registro .formulario');
    const formularioLogin = document.querySelector('#login .formulario');
    const formularioOlvidePassword = document.querySelector('#olvide .formulario');

    formularioRegistro.addEventListener('submit', function(event) {
        event.preventDefault();
        manejarFormularioRegistro(formularioRegistro);
    });

    formularioLogin.addEventListener('submit', function(event) {
        event.preventDefault();
        manejarFormularioLogin(formularioLogin);
    });

    formularioOlvidePassword.addEventListener('submit', function(event) {
        event.preventDefault();
        manejarFormularioOlvidePassword(formularioOlvidePassword);
    });


    
    window.resetearFormulario = function () {
        const formularioActual = document.querySelector('.auth__modal .formulario');
        resetearFormulario(formularioActual);
    };


    function usuarioCreado() {
        Swal.fire({
            icon: 'success',
            title: 'Usuario Registrado',
            text: 'Verifica tu mail para confirmar la cuenta',
            confirmButtonText: 'OK',
            willClose: () => {
                // Esta función se ejecutará cuando se cierre el cuadro de diálogo
                document.body.style.overflow = "auto";
            }
        })
    }
})();
