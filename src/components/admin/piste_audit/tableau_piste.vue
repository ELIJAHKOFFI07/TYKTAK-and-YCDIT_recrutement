<script lang="ts" setup>
    import { ref, reactive, watch} from 'vue';

    const montrer = ref<boolean>(false);
    const filtrer = () =>{
      montrer.value = !montrer.value
    }


  // le grand tableau

  const input = ref<string>('');

  const tableau  = ref([
  { nom_prenoms: 'Yeo', Date: '10/10/24 à 12h14', action: 'connexion', descriptionn: 'connexion pour 30 min', },
  { nom_prenoms: 'Yeo', Date: '10/10/24 à 12h14', action: 'deconnexion', descriptionn: 'connexion pour 30 min', },
  { nom_prenoms: 'Yeo', Date: '10/10/24 à 12h14', action: 'connexion', descriptionn: 'connexion pour 30 min', },
  { nom_prenoms: 'Yeo', Date: '10/10/24 à 12h14', action: 'connexion', descriptionn: 'connexion pour 30 min', },
  ])

  // la recherhce dans ce tableau
  const recherche = ref('');

// Filtrer les utilisateurs en fonction de la recherche
const originalTableau = ref(tableau);

// La recherche dans ce tableau
watch(recherche, nouvelle_valeur => {
  if (nouvelle_valeur !== undefined) { // Vérification si nouvelle_valeur est définie
    tableau.value = originalTableau.value.filter((utilisateur: { nom_prenoms: string; Date: string; action: string; description: string; }) => {
      return (
        utilisateur.nom_prenoms.toLowerCase().includes(nouvelle_valeur.toLowerCase()) ||
        utilisateur.Date.toLowerCase().includes(nouvelle_valeur.toLowerCase()) ||
        utilisateur.action.toString().includes(nouvelle_valeur.toLowerCase()) || // Convertir en chaîne pour la comparaison
        utilisateur.description.toLowerCase().includes(nouvelle_valeur.toLowerCase())
      );
    });
  }
});

</script>

<template>
    <form class="form" v-if="montrer">
            <label for="action">Action</label>
            <input id="action" type="radio" name="r" value="1" checked="true">
            <label for="nom">Nom</label>
            <input id="nom" type="radio" name="r" value="2">
            <label for="date_heure">Date et Heure</label>
            <input id="date_heure" type="radio" name="r" value="3">
    </form>
    <section class="option">
      <div class="filtre">
        <button @click="filtrer"  title="filter" class="filter">
          <svg viewBox="0 0 512 512" height="1em">
            <path
              d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"
            ></path>
          </svg>
        </button>   
      </div>

      <div class="group">
          <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
          <input placeholder="Search" v-model="recherche" type="search" class="input">
      </div>
    </section>
    <section class="droit">
        <table>
          <thead>
              <tr>
                <th>Images</th>
                  <th>Nom et Prenoms</th>
                  <th>Action</th>
                  <th>date et heure</th>
                  <th>Description</th>                  
              </tr>
          </thead>
          <tbody>
              <tr v-for="(ligne, index) in tableau" :key="index">
                  <td class="">
                    <img src="../../../assets/images/profile.png" class="profile">
                  </td>                
                  <td>{{ ligne.nom_prenoms }}</td>                
                  <td>
                    <div :class="{'clignote-vert': ligne.action === 'connexion', 'clignote-rouge': ligne.action === 'deconnexion'}" ></div>
                    {{ligne.action}} 
                  </td>   
                  <td class="">{{ligne.Date}}</td>
                  <td class="">{{ligne.descriptionn}}</td>                    
              </tr>

          </tbody>
          </table>
    </section>
</template>

<style scoped>
.droit{
  width: 100%;
}
.form{
    width: 100%;
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
}
.option{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    display: flex;
}


table {
        width: 100%;
        border-collapse: collapse;
        overflow: auto;
    }
    th, td {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        text-align: center;
    }
    th {
        background-color: #f2f2f2;
    }
    tr:hover {
        background-color: #5b5b5b5a;
    }
    /* Styles spécifiques */
    .poste {
        font-weight: bold;
    }
    .allowed {
        background-color: #c6efce;
    }
    .denied {
        background-color: #ffc7ce;
    }

   


/* bouton de recherche */

.group {
 display: flex;
 line-height: 28px;
 align-items: center;
 position: relative;
 max-width: 190px;
}

.input {
 width: 100%;
 height: 40px;
 line-height: 28px;
 padding: 0 1rem;
 padding-left: 2.5rem;
 border: 2px solid transparent;
 border-radius: 8px;
 outline: none;
 background-color: var(--color1);
 color: #0d0c22;
 transition: .3s ease;
}

.input::placeholder {
 color: #9e9ea7;
}

.input:focus, input:hover {
 outline: none;
 border-color: var(--color1);
 background-color: #fff;
}

.icon {
 position: absolute;
 left: 1rem;
 fill: #9e9ea7;
 width: 1rem;
 height: 1rem;
}



/* box au hover*/
.form {
  --background: #ffffff;
  --text: #414856;
  --radio: #7C96B2;
  --radio-checked: var(--color2);
  --radio-size: 20px;
  --width: 150px;
  --height: 140px;
  --border-radius: 10px;
  background: var(--background);
  width: var(--width);
  height: var(--height);
  border-radius: var(--border-radius);
  color: var(--text);
  position: relative;
  box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05);
  padding: 30px 20px;
  display: grid;
  grid-template-columns: auto var(--radio-size);
  align-items: center;
}

.form label {
  cursor: pointer;
}

.form input[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;
  height: var(--radio-size);
  width: var(--radio-size);
  outline: none;
  margin: 0;
  cursor: pointer;
  border: 2px solid black;
  background: transparent;
  border-radius: 50%;
  display: grid;
  justify-self: end;
  justify-items: center;
  align-items: center;
  overflow: hidden;
  transition: border .5s ease;
}

.form input[type="radio"]::before, .form input[type="radio"]::after {
  content: "";
  display: flex;
  justify-self: center;
  border-radius: 50%;
}

.form input[type="radio"]::before {
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--background);
  z-index: 1;
  opacity: var(--opacity, 1);
}

.form input[type="radio"]::after {
  position: relative;
  width: calc(100% /2);
  height: calc(100% /2);
  background: var(--radio-checked);
  top: var(--y, 100%);
  transition: top 0.5s cubic-bezier(0.48, 1.97, 0.5, 0.63);
}

.form input[type="radio"]:checked {
  --radio: var(--radio-checked);
}

.form input[type="radio"]:checked::after {
  --y: 0%;
  animation: stretch-animate .3s ease-out .17s;
}

.form input[type="radio"]:checked::before {
  --opacity: 0;
}

.form input[type="radio"]:checked ~ input[type="radio"]::after {
  --y: -100%;
}

.form input[type="radio"]:not(:checked)::before {
  --opacity: 1;
  transition: opacity 0s linear .5s;
}

@keyframes stretch-animate {
  0% {
    transform: scale(1, 1);
  }

  28% {
    transform: scale(1.15, 0.85);
  }

  50% {
    transform: scale(0.9, 1.1);
  }

  100% {
    transform: scale(1, 1);
  }
}

.socials {
  position: fixed;
  display: block;
  left: 20px;
  bottom: 20px;
}

.socials > a {
  display: block;
  width: 30px;
  opacity: .2;
  transform: scale(var(--scale, 0.8));
  transition: transform 0.3s cubic-bezier(0.38, -0.12, 0.24, 1.91);
}

.socials > a:hover {
  --scale: 1;
}

/* Filtre */

.filter {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.192);
  cursor: pointer;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.021);
  transition: all 0.3s;
}

.filter svg {
  height: 16px;
  fill: rgb(77, 77, 77);
  transition: all 0.3s;
}
.filter:hover {
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.11);
  background-color: rgb(59, 59, 59);
}
.filter:hover svg {
  fill: white;
}

/* image de profile */

.profile{
  height: 50px;
  width: 50px;
}

/* clignotement */

@keyframes clignotement {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
}

.clignote-vert {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: green;
    animation: clignotement 1s infinite alternate;
}

.clignote-rouge {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    animation: clignotement 1s infinite alternate;
    background-color: red;
}
</style>