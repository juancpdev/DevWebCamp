(function() {

    async function manejarFormulariosAuth(formulario, url, nombre) {

        const spinners = document.querySelectorAll(".spinner-contenedor");
        spinners.forEach(spinner => {
            spinner.style.display = 'flex'; // Muestra el spinner
        })

        const datos = new FormData(formulario);
        
        const respuesta = await fetch(url, {
            method: 'POST',
            body: datos
        });
        
        try {
            const resultado = await respuesta.json();
            
            if (resultado.tipo === 'error') {

                // Limpia el campo de contraseña si está presente
                if (formulario.elements['password']) {
                    formulario.elements['password'].value = '';
                }
                if (formulario.elements['password2']) {
                    formulario.elements['password2'].value = '';
                }

               mostrarAlertas(resultado.alertas.error, nombre);

            } else if (resultado.tipo === 'exito') {
                // Restablece los valores originales de los campos
                formulario.reset();
                // Cerrar Modal
                cerrarModal();
                const modales = document.querySelectorAll(".modal");
                modales.forEach(modal => {
                    modal.style.display = "none";
                })

                if(nombre === "Registro") {
                    // Alerta de éxito
                    usuarioCreado();
                } else if (nombre === "Login") {
                    if(resultado.datos.admin === "1") {
                        window.location.href = "/admin/dashboard";
                    } else {
                        window.location.href = "/finalizar-registro";
                    }
                } else if (nombre === "Olvide") { 
                    // Alerta de éxito
                    alertaRestablecer();
                }        
            }
        } catch (error) {
            // Manejar el caso en que no se reciba una respuesta JSON válida
            console.error("Error al analizar la respuesta JSON del servidor");
        } finally {
            const spinners = document.querySelectorAll(".spinner-contenedor");
            spinners.forEach(spinner => {
                spinner.style.display = 'none'; // Oculta el spinner cuando la acción se completa
            })
        }
    }

    function mostrarAlertas(alertas, tipo) {
        // Itera sobre todos los campos y limpia las alertas y estilos previos
        const elementos = [
            'Nombre', 'Apellido', 
            'Email', 'Email2', 'Password', 'Password2', 
            'Ciudad', 'Pais', 'Imagen', 'Tags'
        ];

        elementos.forEach(campo => {
            const alertaElemento = document.getElementById('alerta' + campo + tipo);
            const inputCampo = document.getElementById(campo.toLowerCase() + tipo);
            const iconoCampo = document.getElementById(campo.toLowerCase() + tipo + 'Icono');
    
            if (alertaElemento) {
                alertaElemento.textContent = '';
                alertaElemento.classList.remove("error");
            }
    
            if (inputCampo) {
                inputCampo.classList.remove("error-input");
            }
    
            if (iconoCampo) {
                iconoCampo.classList.remove("error-icono");
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
                } else if (alerta.includes('Incorrecto')) {
                    campoId = 'Password2';
                } else if (alerta.includes('confirmado')) {
                    campoId = 'Email2';
                } else if (alerta.includes('Ciudad')) {
                    campoId = 'Ciudad';
                } else if (alerta.includes('País')) {
                    campoId = 'Pais';
                } else if (alerta.includes('Imagen')) {
                    campoId = 'Imagen';
                } else if (alerta.includes('incluir')) {
                    campoId = 'Tags';
                }
    
                // Construye el ID completo del elemento donde se mostrará la alerta
                const alertaElemento = document.getElementById('alerta' + campoId + tipo);
                const inputCampo = document.getElementById(campoId.toLowerCase() + tipo);
                const iconoCampo = document.getElementById(campoId.toLowerCase() + tipo + 'Icono');
                
                if (alertaElemento) {
                    alertaElemento.textContent = alerta;
                    setTimeout(() => {
                        alertaElemento.classList.add("error");
                    }, 0);
                }
    
                if (inputCampo) {
                    inputCampo.classList.add("error-input");
                }
    
                if (iconoCampo) {
                    iconoCampo.classList.add("error-icono");
                }
            
            });
        }
    }

    const formularioRegistro = document.querySelector('#registro .formulario');
    const formularioLogin = document.querySelector('#login .formulario');
    const formularioOlvidePassword = document.querySelector('#olvide .formulario');

    if(formularioRegistro) {
        formularioRegistro.addEventListener('submit', function(event) {
            event.preventDefault();
            manejarFormulariosAuth(formularioRegistro, '/api/usuarios/registro', "Registro");
        });
    }

    if(formularioLogin) {
        formularioLogin.addEventListener('submit', function(event) {
            event.preventDefault();
            manejarFormulariosAuth(formularioLogin, '/api/usuarios/login', "Login");
        });
    }

    if(formularioOlvidePassword) {
        formularioOlvidePassword.addEventListener('submit', function(event) {
            event.preventDefault();
            manejarFormulariosAuth(formularioOlvidePassword, '/api/usuarios/olvidePassword', "Olvide");
        });
    }

    
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

    function alertaRestablecer() {
        Swal.fire({
            icon: 'success',
            title: 'Verifica tu email',
            text: 'Verifica tu mail para cambiar el password',
            confirmButtonText: 'OK',
            willClose: () => {
                // Esta función se ejecutará cuando se cierre el cuadro de diálogo
                document.body.style.overflow = "auto";
            }
        })
    }

    // Funciones GLOBALES
    window.mostrarAlertas = mostrarAlertas;
})();
