<?php include_once __DIR__ . "/auth_includes.php" ?>

<main class="confirmar contenedor-sm">
    <div class="confirmar__contenedor">
        <h2 class="confirmar__heading"><?php echo $titulo; ?></h2>
        <p class="confirmar__texto">Tu cuenta DevWebCamp</p>

        <?php 
            require_once __DIR__ . "/../templates/alertas.php";
        ?>

        <?php if(isset($alertas["exito"])) { ?>
            <div class="contenedor-login">
                <a class="contenedor-login__boton login">Iniciar Sesión</a>
            </div>
        <?php } ?>
    </div>
    
</main>