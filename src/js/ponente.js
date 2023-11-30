(function() {
    async function manejarFormularioPonentes(formulario) {
        const datos = new FormData();
        datos.append("nombre", formulario.elements['nombre'].value);
        datos.append("apellido", formulario.elements['apellido'].value);
        datos.append("ciudad", formulario.elements['ciudad'].value);
        datos.append("pais", formulario.elements['pais'].value);
        datos.append("imagen", formulario.elements['imagen'].value);
        datos.append("tags", formulario.elements['tags'].value);

        const respuesta = await fetch('/admin/ponentes/crear', {
            method: 'POST',
            body: datos
        });

        try {
            const resultado = await respuesta.json();
            
            if (resultado.tipo === 'error') {
                // Guarda los valores originales de los campos
                formulario.elements['nombre'].value;
                formulario.elements['apellido'].value;
                formulario.elements['ciudad'].value;
                formulario.elements['pais'].value;

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
                formulario.elements['nombre'].value = '';
                formulario.elements['apellido'].value = '';
                formulario.elements['ciudad'].value = '';
                formulario.elements['pais'].value = '';

                // Alerta de éxito usuarioCreado();
                console.log("Ponente creado");
            }
        } catch (error) {
            // Manejar el caso en que no se reciba una respuesta JSON válida
            console.error("Error al analizar la respuesta JSON del servidor", error);
        }
    }


    const formularioPonentes = document.querySelector('#ponentes .formulario');

    if(formularioPonentes) {
        formularioPonentes.addEventListener('submit', function(event) {
            event.preventDefault();
            manejarFormularioPonentes(formularioPonentes);
        });
    }
})();
