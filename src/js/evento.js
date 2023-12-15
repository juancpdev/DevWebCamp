(function() {
    async function manejarFormularioEventos(formulario, url, nombre) {

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
           

            // Capturar mensajes de depuración
            if (resultado.debug) {
                console.log(resultado.debug);
            }
            
            if (resultado.tipo === 'error') {
                console.log(resultado.alertas.error);
                // Mostrar alertas
                mostrarAlertas(resultado.alertas.error, "Evento");

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
                    eventoCreado();
                } else if (nombre === "Editar") {
                    eventoActualizado();
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

    const formularioEventosCrear = document.querySelector('#eventosCrear .formulario');


    if(formularioEventosCrear) {
        formularioEventosCrear.addEventListener('submit', function(event) {
            event.preventDefault();
            manejarFormularioEventos(formularioEventosCrear, '/admin/eventos/crear', "Crear");
        });
    }


    function eventoCreado() {
        Swal.fire({
            icon: 'success',
            title: 'Evento Creado',
            text: 'Se agregó un nuevo evento',
            confirmButtonText: 'OK',
            willClose: () => {
                // Esta función se ejecutará cuando se cierre el cuadro de diálogo
                document.body.style.overflow = "auto";
            }
        }).then(() => {
            window.location.href = '/admin/eventos';
        });
    }

    function eventoActualizado() {
        Swal.fire({
            icon: 'success',
            title: 'Evento Actualizado',
            text: 'Se Actualizo el evento correctamente',
            confirmButtonText: 'OK',
            willClose: () => {
                // Esta función se ejecutará cuando se cierre el cuadro de diálogo
                document.body.style.overflow = "auto";
            }
        }).then(() => {
            window.location.href = '/admin/eventos';
        });
    }
})();
