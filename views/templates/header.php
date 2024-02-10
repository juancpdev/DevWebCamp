<header class="header">
    <div class="header__contenedor">
        <nav class="header__navegacion">

            <?php if (is_auth()) { ?>
                <a href="<?php echo is_admin() ? '/admin/dashboard' : '/finalizar-registro' ?>" class="header__enlaces">Administrar</a>
                <nav class="dashboard__nav">
                    <form action="/logout" method="POST" class="dashboard__form">
                        <div class="dashboard__submit--logout">
                            <i class="fa-solid fa-right-from-bracket"></i>
                            <input type="submit" value="Cerrar Sesión" class="dashboard__submit--logout">
                        </div>
                    </form>
                </nav>
            <?php } else { ?>
                <a class="header__enlaces login">Iniciar Sesion</a>
                <a class="header__enlaces registro">Registrarse</a>
            <?php } ?>
        </nav>

        <div class="header__contenido">
            <a href="/">
                <h1 class="header__titulo">
                    &lt;DevWebCamp/&gt;
                </h1>
            </a>

            <p class="header__texto">Octubre 5-6 - 2023 </p>
            <p class="header__texto header__texto--modalidad">En Linea - Presencial</p>

            <a class="header__boton" href="/registro">Comprar Pase</a>
        </div>
    </div>
</header>

<div class="barra">
    <div class="barra__contenido">
        <a href="/">
            <h2 href="/" class="barra__logo">
                &lt;DevWebCamp/&gt;
            </h2>
        </a>

        <nav class="navegacion">
            <a class="navegacion__enlace <?php echo pagina_actual("/evento") ? "navegacion__enlace--activo" : "" ?>" href="/evento">Evento</a>
            <a class="navegacion__enlace <?php echo pagina_actual("/paquetes") ? "navegacion__enlace--activo" : "" ?>" href="/paquetes">Paquetes</a>
            <a class="navegacion__enlace <?php echo pagina_actual("/workshops-conferencias") ? "navegacion__enlace--activo" : "" ?>" href="/workshops-conferencias">Workshops/Conferencias</a>
            <a class="navegacion__enlace <?php echo pagina_actual("/registro") ? "navegacion__enlace--activo" : "" ?>" href="/comprar-pase">Comprar Pase</a>
        </nav>
    </div>
</div>