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
            id="categoria">
                <option value="">-- Seleccionar --</option>
                <?php foreach($categorias as $categoria) { ?>
                    <option value="<?php echo $categoria->id; ?>"><?php echo $categoria->nombre; ?></option>
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
        <p class="alerta" id="alertaCategoriaEvento"></p>
    </div>


</fieldset>




<?php include_once __DIR__ . "/../../templates/spinner.php" ?>