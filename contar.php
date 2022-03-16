<?php
    $ruta = "noticias/";
    $totalJson = count(glob($ruta.'{*.json}', GLOB_BRACE));
    echo  $totalJson;
?>