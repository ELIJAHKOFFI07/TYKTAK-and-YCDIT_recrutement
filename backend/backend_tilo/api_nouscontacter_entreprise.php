<?php
include "./connexion_bdd.php";
require_once '../backend_tilo/mail.php'; // Ajustez le chemin
header("Content-type: application/json");
// Gestion CORS, peut être ajustée ou supprimée selon votre configuration serveur
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 1000');
}
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
    }

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
        header("Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization");
    }
    exit(0);
}

$res = ['error' => false];
$action = '';

if (isset($_GET['action'])) {
    $action = $_GET['action'];
}

if ($action == 'login') {

    $nom_entreprise = $_POST['nom_entreprise'] ?? '';
    $email = $_POST['email'] ?? '';  
    $contact = $_POST['contact'] ?? '';
    $secteur = $_POST['secteur'] ?? '';
    $localisation = $_POST['localisation'] ?? '';

    

    // Générer l'ID
    $prefixNomEntreprise = substr($nom_entreprise, 0, 3);
    $suffixContact = substr(str_pad($contact, 2, "0", STR_PAD_LEFT), -2);
    $prefixEmail = substr($email, 0, 2);
    $id = 'cli' . $prefixNomEntreprise . $suffixContact . $prefixEmail;

    $mdp = "000";
    $nbre_poste = 5;



    $subject = "Bienvenue chez Nous";
    $message = "Bonjour <b>$nom_entreprise</b>,<br><br>Bienvenue! Pour votre premiere connexion, veuillez utiliser comme pseudo : $id et comme mot de passe 000. <br> Cependant apres votre connexion, modifiez au plus vite votre mot de passe pour des questions de securite. .<br><br>Cordialement,<br>L'équipe.";

    // Créer une instance de la classe Mail et envoyer l'email
    $mail = new \controller\Mail($email,$subject,$message);
    // $mail = new \controller\Mail($to, $subject, $message);
    if($mail->send()) {
        // Si l'email est envoyé avec succès, procéder à l'insertion dans la base de données
        try {
            $sql = "INSERT INTO gdcee19(idEntreprise,mot_de_passe, libEntreprise, telephone_entreprise, localisation_entreprise, secteur_dactivite_entreprise, email_entreprise,nombre_dappel_doffre_restant) VALUES (?, ?, ?, ?, ?, ?,?,?)";
            $stmt = $pdo->prepare($sql);
            if ($stmt->execute([$id, $mdp, $nom_entreprise, $contact, $localisation, $secteur, $email,$nbre_poste])) {
                $res['message'] = "User Added Successfully";
            } else {
                $res['error'] = true;
                $res['message'] = "Insertion failed after sending email.";
            }
        } catch (PDOException $e) {
            $res['error'] = true;
            $res['message'] = "Something Went Wrong: " . $e->getMessage();
        }
    } else {
        // Si l'envoi de l'email échoue, renvoyer une erreur
        $res['error'] = true;
        $res['message'] = "Failed to send email.";
    }
}

if ($action == 'connexion') {
    session_start();
    $pseudo = $_POST['pseudo'] ?? '';
    $mdp = $_POST['mdp'] ?? '';  

    // Remplacez par votre logique de sélection dans la base de données
    try {
        // Requête pour vérifier l'existence du pseudo et du mot de passe
        $sql = "SELECT * FROM gdcee19 WHERE idEntreprise = ? AND mot_de_passe = ?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$pseudo, $mdp]);
        $user = $stmt->fetch();
        

        if ($user) {
            $etat;
            if(substr($pseudo, 0, 2) == "cl"){
                $etat = 1;
            }else if(substr($pseudo, 0, 2) == "ad"){
                $etat = 2;
            }else if(substr($pseudo, 0, 2) == "ca"){
                $etat = 3;
            }else{
                $etat = 0;
            }

            $action = "connexion";
            
            date_default_timezone_set('Africa/Abidjan');

            // Récupérer la date et l'heure actuelles
            $dateEtHeure = date('Y-m-d H:i:s');

            $sqlmsg = "INSERT INTO gdcme (nom, date_heure, action) VALUES (?, ?, ?)";
            $sqlmsgt = $pdo->prepare($sqlmsg);
            $sqlmsgt->execute([$pseudo,$dateEtHeure, $action]);








            // Vous pouvez ici aussi démarrer une session et enregistrer les informations de l'utilisateur
            $_SESSION['user'] = [
                'id' => $user['idEntreprise'], // Assurez-vous que le nom de colonne correspond à votre BD
                'email' => $user['email_entreprise'], // Exemple, ajustez selon votre BD
                'nom' => $user['libEntreprise'],
                'telephone' => $user['telephone_entreprise'],
                'localisation' => $user['localisation_entreprise'],
                'secteur' => $user['secteur_dactivite_entreprise'],
                'nombre_app' => $user['nombre_dappel_doffre_restant'],
                // Ajoutez d'autres champs au besoin
            ];
            $res = [
                'success' => true, 
                'message' => "Connexion réussie.",
                'user' => $_SESSION['user'], // Inclure les informations de l'utilisateur dans la réponse
                'etat' => $etat
            ];
        } else {
            // Utilisateur non trouvé, préparer et envoyer une réponse JSON d'échec
            $res = ['success' => false, 'message' => "Pseudo ou mot de passe incorrect."];
            
        }
    } catch (PDOException $e) {
        
        $res = ['error' => true, 'message' => "Erreur lors de la connexion : " . $e->getMessage()];
    }
    
    echo json_encode($res);
    exit();
}





if ($action == 'modifier_1') {
    session_start();

    // Vérifier si l'utilisateur est connecté et a une session valide
    // if (!isset($_SESSION['user'])) {
    //     echo json_encode(['success' => false, 'message' => 'Utilisateur non connecté.']);
    //     exit;
    // }

    // Récupération des données envoyées
    $nom_entreprise = $_POST['nom_entreprise'] ?? '';
    $email = $_POST['email'] ?? '';
    $contact = $_POST['contact'] ?? '';
    $secteur = $_POST['secteur'] ?? '';
    $localisation = $_POST['localisation'] ?? '';
    // $userId = $_SESSION['user']['id']; 
    // ou une autre clé unique associée à l'utilisateur
    $userId = $_POST['userId'];

    // Préparation de la requête SQL pour la mise à jour
    $sql = "UPDATE gdcee19 SET 
                libEntreprise = :nom_entreprise, 
                email_entreprise = :email, 
                telephone_entreprise = :contact, 
                secteur_dactivite_entreprise = :secteur, 
                localisation_entreprise = :localisation
            WHERE idEntreprise = :userId";

    try {
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':nom_entreprise' => $nom_entreprise,
            ':email' => $email,
            ':contact' => $contact,
            ':secteur' => $secteur,
            ':localisation' => $localisation,
            ':userId' => $userId
        ]);

        $action = "modification des informations personnelles";
            
            date_default_timezone_set('Africa/Abidjan');

            // Récupérer la date et l'heure actuelles
            $dateEtHeure = date('Y-m-d H:i:s');

            $sqlmsg = "INSERT INTO gdcme (nom, date_heure, action) VALUES (?, ?, ?)";
            $sqlmsgt = $pdo->prepare($sqlmsg);
            $sqlmsgt->execute([$nom_entreprise,$dateEtHeure, $action]);



        echo json_encode(['success' => true, 'message' => 'Informations mises à jour avec succès.']);

    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => "Erreur lors de la mise à jour : " . $e->getMessage()]);
    }
    exit;
}





if ($action == 'modifier_3') {
    session_start();


    // Récupération des données envoyées
    $ancien_mdp = $_POST['ancien_mdp'] ?? '';
    $nouveau_mdp = $_POST['nouveau_mdp'] ?? '';
    // $userId = $_SESSION['user']['id']; 
    // ou une autre clé unique associée à l'utilisateur
    $userId = $_POST['userId'];

    // Vérifier l'ancien mot de passe
    try {
        $sql = "SELECT mot_de_passe FROM gdcee19 WHERE idEntreprise = ?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$userId]);
        $user = $stmt->fetch();

        if ($user && $ancien_mdp == $user['mot_de_passe']) {
            // Ancien mot de passe correct, procéder à la mise à jour
            // $nouveau_mdp_hash = password_hash($nouveau_mdp, PASSWORD_DEFAULT);

            $sqlUpdate = "UPDATE gdcee19 SET mot_de_passe = ? WHERE idEntreprise = ?";
            $stmtUpdate = $pdo->prepare($sqlUpdate);
            if ($stmtUpdate->execute([$nouveau_mdp, $userId])) {







                $sql = "SELECT libEntreprise FROM gdcee19 WHERE idEntreprise = :idEntreprise";
                $stmt = $pdo->prepare($sql);
                $stmt->execute([':idEntreprise' => $userId]);
                $entreprise = $stmt->fetch(PDO::FETCH_ASSOC);
                $nomEntreprise = $entreprise['libEntreprise'];
        
                $action = "Modification d'information personnelle";
                
                date_default_timezone_set('Africa/Abidjan');
        
                // Récupérer la date et l'heure actuelles
                $dateEtHeure = date('Y-m-d H:i:s');
        
                $sqlmsg = "INSERT INTO gdcme (nom, date_heure, action) VALUES (?, ?, ?)";
                $sqlmsgt = $pdo->prepare($sqlmsg);
                $sqlmsgt->execute([$nomEntreprise,$dateEtHeure, $action]);









                echo json_encode(['success' => true, 'message' => 'Mot de passe modifié avec succès.']);
            } else {
                echo json_encode(['success' => false, 'message' => 'Erreur lors de la modification du mot de passe.']);
            }
        } else {
            // Ancien mot de passe incorrect
            echo json_encode(['success' => false, 'message' => 'L\'ancien mot de passe est incorrect.']);
        }
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => "Erreur lors de la vérification : " . $e->getMessage()]);
    }
    exit;
}

if ($action == 'modifier_logo') {
    session_start();
    // Assurez-vous que le fichier a bien été envoyé
    // if (isset($_FILES['logo'])) {
        $userId = $_POST['userId']; // Supposons que userId est envoyé comme un champ de formulaire
        $file = $_FILES['logo'];
        $destinationPath = "logo/" . $file['name'];

        // Déplacer le fichier vers le dossier de destination
        if (move_uploaded_file($file['tmp_name'], $destinationPath)) {
            // Mettre à jour le chemin du logo dans la base de données
            $sqlUpdate = "UPDATE gdcee19 SET lien_logo = :lien_logo WHERE idEntreprise = :userId";
            $stmtUpdate = $pdo->prepare($sqlUpdate);
            if ($stmtUpdate->execute([':lien_logo' => $destinationPath, ':userId' => $userId])) {



                $sql = "SELECT libEntreprise FROM gdcee19 WHERE idEntreprise = :idEntreprise";
                $stmt = $pdo->prepare($sql);
                $stmt->execute([':idEntreprise' => $userId]);
                $entreprise = $stmt->fetch(PDO::FETCH_ASSOC);
                $nomEntreprise = $entreprise['libEntreprise'];
        
                $action = "Modification d'information personnelle";
                
                date_default_timezone_set('Africa/Abidjan');
        
                // Récupérer la date et l'heure actuelles
                $dateEtHeure = date('Y-m-d H:i:s');
        
                $sqlmsg = "INSERT INTO gdcme ( nom, date_heure, action) VALUES (?, ?, ?)";
                $sqlmsgt = $pdo->prepare($sqlmsg);
                $sqlmsgt->execute([$nomEntreprise,$dateEtHeure, $action]);


                
                echo json_encode(['success' => true, 'message' => 'Logo modifié avec succès.']);
            } else {
                echo json_encode(['success' => false, 'message' => 'Erreur lors de la modification du logo.']);
            }
        } else {
            // Erreur lors du déplacement du fichier
            echo json_encode(['success' => false, 'message' => 'Erreur lors de l\'importation du fichier.']);
        }
    } 




  if ($action == 'ajout_appel_offre') {
    session_start();

    $id_entreprise_connecte = $_POST['userId'];
    $nom = $_POST['userNom'];
    $secteur = $_POST['userSecteur'];

    // Requête SQL pour compter le nombre d'appels d'offre pour l'entreprise connectée
    $sql = "SELECT COUNT(*) FROM gdcae26 WHERE id_entreprise = :id_entreprise_connecte";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':id_entreprise_connecte', $id_entreprise_connecte, PDO::PARAM_STR);
    $stmt->execute();
    $nombreDeLignes = $stmt->fetchColumn();
    $nombreDeLignes_ajoute = $nombreDeLignes + 1;
    $id_appel_offre = $id_entreprise_connecte . "_" . $nombreDeLignes_ajoute;
    $date = date('Y-m-d');

    // Collecte des données à partir de POST     
    $date_cloture = $_POST['date'] ?? '';
    $age = $_POST['age'] ?? '';  
    $activite = $_POST['activite'] ?? '';
    $competence = $_POST['competence'] ?? '';
    $nbre_place = $_POST['nbre_place'] ?? '';
    $annee_exp = $_POST['annee_exp'] ?? '';
    $diplome = $_POST['diplome'] ?? '';
    $mission = $_POST['mission'] ?? '';
    $poste = $_POST['poste'] ?? '';
    $active = 0; // false en booléen, mais 0 pour SQL

    try {
        // Mettre à jour le nombre d'appels d'offre restants
        $sqlSelect = "SELECT nombre_dappel_doffre_restant FROM gdcee19 WHERE idEntreprise = :id_entreprise";
        $stmtSelect = $pdo->prepare($sqlSelect);
        $stmtSelect->execute([':id_entreprise' => $id_entreprise_connecte]);
        $resultSelect = $stmtSelect->fetch(PDO::FETCH_ASSOC);

        if ($resultSelect && $resultSelect['nombre_dappel_doffre_restant'] > 0 && $date_cloture > $date ) {

            // Insertion de l'appel d'offre
            $sqlInsert = "INSERT INTO gdcae26 (id_appel_doffre, id_entreprise, date_publication, date_cloture, age, activite_principale, competence, nombre_de_poste_disponible, anne_experience_requis, diplome_requis, mission, active,poste,nom_entreprise,secteur_entreprise) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            $stmtInsert = $pdo->prepare($sqlInsert);
            if ($stmtInsert->execute([$id_appel_offre, $id_entreprise_connecte, $date, $date_cloture, $age, $activite, $competence, $nbre_place, $annee_exp, $diplome, $mission, $active,$poste,$nom,$secteur])) {





                $action = "Enregistrement d'appel d'offre";
            
            date_default_timezone_set('Africa/Abidjan');

            // Récupérer la date et l'heure actuelles
            $dateEtHeure = date('Y-m-d H:i:s');

            $sqlmsg = "INSERT INTO gdcme (nom, date_heure, action) VALUES (?, ?, ?)";
            $sqlmsgt = $pdo->prepare($sqlmsg);
            $sqlmsgt->execute([$nom,$dateEtHeure, $action]);




                $res = ['success' => true, 'message' => "Enregistrement avec succès"];
                

                $nouvelleValeur = $resultSelect['nombre_dappel_doffre_restant'] - 1;

                $sqlUpdate = "UPDATE gdcee19 SET nombre_dappel_doffre_restant = :nouvelleValeur WHERE idEntreprise = :id_entreprise";
            $stmtUpdate = $pdo->prepare($sqlUpdate);
            $stmtUpdate->execute([
                ':nouvelleValeur' => $nouvelleValeur,
                ':id_entreprise' => $id_entreprise_connecte
            ]);



            } else {
                $res = ['success' => false, 'message' => "erreur"];
                
            }
        } else {
            $res = ['success' => false, 'message' => "veuillez faire un paiement pour augmenter le nombre  d'appel d'offre"] ;
        }
    } catch (PDOException $e) {
        $res = ['success' => false, 'message' => "Erreur: " . $e->getMessage()];
    }

    echo json_encode($res);
}




if ($action == 'paiement') {
    session_start();

    $id_entreprise_connecte = $_POST['userId'];
    $type = $_POST['type'] ?? '';
    

   // Déterminer la valeur à ajouter en fonction du type d'abonnement
   $ajout = 0; // Valeur par défaut
   switch ($type) {
       case '1':
           $ajout = 6;
           break;
       case '2':
           $ajout = 20;
           break;
       case '3':
           $ajout = 40;
           break;
       default:
           $res = ['success' => false, 'message' => "Type de paiement invalide."];
           echo json_encode($res);
           exit;
   }

   try {
       // Récupérer la valeur actuelle de nombre_dappel_doffre_restant
       $sqlSelect = "SELECT nombre_dappel_doffre_restant FROM gdcee19 WHERE idEntreprise = :id_entreprise";
       $stmtSelect = $pdo->prepare($sqlSelect);
       $stmtSelect->execute([':id_entreprise' => $id_entreprise_connecte]);
       $result = $stmtSelect->fetch(PDO::FETCH_ASSOC);

       if ($result) {
           // Calculer la nouvelle valeur
           $nouvelleValeur = $result['nombre_dappel_doffre_restant'] + $ajout;

           // Mettre à jour la base de données avec la nouvelle valeur
           $sqlUpdate = "UPDATE gdcee19 SET nombre_dappel_doffre_restant = :nouvelleValeur WHERE idEntreprise = :id_entreprise";
           $stmtUpdate = $pdo->prepare($sqlUpdate);
           $stmtUpdate->execute([
               ':nouvelleValeur' => $nouvelleValeur,
               ':id_entreprise' => $id_entreprise_connecte
           ]);



           $sql = "SELECT nombre_dappel_doffre_restant FROM gdcee19 WHERE idEntreprise = :userId";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':userId', $id_entreprise_connecte, PDO::PARAM_STR);

            $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);






        $sql = "SELECT libEntreprise FROM gdcee19 WHERE idEntreprise = :idEntreprise";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([':idEntreprise' => $id_entreprise_connecte]);
        $entreprise = $stmt->fetch(PDO::FETCH_ASSOC);
        $nomEntreprise = $entreprise['libEntreprise'];

        $action = "Paiement dun abonnement tiktak";
        
        date_default_timezone_set('Africa/Abidjan');

        // Récupérer la date et l'heure actuelles
        $dateEtHeure = date('Y-m-d H:i:s');

        $sqlmsg = "INSERT INTO gdcme (nom, date_heure, action) VALUES (?, ?, ?)";
        $sqlmsgt = $pdo->prepare($sqlmsg);
        $sqlmsgt->execute([$nomEntreprise,$dateEtHeure, $action]);








           $res = ['success' => true, 'message' => "Le nombre d'appels d'offre restants a été mis à jour.", 'nombreAppelsOffreRestants' => (int)$result['nombre_dappel_doffre_restant']];
       } else {
           $res = ['success' => false, 'message' => "Impossible de trouver l'entreprise spécifiée."];
       }
   } catch (PDOException $e) {
       $res = ['success' => false, 'message' => "Erreur: " . $e->getMessage()];
   }

   echo json_encode($res);
}






if ($action == 'getNombreAppels') {
    session_start();

    $id_entreprise_connecte = $_POST['userId'];
    
    $sql = "SELECT nombre_dappel_doffre_restant FROM gdcee19 WHERE idEntreprise = :userId";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':userId', $id_entreprise_connecte, PDO::PARAM_STR);

    try {
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($result) {
            echo json_encode(['success' => true, 'nombreAppelsOffreRestants' => (int)$result['nombre_dappel_doffre_restant']]);
            
        } else {
            echo json_encode(['success' => false, 'message' => "L'entreprise spécifiée n'a pas été trouvée."]);
            
        }

    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => "Erreur de base de données: " . $e->getMessage()]);
        
    }


} 









if ($action == 'voir_appel') {
    session_start();
  
    // Assurez-vous que le fichier a bien été envoyé
    // if (isset($_FILES['logo'])) {
  
      if (!isset($_POST['userId'])) {
        echo json_encode(['success' => false, 'message' => "Le champ userId est requis."]);
        exit;
      }
  
      $userId_entreprise = $_POST['userId']; // Supposons que userId est envoyé comme un champ de formulaire
  
      try {
  
        $stmt = $pdo->prepare("SELECT * FROM gdcae26 WHERE id_entreprise = :userId");
        $stmt->execute(['userId' => $userId_entreprise]);
  
        $offres_liste = $stmt->fetchAll(PDO::FETCH_ASSOC);
  
        if ($offres_liste) {
          echo json_encode(['success' => true, 'offres' => $offres_liste]);
        } else {
          echo json_encode(['success' => false, 'message' => "Aucune offre trouvée pour cet utilisateur."]);
        }
  
      } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => "Erreur de base de données: " . $e->getMessage()]);
      }
      exit;
    }



    
if ($action == 'supprimer_appel') {
    session_start();
  
    // Vérifiez que tous les champs nécessaires sont présents
    if (!isset($_POST['userId'], $_POST['idOffre'])) {
        echo json_encode(['success' => false, 'message' => "Le champ userId et idOffre sont requis."]);
        exit;
    }
  
    $userId_entreprise = $_POST['userId'];
    $idOffre = $_POST['idOffre'];
  
    try {
        // Préparez la requête de suppression
        $stmt = $pdo->prepare("DELETE FROM gdcae26 WHERE id_entreprise = :userId AND id_appel_doffre = :idOffre");
        $stmt->execute(['userId' => $userId_entreprise, 'idOffre' => $idOffre]);
  
        if ($stmt->rowCount() > 0) {

            $sql = "SELECT libEntreprise FROM gdcee19 WHERE idEntreprise = :idEntreprise";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([':idEntreprise' => $userId_entreprise]);
            $entreprise = $stmt->fetch(PDO::FETCH_ASSOC);
            $nomEntreprise = $entreprise['libEntreprise'];

            $action = "Suppression d'un appel d'offre";
            
            date_default_timezone_set('Africa/Abidjan');

            // Récupérer la date et l'heure actuelles
            $dateEtHeure = date('Y-m-d H:i:s');

            $sqlmsg = "INSERT INTO gdcme (nom, date_heure, action) VALUES (?, ?, ?)";
            $sqlmsgt = $pdo->prepare($sqlmsg);
            $sqlmsgt->execute([$nomEntreprise,$dateEtHeure, $action]);







            echo json_encode(['success' => true, 'message' => "L'offre a été supprimée avec succès."]);
        } else {
            echo json_encode(['success' => false, 'message' => "Aucune offre trouvée avec cet ID pour l'utilisateur."]);
        }
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => "Erreur de base de données: " . $e->getMessage()]);
    }
    exit;
}
  


    if ($action == 'filtre_appel_offre') {
        if(!empty($_POST['nom_entreprise'])){
            $sql = "SELECT * FROM gdcae26 WHERE nom_entreprise LIKE '%query%'";
        }else{
            $sql = "SELECT * FROM gdcae26";
        }


    $stmt = $pdo->prepare($sql);


    $stmt->execute();
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($results);
        
        }
    



$pdo = null;
header("Content-type: application/json");
header('Access-Control-Allow-Origin: *');
// echo json_encode($res);
die();
