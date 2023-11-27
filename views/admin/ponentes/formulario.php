<fieldset class="formulario__fieldset">
    <legend class="formulario__legend">Información Personal</legend>

    <div class="formulario__campo">
        <input 
            type="text"
            class="formulario__input"
            id="nombrePonente"
            name="nombre"
            placeholder=""
            value="<?php echo $ponente->nombre ?? ''; ?>"
        >
        <label for="nombrePonente" class="formulario__label">Nombre Ponente</label>
    </div>

    <div class="formulario__campo">
        <input 
            type="text"
            class="formulario__input"
            id="apellidoPonente"
            name="apellido"
            placeholder=""
            value="<?php echo $ponente->apellido ?? ''; ?>"
        >
        <label for="apellidoPonente" class="formulario__label">Apellido Ponente</label>
    </div>

    <div class="formulario__campo">
        <input 
            type="text"
            class="formulario__input"
            id="ciudadPonente"
            name="ciudad"
            placeholder=""
            value="<?php echo $ponente->ciudad ?? ''; ?>"
        >
        <label for="ciudadPonente" class="formulario__label">Ciudad</label>
    </div>

    <div class="formulario__campo">
        <input 
            type="text"
            class="formulario__input"
            id="paisPonente"
            name="pais"
            placeholder=""
            value="<?php echo $ponente->pais ?? ''; ?>"
        >
        <label for="paisPonente" class="formulario__label">País</label>
    </div>

    <div class="formulario__campo">
        <label for="imagenPonente" class="formulario__label">Imagen</label>
        <input 
            type="file"
            class="formulario__input formulario__input--file"
            id="imagenPonente"
            name="imagen"
        >
    </div>
</fieldset>

<fieldset class="formulario__fieldset">
    <legend class="formulario__legend">Información Extra</legend>
    
    <div class="formulario__campo">
        <label class="formulairo__label">Áreas de Experiencia (separadas por coma)</label>
        <input 
            type="text"
            class="formulario__input"
            id="tags_input"
            placeholder="Ej. Node.js, PHP, CSS, Laravel, UX /UI"
        >
        
        <div id="tags" class="formulario__listado"></div>
        <input type="hidden" name="tags" value="<?php echo $ponente->tags ?? ''; ?>">
    </div>
</fieldset>

<fieldset class="formulario__fieldset">
    <legend class="formulario__legend">Redes Sociales</legend>
    
    <div class="formulario__campo">
        <div class="formulario__contenedor-icono">
            <div class="formulario__icono">
                <i class="fa-brands fa-facebook"></i>
            </div>
            <input 
                type="text"
                class="formulario__input--sociales"
                name="redes[facebook]"
                placeholder="Facebook"
                value="<?php echo $redes->facebook ?? ''; ?>"
            >
        </div>
    </div>

    <div class="formulario__campo">
        <div class="formulario__contenedor-icono">
            <div class="formulario__icono">
                <i class="fa-brands fa-twitter"></i>
            </div>
            <input 
                type="text"
                class="formulario__input--sociales"
                name="redes[twitter]"
                placeholder="Twitter"
                value="<?php echo $redes->twitter ?? ''; ?>"
            >
        </div>
    </div>

    <div class="formulario__campo">
        <div class="formulario__contenedor-icono">
            <div class="formulario__icono">
                <i class="fa-brands fa-youtube"></i>
            </div>
            <input 
                type="text"
                class="formulario__input--sociales"
                name="redes[youtube]"
                placeholder="Youtube"
                value="<?php echo $redes->youtube ?? ''; ?>"
            >
        </div>
    </div>

    <div class="formulario__campo">
        <div class="formulario__contenedor-icono">
            <div class="formulario__icono">
                <i class="fa-brands fa-instagram"></i>
            </div>
            <input 
                type="text"
                class="formulario__input--sociales"
                name="redes[instagram]"
                placeholder="Instagram"
                value="<?php echo $redes->instagram ?? ''; ?>"
            >
        </div>
    </div>

    <div class="formulario__campo">
        <div class="formulario__contenedor-icono">
            <div class="formulario__icono">
                <i class="fa-brands fa-tiktok"></i>
            </div>
            <input 
                type="text"
                class="formulario__input--sociales"
                name="redes[tiktok]"
                placeholder="Tiktok"
                value="<?php echo $redes->tiktok ?? ''; ?>"
            >
        </div>
    </div>

    <div class="formulario__campo">
        <div class="formulario__contenedor-icono">
            <div class="formulario__icono">
                <i class="fa-brands fa-github"></i>
            </div>
            <input 
                type="text"
                class="formulario__input--sociales"
                name="redes[github]"
                placeholder="Github"
                value="<?php echo $redes->github ?? ''; ?>"
            >
        </div>
    </div>
</fieldset>
