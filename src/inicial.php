<?php
    $sql = "SELECT * FROM usuario WHERE idUsuario = $id_usuario"; //Top
    
    if($result = $mysqli->query($sql)) {
        while($row = $result->fetch_assoc()) {
            //Faz nada, ainda
        }
    }
?>