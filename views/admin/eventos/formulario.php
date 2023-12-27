<fieldset class="formulario__fieldset">

    <legend class="formulario__legend">Información Evento</legend>

    <div class="formulario__campo">
        <input 
            type="text"
            class="formulario__input formulario__input-r"
            id="nombreEvento"
            name="nombre"
            placeholder=""
            value="<?php echo $evento->nombre ?? ''; ?>"
        >
        <label for="nombreEvento" class="formulario__label formulario__label-r">Nombre</label>
        <p class="alerta" id="alertaNombreEvento"></p>
    </div>

    <div class="formulario__campo">
        <textarea 
            class="formulario__input formulario__input-r formulario__textarea"
            id="descripcionEveto"
            name="descripcion"
            placeholder=""
            value="<?php echo $evento->descripcion ?? ''; ?>"
        ></textarea>
        <label for="descripcionEvento" class="formulario__label formulario__label-r formulario__label--textarea">Descripción</label>
        <p class="alerta" id="alertaDescripcionEvento"></p>
    </div>

    <div class="formulario__campo formulario__campo--categorias">
        <label for="categoria" class="formulario__label--area">Categoría o Tipo de Evento</label>
        <select 
            class="formulario__select formulario__selecct-r" 
            name="categoria_id" 
            id="categoriaEvento">
                <option selected disabled value="">-- Seleccionar --</option>
                <?php foreach($categorias as $categoria) { ?>
                    <option <?php echo ($evento->categoria_id === $categoria->id) ? 'selected' : '' ?> value="<?php echo $categoria->id; ?>"><?php echo $categoria->nombre; ?></option>
                <?php } ?>
        </select>
        <p class="alerta" id="alertaCategoriaEvento"></p>
    </div>

    <div class="formulario__campo">
        <label for="categoria" class="formulario__label--area">Selecciona el día</label>

        <div class="formulario__radio">
            <?php foreach($dias as $dia) { ?>
                <div class="formulario__radio--contenedor">
                    <label for="<?php echo strtolower($dia->nombre); ?>"><?php echo $dia->nombre; ?></label>
                    <input
                        type="radio"
                        id="<?php echo strtolower($dia->nombre) ?>"
                        name="dia"
                        value="<?php echo $dia->id; ?>">
                </div>
            <?php } ?>
        </div>
        <input type="hidden" name="dia_id" value="">
    </div>

    <div class="formulario__campo" id="horas">
        
        <label class="formulario__label--area">Seleccionar Hora</label>
        <ul class="horas">
            <?php foreach($horas as $hora) { ?>
                <li data-hora-id="<?php echo $hora->id ?>" class="horas__hora horas__hora--deshabilitada"><?php echo $hora->hora; ?></li>
            <?php } ?>
        </ul>
        <input type="hidden" name="hora_id" value="">
        <p class="alerta" id="alertaDiaHoraEvento"></p>
    </div>

    <div class="formulario__campo">
        <input 
            type="text"
            class="formulario__input formulario__input-r"
            id="ponenteEvento"
            placeholder=""
        >
        <label for="ponenteEvento" class="formulario__label formulario__label-r">Buscar Ponente</label>
        <ul id="listado-ponentes" class="listado-ponentes"></ul>
        <input type="hidden" name="ponente_id" value="">
        <p class="alerta" id="alertaPonenteEvento"></p>
    </div>

    <div class="formulario__campo">
        <input 
            type="number"
            class="formulario__input formulario__input-r"
            id="disponiblesEvento"
            name="disponibles"
            placeholder=""
            min="1"
            value="<?php echo $evento->disponibles ?? ''; ?>"
        >
        <label for="disponiblesEvento" class="formulario__label formulario__label-r">Lugares Disponibles</label>
        <p class="alerta" id="alertaDisponiblesEvento"></p>
    </div>
</fieldset>

<?php include_once __DIR__ . "/../../templates/spinner.php" ?>