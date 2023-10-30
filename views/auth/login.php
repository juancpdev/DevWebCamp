<?php include_once __DIR__ . "./templates/header.php" ?>

<main class="auth">
    <section class="auth__login">
        <h2 class="auth__heading"><?php echo $titulo?></h2>
        <p class="auth__texto">Inicia Sesión en DevWevCamp</p>

        <form class="formulario">

            <div class="formulario__campo">
                <input 
                class="formulario__input"
                type="email"
                id="email"
                name="email"
                placeholder=""
                >
                <i class="formulario__icono fa-solid fa-envelope"></i>
                <label class="formulario__label" for="email">Email</label>
            </div>

            <div class="formulario__campo">
                <input 
                class="formulario__input"
                type="password"
                id="password"
                name="password"
                placeholder=""
                >
                <i class="formulario__icono fa-solid fa-lock"></i>
                <label class="formulario__label" for="password">Password</label>
            </div>

            <div class="formulario__contenedor">
                <input type="submit" class="formulario__contenedor--boton" value="Iniciar Sesión">
            </div>
        </form>

        <div class="acciones">
            <p class="acciones__texto">¿Aún no tienes una cuenta?<a class="acciones__enlace" href="/registro"> <strong>Crear una</strong></a></p>
            <a class="acciones__enlace" href="/olvide">¿Olvidaste tu contraseña?</a>
        </div>
    </section>
</main>