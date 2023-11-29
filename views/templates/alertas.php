<?php foreach ($alertas as $key => $mensajes) : ?>
    <div class="alertas <?php echo $key; ?>">
        <?php foreach ($mensajes as $mensaje) : ?>
            <?php echo $mensaje; ?><br>
        <?php endforeach; ?>
    </div>
<?php endforeach; ?>
