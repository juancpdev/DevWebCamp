(function() {
    async function manejarFormularioPonentes(formulario) {
        const datos = new FormData(formulario);

        const respuesta = await fetch('/admin/ponentes/crear', {
            method: 'POST',
            body: datos
        });
        
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
                ponenteCreado();
            }
        } catch (error) {
            // Manejar el caso en que no se reciba una respuesta JSON válida
            console.error("Error al analizar la respuesta JSON del servidor", error);
        }
        
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

    const formularioPonentes = document.querySelector('#ponentes .formulario');

    if(formularioPonentes) {
        formularioPonentes.addEventListener('submit', function(event) {
            event.preventDefault();
            manejarFormularioPonentes(formularioPonentes);
        });
    }


    
})();
