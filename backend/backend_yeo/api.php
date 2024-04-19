<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

try {
    // Connexion à la base de données
    $connect = new PDO("mysql:host=localhost;dbname=gdc; charset=utf8", "root", "");
    $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
    
    // Vérifier la méthode de la requête
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Récupérer les données envoyées depuis l'application Vue.js
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        
        // Récupération des données du formulaire
        $idCandidat = $data['candidat']['idCandidat'];
        $nom = $data['candidat']['nom'];
        $prenom = $data['candidat']['prenom'];
        
        // Préparation de la requête SQL
        $sql = "INSERT INTO gdct18 (idCandidat, nom, prenom) VALUES (:idCandidat, :nom, :prenom)";
        
        // Exécution de la requête SQL
        $stmt = $connect->prepare($sql);
        $stmt->execute([':idCandidat' => $idCandidat, ':nom' => $nom, ':prenom' => $prenom]);
        
        // Réponse JSON
        echo json_encode(array("message" => "Données insérées avec succès"));
    } else{
        //Requête GET
        $data = array();
        $query = "SELECT * FROM gdct18";
        $statement = $connect->prepare($query);
        $statement->execute();
        while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
            $data[] = $row;
        }
       
        // Répondre avec les données récupérées
        echo json_encode($data);
        
        
    }
} catch (PDOException $e) {
    // Gérer les erreurs de connexion à la base de données
    echo "Erreur de connexion à la base de données : " . $e->getMessage();
}
if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    // Récupérer les données envoyées depuis l'application Vue.js
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    
    // Récupération des données du formulaire
    $idCandidat = $data['candidat']['idCandidat'];
    $nom = $data['candidat']['nom'];
    $prenom = $data['candidat']['prenom'];
    
    // Préparation de la requête SQL
    $sql = "UPDATE gdct18 SET nom = :nom, prenom = :prenom WHERE idCandidat = :idCandidat";
    
    // Exécution de la requête SQL
    $stmt = $connect->prepare($sql);
    $stmt->execute([':idCandidat' => $idCandidat, ':nom' => $nom, ':prenom' => $prenom]);
    
    // Réponse JSON
    echo json_encode(array("message" => "Données mises à jour avec succès"));
}
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    // Récupérer les données envoyées depuis l'application Vue.js
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    
    // Récupération de l'ID du candidat à supprimer
    $idCandidat = $data['candidat']['idCandidat'];
    
    // Préparation de la requête SQL
    $sql = "DELETE FROM gdct18 WHERE idCandidat = :idCandidat";
    
    // Exécution de la requête SQL
    $stmt = $connect->prepare($sql);
    $stmt->execute([':idCandidat' => $idCandidat]);
    
    // Réponse JSON
    echo json_encode(array("message" => "Candidat supprimé avec succès"));
    
}

?>
