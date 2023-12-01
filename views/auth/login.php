<div id="login" class="modal">

    <div class="auth">
        <section class="auth__modal">
            <div id="cerrar-modal" class="modal__close">
                <i class="fa-solid fa-x"></i>
            </div>
            <h2 class="auth__heading">Iniciar Sesión</h2>
            <p class="auth__texto">Inicia Sesión en DevWevCamp</p>

            <form class="formulario formulario__login" method="POST">

                <div class="formulario__campo">
                    <input 
                    class="formulario__input"
                    type="email"
                    id="emailLogin"
                    name="email"
                    placeholder=""
                    >
                    <label class="formulario__label" for="emailLogin">Email</label>
                    <i class="formulario__icono fa-solid fa-envelope" id="emailLoginIcono"></i>
                    <p class="alerta" id="alertaEmailLogin"></p>
                    <p class="alerta" id="alertaEmail2Login"></p>
                </div>

                <div class="formulario__campo">
                    <input 
                    class="formulario__input"
                    type="password"
                    id="passwordLogin"
                    name="password"
                    placeholder=""
                    >
                    <label class="formulario__label" for="passwordLogin">Password</label>
                    <i class="formulario__icono fa-solid fa-lock" id="passwordLoginIcono"></i>
                    <p class="alerta" id="alertaPasswordLogin"></p>
                    <p class="alerta" id="alertaPassword2Login"></p>
                </div>

                <div class="formulario__contenedor">
                    <input type="submit" class="formulario__contenedor--boton" value="Iniciar Sesión">
                </div>
            </form>

            <div class="acciones">
                <p class="acciones__texto">¿Aún no tienes una cuenta?
                    <a class="acciones__enlace registro">Crear una</a>
                </p>

                <a class="acciones__enlace olvide">¿Olvidaste tu contraseña?</a>
            </div>
        </section>
    </div>
    
</div>