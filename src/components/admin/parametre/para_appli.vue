<script setup lang="ts">
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
const parametres_generaux = ref([
  {
    nom_parametre: "Profession",
    attribut_tableau: ["id", "libelle"],
  },
  {
    nom_parametre: "Situation Matrimoniale",
    attribut_tableau: ["id", "libelle"],
  },
  {
    nom_parametre: "Spécialité",
    attribut_tableau: ["id", "libelle"],
  },
  {
    nom_parametre: "Etablissement",
    attribut_tableau: ["id", "libelle"],
  },

  {
    nom_parametre: "Diplome",
    attribut_tableau: ["id", "libelle"],
  },
  {
    nom_parametre: "Type contrat",
    attribut_tableau: ["id", "libelle"],
  },
  {
    nom_parametre: "Poste",
    attribut_tableau: ["id", "libelle"],
  },
  {
    nom_parametre: "genre",
    attribut_tableau: ["id", "libelle"],
  },
  {
    nom_parametre: "type de test",
    attribut_tableau: ["id", "libelle"],
  },
  {
    nom_parametre: "groupe utilisateur",
    attribut_tableau: ["id", "libelle"],
  },

  {
    nom_parametre: "Ville",
    attribut_tableau: ["id", "libelle"],
  },
  {
    nom_parametre: "Secteur d'activité",
    attribut_tableau: ["id", "libelle"],
  },

  {
    nom_parametre: "Outils",
    attribut_tableau: ["id", "libelle"],
  },
  {
    nom_parametre: "genre",
    attribut_tableau: ["id", "libelle"],
  },

  {
    nom_parametre: "Competence",
    attribut_tableau: ["id", "libelle"],
  },
  {
    nom_parametre: "Responsabilité",
    attribut_tableau: ["id", "libelle"],
  },

  {
    nom_parametre: "Type de test",
    attribut_tableau: ["id", "libelle"],
  },
  {
    nom_parametre: "Type de compte",
    attribut_tableau: ["id", "libelle"],
  },
]);

const profession = reactive({
  idProfession: "",
  libelle: "",
});

const tableaux = reactive({
  input: "",
  reponse: "",
  users: "",
});

onMounted(() => {
  axios
    .get("http://localhost/backend/api.php")
    .then((res) => {
      tableaux.reponse = res.data;
      // profile.users = res.data;
      tableaux.data = res.data;
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
  <p class="title">Paramètres de l'application</p>
  <section class="parametre">
    <form class="formulaire">
      <div class="slides">
        <div class="flex" v-for="(parametre, index) in parametres_generaux" :key="index">
          <div class="champ">
            <label>
              <input required placeholder="" type="text" class="input" />
              <span>{{ parametre.nom_parametre }}</span>
            </label>
            <button class="submit">Enregistrer</button>
          </div>
          <div class="tableaU">
            <table>
              <thead>
                <th>{{ parametre.attribut_tableau[0] }}</th>
                <th>{{ parametre.attribut_tableau[1] }}</th>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Masculin</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </form>
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
  gap: 10px;
  width: 100%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
}

.slides {
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  width: 100%;
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
  flex-direction: column;
  width: 30%;
  gap: 10px;
  margin: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.24);
  padding: 20px;
  border-radius: 10px;
}

.champ {
  display: flex;
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
  padding: 5px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: 0.3s ease;
}

.submit:hover {
  background-color: black;
}
</style>
