<h2 class="dashboard__heading"> <?php echo $titulo; ?> </h2>

<div class="dashboard__contenedor-boton">
    <a class="dashboard__boton" href="/admin/ponentes">
        <i class="fa-solid fa-circle-arrow-left"></i>
        Volver
    </a>
</div>

<div class="dashboard__formulario">
<?php foreach ($alertas as $key => $mensajes) : ?>
    <div class="alertas <?php echo $key; ?>">
        <?php foreach ($mensajes as $mensaje) : ?>
            <?php echo $mensaje; ?><br>
        <?php endforeach; ?>
    </div>
<?php endforeach; ?>


    <form action="/admin/ponentes/crear" method="POST" enctype="multipart/form-data" class="formulario">
        <?php include_once __DIR__ . "/formulario.php"; ?>
        <input type="submit" value="Registrar Ponente" class="formulario__submit formulario__submit--registrar">
    </form>

</div>