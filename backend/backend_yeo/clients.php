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
        $idEntreprise = $data['champ_client']['lib_ao'];
        $libEntreprise = $data['champ_client']['libEntreprise'];
        $localisation_entreprise = $data['champ_client']['localisation_entreprise'];  
        $telephone_entreprise = $data['champ_client']['telephone_entreprise'];
        $secteur_dactivite_entreprise = $data['champ_client']['secteur_dactivite_entreprise'];
        $nombre_dappel_doffre_restant = $data['champ_client']['nombre_dappel_doffre_restant']; 
        $mot_de_passe = $data['champ_client']['mot_de_passe'];
        $email_entreprise = $data['champ_client']['email_entreprise'];
        $confirmation_mot_de_passe = $data['champ_client']['confirmation_mot_de_passe'];
        $mission_du_poste = $data['champ_client']['mission_du_poste']; 
        $pays = $data['champ_client']['pays']; 
        $lien_logo = $data['champ_client']['lien_logo']; 

        // Générer l'ID
        $prefix = "CL"; // Première lettre du libellé de l'appel d'offre
        $nombre = rand(100, 999);
        $nom = substr($libEntreprise, 0, 2);
        $nom = strtoupper($nom);
        $idEntreprise = $prefix.$nom.$nombre;

        if ($mot_de_passe == $confirmation_mot_de_passe) {
            // Préparation de la requête SQL
            $sql = "INSERT INTO `gdcee19`(`idEntreprise`, `libEntreprise`, `telephone_entreprise`, `pays_entreprise`, `localisation_entreprise`, `secteur_dactivite_entreprise`, `email_entreprise`, `nombre_dappel_doffre_restant`, `lien_logo`, `mot_de_passe`) 
            VALUES (:idEntreprise, :libEntreprise, :telephone_entreprise, :pays_entreprise, :localisation_entreprise, :secteur_dactivite_entreprise, :email_entreprise, :nombre_dappel_doffre_restant, :lien_logo, :mot_de_passe)";

            // Exécution de la requête SQL
            $stmt = $connect->prepare($sql);
            $stmt->execute([
                ':idEntreprise' => $idEntreprise,
                ':libEntreprise' => $libEntreprise,
                ':telephone_entreprise' => $telephone_entreprise,
                ':pays_entreprise' => $pays_entreprise,
                ':localisation_entreprise' => $localisation_entreprise,
                ':secteur_dactivite_entreprise' => $secteur_dactivite_entreprise,
                ':email_entreprise' => $email_entreprise,
                ':nombre_dappel_doffre_restant' => $nombre_dappel_doffre_restant,
                ':lien_logo' => $lien_logo,
                ':mot_de_passe' => $mot_de_passe
            ]);

            // Réponse JSON
            echo json_encode(array("success" => true, "message" => "Données insérées avec succès"));
        }
        else{echo json_encode(array("success" => false, "message" => "Les deux mots de passe sont different"));}

        
    } else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        // pour les appels d'offre
        $data = array();
        $query = "SELECT * FROM gdcee19";
        $statement = $connect->prepare($query);
        $statement->execute();
        while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
            $data[] = $row;
        }

        // Répondre avec les données récupérées
        echo json_encode($data);
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
            echo json_encode(array("success" => true, "message" => "Client supprimé avec succès"));
            
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
