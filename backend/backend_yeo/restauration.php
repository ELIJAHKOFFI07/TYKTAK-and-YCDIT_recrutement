<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

$host = "localhost";
$user = "root";
$password = "";
$database = "gdc";

// Connexion à la base de données
$connection = mysqli_connect($host, $user, $password, $database);

// Vérifier la connexion
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

// Récupération du fichier de sauvegarde
$file = $_FILES['base_de_donnees'];

// Chemin temporaire du fichier
$tmpFile = $file['tmp_name'];

// Commande pour restaurer la base de données
$command = "mysql -h $host -u $user -p$password $database < $tmpFile";

// Exécution de la commande
exec($command, $output, $returnCode);

// Vérification de la restauration
if ($returnCode === 0) {
    // Réponse JSON en cas de succès
    echo json_encode(["success" => true, "message" => "Base de données restaurée avec succès"]);
} else {
    // Réponse JSON en cas d'erreur
    echo json_encode(["success" => false, "message" => "Erreur lors de la restauration de la base de données"]);
}

// Fermer la connexion à la base de données
mysqli_close($connection);
?>
