(function() {

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
                formulario.elements['nombre'].value = '';
                formulario.elements['apellido'].value = '';
                formulario.elements['email'].value = '';
                formulario.elements['password'].value = '';
                formulario.elements['password2'].value = '';

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
        // Itera sobre todos los campos y limpia las alertas previas
        ['Nombre', 'Apellido', 'Email', 'Password', 'Password2'].forEach((campo) => {
            const alertaElemento = document.getElementById('alerta' + campo + 'Registro');
            if (alertaElemento) {
                alertaElemento.textContent = '';
            }
        });
    
        if (alertas && alertas.length > 0) {
            alertas.forEach((alerta) => {
                // Asigna un identificador específico para cada campo
                let campoId = "";
                
                // Identifica el campo según el contenido de la alerta
                if (alerta.includes('Nombre')) {
                    campoId = 'Nombre';
                } else if (alerta.includes('Apellido')) {
                    campoId = 'Apellido';
                } else if (alerta.includes('Email')) {
                    campoId = 'Email';
                } else if (alerta.includes('mayor')) {
                    campoId = 'Password';
                } else if (alerta.includes('coinciden')) {
                    campoId = 'Password2';
                } else if (alerta.includes('registrado')) {
                    campoId = 'Email2';
                }

                // Construye el ID completo del elemento donde se mostrará la alerta
                const alertaElemento = document.getElementById('alerta' + campoId + 'Registro');

                if (alertaElemento) {
                    alertaElemento.textContent = alerta;
                }
            });
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
