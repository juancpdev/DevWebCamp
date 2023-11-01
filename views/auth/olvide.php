<div id="olvide" class="modal">
    <div class="modal__content">
        <span class="modal__close" id="cerrar-modal">&times;</span>
        <!-- Contenido del modal aquí -->
        <div class="auth">
            <section class="auth__login">
                <h2 class="auth__heading"><?php echo $titulo?></h2>
                <p class="auth__texto">Reestablece tu password</p>

                <form class="formulario">

                    <div class="formulario__campo">
                        <input 
                        class="formulario__input"
                        type="email"
                        id="emailOlvide"
                        name="email"
                        placeholder=""
                        >
                        <i class="formulario__icono fa-solid fa-envelope"></i>
                        <label class="formulario__label" for="emailOlvide">Email</label>
                    </div>

                    <div class="formulario__contenedor">
                        <input type="submit" class="formulario__contenedor--boton" value="Enviar Instrucciones">
                    </div>
                </form>

                <div class="acciones">
                    <p class="acciones__texto">¿Aún no tienes una cuenta?<a class="acciones__enlace registro"> <strong>Crear una</strong></a></p>
                    <p class="acciones__texto">¿Ya tienes una cuenta?<a class="acciones__enlace login"> <strong>Inicia Sesión</strong></a></p>
                </div>
            </section>
        </div>
        
    </div>
</div>