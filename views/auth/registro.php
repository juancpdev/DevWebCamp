<main class="auth">
    <section class="auth__login">
        <h2 class="auth__heading"><?php echo $titulo?></h2>
        <p class="auth__texto">Registrate en DevWevCamp</p>

        <form class="formulario">

            <div class="formulario__campo">
                <input 
                class="formulario__input"
                type="text"
                id="nombre"
                name="nombre"
                placeholder=""
                >
                <label class="formulario__label" for="nombre">Nombre</label>
                <i class="formulario__icono fa-solid fa-user"></i>
            </div>
            
            <div class="formulario__campo">
                <input 
                class="formulario__input"
                type="text"
                id="apellido"
                name="apellido"
                placeholder=""
                >
                <label class="formulario__label" for="apellido">Apellido</label>
                <i class="formulario__icono fa-solid fa-user"></i>
            </div>

            <div class="formulario__campo">
                <input 
                class="formulario__input"
                type="email"
                id="email"
                name="email"
                placeholder=""
                >
                <label class="formulario__label" for="email">Email</label>
                <i class="formulario__icono fa-solid fa-envelope"></i>
            </div>

            <div class="formulario__campo">
                <input 
                class="formulario__input"
                type="password"
                id="password"
                name="password"
                placeholder=""
                >
                <label class="formulario__label" for="password">Password</label>
                <i class="formulario__icono fa-solid fa-lock"></i>
            </div>

            <div class="formulario__campo">
                <input 
                class="formulario__input"
                type="password"
                id="password2"
                name="password2"
                placeholder=""
                >
                <label class="formulario__label" for="password2">Repetir Password</label>
                <i class="formulario__icono fa-solid fa-lock"></i>
            </div>

            <div class="formulario__contenedor">
                <input type="submit" class="formulario__contenedor--boton" value="Crear Cuenta">
            </div>
        </form>

        <div class="acciones">
            <p class="acciones__texto">¿Ya tienes una cuenta?
                <a class="acciones__enlace" href="/login"> <strong>Inicia Sesión</strong></a>
            </p>
            <a class="acciones__enlace" href="/olvide">¿Olvidaste tu contraseña?</a>
        </div>
    </section>
</main>