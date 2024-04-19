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

        $action = isset($_GET['action']) ? $_GET['action'] : ''; 
       if ($action == 'addProfession') {
             // Récupération des données du formulaire
            $lib_profession = $data['champ_parametre']['lib_profession'];
            // Générer l'ID
            $prefix = "PN"; // Première lettre du libellé de l'appel d'offre
            $annee = substr($date_publication, 2, 4);
            $nombre = rand(100, 999);
            $id_profession = $prefix.substr($lib_profession, 0, 2).$nombre;

            // Préparation de la requête SQL
            $sql = "INSERT INTO `gdcpn02`(`id_profession`, `lib_Profession`) VALUES (:id_profession, :lib_profession)
            ";
            // Exécution de la requête SQL
            $stmt = $connect->prepare($sql);
            $stmt->execute([':id_profession' => $id_profession, ':lib_profession' => $lib_profession]);

            // Réponse JSON
            echo json_encode(array("success" => true, "message" => "Données insérées avec succès"));
       }
    } else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $action = isset($_GET['action']) ? $_GET['action'] : '';
        // profession 
       if ($action == 'profession') {
        $data_appel = array();
        $query_appel = "SELECT * FROM `gdcpn02`";
        $statement = $connect->prepare($query_appel);
        $statement->execute();
        while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
            $data_appel[] = $row;
        }

        // Répondre avec les données récupérées
        echo json_encode($data_appel);
       }

        // Situation matrimoniale
        elseif ($action == 'situation_matrimoniale') {
            $data_appel = array();
            $query_appel = "SELECT * FROM `gdcsm03`";
            $statement = $connect->prepare($query_appel);
            $statement->execute();
            while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
                $data_appel[] = $row;
            }
    
            // Répondre avec les données récupérées
            echo json_encode($data_appel);
           }
           
           // Diplome
            elseif ($action == 'diplome') {
            $data_appel = array();
            $query_appel = "SELECT * FROM `gdcde05`";
            $statement = $connect->prepare($query_appel);
            $statement->execute();
            while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
                $data_appel[] = $row;
            }
    
            // Répondre avec les données récupérées
            echo json_encode($data_appel);
           }

           // genre
           elseif ($action == 'genre') {
            $data_appel = array();
            $query_appel = "SELECT * FROM `gdcge08`";
            $statement = $connect->prepare($query_appel);
            $statement->execute();
            while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
                $data_appel[] = $row;
            }
    
            // Répondre avec les données récupérées
            echo json_encode($data_appel);
           }

           // type contrat
           elseif ($action == 'type_contrat') {
            $data_appel = array();
            $query_appel = "SELECT * FROM `gdctt06`";
            $statement = $connect->prepare($query_appel);
            $statement->execute();
            while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
                $data_appel[] = $row;
            }
            
            // Répondre avec les données récupérées
            echo json_encode($data_appel);
           }

           // poste
           elseif ($action == 'poste') {
            $data_appel = array();
            $query_appel = "SELECT * FROM `gdcpe07`";
            $statement = $connect->prepare($query_appel);
            $statement->execute();
            while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
                $data_appel[] = $row;
            }
            
            // Répondre avec les données récupérées
            echo json_encode($data_appel);
           }

           // groupe_utilisateur
           elseif ($action == 'groupe_utilisateur') {
            $data_appel = array();
            $query_appel = "SELECT * FROM `gdcgr09`";
            $statement = $connect->prepare($query_appel);
            $statement->execute();
            while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
                $data_appel[] = $row;
            }
            
            // Répondre avec les données récupérées
            echo json_encode($data_appel);
           }

           
           // type question
           elseif ($action == 'type_question') {
            $data_appel = array();
            $query_appel = "SELECT * FROM `gdctn16`";
            $statement = $connect->prepare($query_appel);
            $statement->execute();
            while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
                $data_appel[] = $row;
            }
            
            // Répondre avec les données récupérées
            echo json_encode($data_appel);
           }

           // loisir
           elseif ($action == 'loisir') {
            $data_appel = array();
            $query_appel = "SELECT * FROM `gdclr`";
            $statement = $connect->prepare($query_appel);
            $statement->execute();
            while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
                $data_appel[] = $row;
            }
            
            // Répondre avec les données récupérées
            echo json_encode($data_appel);
           }

            // outils
            elseif ($action == 'outils') {
                $data_appel = array();
                $query_appel = "SELECT * FROM `gdcos27`";
                $statement = $connect->prepare($query_appel);
                $statement->execute();
                while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
                    $data_appel[] = $row;
                }
                
                // Répondre avec les données récupérées
                echo json_encode($data_appel);
               }
    } else if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
        
        // Récupération des données du formulaire
        $lib_ao = $data['champ_appel']['lib_ao'];

                // Supprimer une profession
        if ($action == 'supprimer_profession') {
            // Récupérer l'ID de la profession à supprimer à partir des paramètres de requête
            $id_profession = $_GET['id_profession'];

            // Préparation de la requête SQL
            $sql = "DELETE FROM `gdcpn02` WHERE id_profession = :id_profession";

            // Exécution de la requête SQL
            $stmt = $connect->prepare($sql);
            $stmt->execute([':id_profession' => $id_profession]);

            // Réponse JSON
            echo json_encode(array("success" => true, "message" => "Profession supprimée avec succès"));
        }
        
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
