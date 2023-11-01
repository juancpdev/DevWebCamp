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

    const cerrarModalBtns = document.querySelectorAll(".modal__close");

    btnLogin.forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();

            // Agrega esta línea para restablecer el formulario dentro del otro modal
            modalRegistro.querySelector("form").reset();
            modalOlvide.querySelector("form").reset();
            modalAnimacion(modalLogin, modalRegistro, modalOlvide);
        });
    });

    btnRegistro.forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();

            // Agrega esta línea para restablecer el formulario dentro del otro modal
            modalLogin.querySelector("form").reset();
            modalOlvide.querySelector("form").reset();
            modalAnimacion(modalRegistro, modalLogin, modalOlvide);
        });
    });

    btnOlvide.forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();

            // Agrega esta línea para restablecer el formulario dentro del otro modal
            modalLogin.querySelector("form").reset();
            modalRegistro.querySelector("form").reset();
            modalAnimacion(modalOlvide, modalRegistro, modalLogin);
        });
    });

    cerrarModalBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            const modal = this.closest(".modal");
            // Cambia la opacidad a 0 con una transición
            modal.style.opacity = "0";
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
                event.target.parentElement.style = "none";
                document.body.style.overflow = "auto"; // Permite el desplazamiento de nuevo
            }
        })
    });
}

function noScroll() {
    document.body.style.overflow = "hidden"; // Evita el desplazamiento
}

function modalAnimacion(modal, modal2, modal3) {
    modal.style.display = "block";
    modal2.style.display = "none";
    modal3.style.display = "none";
    
    // Cambia la opacidad a 1 con una transición
    setTimeout(() => {
        modal.style.opacity = "1";
    }, 0);

    noScroll();
}