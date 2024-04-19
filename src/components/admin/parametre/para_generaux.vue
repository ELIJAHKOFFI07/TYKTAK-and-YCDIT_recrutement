<script setup lang="ts">
import axios from "axios";
import { onMounted, reactive, ref } from "vue";

// _______________________le back_end_____________________________

const champ_parametre = ref({
  lib_profession: "",
  lib_situation_matrimoniale: "",
  lib_diplome: "",
  lib_specialite: "",
  lib_genre: "",
  lib_type_contrat: "",
  lib_poste: "",
  lib_groupe_utilisateur: "",
  lib_type_question: "",
  lib_loisir: "",
  lib_outils: "",
});

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

// ____________________ les fonctions d'affichage ________________________
const professions = ref([]);

const fetchProfessions = async () => {
  try {
    const response = await axios.get(
      "http://localhost/genie_logiciel-main/backend/backend_yeo/parametres_generaux.php?action=profession"
    );
    professions.value = response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des professions :", error);
  }
};

const situationsMatrimoniales = ref([]);
const fetchSituationsMatrimoniales = async () => {
  try {
    const response = await axios.get(
      "http://localhost/genie_logiciel-main/backend/backend_yeo/parametres_generaux.php?action=situation_matrimoniale"
    );
    situationsMatrimoniales.value = response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des situations matrimoniales :", error);
  }
};

const diplomes = ref([]);
const fetchDiplome = async () => {
  try {
    const response = await axios.get(
      "http://localhost/genie_logiciel-main/backend/backend_yeo/parametres_generaux.php?action=diplome"
    );
    diplomes.value = response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des situations matrimoniales :", error);
  }
};

const genres = ref([]);
const fetchGenre = async () => {
  try {
    const response = await axios.get(
      "http://localhost/genie_logiciel-main/backend/backend_yeo/parametres_generaux.php?action=genre"
    );
    genres.value = response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des situations matrimoniales :", error);
  }
};

const types_contrats = ref([]);
const fetchType_contrat = async () => {
  try {
    const response = await axios.get(
      "http://localhost/genie_logiciel-main/backend/backend_yeo/parametres_generaux.php?action=type_contrat"
    );
    types_contrats.value = response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des situations matrimoniales :", error);
  }
};

const postes = ref([]);
const fetchPoste = async () => {
  try {
    const response = await axios.get(
      "http://localhost/genie_logiciel-main/backend/backend_yeo/parametres_generaux.php?action=poste"
    );
    postes.value = response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des situations matrimoniales :", error);
  }
};

const groupe_utilisateur = ref([]);
const fetchGroupe_user = async () => {
  try {
    const response = await axios.get(
      "http://localhost/genie_logiciel-main/backend/backend_yeo/parametres_generaux.php?action=groupe_utilisateur"
    );
    groupe_utilisateur.value = response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des situations matrimoniales :", error);
  }
};

const type_question = ref([]);
const fetchType_question = async () => {
  try {
    const response = await axios.get(
      "http://localhost/genie_logiciel-main/backend/backend_yeo/parametres_generaux.php?action=type_question"
    );
    type_question.value = response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des situations matrimoniales :", error);
  }
};

const loisirs = ref([]);
const fetchLoisir = async () => {
  try {
    const response = await axios.get(
      "http://localhost/genie_logiciel-main/backend/backend_yeo/parametres_generaux.php?action=loisir"
    );
    loisirs.value = response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des situations matrimoniales :", error);
  }
};

const outils = ref([]);
const fetchOutils = async () => {
  try {
    const response = await axios.get(
      "http://localhost/genie_logiciel-main/backend/backend_yeo/parametres_generaux.php?action=outils"
    );
    outils.value = response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des situations matrimoniales :", error);
  }
};

// _______________________les fonctions d'ajout ___________________________
const addProfession = async () => {
  try {
    const response = await axios.post(
      "http://localhost/genie_logiciel-main/backend/backend_yeo/parametres_generaux.php?action=addProfession",
      {
        champ_parametre: champ_parametre.value,
      }
    );

    console.log(response.data);
    if (response.data.success) {
      alert(response.data.message); // Afficher un message de succès
      champ_parametre.value.push(response.data);
    } else {
      alert("Une erreur s'est produite : " + response.data.message); // Afficher un message d'erreur
    }

    // Réinitialiser les champs du formulaire après l'envoi des données
    champ_parametre.value.lib_profession = "";
    // champ_parametre.value.lib_situation_matrimoniale = "";
    // champ_parametre.value.lib_diplome = "";
    // champ_parametre.value.lib_specialite = "";
    // champ_parametre.value.lib_genre = "";
    // champ_parametre.value.lib_type_contrat = "";
    // champ_parametre.value.lib_poste = "";
    // champ_parametre.value.lib_groupe_utilisateur = "";
    // champ_parametre.value.lib_type_question = "";
    // champ_parametre.value.lib_loisir = "";
    // champ_parametre.value.lib_outils = "";
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchProfessions();
  fetchSituationsMatrimoniales();
  fetchDiplome();
  fetchGenre();
  fetchType_contrat();
  fetchPoste();
  fetchGroupe_user();
  fetchType_question();
  fetchLoisir();
  fetchOutils();
});
</script>

<template>
  <p class="title">Paramètres de generaux</p>
  <section class="parametre">
    <div class="formulaire">
      <div class="slides">
        <form>
          <div class="flex">
            <div class="champ">
              <p class="title">Profession</p>
              <label>
                <input
                  required
                  placeholder=""
                  v-model="champ_parametre.lib_profession"
                  type="text"
                  class="input"
                />
                <span>Profession</span>
              </label>
              <button class="submit" @submit.prevent="addProfession">Ajouter</button>
            </div>
            <div class="tableau">
              <table>
                <thead>
                  <th>Identifiant</th>
                  <th>Libellé</th>
                  <th>Action</th>
                </thead>
                <tbody>
                  <tr v-for="element in professions" :key="element.id_profession">
                    <td>{{ element.id_profession }}</td>
                    <td>{{ element.lib_Profession }}</td>
                    <td>
                      <div class="boutons">
                        <button class="edit-button supprimer">
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
            </div>
          </div>
        </form>

        <form>
          <div class="flex">
            <div class="champ">
              <p class="title">Situation matrimoniale</p>
              <label>
                <input required placeholder="" type="text" class="input" />
                <span>Situation matrimoniale</span>
              </label>
              <button class="submit">Ajouter</button>
            </div>
            <div class="tableau">
              <table>
                <thead>
                  <th>Identifiant</th>
                  <th>Libellé</th>
                  <th>Action</th>
                </thead>
                <tbody>
                  <tr
                    v-for="element in situationsMatrimoniales"
                    :key="element.id_situation_matrimoniale"
                  >
                    <td>{{ element.id_situation_matrimoniale }}</td>
                    <td>{{ element.lib_situation_matrimoniale }}</td>
                    <td>
                      <div class="boutons">
                        <button class="edit-button supprimer">
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
            </div>
          </div>
        </form>

        <form>
          <div class="flex">
            <div class="champ">
              <p class="title">Diplome</p>
              <label>
                <input required placeholder="" type="text" class="input" />
                <span>Diplome</span>
              </label>
              <button class="submit">Ajouter</button>
            </div>
            <div class="tableau">
              <table>
                <thead>
                  <th>Identifiant</th>
                  <th>Libellé</th>
                  <th>Action</th>
                </thead>
                <tbody>
                  <tr v-for="element in diplomes" :key="element.id_diplome">
                    <td>{{ element.id_diplome }}</td>
                    <td>{{ element.id_diplome }}</td>
                    <td>
                      <div class="boutons">
                        <button class="edit-button supprimer">
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
            </div>
          </div>
        </form>

        <form>
          <div class="flex">
            <div class="champ">
              <p class="title">specialité</p>
              <label>
                <input required placeholder="" type="text" class="input" />
                <span>specialité</span>
              </label>
              <button class="submit">Ajouter</button>
              <label>
                <select required>
                  <option
                    v-for="profession in professions"
                    :key="profession.id_profession"
                    :value="profession.id_profession"
                  >
                    {{ profession.lib_Profession }}
                  </option>
                </select>
              </label>
            </div>
            <div class="tableau">
              <table>
                <thead>
                  <th>Identifiant</th>
                  <th>Libellé</th>
                  <th>Action</th>
                </thead>
                <tbody>
                  <tr v-for="element in professions" :key="element.id_profession">
                    <td>{{ element.id_profession }}</td>
                    <td>{{ element.lib_Profession }}</td>
                    <td>
                      <div class="boutons">
                        <button class="edit-button supprimer">
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
            </div>
          </div>
        </form>

        <form>
          <div class="flex">
            <div class="champ">
              <p class="title">Genre</p>
              <label>
                <input required placeholder="" type="text" class="input" />
                <span>Genre</span>
              </label>
              <button class="submit">Ajouter</button>
            </div>
            <div class="tableau">
              <table>
                <thead>
                  <th>Identifiant</th>
                  <th>Libellé</th>
                  <th>Action</th>
                </thead>
                <tbody>
                  <tr v-for="element in genres" :key="element.id_genre">
                    <td>{{ element.id_genre }}</td>
                    <td>{{ element.lib_genre }}</td>
                    <td>
                      <div class="boutons">
                        <button class="edit-button supprimer">
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
            </div>
          </div>
        </form>

        <form>
          <div class="flex">
            <div class="champ">
              <p class="title">Type de contrat</p>
              <label>
                <input required placeholder="" type="text" class="input" />
                <span>Type de contrat</span>
              </label>
              <button class="submit">Ajouter</button>
            </div>
            <div class="tableau">
              <table>
                <thead>
                  <th>Identifiant</th>
                  <th>Libellé</th>
                  <th>Action</th>
                </thead>
                <tbody>
                  <tr v-for="element in types_contrats" :key="element.id_type_contrat">
                    <td>{{ element.id_type_contrat }}</td>
                    <td>{{ element.lib_type_contrat }}</td>
                    <td>
                      <div class="boutons">
                        <button class="edit-button supprimer">
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
            </div>
          </div>
        </form>

        <form>
          <div class="flex">
            <div class="champ">
              <p class="title">Poste</p>
              <label>
                <input required placeholder="" type="text" class="input" />
                <span>Poste</span>
              </label>
              <button class="submit">Ajouter</button>
            </div>
            <div class="tableau">
              <table>
                <thead>
                  <th>Identifiant</th>
                  <th>Libellé</th>
                  <th>Action</th>
                </thead>
                <tbody>
                  <tr v-for="element in postes" :key="element.id_poste">
                    <td>{{ element.id_poste }}</td>
                    <td>{{ element.lib_poste }}</td>
                    <td>
                      <div class="boutons">
                        <button class="edit-button supprimer">
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
            </div>
          </div>
        </form>

        <form>
          <div class="flex">
            <div class="champ">
              <p class="title">Groupe utilisateur</p>
              <label>
                <input required placeholder="" type="text" class="input" />
                <span>Groupe utilisateur</span>
              </label>
              <button class="submit">Ajouter</button>
            </div>
            <div class="tableau">
              <table>
                <thead>
                  <th>Identifiant</th>
                  <th>Libellé</th>
                  <th>Action</th>
                </thead>
                <tbody>
                  <tr
                    v-for="element in groupe_utilisateur"
                    :key="element.id_groupe_utilisateur"
                  >
                    <td>{{ element.id_groupe_utilisateur }}</td>
                    <td>{{ element.lib_groupe_utilisateur }}</td>
                    <td>
                      <div class="boutons">
                        <button class="edit-button supprimer">
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
            </div>
          </div>
        </form>

        <form>
          <div class="flex">
            <div class="champ">
              <p class="title">Type de question</p>
              <label>
                <input required placeholder="" type="text" class="input" />
                <span>Type de question</span>
              </label>
              <button class="submit">Ajouter</button>
            </div>
            <div class="tableau">
              <table>
                <thead>
                  <th>Identifiant</th>
                  <th>Libellé</th>
                  <th>Action</th>
                </thead>
                <tbody>
                  <tr v-for="element in type_question" :key="element.id_type_de_question">
                    <td>{{ element.id_type_de_question }}</td>
                    <td>{{ element.lib_type_de_question }}</td>
                    <td>
                      <div class="boutons">
                        <button class="edit-button supprimer">
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
            </div>
          </div>
        </form>

        <form>
          <div class="flex">
            <div class="champ">
              <p class="title">Loisir</p>
              <label>
                <input required placeholder="" type="text" class="input" />
                <span>loisir</span>
              </label>
              <button class="submit">Ajouter</button>
            </div>
            <div class="tableau">
              <table>
                <thead>
                  <th>Identifiant</th>
                  <th>Libellé</th>
                  <th>Action</th>
                </thead>
                <tbody>
                  <tr v-for="element in loisirs" :key="element.id_loisir">
                    <td>{{ element.id_loisir }}</td>
                    <td>{{ element.lib_loisir }}</td>
                    <td>
                      <div class="boutons">
                        <button class="edit-button supprimer">
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
            </div>
          </div>
        </form>

        <form>
          <div class="flex">
            <div class="champ">
              <p class="title">Outils</p>
              <label>
                <input required placeholder="" type="text" class="input" />
                <span>outil</span>
              </label>
              <label>
                <select required>
                  <option
                    v-for="profession in professions"
                    :key="profession.id_profession"
                    :value="profession.id_profession"
                  >
                    {{ profession.lib_Profession }}
                  </option>
                </select>
              </label>
              <button class="submit">Ajouter</button>
            </div>
            <div class="tableau">
              <table>
                <thead>
                  <th>Identifiant</th>
                  <th>Libellé</th>
                  <th>Action</th>
                </thead>
                <tbody>
                  <tr v-for="element in outils" :key="element.id_outils">
                    <td>{{ element.id_outils }}</td>
                    <td>{{ element.lib_outils }}</td>
                    <td>
                      <div class="boutons">
                        <button class="edit-button supprimer">
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
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Legrand formulaire */
.parametre {
  display: flex;
  flex-direction: column;
  width: 95%;
}
.formulaire {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
}
form {
  width: 48%;
}

.slides {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: auto;
  width: 100%;
}
.flex::-webkit-scrollbar {
  display: none;
}
label {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
  width: 100%;
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
.flex {
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 10px;
  height: 250px;
  margin: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.24);
  padding: 20px;
  border-radius: 10px;
  overflow-y: auto;
}

.champ {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
  overflow-y: auto;
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

label {
  position: relative;
}

label .input {
  width: 100%;
  padding: 10px 10px 20px 10px;
  outline: 0;
  border: 1px solid var(--color2);
  border-radius: 10px;
  background-color: white;
}
label .input + span {
  position: absolute;
  left: 10px;
  top: 15px;
  color: grey;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

label .input:placeholder-shown + span {
  top: 15px;
  font-size: 0.9em;
}

label .input:focus + span,
.form label .input:valid + span {
  top: 30px;
  font-size: 0.7em;
  font-weight: 600;
}

label .input:valid + span {
  color: black;
}

.submit {
  border: none;
  outline: none;
  background-color: var(--color2);
  padding: 5px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: 0.3s ease;
}

.submit:hover {
  background-color: black;
}

/* les boutons */

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
  width: 70px;
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
  content: "modfier";
  color: white;
  transition-duration: 0.3s;
  font-size: 2px;
}
.supprimer::before {
  display: none;
  content: "supprimer";
  color: white;
  transition-duration: 0.3s;
  font-size: 2px;
}

.edit-button:hover::before {
  display: block;
  padding-right: 10px;
  font-size: 9px;
  opacity: 1;
  transform: translateY(0px);
  transition-duration: 0.3s;
}
</style>
