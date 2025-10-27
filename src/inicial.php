<?php
    $sql = "SELECT * FROM texto WHERE (id_praca = ".$id_praca." AND Ativo = 'S') OR Comunicado = 1 ORDER BY NrOrdem";
    
    if($result = $mysqli->query($sql)) {
        while($row = $result->fetch_assoc()) {
            //Faz nada
        }
    }
?>