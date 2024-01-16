<div class="evento swiper-slide">
    <p class="evento__hora"><?php echo $evento->hora->hora; ?></p>
    <div class="evento__informacion">
        <p class="evento__nombre"><?php echo $evento->nombre; ?></p>
        <p class="evento__texto"><?php echo $evento->descripcion; ?></p>
        <div class="evento__ponente">
            <picture>
                <source srcset="<?php echo '/img/speakers/' . $evento->ponente->imagen . '.webp' ?>" type="image/webp">
                <source srcset="<?php echo '/img/speakers/' . $evento->ponente->imagen . '.png' ?>" type="image/png">
                <img class="evento__ponente--imagen" width="200" height="300" src="<?php echo '/img/speakers/' . $evento->ponente->imagen . '.png' ?>" alt="Imagen Ponente">
            </picture>
            <p class="evento__ponente--nombre"><?php echo $evento->ponente->nombre . " " . $evento->ponente->apellido; ?></p>
        </div>
    </div>
</div>