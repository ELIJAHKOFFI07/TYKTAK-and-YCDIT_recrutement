<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

$host="localhost";
   $user="root"; 
   $pass=""; 
   $db="gdc";
   $backup="base_de_donnees\\sauvegarde_du_".@date("Y-m-d-h-m-s")."_.sql";
   $command = "C:\\wamp64\\bin\\mysql\\mysql8.0.31\\bin\\mysqldump --host=$host --user=$user --password=$pass $db > $backup";
 
   //echo $backup .'<br>';
   //echo system($command); 
   system($command, $return_val); 
//    echo $return_val.'<br>'; 
   
   if ($return_val === 0) {
    // Réponse JSON en cas de succès
    echo json_encode(["success" => true, "message" => "Base de données sauvegardée avec succès"]);
   } else {
    // Réponse JSON en cas d'erreur
    echo json_encode(["success" => false, "message" => "Erreur lors de la sauvegardée de la base de données"]);
}

?>