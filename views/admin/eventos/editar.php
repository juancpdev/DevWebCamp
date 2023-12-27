<h2 class="dashboard__heading"> <?php echo $titulo; ?> </h2>

<div class="dashboard__contenedor--boton">
    <a class="dashboard__boton" href="/admin/eventos">
        <i class="fa-solid fa-circle-arrow-left"></i>
        Volver
    </a>
</div>

<div class="dashboard__formulario" id="eventosEditar">

    <form method="POST" enctype="multipart/form-data" class="formulario">
        <?php include_once __DIR__ . "/formulario.php"; ?>
        <input type="submit" value="Actualizar Evento" class="formulario__submit formulario__submit--registrar">
    </form>

</div>