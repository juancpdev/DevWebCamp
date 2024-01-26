document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.slider-container');

    sliders.forEach(slider => {
        const slides = slider.querySelector('.slides');
        const nextBtn = slider.querySelector('.next-btn');
        const prevBtn = slider.querySelector('.prev-btn');
        let currentIndex = 0;

        function updateStyles() {
            const totalSlides = slides.children.length;

            // Establecer estilos para la flecha izquierda
            if (currentIndex === 0) {
                prevBtn.classList.add("arrow-disabled");
                prevBtn.classList.remove("arrow-enabled");
            } else {
                prevBtn.classList.remove("arrow-disabled");
                prevBtn.classList.add("arrow-enabled");
            }

            // Establecer estilos para la flecha derecha
            if (currentIndex === totalSlides - 3) {
                nextBtn.classList.remove("arrow-enabled");
                nextBtn.classList.add("arrow-disabled");
            } else {
                nextBtn.classList.add("arrow-enabled");
                nextBtn.classList.remove("arrow-disabled");
            }
        }

        nextBtn.addEventListener('click', function() {
            const totalSlides = slides.children.length;
            const cardsPerPage = 1;

            // Avanzar solo si no hemos llegado al límite
            if (currentIndex + cardsPerPage < totalSlides - 2) {
                currentIndex += cardsPerPage;
                updateSlider();
                updateStyles();
            }
        });

        prevBtn.addEventListener('click', function() {
            const cardsPerPage = 1;

            // Retroceder solo si no estamos en el inicio
            if (currentIndex - cardsPerPage >= 0) {
                currentIndex -= cardsPerPage;
                updateSlider();
                updateStyles();
            }
        });

        function updateSlider() {
            const screenWidth = window.innerWidth;
            let tarjetas = 0;

            if (screenWidth < 768) {
                tarjetas = 1;
            } else if (screenWidth < 1024) {
                tarjetas = 2;
            } else {
                tarjetas = 3;
            }

            const cardWidthPercentage = 100 / tarjetas;
            slides.style.transition = 'transform 0.2s ease-in-out';
            slides.style.transform = `translateX(-${currentIndex * cardWidthPercentage}%)`;

            // Espera a que termine la transición antes de quitarla
            setTimeout(() => {
                slides.style.transition = 'none';
            }, 200);
        }

        // Actualizar los estilos al cargar la página
        updateStyles();

        window.addEventListener('resize', function() {
            updateSlider();
            updateStyles();
        });
    });
});
