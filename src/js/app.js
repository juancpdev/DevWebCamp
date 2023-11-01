document.addEventListener("DOMContentLoaded", function() {
    autocompletadoFormulario();
    modalAuth();
    cambiarModal();
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
    const modalLogin = document.querySelector("#login");
    const modalRegistro = document.querySelector("#registro");
    const modalOlvide = document.querySelector("#olvide");

    const abrirModalLoginBtns = document.querySelectorAll(".login");
    const abrirRegistroModalBtns = document.querySelectorAll(".registro");
    const abrirOlvideModalBtns = document.querySelectorAll(".olvide");

    const cerrarModalBtns = document.querySelectorAll(".modal__close");

    abrirModalLoginBtns.forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            modalLogin.style.display = "block";
            modalRegistro.style.display = "none";
            modalOlvide.style.display = "none";
        });
    });

    abrirRegistroModalBtns.forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            modalRegistro.style.display = "block";
            modalLogin.style.display = "none";
            modalOlvide.style.display = "none";
        });
    });

    abrirOlvideModalBtns.forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            modalOlvide.style.display = "block";
            modalLogin.style.display = "none";
            modalRegistro.style.display = "none";
        });
    });

    cerrarModalBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            this.parentElement.parentElement.style.display = "none";
        });
    });

    window.addEventListener("click", function(event) {
        if (event.target === modalLogin || event.target === modalRegistro) {
            event.target.style.display = "none";
        }
    });
}


function cambiarModal() {
    
}