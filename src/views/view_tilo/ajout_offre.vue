<template>
<section>

    <header>
            <div class="banner">
            <span>Réduction de 30% jusqu'au 30 mars pour les entreprises !</span>
          </div>
    
          <nav>
                  
                  <div id="logo">
                    <img src="../../assets/images_tilo/logotiktak.jpeg" alt="Logo de lapplication web" width="80" height="40"/>
                  </div>
                  
                  <ul class="navigation-menu">
      
                      <li><a href="#">Fonctionnalites </a>
                          <ul class="subnav">
                            
                              <li class="card-med" id="serv-groom">
                                  <div class="card-image"><img src="../../assets/images_tilo/ajouter.png"></div>
                                  <router-link to="/appel_offre">Ajouter un appel d'offre</router-link>
  
                              </li>
                              <li class="card-med" id="serv-board">
                                  <div class="card-image"><img src="../../assets/images_tilo/gerer.png"></div>
                                  <router-link to="/voir_offre">Voir ses appels offre</router-link>
                                </li> 
                               
                          </ul>
                      </li>
                      <li><a href="#">Resultats</a>
                      </li>
                      <li><router-link to="/informations_personnelles">Informations personnelles</router-link>
                      </li>
                      <li><router-link to="/espace_client">Accueil</router-link>
                      </li>
                      <li><router-link to="/paiement">Paiement</router-link>
                      </li>
                      <!-- <li>
                          <a href="#">A propos de nous</a>
                      </li> -->
                  </ul>
                  <div id="utility">
                    <a href="#" class="connexion-link" @click="logout">
                      <span class="material-icons-outlined">Deconnexion</span>
                      <i class="fas fa-sign-in-alt"></i>
                    </a>
                  </div>
      
              </nav>
        </header>
        
    






        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
<section class="container information-processing-form rounded-2">
  <div class="row d-flex align-items-center">
    <div class="col-sm-6 d-block">
      <img src="../../assets/images_tilo/enregistrement.jpg" width="100%" class="rounded-5">
    </div>
    <div class="col">
      <h3 class="text-center">Ajouter un appel d'offre</h3>

      <form class="p-5" @submit.prevent="clique_appel_offre">
       
        <div class="form-floating mb-3">
          <input v-model="offre.date" id="password" type="date" name="password" class="form-control shadow-none border-danger" required autocomplete="new-password" >
          <label for="password" class="text-black-50">Delai de candidature</label>

        </div>
        <div class="form-floating mb-3">
          <input v-model="offre.nbre_place" id="password-confirm" type="number" class="form-control shadow-none border-danger" name="password_confirmation" required autocomplete="new-password" placeholder="nombre de place disponible">
          <label for="password-confirm" class="text-black-50">Nombre de place disponible</label>
        </div>

        <div class="form-floating mb-3">
          <input v-model="offre.age" id="password-confirm" type="number" class="form-control shadow-none border-danger" name="password_confirmation" required autocomplete="new-password" placeholder="nombre de poste disponible">
          <label for="password-confirm" class="text-black-50">Limite d'age</label>
        </div>

        <div class="form-floating mb-3">
            <textarea v-model="offre.mission" class="form-control shadow-none border-danger" name="" placeholder="Mission principale" id="" cols="30" rows="10"></textarea>
            <label for="password" class="text-black-50">Mission principale</label>
        </div>

        <div class="form-floating mb-3">
            <textarea v-model="offre.activite" class="form-control shadow-none border-danger" name="" placeholder="activite principale" id="" cols="30" rows="10"></textarea>
            <label for="password" class="text-black-50">activite principale</label>
        </div>

        <div class="form-floating mb-3">
        <select v-model="offre.competence" id="" class="form-control shadow-none border-danger">
            <option value="">Competences souhaites</option>
            <option value="" class="text-black-50"></option>
            <option value="travail en equipe" class="text-black-50">travail en equipe</option>
            <option value="creativite" class="text-black-50">creativite</option>
            <option value="esprit critique" class="text-black-50">esprit critique</option>
            <option value="communication" class="text-black-50">communication</option>
            <option value="prise de decision" class="text-black-50">prise de decision</option>
        </select>
        <label for="" class="text-black-50">Competence</label>
    </div>

        <div class="form-floating mb-3">
        <select v-model="offre.poste" id="" class="form-control shadow-none border-danger">
            <option value="">Poste souhaites</option>
            <option value="directeur general" class="text-black-50">directeur general</option>
            <option value="responsable communication" class="text-black-50">responsable communication</option>
            <option value="Directeur des operations" class="text-black-50">Directeur des operations</option>
            <option value="secretaire general" class="text-black-50">secretaire general</option>
            <option value="Directeur de SI" class="text-black-50">Directeur de SI</option>
        </select>
        <label for="" class="text-black-50">Poste</label>

        </div>



        <div class="form-floating mb-3">
        <select v-model="offre.diplome" id="" class="form-control shadow-none border-danger">
            <option value="">Selectionner un diplome</option>
            <option value="bepc" class="text-black-50">BEPC</option>
            <option value="bac" class="text-black-50">BAC</option>
            <option value="bts" class="text-black-50">BTS</option>
            <option value="dut" class="text-black-50">DUT</option>
            <option value="master" class="text-black-50">MASTER</option>
            <option value="ingenieur" class="text-black-50">INGENIEUR</option>
        </select>
        <label for="" class="text-black-50">Diplome requis</label>
        </div>
        
        <div class="form-floating mb-3">
          <input v-model="offre.annee_exp" id="password-confirm" type="number" class="form-control shadow-none border-danger" name="password_confirmation" required autocomplete="new-password" placeholder="nombre de poste disponible">
          <label for="password-confirm" class="text-black-50">Annee d'experience</label>
        </div>

        <button class="btn btn-danger w-100 mb-2" name="submit" type="submit" >Valider</button>
        
      </form>
      <div v-if="messageConfirmation" class="message-confirmation">
                {{ messageConfirmation }}
                </div>
    </div>
  </div>
</section>







        
        <footer>
    
            <ul>
                Menu
                <li><a href="#">Appels &amp; d'offre</a></li>
                <li><a href="#">Nous contacter</a></li>
                
            </ul>
    
            <ul>
                
                <li><a href="#">Localisation</a></li>
                <li><a href="#">A propos de nous</a></li>
            </ul>
    
    
            <ul>
                <li><a href="#">Pourquoi les chasseurs de tete</a></li>
            </ul>
    
    
                
        </footer>
    </section>
    
    </template>
    
    <script>
    import { reactive } from 'vue';
import axios from "axios";
    export default {
      name: 'App',
      data(){
        return{
            offre: {
        date: null,
        nbre_place: null,
        age: null,
        mission: null,
        activite: null,
        competence: null,
        diplome: null,
        anne_exp: null,
        poste: null,
      },
      messageConfirmation: '',
            user: null,
        }
      },
      mounted() {
    this.loadUserFromLocalStorage();
  },
  methods: {
    loadUserFromLocalStorage() {
      // Récupération des informations de l'utilisateur depuis localStorage
      const userData = localStorage.getItem('user');
      if (userData) {
        this.user = JSON.parse(userData);
      }
    },
    logout() {
    // Effacer le stockage de session
    localStorage.removeItem('user');
    // Vous pourriez aussi vouloir effacer d'autres états dans votre store Vuex si vous l'utilisez

    // Rediriger vers la page de connexion ou la page d'accueil
    this.$router.push('/');
  },

  clique_appel_offre() {
  // Vérifier si tous les champs sont renseignés
  if (!this.offre.date || !this.offre.nbre_place || !this.offre.age || !this.offre.mission || !this.offre.activite || !this.offre.annee_exp) {
    // Si l'un des champs est vide, afficher une alerte et ne pas continuer
    alert("Veuillez renseigner tous les champs.");
    return; // Arrêter l'exécution de la fonction ici
  }

  // Préparer les données pour l'envoi
  var data = new FormData();
  data.append('date', this.offre.date);
  data.append('nbre_place', this.offre.nbre_place);
  data.append('age', this.offre.age);
  data.append('mission', this.offre.mission);
  data.append('activite', this.offre.activite);
  data.append('competence', this.offre.competence);
  data.append('diplome', this.offre.diplome);
  data.append('annee_exp', this.offre.annee_exp);
  data.append('poste', this.offre.poste);
  data.append('userId', this.user.id);
  data.append('userNom', this.user.nom);
  data.append('userSecteur', this.user.secteur);

  // Envoyer les données
  axios.post('http://localhost/genie_logiciel/backend/backend_tilo/api_nouscontacter_entreprise.php?action=ajout_appel_offre', data)
    .then((res) => {
        if (res.data.success) {
      console.log('succès', res);
      this.messageConfirmation = 'Enregistrement réussi !';
      
      // Réinitialiser le formulaire
      this.offre = {
        date: '',
        nbre_place: '',
        age: '',
        mission: '',
        activite: '',
        annee_exp: '',
      };
    }
      else {
        console.log('non', res);
        alert(res.data.message);
      this.messageConfirmation = res.message;
    }
    })
    .catch((error) => {
      console.error('erreur', error);
      this.messageConfirmation = 'Une erreur est survenue. Veuillez réessayer.';
    });
}

  }




    }


    
    document.addEventListener("DOMContentLoaded", function() {
      const banner = document.querySelector('.banner'); // Sélectionne la bannière
      const text = document.querySelector('.banner span'); // Sélectionne le texte dans la bannière
      let position = -text.offsetWidth; // Position initiale du texte à gauche, en dehors de la vue
    
      function animateText() {
        position += 1; // Incrémente la position pour déplacer le texte vers la droite
        if (position > banner.offsetWidth) { // Si le texte dépasse complètement la largeur de la bannière
          position = -text.offsetWidth; // Repositionne le texte à gauche, en dehors de la vue
        }
        text.style.left = `${position}px`; // Applique le déplacement
    
        requestAnimationFrame(animateText); // Continue l'animation
      }
    
      requestAnimationFrame(animateText); // Démarre l'animation
    });
    
    
    </script>
    
    <style scoped>





.btn-danger {
    background-color: #b3a444 !important; /* Pour #EDDAA9 */
  border-color: #524934 !important;
}


.border-danger {
  border-color: #000000 !important;
}

    
    :root {
        --text-01: #45413E;
        --light-01: #F9F9F9;
        --light-02: #FFFFFF;
        --brand-01: #C9B649;
        --brand-02: #F2EED1;
        --card-hover: 0px 4px 24px rgba(0, 0, 0, 0.15);
        --card-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
        --hover-timing: all 0.2s ease;
        --nav-card-size: 240px;
    
        -webkit-font-smoothing: antialiased;
        font-smoothing: antialiased;
        scroll-behavior: smooth;
    
    
    }
    
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    
    
    
    
    
    
    
    .connexion-link {
      /* Stylisation du lien */
      display: inline-flex;
      align-items: center;
      gap: 8px; /* Espace entre l'icône et le texte */
      text-decoration: none; /* Enlève le soulignement par défaut */
      color: #000; /* Couleur du texte */
      transition: color 0.3s ease; /* Transition douce pour le changement de couleur */
    }
    
    .connexion-link:hover {
      color: #C9B649; /* Change la couleur au survol */
      text-decoration: none;
    }
    
    /* Stylisation et animation pour les icônes Material et Font Awesome */
    .connexion-link .material-icons-outlined,
    .connexion-link .fas {
      transition: transform 0.3s ease; /* Animation douce pour la transformation */
    }
    
    /* Animation au survol pour les deux types d'icônes */
    .connexion-link:hover .fas {
      transform: scale(1.2); /* Agrandit l'icône au survol */
    }
    
    
    
    
    
    
    
    
    header {
        /*    width: 100%;*/
        height: auto;
        position: sticky;
        top: 0;
        /*    border: 1px solid red;*/
        z-index: 100;
    }
    
    .banner {
        background: var(--brand-01);
        color: var(--light-01);
        font-size: 14px;
        font-weight: 500;
        line-height: 1.2;
        padding: 8px 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden; /* Cache le contenu qui dépasse */
      white-space: nowrap; /* Empêche le texte de passer à la ligne */
      position: relative; /* Positionnement relatif pour l'animation */
      width: 100%;
      height: auto;
    }
    
    .banner span {
      position: relative; /* Positionnement relatif pour le déplacement */
      left: 100%; /* Commence à droite, hors de la vue */
      display: inline-block; /* Nécessaire pour appliquer un déplacement */
    }
    
    
    
    
    
    
    nav {
        color: var(--text-01);
        font-weight: 600;
        height: 64px;
        background: var(--light-01);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 var(--pg-margin);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        z-index: 100;
    }
    
    nav ul.navigation-menu {
        display: flex;
        flex-direction: row;
        flex: 1;
        justify-content: center;
        position: relative;
        top: 0;
    }
    
    nav .navigation-menu a {
        font-size: 16px;
        text-decoration: none;
        color: var(--text-01);
    
    }
    
    nav .navigation-menu > li {
        display: flex;
        flex-direction: column;
        align-items: center;
        /*    justify-items: center;*/
    }
    
    nav .navigation-menu > li > a {
        position: relative;
        /*    border: 1px solid purple;*/
        padding: 0 20px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-items: center;
        transition: color 0.3s ease;
    }
    
    .navigation-menu li:hover > a {
      color: #C9B649; /* Change la couleur du lien au survol */
      text-decoration: underline;
      text-decoration-color: #C9B649;
    }
    
    nav .navigation-menu > li:hover ul.subnav {
        visibility: visible;
        opacity: 1;
        top: 64px;
    
    }
    
    
    nav .navigation-menu > li > ul.subnav {
        /*    border: 1px solid green;*/
        visibility: hidden;
        position: absolute;
        display: flex;
        flex-direction: row;
        top: 66px;
        background: var(--light-01);
        box-shadow: var(--card-hover);
        border-radius: 12px;
        opacity: 0;
        transition: var(--hover-timing);
    }
    
    
    nav > #logo {
        display: flex;
        flex-direction: row;
        align-items: center;
        grid-gap: 8px;
        line-height: 100%;
    }
    
    nav > #logo > span {
        font-size: 32px;
    }
    
    nav > #utility {
        display: flex;
        flex-direction: row;
        align-items: center;
        grid-gap: 16px;
    }
    
    .card-large,
    .card-med {
        /*    border: 1px solid orange;*/
        flex: 1;
        /*    width: var(--nav-card-size);*/
    
        position: relative;
        display: flex;
        flex-direction: column;
        /*    padding: 24px;*/
        transition: var(--hover-timing);
        cursor: pointer;
    }
    
    
    .card-large {
        box-shadow: var(--card-shadow);
        border-radius: 12px;
        overflow: hidden;
        /*    padding-bottom: 32px;*/
    }
    
    
    
    .card-large:hover {
        box-shadow: var(--card-hover);
        transform: scale(1.01);
    }
    
    .card-med:hover .card-image {
        transform: scale(1.01);
    }
    
    
    .card-image {
        width: 100%;
        /*    height: 90%;*/
        aspect-ratio: 1/1;
        position: relative;
        border-radius: 12px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: var(--hover-timing);
    }
    
    .card-large > .card-image {
        aspect-ratio: 3/2;
    }
    
    .card-image > img {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: contain;
    
    
    
    }
    
    .card-large a {
        text-decoration: none;
        font-weight: 600;
    }
    
    .card-large > .card-image > a {
        position: absolute;
        bottom: 0;
        z-index: 1;
        width: 100%;
        font-size: 24px;
        line-height: 1.2;
    }
    
    
    
    
    .card-large > ul {
        /*    padding: 16px 0 24px;*/
        display: flex;
        flex-direction: column;
        grid-gap: 8px;
        flex: 1;
        /*    border: 1px solid blue;*/
    
        color: var(--text-01);
    
        padding: 0 40px 40px;
        font-size: 28px;
        font-weight: 600;
        line-height: 1.5;
    }
    
    
    
    .card-large > ul > li a {
        line-height: 32px;
        font-size: 14px;
        /*    border: 1px solid red;*/
    }
    
    
    .card-large#sup-dog,
    .card-med#sup-dog > .card-image {
        background: linear-gradient(45deg, #463631 0%, #976C5B 100%);
    }
    
    
    button.btn-outline {
        color: var(--light-01);
        border-color: var(--light-01);
    }
    
    
    .card-large#sup-cat,
    .card-med#sup-cat > .card-image {
        background: linear-gradient(45deg, #F6AE6C 0%, #ECBD73 100%);
    }
    
    
    .card-large#sup-bird,
    .card-med#sup-bird > .card-image {
        background: linear-gradient(45deg, #EFEFEF 0%, #F2F2F2 100%);
    }
    
    
    .card-large#sup-fish,
    .card-med#sup-fish > .card-image {
        background: linear-gradient(45deg, #1E4782 0%, #709DDF 100%);
    }
    
    
    .card-large.card-dark a,
    .card-large.card-dark > ul {
        color: var(--text-01);
    }
    
    .card-large.card-light a,
    .card-large.card-light > ul {
        color: var(--light-01);
    }
    
    
    
    button {
        font-size: 14px;
        font-weight: 600;
        line-height: 24px;
        padding: 12px 24px;
        border-radius: 48px;
        display: flex;
        flex-direction: row;
        grid-gap: 8px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    
    
    
    button.btn-outline-light {
        color: var(--light-01);
        background: none;
        color: var(--light-01);
        border: 2px solid var(--light-01);
    }
    
    button.btn-outline-dark {
        color: var(--text-01);
        background: none;
        color: var(--text-01);
        border: 2px solid var(--text-01);
    }
    
    button.btn-filled-dark {
        color: var(--light-01);
        background: var(--text-01);
        color: var(--light-01);
        border: 2px solid var(--text-01);
    }
    button.btn-filled-dark a {
        color: #e7e0cc;
        font-size: 20px;
        text-decoration: none;
    }
    
    .btn-outline-dark:hover {
        background: var(--text-01);
        border: 2px solid var(--text-01);
    }
    
    .btn-outline-light:hover {
        background: var(--light-01);
        border: 2px solid var(--light-01);
        color: var(--text-01);
    }
    
    
    button:hover,
    .btn-outline-dark.btn-hover-color:hover {
        color: var(--light-01);
        border: 2px solid var(--brand-01);
        background: var(--brand-01);
        transition: var(--hover-timing);
        box-shadow: var(--card-hover);
    }
    
    
    section,
    footer {
        position: relative;
        width: 100%;
        padding: 0 var(--pg-margin);
    }
    
    
    
    
    section.hero {
        /*    width: 100%;*/
        height: auto;
        background: var(--brand-02) url('../src/assets/3d_rech.png') no-repeat center right;
    
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        grid-gap: 48px;
        display: inline-flex;
    
    }
    
    .btn-group {
        display: flex;
        flex-direction: row;
        grid-gap: 16px;
    }
    
    section.hero h1 {
        font-size: var(--hero-text);
        font-weight: 600;
        line-height: 1.2;
        width: 40%;
    
        color: var(--text-01);
    }
    
    .card-med {
        width: var(--nav-card-size);
        height: auto;
        /*    border: 1px solid green;*/
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 0;
    }
    
    .card-med > a {
        display: flex;
        flex-direction: column;
        grid-gap: 4px;
        padding: 12px 16px 0px;
    }
    
    .card-med > a > span {
        width: 100%;
        /*    border: 1px solid blue;*/
    }
    
    .card-med > a > span:nth-of-type(1) {
        width: 100%;
        /*    border: 1px solid blue;*/
        font-size: 24px;
        font-weight: 600;
        line-height: 1.2;
    }
    
    .card-med > a > span:nth-of-type(2) {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        display: flex;
        flex-direction: row;
        align-items: center;
        grid-gap: 6px;
    }
    
    .card-med > a > span:nth-of-type(2) > span {
        font-size: 18px;
    }
    
    #serv-groom > .card-image {
        background: linear-gradient(45deg, #45828C 0%, #A7D4D8 100%);
    }
    
    #serv-board > .card-image {
        background: linear-gradient(45deg, #EDDAA9 0%, #B87D93 100%);
    }
    
    .card-med:hover .card-image {
        box-shadow: var(--card-hover);
    }
    
    
    .card-med > .card-image {
        box-shadow: var(--card-shadow);
    }
    
    .card-med > .card-image > img {
        width: 80%;
        height: 80%;
        /*    border: 1px solid red;*/
    }
    
    section:not(.hero) {
        padding: calc(var(--pg-margin)/2) var(--pg-margin);
    }
    
    section h2 {
        font-size: 32px;
        font-weight: 600;
        line-height: 1.2;
        text-align: center;
        color: var(--text-01);
        margin-bottom: 32px;
        /*    padding-bottom: 24px;*/
    }
    
    
    .card-wide {
        flex-direction: row;
        padding: 0;
    }
    
    .card-wide .card-image {
        width: 50%;
        border-radius: 0;
    }
    
    .card-image img {
        width: 80%;
        height: 80%;
    }
    
    .card-wide > ul {
        padding: 40px;
    }
    
    .card-wide > ul > li {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        grid-gap: 24px;
        margin-bottom: 16px;
    }
    
    
    .card-wide .subtitle {
        font-size: 14px;
        line-height: 1.4;
        font-weight: 500;
        /*    margin-top: 8px;*/
        margin-bottom: 24px;
    }
    
    .card-wide > ul > li span {
        font-size: 16px;
    }
    
    .card-large > ul > li:last-of-type {
        margin-bottom: 40px;
    }
    
    
    .card-large button {
        margin-top: auto;
    }
    
    #locate > div {
        background: var(--brand-02);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 80px 0;
        border-radius: 12px;
        box-shadow: var(--card-shadow);
        transition: var(--hover-timing);
        cursor: pointer;
    }
    
    #locate > div:hover {
        box-shadow: var(--card-hover);
    }
    
    #locate h2 {
        margin-top: 0;
    }
    
    #locate p {
        line-height: 1.5;
        margin-bottom: 40px;
        width: 50%;
        text-align: center;
    }
    
    
    .btn-group {
        display: flex;
        flex-direction: row;
        grid-gap: 16px;
    }
    
    footer {
        background: var(--text-01);
        padding: 80px 80px 0px;
        margin-top: 80px;
        display: flex;
    }
    
    
    
    footer ul {
        display: flex;
        flex-direction: column;
        grid-gap: 24px;
        box-shadow: none;
        flex: 1;
        color: var(--light-01);
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 80px;
    
    }
    
    
    footer ul li a {
        color: var(--light-01);
        text-decoration: none;
        font-size: 14px;
    }
    
    
    footer ul li {
        color: var(--light-01);
        padding: 0;
    
    }
    
    
    
    @media only screen and (max-width: 600px) {
        :root {
            --pg-margin: 16px;
        }
    
        section.hero {
            aspect-ratio: 1/1;
            padding-top: 64px;
    
        }
    
        section.hero h1 {
            --hero-text: 40px;
            width: 80%;
        }
    
        section.hero {
            background-size: 85%;
            background-position: 360% 60%;
        }
    
        nav {
            position: relative;
        }
    
        nav ul.navigation-menu {
            position: absolute;
            position: absolute;
            top: 64px;
            background: var(--light-01);
            left: 0;
            z-index: -1;
            width: 100vw;
        }
    
        nav ul.navigation-menu li a {
            font-size: 16px;
            /*        padding: 0 12px;*/
            white-space: nowrap;
        }
    
        nav ul.navigation-menu .subnav {
            display: none;
        }
    
        nav ul.navigation-menu > li:hover .subnav {
            display: none;
        }
    
    
        .btn-group {
            flex-direction: column;
        }
    
        .shop-pets,
        .services {
            display: flex;
            flex-direction: column;
            grid-gap: 24px;
            width: 100%;
        }
    
        .services > li {
            display: flex;
            flex-direction: column;
        }
    
        .services > li > .card-image {
            width: 100%;
        }
    
        section:not(.hero) {
            padding: var(--pg-margin);
        }
    
        #locate p {
    
            width: 80%;
        }
    
        footer {
            flex-direction: column;
            text-align: center;
        }
    
    
    }
    
    @media only screen and (min-width: 600px) {
        :root {
            --pg-margin: 24px;
        }
    
        section.hero h1 {
            --hero-text: 40px;
            width: 60%;
        }
    
        section.hero {
            aspect-ratio: 3/2;
            background-size: 50%;
            background-position: 90% 70%;
            padding-top: 64px;
    
        }
    
        nav {
            position: relative;
    
        }
    
        nav ul.navigation-menu {
            position: absolute;
            top: 64px;
            background: var(--light-01);
            left: 0;
            z-index: -1;
            width: 100vw;
        }
    
        nav ul.navigation-menu li a {
            font-size: 16px;
            white-space: nowrap;
        }
    
        nav ul.navigation-menu .subnav {
            display: none;
        }
    
        nav ul.navigation-menu > li:hover .subnav {
            display: none;
        }
    
        .btn-group {
            display: flex;
            flex-direction: column;
        }
    
        .shop-pets {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-row: auto auto;
            grid-column-gap: 24px;
            grid-row-gap: 24px;
        }
    
        .services {
            display: flex;
            flex-direction: column;
            grid-gap: 24px;
        }
    
        section:not(.hero) {
            padding: var(--pg-margin);
        }
    
        #locate p {
    
            width: 60%;
        }
    
        footer {
            flex-direction: column;
            text-align: center;
        }
    }
    
    @media only screen and (min-width: 1200px) {
        :root {
            --pg-margin: 48px;
        }
    
        section.hero h1 {
            --hero-text: 48px;
        }
    
        section.hero {
            aspect-ratio: 2/1;
    
        }
    
        .btn-group {
            flex-direction: row;
        }
    
        .shop-pets,
        .services {
            display: flex;
            flex-direction: row;
            grid-gap: 24px;
        }
    
        ul.subnav {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-row: auto auto;
            grid-column-gap: 24px;
            grid-row-gap: 24px;
            padding: 48px;
        }
    
    
        nav ul.navigation-menu {
            top: 0;
            z-index: 1;
            background: none;
            width: auto;
            position: relative;
        }
    
        nav ul.navigation-menu .subnav {
            display: flex;
        }
    
        nav ul.navigation-menu > li:hover .subnav {
            display: flex;
        }
    
        #locate p {
    
            width: 40%;
        }
    
        footer {
    
    
            flex-direction: row;
            text-align: left;
    
        }
    }
    
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        :root {
            --pg-margin: 80px;
        }
    
        section.hero h1 {
            --hero-text: 56px;
        }
    
        nav .navigation-menu > li > ul.subnav {
            padding: 48px;
            grid-gap: 24px;
        }
    
        section.hero {
            aspect-ratio: 3/1;
            background-size: 30%;
            background-position: 90% 60%;
        }
    
        .shop-pets,
        .services {
            display: flex;
            flex-direction: row;
            grid-gap: 24px;
        }
    
        nav ul.navigation-menu {
            top: 0;
            z-index: 1;
            background: none;
            width: auto;
            position: relative;
        }
    
        ul.subnav {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-row: auto auto;
            grid-column-gap: 24px;
            grid-row-gap: 24px;
            padding: 48px;
        }
    
        nav ul.navigation-menu > li:hover .subnav {
            display: grid;
        }
    
        #locate p {
    
            width: 40%;
        }
    
        footer {
    
    
            flex-direction: row;
            text-align: left;
    
        }
    
    }
    
    
    
    
    </style>
    
    