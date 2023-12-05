(function() {
    async function manejarFormularioPonentes(formulario, url, nombre) {

        const spinners = document.querySelectorAll(".spinner-contenedor");
        spinners.forEach(spinner => {
            spinner.style.display = 'flex'; // Muestra el spinner
        })

        const datos = new FormData(formulario);
        const respuesta = await fetch(url, {
            method: 'POST',
            body: datos
        });
        console.log(respuesta);
        
        try {
            const resultado = await respuesta.json();
            console.log(resultado);

            // Capturar mensajes de depuración
            if (resultado.debug) {
                console.log(resultado.debug);
            }
            
            if (resultado.tipo === 'error') {

                // Mostrar alertas
                mostrarAlertas(resultado.alertas.error, "Ponente");

                // Hacer scroll hacia la primera alerta solo si hay contenido
                const scroll = document.querySelector('.formulario__legend');
                
                if (scroll) {
                    scroll.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }

            } else if (resultado.tipo === 'exito') {
               // Restablece los valores originales de los campos
               formulario.reset();

                // Alerta de éxito
                if(nombre === "Crear") {
                    ponenteCreado();
                } else if (nombre === "Editar") {
                    ponenteActualizado();
                }

            }
        } catch (error) {
            // Manejar el caso en que no se reciba una respuesta JSON válida
            console.error("Error al analizar la respuesta JSON del servidor", error);
        } finally {
            const spinners = document.querySelectorAll(".spinner-contenedor");
            spinners.forEach(spinner => {
                spinner.style.display = 'none'; // Oculta el spinner cuando la acción se completa
            })
        }
    }

    const formularioPonentesCrear = document.querySelector('#ponentesCrear .formulario');
    const formularioPonentesEditar = document.querySelector('#ponentesEditar .formulario');

    if(formularioPonentesCrear) {
        formularioPonentesCrear.addEventListener('submit', function(event) {
            event.preventDefault();
            manejarFormularioPonentes(formularioPonentesCrear, '/admin/ponentes/crear', "Crear");
        });
    }
    if(formularioPonentesEditar) {
        formularioPonentesEditar.addEventListener('submit', function(event) {
            event.preventDefault();

            // Obtener la cadena de consulta de la URL actual
            const queryString = window.location.search;
            // Crear un objeto URLSearchParams a partir de la cadena de consulta
            const params = new URLSearchParams(queryString);
            
            // Obtener el valor del parámetro 'id'
            const idDelPonente = params.get('id');

            // Verificar si se obtuvo un valor válido
            if (idDelPonente) {
                const url = '/admin/ponentes/editar?id=' + idDelPonente;
                manejarFormularioPonentes(formularioPonentesEditar, url, "Editar");
            } else {
                console.error('ID del ponente no encontrado en la URL');
            }
        });
    }

    function ponenteCreado() {
        Swal.fire({
            icon: 'success',
            title: 'Ponente Creado',
            text: 'Se agregó un nuevo ponente',
            confirmButtonText: 'OK',
            willClose: () => {
                // Esta función se ejecutará cuando se cierre el cuadro de diálogo
                document.body.style.overflow = "auto";
            }
        }).then(() => {
            // Redirigir a /admin/ponente
            window.location.href = '/admin/ponentes';
        });
    }

    function ponenteActualizado() {
        Swal.fire({
            icon: 'success',
            title: 'Ponente Actualizado',
            text: 'Se Actualizo el ponente correctamente',
            confirmButtonText: 'OK',
            willClose: () => {
                // Esta función se ejecutará cuando se cierre el cuadro de diálogo
                document.body.style.overflow = "auto";
            }
        }).then(() => {
            // Redirigir a /admin/ponente
            window.location.href = '/admin/ponentes';
        });
    }
})();
