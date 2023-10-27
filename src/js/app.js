// Selecciona todos los inputs
const inputs = document.querySelectorAll('.formulario__input');


inputs.forEach(input => {
    input.addEventListener('input', function() {
        const label = this.nextElementSibling; // Suponiendo que el label siempre viene después del input
        
        console.log(label);
        // Si el input tiene contenido, mueve el label hacia arriba
        if (this.value) {
            label.classList.add('formulario__label--active');
        } else {
            label.classList.remove('formulario__label--active');
        }
    });
});
