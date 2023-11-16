<div id="registro" class="modal">
    
    <div class="auth">
        
        <section class="auth__modal">
            <div id="cerrar-modal" class="modal__close">
                <i class="fa-solid fa-x"></i>
            </div>
            <h2 class="auth__heading">Crear Cuenta</h2>
            <p class="auth__texto">Registrate en DevWevCamp</p>

            <div id="alertas-container"></div>

            <form class="formulario" method="POST">

                <div class="formulario__campo">
                    <input 
                    class="formulario__input"
                    type="text"
                    id="nombreRegistro"
                    name="nombre"
                    placeholder=""
                    >
                    <label class="formulario__label" for="nombreRegistro">Nombre</label>
                    <i class="formulario__icono fa-solid fa-user" id="nombreRegistroIcono"></i>
                    <p class="alerta" id="alertaNombreRegistro"></p>
                </div>
                
                <div class="formulario__campo">
                    <input 
                    class="formulario__input"
                    type="text"
                    id="apellidoRegistro"
                    name="apellido"
                    placeholder=""
                    >
                    <label class="formulario__label" for="apellidoRegistro">Apellido</label>
                    <i class="formulario__icono fa-solid fa-user" id="apellidoRegistroIcono"></i>
                    <p class="alerta" id="alertaApellidoRegistro"></p>
                </div>

                <div class="formulario__campo">
                    <input 
                    class="formulario__input"
                    type="email"
                    id="emailRegistro"
                    name="email"
                    placeholder=""
                    >
                    <label class="formulario__label" for="emailRegistro">Email</label>
                    <i class="formulario__icono fa-solid fa-envelope" id="emailRegistroIcono"></i>
                    <p class="alerta" id="alertaEmailRegistro"></p>
                    <p class="alerta" id="alertaEmail2Registro"></p>
                </div>

                <div class="formulario__campo">
                    <input 
                    class="formulario__input"
                    type="password"
                    id="passwordRegistro"
                    name="password"
                    placeholder=""
                    >
                    <label class="formulario__label" for="passwordRegistro">Password</label>
                    <i class="formulario__icono fa-solid fa-lock" id="passwordRegistroIcono"></i>
                    <p class="alerta" id="alertaPasswordRegistro"></p>
                </div>

                <div class="formulario__campo">
                    <input 
                    class="formulario__input"
                    type="password"
                    id="password2Registro"
                    name="password2"
                    placeholder=""
                    >
                    <label class="formulario__label" for="password2Registro">Repetir Password</label>
                    <i class="formulario__icono fa-solid fa-lock" id="password2RegistroIcono"></i>
                    <p class="alerta" id="alertaPassword2Registro"></p>
                </div>

                <div class="formulario__contenedor">
                    <input type="submit" class="formulario__contenedor--boton" value="Crear Cuenta">
                </div>
            </form>

            <div class="acciones">
                <p class="acciones__texto">¿Ya tienes una cuenta?
                    <a class="acciones__enlace login">Inicia Sesión</a>
                </p>
                <a class="acciones__enlace olvide">¿Olvidaste tu contraseña?</a>
            </div>
        </section>
        <?php include __DIR__ . "/../templates/spinner.php" ?>
    </div>
</div>