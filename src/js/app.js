document.addEventListener("DOMContentLoaded", function() {
    autocompletadoFormulario();
    modalAuth();
})

function autocompletadoFormulario() {
    // Selecciona todos los inputs
    const inputs = document.querySelectorAll('.formulario__input');
    
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            const label = this.nextElementSibling; // Suponiendo que el label siempre viene después del input
       
            // Si el input tiene contenido, mueve el label hacia arriba
            if (this.value) {
                label.classList.add('formulario__label--active');
            } else {
                label.classList.remove('formulario__label--active');
            }
        });
    });

}

function modalAuth() {
    const fondoNegro = document.querySelectorAll(".auth");

    const modalLogin = document.querySelector("#login");
    const modalRegistro = document.querySelector("#registro");
    const modalOlvide = document.querySelector("#olvide");

    const btnLogin = document.querySelectorAll(".login");
    const btnRegistro = document.querySelectorAll(".registro");
    const btnOlvide = document.querySelectorAll(".olvide");
    const btnCerrar = document.querySelectorAll(".modal__close");

    abrirModal(btnLogin, modalLogin, modalRegistro, modalOlvide);
    abrirModal(btnRegistro, modalRegistro, modalLogin, modalOlvide);
    abrirModal(btnOlvide, modalOlvide, modalLogin, modalRegistro);

    btnCerrar.forEach(btn => {
        btn.addEventListener("click", function() {
            cerrarModal();
            const modal = this.closest(".modal");
            setTimeout(() => {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
                modal.querySelector("form").reset();
            }, 200);
        });
    });

    window.addEventListener("click", function(event) {
        fondoNegro.forEach(fondo => {
            if (event.target === fondo) {
                cerrarModal();

                setTimeout(() => {
                    const modales = document.querySelectorAll(".modal");
                    modales.forEach(modal => {
                        modal.style.display = "none";
                        document.body.style.overflow = "auto"; // Permite el desplazamiento de nuevo
                        modal.querySelector("form").reset();
                    })
                }, 200);
            }
        })
    });
}

function abrirModal(botonActual, modalActual, modal1, modal2) {
    botonActual.forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();

            cambiarModal();

            // Agrega esta línea para restablecer el formulario dentro del otro modal
            reiniciarFormu(modal1, modal2);
            modalAnimacion(modalActual, modal1, modal2);
        });
    });
}

function modalAnimacion(modal, modal2, modal3) {
    modal.style.display = "block";
    modal2.style.display = "none";
    modal3.style.display = "none";

    document.body.style.overflow = "hidden"; // Evita el desplazamiento

    setTimeout(() => {
        modal.children[0].children[0].classList.toggle("animar");
    }, 50);
}

function cerrarModal() {
    limpiarAlertas();
    limpiarLabels();
    setTimeout(() => {
        const auth = document.querySelectorAll(".auth__modal");
        auth.forEach(formu => {
            formu.classList.remove("animar");
        })
    }, 0);
}


function cambiarModal() {
    limpiarAlertas();
    limpiarLabels();
    const acciones = document.querySelectorAll(".acciones__enlace");
    const auth = document.querySelectorAll(".auth__modal");
    
    acciones.forEach(accion => {
        accion.addEventListener("click", function(e) {
            auth.forEach(modal => {
                modal.classList.remove("animar");
            })
        });
    });

}

function reiniciarFormu(modal1, modal2) {
    // Agrega esta línea para restablecer el formulario dentro del otro modal
    modal1.querySelector("form").reset();
    modal2.querySelector("form").reset();
}

function limpiarLabels() {
    // Seleccionar solo los labels dentro del formulario de registro
    const labels = document.querySelectorAll('#registro .formulario__label');

    labels.forEach(label => {
        label.classList.remove("formulario__label--active");
    })
}

function limpiarAlertas() {
        // Itera sobre todos los campos y limpia las alertas y estilos previos
        ['Nombre', 'Apellido', 'Email', 'Password', 'Password2'].forEach((campo) => {
            const alertaElemento = document.getElementById('alerta' + campo + 'Registro');
            const inputCampo = document.getElementById(campo.toLowerCase() + 'Registro');
            const iconoCampo = document.getElementById(campo.toLowerCase() + 'RegistroIcono');

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
}

