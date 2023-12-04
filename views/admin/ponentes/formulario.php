<fieldset class="formulario__fieldset">

    <legend class="formulario__legend">Información Personal</legend>

    <div class="formulario__campo">
        <input 
            type="text"
            class="formulario__input formulario__input-r"
            id="nombrePonente"
            name="nombre"
            placeholder=""
            value="<?php echo $ponente->nombre ?? ''; ?>"
        >
        <label for="nombrePonente" class="formulario__label formulario__label-r">Nombre</label>
        <p class="alerta" id="alertaNombrePonente"></p>
    </div>

    <div class="formulario__campo">
        <input 
            type="text"
            class="formulario__input formulario__input-r"
            id="apellidoPonente"
            name="apellido"
            placeholder=""
            value="<?php echo $ponente->apellido ?? ''; ?>"
        >
        <label for="apellidoPonente" class="formulario__label formulario__label-r">Apellido</label>
        <p class="alerta" id="alertaApellidoPonente"></p>
    </div>

    <div class="formulario__campo">
        <input 
            type="text"
            class="formulario__input formulario__input-r"
            id="ciudadPonente"
            name="ciudad"
            placeholder=""
            value="<?php echo $ponente->ciudad ?? ''; ?>"
        >
        <label for="ciudadPonente" class="formulario__label formulario__label-r">Ciudad</label>
        <p class="alerta" id="alertaCiudadPonente"></p>
    </div>

    <div class="formulario__campo">
        <input 
            type="text"
            class="formulario__input formulario__input-r"
            id="paisPonente"
            name="pais"
            placeholder=""
            value="<?php echo $ponente->pais ?? ''; ?>"
        >
        <label for="paisPonente" class="formulario__label formulario__label-r">País</label>
        <p class="alerta" id="alertaPaisPonente"></p>
    </div>

    <div class="formulario__campo formulario__campo--file">
        <label for="imagenPonente" class="formulario__label--file">Imagen</label>
        <input 
            type="file"
            class="formulario__input--file"
            id="imagenPonente"
            name="imagen"
            onchange="mostrarNombreArchivo()"
            style="display: none"
        >
        <div class="formulario__contenedor-btn">
            <button class="formulario__btn-img" type="button" onclick="seleccionarArchivo()">Elegir Archivo</button>
            <p class="formulario__texto-img" id="mensajeArchivo">No se ha seleccionado ningún archivo.</p>
        </div>
        <p class="alerta" id="alertaImagenPonente"></p>
    </div>
</fieldset>

<fieldset class="formulario__fieldset">
    <legend class="formulario__legend">Información Extra</legend>
    
    <div class="formulario__campo">
        <label class="formulario__label--area">Áreas de Experiencia (separadas por coma)</label>
        <input 
            type="text"
            class="formulario__input formulario__input-r tags_input"
            id="tagsPonente"
            placeholder="Ej. Node.js, PHP, CSS, Laravel, UX /UI"
        >
        <p class="alerta" id="alertaTagsPonente"></p>
        <div id="tags" class="formulario__listado"></div>
        <input type="hidden" name="tags" value="<?php echo $ponente->tags ?? ''; ?>">
    </div>
</fieldset>

<fieldset class="formulario__fieldset">
    <div class="formulario__contenedor-redes">
        <legend class="formulario__legend">Redes Sociales</legend>
        <span class="formulario__legend-span">(Solo el usuario)</span>
    </div>
    
    <div class="formulario__campo formulario__campo-sociales">
        <div class="formulario__contenedor-icono">
            <div class="formulario__icono-redes">
                <i class="fa-brands fa-facebook"></i>
            </div>
            <input 
                type="text"
                class="formulario__input--sociales formulario__input--sociales--barra"
                name="redes[facebook]"
                placeholder="@usuario"
                value="<?php echo $redes->facebook ?? ''; ?>"
            >
        </div>
    </div>

    <div class="formulario__campo formulario__campo-sociales">
        <div class="formulario__contenedor-icono">
            <div class="formulario__icono-redes">
                <i class="fa-brands fa-twitter"></i>
            </div>
            <input 
                type="text"
                class="formulario__input--sociales"
                name="redes[twitter]"
                placeholder="@usuario"
                value="<?php echo $redes->twitter ?? ''; ?>"
            >
        </div>
    </div>

    <div class="formulario__campo formulario__campo-sociales">
        <div class="formulario__contenedor-icono">
            <div class="formulario__icono-redes">
                <i class="fa-brands fa-youtube"></i>
            </div>
            <input 
                type="text"
                class="formulario__input--sociales"
                name="redes[youtube]"
                placeholder="@usuario"
                value="<?php echo $redes->youtube ?? ''; ?>"
            >
        </div>
    </div>

    <div class="formulario__campo formulario__campo-sociales">
        <div class="formulario__contenedor-icono">
            <div class="formulario__icono-redes">
                <i class="fa-brands fa-instagram"></i>
            </div>
            <input 
                type="text"
                class="formulario__input--sociales"
                name="redes[instagram]"
                placeholder="@usuario"
                value="<?php echo $redes->instagram ?? ''; ?>"
            >
        </div>
    </div>

    <div class="formulario__campo formulario__campo-sociales">
        <div class="formulario__contenedor-icono">
            <div class="formulario__icono-redes">
                <i class="fa-brands fa-tiktok"></i>
            </div>
            <input 
                type="text"
                class="formulario__input--sociales"
                name="redes[tiktok]"
                placeholder="@usuario"
                value="<?php echo $redes->tiktok ?? ''; ?>"
            >
        </div>
    </div>

    <div class="formulario__campo formulario__campo-sociales">
        <div class="formulario__contenedor-icono">
            <div class="formulario__icono-redes">
                <i class="fa-brands fa-github"></i>
            </div>
            <input 
                type="text"
                class="formulario__input--sociales"
                name="redes[github]"
                placeholder="@usuario"
                value="<?php echo $redes->github ?? ''; ?>"
            >
        </div>
    </div>
</fieldset>
