<?php include_once __DIR__ . "/../auth/auth_includes.php" ?>

<main class="devwebcamp principal pagina">
    <h2 class="devwebcamp__heading"> <?php echo $titulo; ?> </h2>
    <p class="devwebcamp__descripcion">Conoce la conferencia más importante de Latinoamerica</p>

    <div class="devwebcamp__grid">
        <div class="devwebcamp__imagen">
            <picture>
                <source srcset="build/img/sobre_devwebcamp.avif" type="image/avif">
                <source srcset="build/img/sobre_devwebcamp.webp" type="image/webp">
                <img loading="lazy" src="build/img/sobre_devwebcamp.jpg" alt="Imagen DevWebCamp">
            </picture>
        </div>

        <div class="devwebcamp__contenido">
            <p class="devwebcamp__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius cupiditate ullam neque nisi incidunt ducimus facere, similique quis praesentium corporis voluptatibus, provident consectetur totam alias illum ea sint possimus!</p>
            
            <p class="devwebcamp__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius cupiditate ullam neque nisi incidunt ducimus facere, similique quis praesentium corporis voluptatibus, provident consectetur totam alias illum ea sint possimus!</p>

        </div>
    </div>
</main>