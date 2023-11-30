<?php include_once __DIR__ . "/auth_includes.php" ?>
 
<main class="reestablecer contenedor-sm">
    <div class="reestablecer__contenedor">
        <h2 class="confirmar__heading"><?php echo $titulo; ?></h2>
        <p class="descripcion-pagina">Recupera el acceso a tu cuenta</p>

        <?php 
            include_once __DIR__ . '/../templates/alertas.php' 
        ?>

        <?php if($token_valido) { ?>
            
            <form method="POST" class="formulario" novalidate>
                <div class="formulario__campo formulario__campo-r">
                    <input 
                    class="formulario__input formulario__input-r"
                    type="password"
                    id="passwordReestablecer"
                    name="password"
                    placeholder=""
                    >
                    <label class="formulario__label formulario__label-r" for="passwordReestablecer">Password</label>
                    <i class="formulario__icono formulario__icono-r fa-solid fa-lock"></i>
                </div>

                <div class="formulario__campo formulario__campo-r">
                    <input 
                    class="formulario__input formulario__input-r"
                    type="password"
                    id="password2Reestablecer"
                    name="password2"
                    placeholder=""
                    >
                    <label class="formulario__label formulario__label-r" for="password2Reestablecer">Repetir Password</label>
                    <i class="formulario__icono formulario__icono-r fa-solid fa-lock"></i>
                </div>
                <div class="formulario__contenedor">
                    <input type="submit" class="formulario__contenedor--boton" value="Guardar Password">
                </div>
            </form>

        <?php } ?>

        <?php if($exito) { 
            echo "
            <script src='//cdn.jsdelivr.net/npm/sweetalert2@10'></script>
            <script>
            Swal.fire({
                icon: 'success',
                title: 'Password Actualizado',
                text: 'Su password fue actualizado correctamente',
                confirmButtonText: 'OK',
                willClose: () => {
                    window.location.href = '/';
                }
            });
          </script>";
            
        } ?>

    </div>
</main>