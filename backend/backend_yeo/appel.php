<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

try {
    // Connexion à la base de données
    $connect = new PDO("mysql:host=localhost;dbname=gdc; charset=utf8", "root", "");
    $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Vérifier la méthode de la requête
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Récupérer les données envoyées depuis l'application Vue.js
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);

        // Récupération des données du formulaire
        $lib_ao = $data['champ_appel']['lib_ao'];
        $date_publication = $data['champ_appel']['date_publication'];
        $date_cloture = $data['champ_appel']['date_cloture'];  
        $nombre_de_poste_disponible = $data['champ_appel']['nombre_de_poste_disponible'];
        $anne_experience_requis = $data['champ_appel']['anne_experience_requis'];
        $diplome_requis = $data['champ_appel']['diplome_requis']; 
        $specialite = $data['champ_appel']['specialite'];
        $mission_du_poste = $data['champ_appel']['mission_du_poste']; 
        $contrat = $data['champ_appel']['contrat']; 
        $domaine = $data['champ_appel']['domaine']; 

        // Générer l'ID
        $prefix = "AO"; // Première lettre du libellé de l'appel d'offre
        $annee = substr($date_publication, 2, 4);
        $nombre = rand(100, 999);
        $id_appel_doffre = $prefix.$nombre;

        // Préparation de la requête SQL
        $sql = "INSERT INTO `gdcae26`(`id_appel_doffre`, `lib_appel_doffre`, `date_publication`, `date_cloture`, `nombre_de_poste_disponible`, `anne_experience_requis`, `diplome_requis`, `domaine`, `specialite`, `mission_du_poste`,`contrat`)
         VALUES (:id_appel_doffre, :lib_ao, :date_publication, :date_cloture, :nombre_de_poste_disponible, :anne_experience_requis, :diplome_requis, :domaine, :specialite, :mission_du_poste, :contrat)";

        // Exécution de la requête SQL
        $stmt = $connect->prepare($sql);
        $stmt->execute([':id_appel_doffre' => $id_appel_doffre, ':lib_ao' => $lib_ao, ':date_publication' => $date_publication, ':date_cloture' => $date_cloture, ':nombre_de_poste_disponible' => $nombre_de_poste_disponible, ':anne_experience_requis' => $anne_experience_requis, ':diplome_requis' => $diplome_requis, ':domaine' => $domaine, ':specialite' => $specialite,':mission_du_poste' => $mission_du_poste,  ':contrat' => $contrat]);

        // Réponse JSON
        echo json_encode(array("success" => true, "message" => "Données insérées avec succès"));
    } else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        // pour les appels d'offre
        $data_appel = array();
        $query_appel = "SELECT * FROM gdcae26";
        $statement = $connect->prepare($query_appel);
        $statement->execute();
        while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
            $data_appel[] = $row;
        }

        // Répondre avec les données récupérées
        echo json_encode($data_appel);
    } else if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        
        // Récupération des données du formulaire
        $lib_ao = $data['champ_appel']['lib_ao'];
        $date_publication = $data['champ_appel']['date_publication'];
        $date_cloture = $data['champ_appel']['date_cloture'];  
        $nombre_de_poste_disponible = $data['champ_appel']['nombre_de_poste_disponible'];
        $anne_experience_requis = $data['champ_appel']['anne_experience_requis'];
        $diplome_requis = $data['champ_appel']['diplome_requis']; 
        $specialite = $data['champ_appel']['specialite'];
        $contrat = $data['champ_appel']['mission']; 
        $domaine = $data['champ_appel']['domaine'];
        
        // Préparation de la requête SQL
        $sql = "$stmt->execute([':id_appel_doffre' => $id_appel_doffre, ':lib_ao' => $lib_ao, ':date_publication' => $date_publication, ':date_cloture' => $date_cloture, ':nombre_de_poste_disponible' => $nombre_de_poste_disponible, ':anne_experience_requis' => $anne_experience_requis, 
        ':diplome_requis' => $diplome_requis, ':domaine' => $domaine, ':specialite' => $specialite,':mission_du_poste' => $mission_du_poste,  ':contrat' => $contrat]);        ";
        
        // Exécution de la requête SQL
        $stmt = $connect->prepare($sql);
        $stmt->execute([':id_appel_doffre' => $id_appel_doffre, ':lib_ao' => $lib_ao, ':date_publication' => $date_publication, ':date_cloture' => $date_cloture, ':nombre_de_poste_disponible' => $nombre_de_poste_disponible, ':anne_experience_requis' => $anne_experience_requis, ':diplome_requis' => $diplome_requis, ':domaine' => $domaine, ':specialite' => $specialite,':mission_du_poste' => $mission_du_poste,  ':contrat' => $contrat]);
        
        // Réponse JSON
        echo json_encode(array("success" => true, "message" => "Données mises à jour avec succès"));
        
    } else if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
        if(isset($_GET['id_appel_doffre'])) {
            // Récupérer l'ID de l'appel d'offre à supprimer à partir des paramètres de requête
            $id_appel_doffre = $_GET['id_appel_doffre'];
        
            // Préparation de la requête SQL
            $sql = "DELETE FROM `gdcae26` WHERE id_appel_doffre = :id_appel_doffre";
        
            // Exécution de la requête SQL
            $stmt = $connect->prepare($sql);
            $stmt->execute([':id_appel_doffre' => $id_appel_doffre]);
        
            // Réponse JSON
            echo json_encode(array("success" => true, "message" => "Appel d'offre supprimé avec succès"));
            
        } else {
            // Gérer le cas où aucun ID d'appel d'offre n'est fourni dans la requête
            echo json_encode(array("error" => "ID d'appel d'offre non fourni"));
        }
     }
    } catch (PDOException $e) {
        // Gérer les erreurs de connexion à la base de données
        echo "Erreur de connexion à la base de données : " . $e->getMessage();
}

?>
