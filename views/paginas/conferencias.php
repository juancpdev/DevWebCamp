<main class="agenda">
    <h2 class="agenda__heading">Workshops & Conferencias</h2>
    <p class="agenda__descripcion">Talleres y Conferencias dictados por expertos en desarrollo web</p>

    <div class="eventos">
        <h3 class="eventos__heading">&lt;Conferencias /></h3>
        <p class="eventos__fecha">Viernes 5 de Octubre</p>

        <div class="eventos__listado ">
            <?php foreach ($eventos["conferencias_v"] as $evento) { ?>
                <div class="evento">
                    <p class="evento__hora"><?php echo $evento->hora->hora; ?></p>
                    <div class="evento__informacion">
                        <p class="evento__nombre"><?php echo $evento->nombre; ?></p>
                        <p class="evento__nombre"><?php echo $evento->descripcion; ?></p>
                        <div class="evento__ponente">
                            <picture>
                                <source srcset="<?php echo '/img/speakers/' . $evento->ponente->imagen . '.webp' ?>" type="image/webp">
                                <source srcset="<?php echo '/img/speakers/' . $evento->ponente->imagen . '.png' ?>" type="image/png">

                                <img src="<?php echo '/img/speakers/' . $evento->ponente->imagen . '.png' ?>" alt="Imagen Ponente">
                            </picture>
                            <p class="evento__ponente-imagen"><?php echo $evento->ponente->nombre . " " . $evento->ponente->apellido; ?></p>
                        </div>
                    </div>
                </div>
            <?php } ?>
        </div>

        <p class="eventos__fecha">Sábado 6 de Octubre</p>

        <div class="eventos__listado">

        </div>
    </div>

    <div class="eventos eventos--workshops">
        <h3 class="eventos__heading">&lt;Workshops /></h3>
        <p class="eventos__fecha">Viernes 5 de Octubre</p>

        <div class="eventos__listado slider swiper">

        </div>

        <p class="eventos__fecha">Sábado 6 de Octubre</p>

        <div class="eventos__listado slider swiper">


        </div>
    </div>
</main>