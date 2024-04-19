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
          
                          
                          <li><router-link to="/">Accueil</router-link>
                          </li>
                          
                          <!-- <li>
                              <a href="#">A propos de nous</a>
                          </li> -->
                      </ul>
                      
          
                  </nav>
            </header>
            
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<div class="ligne">


    <form class="search-container" @submit.prevent="filtre">
    <div class="search-box">
        <div class="i-box">
            <input type="search" name="entreprise" placeholder="Nom de l'entreprise" v-model="vu_candidat.nom_entreprise">
        </div>
        
        <button type="submit" class="icon" aria-label="Rechercher">
            <i class="fas fa-search"></i>
        </button>
        
    </div>
</form>
</div>



<div class="display">
<div class="plan-card" v-for="appel_offre in appel_offres" :key="appel_offre.id_appel_doffre">
    <h2>{{ appel_offre.nom_entreprise }}<span></span></h2>
    <div class="etiquet-price">
        <p>{{ appel_offre.diplome_requis }} minimum</p>
        <div></div>
    </div>
    <div class="benefits-list" >
        <ul>
            <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                </svg><span>{{ appel_offre.age }} ans minimum</span></li>
            <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                </svg><span>{{ appel_offre.anne_experience_requis }} ans d'experience minimum</span></li>
            <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                </svg><span>{{ appel_offre.competence }}</span></li>
            <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                </svg><span>{{ appel_offre.nombre_de_poste_disponible }} places disponible</span></li> 
            <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                </svg><span>fin le {{ appel_offre.date_cloture }}</span></li>   
            <li><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                </svg><span>{{ appel_offre.activite_principale }}</span></li> 
        </ul>
    </div>
    <div class="button-get-plan">
        <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-rocket">
                <path d="M156.6 384.9L125.7 353.1C117.2 345.5 114.2 333.1 117.1 321.8C120.1 312.9 124.1 301.3 129.8 288H24C15.38 288 7.414 283.4 3.146 275.9C-1.123 268.4-1.042 259.2 3.357 251.8L55.83 163.3C68.79 141.4 92.33 127.1 117.8 127.1H200C202.4 124 204.8 120.3 207.2 116.7C289.1-4.07 411.1-8.142 483.9 5.275C495.6 7.414 504.6 16.43 506.7 28.06C520.1 100.9 516.1 222.9 395.3 304.8C391.8 307.2 387.1 309.6 384 311.1V394.2C384 419.7 370.6 443.2 348.7 456.2L260.2 508.6C252.8 513 243.6 513.1 236.1 508.9C228.6 504.6 224 496.6 224 488V380.8C209.9 385.6 197.6 389.7 188.3 392.7C177.1 396.3 164.9 393.2 156.6 384.9V384.9zM384 167.1C406.1 167.1 424 150.1 424 127.1C424 105.9 406.1 87.1 384 87.1C361.9 87.1 344 105.9 344 127.1C344 150.1 361.9 167.1 384 167.1z"></path>
            </svg>
            <span>POSTULER</span>
        </a>
    </div>
    <div><h6>{{ appel_offre.mission }}</h6></div>
    
</div>
</div>


    
    
    
    
    
    
            
    
    
            
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
        import { reactive ,watch} from 'vue';
    import axios from "axios";
        export default {
          name: 'App',
          data(){
        return{
            vu_candidat: {
        nom_entreprise: null,

      },
      appel_offres:[],
      messageConfirmation: '',
        }
      },
      methods: {
        filtre() {


  // Préparer les données pour l'envoi
  var data = new FormData();
  data.append('nom_entreprise', this.vu_candidat.nom_entreprise);
  

  // Envoyer les données
  axios.post('http://localhost/genie_logiciel/backend/backend_tilo/api_nouscontacter_entreprise.php?action=filtre_appel_offre', data)
    .then((res) => {

      this.appel_offres = res.data,
      // Réinitialiser le formulaire
      this.vu_candidat = {
        nom_entreprise: '',

      };
    })
    
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
    
.plan-card{
    margin: 15px;
}
        
    .display {
        display: flex;
        margin: 5px;
        flex-wrap: wrap;
        gap: 50px;
    }


    .plan-card {
  background: #fff;
  width: 20rem;
  height: 30rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 10px;
  padding-bottom: 20px;
  border-radius: 10px;
  border-bottom: 4px solid #C9B649;
  box-shadow: 0 6px 30px rgba(207, 212, 222, 0.3);
  font-family: "Poppins", sans-serif;
}

.plan-card h2 {
  margin-bottom: 15px;
  font-size: 27px;
  font-weight: 600;
}

.plan-card h2 span {
  display: block;
  margin-top: -4px;
  color: #4d4d4d;
  font-size: 12px;
  font-weight: 400;
}

.etiquet-price {
  position: relative;
  background: #C9B649;
  width: 19.5rem;
  margin-left: -0.65rem;
  padding: .2rem 1.2rem;
  border-radius: 5px 0 0 5px;
}

.etiquet-price p {
  margin: 0;
  padding-top: .4rem;
  display: flex;
  font-size: 1.9rem;
  font-weight: 500;
}

.etiquet-price p:before {
  content: "";
  margin-right: 5px;
  font-size: 15px;
  font-weight: 300;
}

.etiquet-price p:after {
  content: "/tiktak";
  margin-left: 5px;
  font-size: 15px;
  font-weight: 300;
}

.etiquet-price div {
  position: absolute;
  bottom: -23px;
  right: 0px;
  width: 0;
  height: 0;
  border-top: 13px solid #c58102;
  border-bottom: 10px solid transparent;
  border-right: 13px solid transparent;
  z-index: -6;
}

.benefits-list {
  margin-top: 16px;
}

.benefits-list ul {
  padding: 0;
  font-size: 14px;
}

.benefits-list ul li {
  color: #4d4d4d;
  list-style: none;
  margin-bottom: .2rem;
  display: flex;
  align-items: center;
  gap: .5rem;
}

.benefits-list ul li svg {
  width: .9rem;
  fill: currentColor;
}

.benefits-list ul li span {
  font-weight: 300;
}

.button-get-plan {
  display: flex;
  justify-content: center;
  margin-top: 1.2rem;
}

.button-get-plan a {

  display: flex;
  justify-content: center;
  align-items: center;
  background: #C9B649;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  font-size: .8rem;
  letter-spacing: .05rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.button-get-plan a:hover {
  transform: translateY(-3%);
  box-shadow: 0 3px 10px rgba(207, 212, 222, 0.9);
}

.button-get-plan .svg-rocket {
  margin-right: 10px;
  width: .9rem;
  fill: currentColor;
}


















    .ligne{
        display: flex;
    }
    .search-container {
    display: flex;
    justify-content: center;
    padding: 20px;
}

.search-box {
    display: flex;
    align-items: center;
    background-color: #C9B649;
    border-radius: 2em;
    box-shadow: 0 0px 25px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    padding: 0px 20px;
    transition: width 0.5s ease;
    width: 300px;
    height: 50px;
}

.search-box:hover .i-box input,
.search-box:hover .diplome-select,
.search-box:hover .secteur-select {
    width: 200px;
    padding: 7px 10px;
    box-shadow: 0 0px 25px rgba(0, 0, 0, 0.3);
}

.i-box input,
.diplome-select,
.secteur-select {
    border: none;
    border-radius: 2em;
    font-size: 1.5em;
    font-weight: 300;
    outline: none;
    transition: width 0.5s ease, padding 0.5s ease;
    width: 0;
    background-color: white;
    height: 40px;
}

.search-box .fas {
    background-color: #fff;
    border-radius: 50%;
    color: #C9B649;
    display: flex;
    font-size: 2em;
    padding: 1px;
    position: relative;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.377);
}

.search-box a {
    text-decoration: none;
}






    
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
        
        