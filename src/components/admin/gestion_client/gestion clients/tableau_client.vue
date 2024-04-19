<script lang="ts" setup>
import { ref, reactive, watch, onMounted } from "vue";
import axios from "axios";
const montrer = ref<boolean>(false);
const formulaire = ref<boolean>(false);
const appel = ref<boolean>(false);

const filtrer = () => {
  montrer.value = !montrer.value;
};

// Api pour les pays du monde
const countries = ref([]);
const selectedCountry = ref("");

// Fonction pour charger la liste des pays depuis l'API REST Countries
const fetchCountries = async () => {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    countries.value = response.data.sort((a, b) => {
      return a.name.common.localeCompare(b.name.common);
    });
  } catch (error) {
    console.error("Erreur lors du chargement des pays:", error);
  }
};
// Charger la liste des pays lors du montage du composant
onMounted(fetchCountries);

// ouvrir et fermer le formualire
const filtrer_form = () => {
  formulaire.value = !formulaire.value;
};

const appel_offre = () => {
  appel.value = !appel.value;
};
const hasErrors = ref(true);
// Les erreurs

// le grand tableau

// import logoCie from '@/assets/images/cie.jpg'
// import logoCepici from '@/assets/images/cepici.png'
// import logoSipef from '@/assets/images/sipef.png'

// _______________________le back_end_____________________________

const champ_client = ref({
  idEntreprise: "",
  libEntreprise: "",
  email_entreprise: "",
  localisation_entreprise: "",
  telephone_entreprise: "",
  secteur_dactivite_entreprise: "",
  nombre_dappel_doffre_restant: "",
  mot_de_passe: "",
  confirmation_mot_de_passe: "",
  pays: "",
  lien_logo: "",
});

// lien image
const file = ref(null);

const handleFileChange = (event: { target: { files: any[] } }) => {
  // Accéder au fichier téléchargé
  file.value = event.target.files[0];
};

const addItem = async () => {
  try {
    const response = await axios.post(
      "http://localhost/genie_logiciel-main/backend/backend_yeo/appel.php",
      {
        champ_appel: champ_client.value,
      }
    );
    console.log(response.data);
    if (response.data.success) {
      alert(response.data.message); // Afficher un message de succès
      clients.value.push(response.data);
    } else {
      alert("Une erreur s'est produite : " + response.data.message); // Afficher un message d'erreur
    }

    // Réinitialiser les champs du formulaire après l'envoi des données
    champ_client.value.idEntreprise = "";
    champ_client.value.libEntreprise = "";
    champ_client.value.email_entreprise = "";
    champ_client.value.localisation_entreprise = "";
    champ_client.value.telephone_entreprise = "";
    champ_client.value.secteur_dactivite_entreprise = "";
    champ_client.value.nombre_dappel_doffre_restant = "";
    champ_client.value.mot_de_passe = "";
    champ_client.value.confirmation_mot_de_passe = "";
    champ_client.value.lien_logo = "";
    champ_client.value.pays = "";
  } catch (error) {
    console.error(error);
  }
};

const deleteItem = async (id_appel_doffre: any) => {
  try {
    const confirmation = confirm("Voulez-vous vraiment supprimer cet élément ?");
    if (confirmation) {
      const response = await axios.delete(
        `http://localhost/genie_logiciel-main/backend/backend_yeo/appel.php?id_appel_doffre=${id_appel_doffre}`
      );
      console.log(response.data); // Afficher la réponse du serveur (message de confirmation)
      if (response.data.success) {
        alert(response.data.message); // Afficher un message de succès
        appel_d_offre.value = appel_d_offre.value.filter(
          (item) => item.id_appel_doffre !== id_appel_doffre
        );
      } else {
        alert("Une erreur s'est produite : " + response.data.message); // Afficher un message d'erreur
      }
    }
  } catch (error) {
    console.error(error);
  }
};
const appel_d_offre = ref([]);
const input = ref();
const tableau_recherche = ref([]);

watch(input, (newValue) => {
  clients.value = tableau_recherche.value.filter((client) => {
    // Filtrer les éléments du tableau en fonction de la valeur de recherche
    return (
      client.libEntreprise._.toLowerCase().includes(newValue.toLowerCase()) ||
      client.secteur_dactivite_entreprise.toLowerCase().includes(newValue.toLowerCase())
    );
  });
});

const clients = ref([]);
onMounted(() => {
  axios
    .get("http://localhost/genie_logiciel-main/backend/backend_yeo/clients.php")
    .then((res) => {
      clients.value = res.data;
      tableau_recherche.value = res.data;
      console.log(res.data);
    })
    .catch((error) => {
      console.error(
        "Une erreur s'est produite lors de la récupération des données :",
        error
      );
    });
});
</script>
<template>
  <section class="formulaires" v-if="formulaire">
    <div class="fermer">
      <button @click="filtrer_form">Fermer</button>
    </div>
    <form class="formulaire" @submit.prevent="addItem" enctype="multipart/form-data">
      <div class="slides">
        <div class="flex">
          <label>
            <input
              disabled
              required
              placeholder=""
              v-model="champ_client.idEntreprise"
              type="text"
              class="input"
            />
            <span>Identifiant</span>
          </label>

          <label>
            <input
              required
              v-model="champ_client.libEntreprise"
              placeholder=""
              type="text"
              class="input"
            />
            <span>Nom de l'entreprise</span>
          </label>
        </div>
        <div class="flex">
          <label>
            <input
              required
              placeholder=""
              v-model="champ_client.telephone_entreprise"
              type="tel"
              class="input"
            />
            <span>Telephone</span>
          </label>

          <label>
            <input
              required
              placeholder=""
              type="text"
              v-model="champ_client.email_entreprise"
              class="input"
            />
            <span>mail</span>
          </label>
        </div>
        <div class="flex">
          <label>
            <input
              required
              v-model="champ_client.localisation_entreprise"
              placeholder=""
              type="text"
              class="input"
            />
            <span>Localisation</span>
          </label>
        </div>

        <label>
          <input
            required
            placeholder=""
            type="file"
            ref="fileInput"
            @change="handleFileChange"
            class="input"
          />
          <span>Logo de l'entreprise</span>
        </label>
        <label>
          <input
            required
            v-model="champ_client.mot_de_passe"
            placeholder=""
            type="password"
            class="input"
          />
          <span>Mot de passe</span>
        </label>
        <label>
          <input
            required
            placeholder=""
            v-model="champ_client.confirmation_mot_de_passe"
            type="password"
            class="input"
          />
          <span>Confirmer le mot de passe</span>
        </label>

        <div class="flex">
          <label>
            <select
              required
              name=""
              id=""
              v-model="champ_client.secteur_dactivite_entreprise"
            >
              <option value="" disabled>Secteur d'activité</option>
              <option value="Informatique">Informatique</option>
              <option value="Gestionnaire">Services financiers</option>
              <option value="Informatique">Education</option>
              <option value="Gestionnaire">Agro-alimentaire</option>
            </select>
          </label>
        </div>

        <div class="flex">
          <label>
            <select required name="" id="" v-model="champ_client.pays">
              <option value="" disabled>Sélectionner un pays</option>
              <option
                v-for="country in countries"
                :value="country.alpha2Code"
                :key="country.alpha2Code"
              >
                {{ country.name.common }}
              </option>
            </select>
          </label>
        </div>
      </div>

      <button class="submit">Submit</button>
    </form>
    <div class="error-box" v-if="errors">
      <ul v-if="hasErrors">
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>
  </section>
  <section class="formulaires" v-if="appel">
    <div class="fermer">
      <button @click="appel_offre">Fermer</button>
    </div>
    <div class="appel_offre">
      <div class="appel">
        <p>L'entreprise Tilonon veut publier cet appel d'offre</p>
        <div class="yes_no">
          <button>Accetper</button>
          <button>Refuser</button>
        </div>
      </div>

      <div class="appel">
        <p>L'entreprise Tilonon veut publier cet appel d'offre</p>
        <div class="yes_no">
          <button>Accetper</button>
          <button>Refuser</button>
        </div>
      </div>
    </div>
  </section>
  <form class="form" v-if="montrer">
    <label for="salaire">Salaire</label>
    <input id="salaire" type="radio" name="r" value="1" checked="true" />
    <label for="nom">Nom</label>
    <input id="nom" type="radio" name="r" value="2" />
    <label for="poste">Poste</label>
    <input id="poste" type="radio" name="r" value="3" />
  </form>
  <section class="option">
    <div class="filtre">
      <button @click="filtrer" title="filter" class="filter">
        <svg viewBox="0 0 512 512" height="1em">
          <path
            d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"
          ></path>
        </svg>
      </button>
    </div>
    <div class="filtre">
      <button type="button" class="button" @click="filtrer_form">
        <span class="button__text">Ajouter</span>
        <span class="button__icon"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke="currentColor"
            height="24"
            fill="none"
            class="svg"
          >
            <line y2="19" y1="5" x2="12" x1="12"></line>
            <line y2="12" y1="12" x2="19" x1="5"></line></svg
        ></span>
      </button>
    </div>

    <div class="group">
      <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
        <g>
          <path
            d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
          ></path>
        </g>
      </svg>
      <input placeholder="Search" type="search" v-model="input" class="input" />
    </div>
  </section>
  <section class="droit">
    <table>
      <thead>
        <tr>
          <th>logo</th>
          <th>identifiant</th>
          <th>Nom de l'entreprise</th>
          <th>Email</th>
          <th>Localisation</th>
          <th>Telephone</th>
          <th>Secteur d'activité</th>
          <th>Pays</th>
          <th>Appel restant</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="client in clients" :key="client.idEntreprise">
          <td class="">
            <img :src="client.lien_logo" class="profile" />
          </td>
          <td class="">{{ client.idEntreprise }}</td>
          <td class="">{{ client.libEntreprise }}</td>
          <td class="">{{ client.email_entreprise }}</td>
          <td class="">{{ client.localisation_entreprise }}</td>
          <td class="">{{ client.telephone_entreprise }}</td>
          <td class="">{{ client.secteur_dactivite_entreprise }}</td>
          <td class="">{{ client.pays_entreprise }}</td>
          <td class="">{{ client.nombre_dappel_doffre_restant }}</td>

          <td>
            <div class="boutons">
              <button class="edit-button">
                <svg viewBox="0 0 448 512" class="edit-svgIcon">
                  <path
                    d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                  ></path>
                </svg>
              </button>
              <button class="edit-button">
                <svg class="edit-svgIcon" viewBox="0 0 512 512">
                  <path
                    d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
                  ></path>
                </svg>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
.droit {
  overflow: auto;
  width: 100%;
}
.formulaires {
  text-align: center;
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
.form {
  width: 100%;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
}
.option {
  width: 100%;

  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-size: 28px;
  color: var(--color1);
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
  margin-left: 10px;
}

.title::before,
.title::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0px;
  background-color: var(--color2);
}

.title::before {
  width: 18px;
  height: 18px;
  background-color: var(--color2);
}

.title::after {
  width: 18px;
  height: 18px;
  animation: pulse 1s linear infinite;
}

@keyframes pulse {
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
}

table {
  width: 100%;
  border-collapse: collapse;
  overflow: auto; /* Activer le défilement horizontal lorsque le tableau dépasse la largeur de son conteneur */
  display: block;
}
th,
td {
  padding: 10px;
  border: 1px solid #ddd;
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

/* Bouton ajouter */

.button {
  position: relative;
  width: 150px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: black;
}

.button,
.button__icon,
.button__text {
  transition: all 0.3s;
}

.button .button__text {
  transform: translateX(30px);
  color: #fff;
  font-weight: 600;
}

.button .button__icon {
  position: absolute;
  transform: translateX(109px);
  height: 100%;
  width: 39px;
  background-color: var(--color1);
  display: flex;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
}

.button .svg {
  width: 30px;
  stroke: #fff;
}

.button:hover .button__text {
  color: transparent;
}

.button:hover .button__icon {
  width: 148px;
  transform: translateX(0);
}

/* bouton notification */

.inbox-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.082);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: var(--color2);
  cursor: pointer;
  transition: all 0.3s;
}
.inbox-btn svg path {
  fill: white;
}
.inbox-btn svg {
  height: 17px;
  transition: all 0.3s;
}
.msg-count {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  font-size: 0.7em;
  color: rgb(0, 0, 0);
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.inbox-btn:hover {
  transform: scale(1.1);
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
  transition: 0.3s ease;
}

.input::placeholder {
  color: #9e9ea7;
}

.input:focus,
input:hover {
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

/* bouton fermer */
.fermer {
  width: 100%;
  display: flex;
  justify-content: center;
}

.fermer button {
  border: none;
  height: 45px;
  padding: 8px;
  border-radius: 5px;
  border: 2.5px solid #e0e1e4;
  box-shadow: 0px 0px 20px -20px;
  cursor: pointer;
  background-color: white;
  transition: all 0.2s ease-in-out 0ms;
  user-select: none;
}

.fermer button:hover {
  background-color: #f2f2f2;
  box-shadow: 0px 0px 20px -18px;
}

.fermer button:active {
  transform: scale(0.95);
}

/* box au hover*/
.form {
  --background: #ffffff;
  --text: #414856;
  --radio: #7c96b2;
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
  transition: border 0.5s ease;
}

.form input[type="radio"]::before,
.form input[type="radio"]::after {
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
  width: calc(100% / 2);
  height: calc(100% / 2);
  background: var(--radio-checked);
  top: var(--y, 100%);
  transition: top 0.5s cubic-bezier(0.48, 1.97, 0.5, 0.63);
}

.form input[type="radio"]:checked {
  --radio: var(--radio-checked);
}

.form input[type="radio"]:checked::after {
  --y: 0%;
  animation: stretch-animate 0.3s ease-out 0.17s;
}

.form input[type="radio"]:checked::before {
  --opacity: 0;
}

.form input[type="radio"]:checked ~ input[type="radio"]::after {
  --y: -100%;
}

.form input[type="radio"]:not(:checked)::before {
  --opacity: 1;
  transition: opacity 0s linear 0.5s;
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
  opacity: 0.2;
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

/* Legrand formulaire */

.formulaire {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 40%;
  background-color: #ffff;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
}

.les_slides {
  display: flex;
}

.slides {
  overflow-y: auto;
}
.slides::-webkit-scrollbar {
  display: none;
}
.slides label {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
  width: 100%;
}

.flex {
  display: flex;
  width: 100%;
  gap: 10px;
}

.formulaire label {
  position: relative;
}

.formulaire label .input {
  width: 100%;
  padding: 10px 10px 20px 10px;
  outline: 0;
  border: 1px solid var(--color2);
  border-radius: 10px;
  background-color: white;
}

.formulaire label .input + span {
  position: absolute;
  left: 10px;
  top: 15px;
  color: grey;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.formulaire label .input:placeholder-shown + span {
  top: 15px;
  font-size: 0.9em;
}

.formulaire label .input:focus + span,
.form label .input:valid + span {
  top: 30px;
  font-size: 0.7em;
  font-weight: 600;
}

.formulaire label .input:valid + span {
  color: black;
}

.submit {
  border: none;
  outline: none;
  background-color: var(--color2);
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: 0.3s ease;
}

.submit:hover {
  background-color: black;
}

/* Error-box */

.error-box {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 20px;
}

.error-box ul {
  color: red;
}

/* Select  */

label select {
  border: 1px solid var(--color2);
  border-radius: 5px;
  outline: none;
}

label option {
  background-color: var(--color1);
}
label option:hover {
  background-color: white;
  color: white;
}

/* les boutons des tableaux */

.boutons {
  display: flex;
  justify-content: space-around;
}

.edit-button {
  margin-left: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgb(20, 20, 20);
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);
  cursor: pointer;
  transition-duration: 0.3s;
  overflow: hidden;
  position: relative;
  text-decoration: none !important;
}

.edit-svgIcon {
  width: 17px;
  transition-duration: 0.3s;
}

.edit-svgIcon path {
  fill: white;
}

.edit-button:hover {
  width: 120px;
  border-radius: 50px;
  transition-duration: 0.3s;
  background-color: rgb(255, 69, 69);
  align-items: center;
}

.edit-button:hover .edit-svgIcon {
  width: 20px;
  transition-duration: 0.3s;
  transform: translateY(60%);
  -webkit-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  transform: rotate(360deg);
}

.edit-button::before {
  display: none;
  content: "Edit";
  color: white;
  transition-duration: 0.3s;
  font-size: 2px;
}

.edit-button:hover::before {
  display: block;
  padding-right: 10px;
  font-size: 13px;
  opacity: 1;
  transform: translateY(0px);
  transition-duration: 0.3s;
}

/* image de profile */

.profile {
  height: 30px;
  width: 30px;
}
</style>
