<?php include_once __DIR__ . "/../auth/auth_includes.php" ?>

<main class="agenda">
    <h2 class="agenda__heading">Workshops & Conferencias</h2>
    <p class="agenda__descripcion">Talleres y Conferencias dictados por expertos en desarrollo web</p>

    
    <div class="eventos">
        <h3 class="eventos__heading">&lt;Conferencias /></h3>

        <p class="eventos__fecha">Viernes 5 de Octubre</p>
        <div class="eventos__listado slider-container" id="conferencias_v">
            <div class="slides">
                <?php foreach ($eventos["conferencias_v"] as $evento) { ?>
                    <div class="slide">
                        <?php include __DIR__ . '../../templates/evento.php'; ?>
                    </div>
                <?php } ?>
            </div>
            <div class="prev-btn swiper-button-prev"><i class="fa-solid fa-chevron-left"></i></div>
            <div class="next-btn swiper-button-next"><i class="fa-solid fa-chevron-right"></i></div>
        </div>

        <p class="eventos__fecha">Sábado 6 de Octubre</p>
        <div class="eventos__listado slider-container" id="conferencias_s">
            <div class="slides">
                <?php foreach ($eventos["conferencias_s"] as $evento) { ?>
                    <div class="slide">
                        <?php include __DIR__ . '../../templates/evento.php'; ?>
                    </div>
                <?php } ?>
            </div>
            <div class="prev-btn swiper-button-prev"><i class="fa-solid fa-chevron-left"></i></div>
            <div class="next-btn swiper-button-next"><i class="fa-solid fa-chevron-right"></i></div>
        </div>
    </div>


    <div class="eventos eventos--workshops">
        <h3 class="eventos__heading">&lt;Workshops /></h3>

        <p class="eventos__fecha">Viernes 5 de Octubre</p>
        <div class="eventos__listado slider-container" id="workshops_v">
            <div class="slides">
                <?php foreach ($eventos["workshops_v"] as $evento) { ?>
                    <div class="slide">
                        <?php include __DIR__ . '../../templates/evento.php'; ?>
                    </div>
                <?php } ?>
            </div>
            <div class="prev-btn swiper-button-prev"><i class="fa-solid fa-chevron-left"></i></div>
            <div class="next-btn swiper-button-next"><i class="fa-solid fa-chevron-right"></i></div>
        </div>


        <p class="eventos__fecha">Sábado 6 de Octubre</p>
        <div class="eventos__listado slider-container" id="workshops_s">
            <div class="slides">
                <?php foreach ($eventos["workshops_s"] as $evento) { ?>
                    <div class="slide">
                        <?php include __DIR__ . '../../templates/evento.php'; ?>
                    </div>
                <?php } ?>
            </div>
            <div class="prev-btn swiper-button-prev"><i class="fa-solid fa-chevron-left"></i></div>
            <div class="next-btn swiper-button-next"><i class="fa-solid fa-chevron-right"></i></div>
        </div>
    </div>
</main>