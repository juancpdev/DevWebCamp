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

    btnLogin.forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();

            // Agrega esta línea para restablecer el formulario dentro del otro modal
            reiniciarFormu(modalRegistro, modalOlvide);
            modalAnimacion(modalLogin, modalRegistro, modalOlvide);
        });
    });

    btnRegistro.forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();

            // Agrega esta línea para restablecer el formulario dentro del otro modal
            reiniciarFormu(modalLogin, modalOlvide);
            modalAnimacion(modalRegistro, modalLogin, modalOlvide);
        });
    });

    btnOlvide.forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();

            // Agrega esta línea para restablecer el formulario dentro del otro modal
            reiniciarFormu(modalLogin, modalRegistro);
            modalAnimacion(modalOlvide, modalRegistro, modalLogin);
        });
    });

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

function reiniciarFormu(modal1, modal2) {
    // Agrega esta línea para restablecer el formulario dentro del otro modal
    modal1.querySelector("form").reset();
    modal2.querySelector("form").reset();
}

function modalAnimacion(modal, modal2, modal3) {
    modal.style.display = "block";
    modal2.style.display = "none";
    modal3.style.display = "none";

    document.body.style.overflow = "hidden"; // Evita el desplazamiento

    setTimeout(() => {
        const auth = document.querySelectorAll(".auth__modal");
        auth.forEach(formu => {
            formu.classList.add("animar");
        })
    }, 0);
}


function cerrarModal() {
    setTimeout(() => {
        const auth = document.querySelectorAll(".auth__modal");
        auth.forEach(formu => {
            formu.classList.remove("animar");
        })
    }, 0);
}