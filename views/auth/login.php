<div id="login" class="modal">
    <div class="modal__content">
        <span class="modal__close" id="cerrar-modal">&times;</span>
        <!-- Contenido del modal aquí -->
        
        <div class="auth">
            <section class="auth__login">
                <h2 class="auth__heading"><?php echo $titulo?></h2>
                <p class="auth__texto">Inicia Sesión en DevWevCamp</p>

                <form class="formulario">

                    <div class="formulario__campo">
                        <input 
                        class="formulario__input"
                        type="email"
                        id="emailLogin"
                        name="email"
                        placeholder=""
                        >
                        <i class="formulario__icono fa-solid fa-envelope"></i>
                        <label class="formulario__label" for="emailLogin">Email</label>
                    </div>

                    <div class="formulario__campo">
                        <input 
                        class="formulario__input"
                        type="password"
                        id="passwordLogin"
                        name="password"
                        placeholder=""
                        >
                        <i class="formulario__icono fa-solid fa-lock"></i>
                        <label class="formulario__label" for="passwordLogin">Password</label>
                    </div>

                    <div class="formulario__contenedor">
                        <input type="submit" class="formulario__contenedor--boton" value="Iniciar Sesión">
                    </div>
                </form>

                <div class="acciones">
                    <p class="acciones__texto">¿Aún no tienes una cuenta?<a class="acciones__enlace registro" <strong>Crear una</strong></a></p>
                    <a class="acciones__enlace olvide">¿Olvidaste tu contraseña?</a>
                </div>
            </section>
        </div>

    </div>
</div>