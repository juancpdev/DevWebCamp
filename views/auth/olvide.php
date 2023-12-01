<div id="olvide" class="modal">

    <div class="auth">
        <section class="auth__modal">
            <div id="cerrar-modal" class="modal__close">
                <i class="fa-solid fa-x"></i>
            </div>
            <h2 class="auth__heading">Recuperar Cuenta</h2>
            <p class="auth__texto">Reestablece tu password</p>

            <form class="formulario formulario__olvide">

                <div class="formulario__campo">
                    <input 
                    class="formulario__input"
                    type="email"
                    id="emailOlvide"
                    name="email"
                    placeholder=""
                    >
                    <label class="formulario__label" for="emailOlvide">Email</label>
                    <i class="formulario__icono fa-solid fa-envelope" id="emailOlvideIcono"></i>
                    <p class="alerta" id="alertaEmailOlvide"></p>
                    <p class="alerta" id="alertaEmail2Olvide"></p>
                </div>

                <div class="formulario__contenedor">
                    <input type="submit" class="formulario__contenedor--boton" value="Enviar Instrucciones">
                </div>
            </form>

            <div class="acciones">
                <p class="acciones__texto">¿Aún no tienes una cuenta?
                    <a class="acciones__enlace registro">Crear una</a>
                </p>
                <p class="acciones__texto">¿Ya tienes una cuenta?
                    <a class="acciones__enlace login">Inicia Sesión</a>
                </p>
            </div>
        </section>
        <?php include __DIR__ . "/../templates/spinner.php" ?>
    </div>
</div>