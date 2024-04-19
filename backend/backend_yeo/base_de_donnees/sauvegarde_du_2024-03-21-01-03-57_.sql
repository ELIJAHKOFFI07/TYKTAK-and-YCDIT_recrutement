-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: gdc
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `gdcae20`
--

DROP TABLE IF EXISTS `gdcae20`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdcae20` (
  `idcandidat` int NOT NULL,
  `idSM` int NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`idcandidat`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdcae20`
--

LOCK TABLES `gdcae20` WRITE;
/*!40000 ALTER TABLE `gdcae20` DISABLE KEYS */;
/*!40000 ALTER TABLE `gdcae20` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdcae26`
--

DROP TABLE IF EXISTS `gdcae26`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdcae26` (
  `id_appel_doffre` varchar(255) NOT NULL,
  `lib_appel_doffre` varchar(255) NOT NULL,
  `date_publication` date NOT NULL,
  `date_cloture` date NOT NULL,
  `nombre_de_poste_disponible` int NOT NULL,
  `anne_experience_requis` int NOT NULL,
  `diplome_requis` varchar(255) NOT NULL,
  `domaine` varchar(100) NOT NULL,
  `specialite` varchar(100) NOT NULL,
  `mission_du_poste` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `contrat` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdcae26`
--

LOCK TABLES `gdcae26` WRITE;
/*!40000 ALTER TABLE `gdcae26` DISABLE KEYS */;
INSERT INTO `gdcae26` VALUES ('AO361','Developpeur Senior','0000-00-00','2024-03-30',2,3,'licence','Gestionnaire','Ecrivain','etre le responsable des devs d\'une entreprise','CDD'),('AO190','manager d\'equipe','0000-00-00','2024-03-30',4,5,'licence','Informatique','Ecrivain','gerer des equipes','CDI'),('AO348','chef d\'entrerprises','0000-00-00','2024-03-30',2,3,'Master','Gestionnaire','Ecrivain','gerer l\'entreprise','CDD'),('AO291','cecefe','0000-00-00','2024-03-30',4,4,'bac','Gestionnaire','Developpeur','dkzdz','CDI');
/*!40000 ALTER TABLE `gdcae26` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdccc28`
--

DROP TABLE IF EXISTS `gdccc28`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdccc28` (
  `id_compte_comptable` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdccc28`
--

LOCK TABLES `gdccc28` WRITE;
/*!40000 ALTER TABLE `gdccc28` DISABLE KEYS */;
/*!40000 ALTER TABLE `gdccc28` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdcce31`
--

DROP TABLE IF EXISTS `gdcce31`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdcce31` (
  `id_chapitre` varchar(255) NOT NULL,
  `lib_chapitre` varchar(255) NOT NULL,
  `id_page` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdcce31`
--

LOCK TABLES `gdcce31` WRITE;
/*!40000 ALTER TABLE `gdcce31` DISABLE KEYS */;
/*!40000 ALTER TABLE `gdcce31` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdcde05`
--

DROP TABLE IF EXISTS `gdcde05`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdcde05` (
  `id_diplome` varchar(8) NOT NULL,
  `lib_diplome` int NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdcde05`
--

LOCK TABLES `gdcde05` WRITE;
/*!40000 ALTER TABLE `gdcde05` DISABLE KEYS */;
INSERT INTO `gdcde05` VALUES ('DP001',0),('DP002',0),('DP003',0),('DP004',0),('DP005',0),('DP006',0),('DP007',0),('DP008',0);
/*!40000 ALTER TABLE `gdcde05` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdcee11`
--

DROP TABLE IF EXISTS `gdcee11`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdcee11` (
  `id_employe` int NOT NULL,
  `lib_employe` varchar(255) NOT NULL,
  `numero_securite_sociale` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdcee11`
--

LOCK TABLES `gdcee11` WRITE;
/*!40000 ALTER TABLE `gdcee11` DISABLE KEYS */;
/*!40000 ALTER TABLE `gdcee11` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdcee19`
--

DROP TABLE IF EXISTS `gdcee19`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdcee19` (
  `idEntreprise` varchar(8) NOT NULL,
  `libEntreprise` varchar(255) NOT NULL,
  `telephone_entreprise` varchar(255) NOT NULL,
  `pays_entreprise` varchar(50) NOT NULL,
  `localisation_entreprise` varchar(255) NOT NULL,
  `secteur_dactivite_entreprise` varchar(255) NOT NULL,
  `email_entreprise` varchar(255) NOT NULL,
  `nombre_dappel_doffre_restant` int NOT NULL,
  `valide` tinyint(1) NOT NULL,
  `lien_logo` varchar(25) NOT NULL,
  `mot_de_passe` varchar(400) NOT NULL,
  PRIMARY KEY (`idEntreprise`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdcee19`
--

LOCK TABLES `gdcee19` WRITE;
/*!40000 ALTER TABLE `gdcee19` DISABLE KEYS */;
INSERT INTO `gdcee19` VALUES ('0','122','cece','',' z z','ccz','czcz',0,0,'','cecece'),('jasa','Samira','','','','','',0,0,'','');
/*!40000 ALTER TABLE `gdcee19` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdcet04`
--

DROP TABLE IF EXISTS `gdcet04`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdcet04` (
  `id_etablissement` int NOT NULL,
  `lib_etablissement` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `id_ville` int NOT NULL,
  `id_pays` int NOT NULL,
  PRIMARY KEY (`id_etablissement`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdcet04`
--

LOCK TABLES `gdcet04` WRITE;
/*!40000 ALTER TABLE `gdcet04` DISABLE KEYS */;
/*!40000 ALTER TABLE `gdcet04` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdcge08`
--

DROP TABLE IF EXISTS `gdcge08`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdcge08` (
  `id_genre` varchar(8) NOT NULL,
  `lib_genre` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`id_genre`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdcge08`
--

LOCK TABLES `gdcge08` WRITE;
/*!40000 ALTER TABLE `gdcge08` DISABLE KEYS */;
INSERT INTO `gdcge08` VALUES ('GE0001','Masculin'),('GE0002','Feminin');
/*!40000 ALTER TABLE `gdcge08` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdcgr09`
--

DROP TABLE IF EXISTS `gdcgr09`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdcgr09` (
  `id_groupe_utilisateur` varchar(8) NOT NULL,
  `lib_groupe_utilisateur` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdcgr09`
--

LOCK TABLES `gdcgr09` WRITE;
/*!40000 ALTER TABLE `gdcgr09` DISABLE KEYS */;
INSERT INTO `gdcgr09` VALUES ('GRP001','administrateur'),('GRP002','comptable');
/*!40000 ALTER TABLE `gdcgr09` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdci25`
--

DROP TABLE IF EXISTS `gdci25`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdci25` (
  `id_cni` varchar(255) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenoms` varchar(255) NOT NULL,
  `profession` varchar(255) NOT NULL,
  `date_naissance` varchar(255) NOT NULL,
  `lieu_naissance` varchar(255) NOT NULL,
  `sexe` varchar(255) NOT NULL,
  `lien_image` varchar(255) NOT NULL,
  `taille` varchar(255) NOT NULL,
  `id_pays` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdci25`
--

LOCK TABLES `gdci25` WRITE;
/*!40000 ALTER TABLE `gdci25` DISABLE KEYS */;
/*!40000 ALTER TABLE `gdci25` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdcle30`
--

DROP TABLE IF EXISTS `gdcle30`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdcle30` (
  `id_livre` varchar(255) NOT NULL,
  `id_chapitre` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdcle30`
--

LOCK TABLES `gdcle30` WRITE;
/*!40000 ALTER TABLE `gdcle30` DISABLE KEYS */;
/*!40000 ALTER TABLE `gdcle30` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdcloisir05`
--

DROP TABLE IF EXISTS `gdcloisir05`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdcloisir05` (
  `idLoisir` int NOT NULL,
  `libLoisir` varchar(255) NOT NULL,
  PRIMARY KEY (`idLoisir`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdcloisir05`
--

LOCK TABLES `gdcloisir05` WRITE;
/*!40000 ALTER TABLE `gdcloisir05` DISABLE KEYS */;
/*!40000 ALTER TABLE `gdcloisir05` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdclr`
--

DROP TABLE IF EXISTS `gdclr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdclr` (
  `id_loisir` varchar(8) NOT NULL,
  `lib_loisir` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdclr`
--

LOCK TABLES `gdclr` WRITE;
/*!40000 ALTER TABLE `gdclr` DISABLE KEYS */;
INSERT INTO `gdclr` VALUES ('LR001','dance');
/*!40000 ALTER TABLE `gdclr` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdclr21`
--

DROP TABLE IF EXISTS `gdclr21`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdclr21` (
  `id_loisir_preferer` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdclr21`
--

LOCK TABLES `gdclr21` WRITE;
/*!40000 ALTER TABLE `gdclr21` DISABLE KEYS */;
/*!40000 ALTER TABLE `gdclr21` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdcltest22`
--

DROP TABLE IF EXISTS `gdcltest22`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdcltest22` (
  `idLivre` int NOT NULL,
  `LibLivreTest` varchar(255) NOT NULL,
  `nbPage` int NOT NULL,
  PRIMARY KEY (`idLivre`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdcltest22`
--

LOCK TABLES `gdcltest22` WRITE;
/*!40000 ALTER TABLE `gdcltest22` DISABLE KEYS */;
/*!40000 ALTER TABLE `gdcltest22` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdcne`
--

DROP TABLE IF EXISTS `gdcne`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdcne` (
  `id_nationalite` int NOT NULL,
  `lib_nationalite` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdcne`
--

LOCK TABLES `gdcne` WRITE;
/*!40000 ALTER TABLE `gdcne` DISABLE KEYS */;
/*!40000 ALTER TABLE `gdcne` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdcoe22`
--

DROP TABLE IF EXISTS `gdcoe22`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdcoe22` (
  `id_obtenir_diplome` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdcoe22`
--

LOCK TABLES `gdcoe22` WRITE;
/*!40000 ALTER TABLE `gdcoe22` DISABLE KEYS */;
/*!40000 ALTER TABLE `gdcoe22` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdcoe23`
--

DROP TABLE IF EXISTS `gdcoe23`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdcoe23` (
  `id_occuper_poste` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdcoe23`
--

LOCK TABLES `gdcoe23` WRITE;
/*!40000 ALTER TABLE `gdcoe23` DISABLE KEYS */;
/*!40000 ALTER TABLE `gdcoe23` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdcos27`
--

DROP TABLE IF EXISTS `gdcos27`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdcos27` (
  `id_outils` varchar(255) NOT NULL,
  `lib_outils` varchar(255) NOT NULL,
  `id_profession` varchar(8) NOT NULL,
  KEY `fk_outils_profession` (`id_profession`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdcos27`
--

LOCK TABLES `gdcos27` WRITE;
/*!40000 ALTER TABLE `gdcos27` DISABLE KEYS */;
INSERT INTO `gdcos27` VALUES ('OS001','Photoshop','PN001');
/*!40000 ALTER TABLE `gdcos27` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdcpe07`
--

DROP TABLE IF EXISTS `gdcpe07`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdcpe07` (
  `id_poste` varchar(8) NOT NULL,
  `lib_poste` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`id_poste`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdcpe07`
--

LOCK TABLES `gdcpe07` WRITE;
/*!40000 ALTER TABLE `gdcpe07` DISABLE KEYS */;
INSERT INTO `gdcpe07` VALUES ('PE001','Directeur'),('PE002','Commercial');
/*!40000 ALTER TABLE `gdcpe07` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdcpe32`
--

DROP TABLE IF EXISTS `gdcpe32`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdcpe32` (
  `id_page` varchar(255) NOT NULL,
  `lib_page` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdcpe32`
--

LOCK TABLES `gdcpe32` WRITE;
/*!40000 ALTER TABLE `gdcpe32` DISABLE KEYS */;
/*!40000 ALTER TABLE `gdcpe32` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdcpe34`
--

DROP TABLE IF EXISTS `gdcpe34`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdcpe34` (
  `id_proposition_reponse` varchar(255) NOT NULL,
  `lib_proposition_reponse` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdcpe34`
--

LOCK TABLES `gdcpe34` WRITE;
/*!40000 ALTER TABLE `gdcpe34` DISABLE KEYS */;
/*!40000 ALTER TABLE `gdcpe34` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdcpi24`
--

DROP TABLE IF EXISTS `gdcpi24`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdcpi24` (
  `id_posseder_cni` varchar(255) NOT NULL,
  `id_cni` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdcpi24`
--

LOCK TABLES `gdcpi24` WRITE;
/*!40000 ALTER TABLE `gdcpi24` DISABLE KEYS */;
/*!40000 ALTER TABLE `gdcpi24` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdcpn02`
--

DROP TABLE IF EXISTS `gdcpn02`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdcpn02` (
  `id_profession` varchar(8) NOT NULL,
  `lib_Profession` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  KEY `idx_id_profession` (`id_profession`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdcpn02`
--

LOCK TABLES `gdcpn02` WRITE;
/*!40000 ALTER TABLE `gdcpn02` DISABLE KEYS */;
INSERT INTO `gdcpn02` VALUES ('','Informaticien'),('PN001','Informaticien'),('PN001','Ingénieur logiciel'),('PN002','Développeur web'),('PN003','Architecte système'),('PN004','Analyste financier'),('PN005','Assistant médical'),('PN006','Enseignant primaire'),('PN007','Conseiller financier'),('PN008','Designer graphique'),('PN009','Technicien en informatique'),('PN010','Infirmière auxiliaire'),('PN001','Ingénieur logiciel'),('PN002','Développeur web'),('PN003','Architecte système'),('PN004','Analyste financier'),('PN005','Assistant médical'),('PN006','Enseignant primaire'),('PN007','Conseiller financier'),('PN008','Designer graphique'),('PN009','Technicien en informatique'),('PN010','Infirmière auxiliaire');
/*!40000 ALTER TABLE `gdcpn02` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdcps01`
--

DROP TABLE IF EXISTS `gdcps01`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdcps01` (
  `id_pays` int NOT NULL AUTO_INCREMENT,
  `lib_c1_Pays` int NOT NULL,
  `lib_c2_Pays` int NOT NULL,
  `lib_Pays` int NOT NULL,
  PRIMARY KEY (`id_pays`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdcps01`
--

LOCK TABLES `gdcps01` WRITE;
/*!40000 ALTER TABLE `gdcps01` DISABLE KEYS */;
/*!40000 ALTER TABLE `gdcps01` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdcptest21`
--

DROP TABLE IF EXISTS `gdcptest21`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdcptest21` (
  `idPage` int NOT NULL,
  `Numpage` int NOT NULL,
  `idTest` int NOT NULL,
  PRIMARY KEY (`idPage`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdcptest21`
--

LOCK TABLES `gdcptest21` WRITE;
/*!40000 ALTER TABLE `gdcptest21` DISABLE KEYS */;
/*!40000 ALTER TABLE `gdcptest21` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdcqn33`
--

DROP TABLE IF EXISTS `gdcqn33`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdcqn33` (
  `id_question` varchar(255) NOT NULL,
  `type_question` varchar(255) NOT NULL,
  `enonce_question` varchar(255) NOT NULL,
  `lib_question` varchar(255) NOT NULL,
  `niveau_difficule` varchar(255) NOT NULL,
  `bonne_reponse` varchar(255) NOT NULL,
  `id_proposition_reponse` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdcqn33`
--

LOCK TABLES `gdcqn33` WRITE;
/*!40000 ALTER TABLE `gdcqn33` DISABLE KEYS */;
/*!40000 ALTER TABLE `gdcqn33` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdcqtest20`
--

DROP TABLE IF EXISTS `gdcqtest20`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdcqtest20` (
  `idQuestion` int NOT NULL,
  `LibQuestion` varchar(255) NOT NULL,
  `idPage` int NOT NULL,
  PRIMARY KEY (`idQuestion`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdcqtest20`
--

LOCK TABLES `gdcqtest20` WRITE;
/*!40000 ALTER TABLE `gdcqtest20` DISABLE KEYS */;
/*!40000 ALTER TABLE `gdcqtest20` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdcre13`
--

DROP TABLE IF EXISTS `gdcre13`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdcre13` (
  `id_responsabilite` int NOT NULL,
  `lib_responsabilite` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdcre13`
--

LOCK TABLES `gdcre13` WRITE;
/*!40000 ALTER TABLE `gdcre13` DISABLE KEYS */;
/*!40000 ALTER TABLE `gdcre13` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdcse04`
--

DROP TABLE IF EXISTS `gdcse04`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdcse04` (
  `id_specialite` int NOT NULL,
  `lib_specialite` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `id_profession` varchar(8) NOT NULL,
  PRIMARY KEY (`id_specialite`),
  KEY `fk_diplome_profession` (`id_profession`),
  CONSTRAINT `fk_diplome_profession` FOREIGN KEY (`id_profession`) REFERENCES `gdcpn02` (`id_profession`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdcse04`
--

LOCK TABLES `gdcse04` WRITE;
/*!40000 ALTER TABLE `gdcse04` DISABLE KEYS */;
/*!40000 ALTER TABLE `gdcse04` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdcsm03`
--

DROP TABLE IF EXISTS `gdcsm03`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdcsm03` (
  `id_situation_matrimoniale` varchar(8) NOT NULL,
  `lib_situation_matrimoniale` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdcsm03`
--

LOCK TABLES `gdcsm03` WRITE;
/*!40000 ALTER TABLE `gdcsm03` DISABLE KEYS */;
INSERT INTO `gdcsm03` VALUES ('SMMR001','Marié(é)'),('SMMR002','Divorcé(é)'),('SMVE003','Veuf(ve)');
/*!40000 ALTER TABLE `gdcsm03` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdct18`
--

DROP TABLE IF EXISTS `gdct18`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdct18` (
  `id_candidat` int NOT NULL,
  `mot_de_passe_candidat` varchar(255) NOT NULL,
  `numero_candidat` varchar(255) NOT NULL,
  `id_cv` int NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdct18`
--

LOCK TABLES `gdct18` WRITE;
/*!40000 ALTER TABLE `gdct18` DISABLE KEYS */;
INSERT INTO `gdct18` VALUES (1,'cecececece','CD001',1),(2,'12345','CD0002',2);
/*!40000 ALTER TABLE `gdct18` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdctc13`
--

DROP TABLE IF EXISTS `gdctc13`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdctc13` (
  `id_type_de_compte` int NOT NULL,
  `lib_type_de_compte` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdctc13`
--

LOCK TABLES `gdctc13` WRITE;
/*!40000 ALTER TABLE `gdctc13` DISABLE KEYS */;
/*!40000 ALTER TABLE `gdctc13` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdctn16`
--

DROP TABLE IF EXISTS `gdctn16`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdctn16` (
  `id_type_de_question` varchar(8) NOT NULL,
  `lib_type_de_question` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdctn16`
--

LOCK TABLES `gdctn16` WRITE;
/*!40000 ALTER TABLE `gdctn16` DISABLE KEYS */;
INSERT INTO `gdctn16` VALUES ('TQ001','Choix multiple');
/*!40000 ALTER TABLE `gdctn16` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdctt06`
--

DROP TABLE IF EXISTS `gdctt06`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdctt06` (
  `id_type_contrat` varchar(8) NOT NULL,
  `lib_type_contrat` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`id_type_contrat`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdctt06`
--

LOCK TABLES `gdctt06` WRITE;
/*!40000 ALTER TABLE `gdctt06` DISABLE KEYS */;
INSERT INTO `gdctt06` VALUES ('TP001','CDI');
/*!40000 ALTER TABLE `gdctt06` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdctt15`
--

DROP TABLE IF EXISTS `gdctt15`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdctt15` (
  `idTypeTest` int NOT NULL,
  `LibTypeTest` varchar(255) NOT NULL,
  PRIMARY KEY (`idTypeTest`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdctt15`
--

LOCK TABLES `gdctt15` WRITE;
/*!40000 ALTER TABLE `gdctt15` DISABLE KEYS */;
/*!40000 ALTER TABLE `gdctt15` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdcur`
--

DROP TABLE IF EXISTS `gdcur`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdcur` (
  `id_utilisateur` int NOT NULL,
  `lib_utilisateur` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdcur`
--

LOCK TABLES `gdcur` WRITE;
/*!40000 ALTER TABLE `gdcur` DISABLE KEYS */;
/*!40000 ALTER TABLE `gdcur` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gdcve29`
--

DROP TABLE IF EXISTS `gdcve29`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gdcve29` (
  `id_ville` int NOT NULL,
  `lib_ville` int NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gdcve29`
--

LOCK TABLES `gdcve29` WRITE;
/*!40000 ALTER TABLE `gdcve29` DISABLE KEYS */;
/*!40000 ALTER TABLE `gdcve29` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-21 13:39:58
