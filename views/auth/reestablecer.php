<?php include_once __DIR__ . "/auth_includes.php" ?>

<div class="contenedor reestablecer">
    <?php include_once __DIR__ . '/../templates/nombre-sitio.php' ?>
    <div class="contenedor-sm">
        <p class="descripcion-pagina">Reestablecer Password</p>

        <?php include_once __DIR__ . '/../templates/alertas.php' ?>

        <?php if($mostrar) { ?>
            
            <form method="POST" class="formulario" novalidate>
            <div class="campo">
                    <label for="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Tu Password">
                </div>
                <div class="campo">
                    <label for="password2">Confirmar</label>
                    <input 
                        type="password" 
                        name="password2" 
                        id="password2" 
                        placeholder="Confirmar Password">
                </div>
                <input class="boton" type="submit" value="Guardar Password">
            </form>

        <?php } ?>

    </div>
</div>