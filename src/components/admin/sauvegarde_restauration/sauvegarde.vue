<script setup lang="ts">
import axios from "axios";
const sauvegardes = async () => {
  try {
    const response = await axios.get(
      "http://localhost/genie_logiciel-main/backend/backend_yeo/save_restore.php"
    );
    const blob = new Blob([response.data], { type: "application/octet-stream" });
    const currentDate = new Date();

    const fileName = `sauvegarde_du_${currentDate
      .toLocaleString()
      .replace(/[/: ]/g, "_")}.sql`;
    const fileURL = window.URL.createObjectURL(blob);

    // Téléchargement du fichier
    const link = document.createElement("a");
    link.href = fileURL;
    link.download = fileName;
    link.click();

    if (response.data.success) {
      alert(response.data.message); // Afficher un message de succès
    } else {
      alert("Une erreur s'est produite : " + response.data.message); // Afficher un message d'erreur
    }

    // Affichage d'un message de succès
    const message = {
      message: "La sauvegarde a été effectuée avec succès.",
      type: "success",
    };
  } catch (error) {
    // Affichage d'un message d'erreur
    const message = {
      message: "Une erreur est survenue lors de la sauvegarde.",
      type: "error",
    };
  }
};
</script>
<template>
  <section class="restore">
    <div class="title">Sauvegarde</div>
    <div class="ele">
      <div class="cloud"></div>
      <div class="shadow"></div>
    </div>
    <div class="save">
      <button class="botao" @click="sauvegardes">
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="mysvg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Interface / Download">
              <path
                id="Vector"
                d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                stroke="#f1f1f1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </g>
        </svg>
        <span class="texto">Sauvegarder la base de données</span>
      </button>
    </div>
  </section>
</template>
<style scoped>
.restore {
  width: 45%;
  height: 100%;
  background-color: var(--color1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
}

.title {
  color: white;
}

img {
  width: 30%;
  height: 30%;
}

.cloud {
  width: 150px;
  height: 70px;
  background: #eceff1;
  box-shadow: 10px 10px rgba(0, 0, 0, 0.2);
  border-radius: 70px;
}

.cloud::after,
.cloud::before {
  content: "";
  position: relative;
  display: inline-block;
  background: inherit;
  border-radius: inherit;
}

.cloud::after {
  width: 50px;
  height: 50px;
  top: -30px;
  left: -55px;
}

.cloud::before {
  width: 70px;
  height: 70px;
  top: -20px;
  left: 60px;
}

.cloud {
  animation: float 1.8s infinite alternate;
}

@keyframes float {
  0% {
    transform: translateY(15px);
  }

  100% {
    transform: translateY(0);
  }
}

.shadow {
  width: 150px;
  height: 24px;
  background-color: rgba(0, 0, 0, 0.2);
  margin-top: 100px;
  border-radius: 50%;
  filter: blur(7px);
  animation: sha 1.8s infinite alternate;
}

@keyframes sha {
  0% {
    transform: scale(1, 1);
  }

  100% {
    transform: scale(0.85, 0.85);
  }
}
.save {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* le bouton de suavegarde */
.botao {
  width: 70%;
  height: 70px;
  border-radius: 20px;
  border: none;
  box-shadow: 1px 1px rgba(51, 51, 51, 0.37);
  background: rgb(246, 246, 246);
  background: var(--color2);
  color: #fff;
  font-family: Roboto, sans-serif;
  font-weight: 505;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  filter: drop-shadow(0 0 10px rgba(75, 75, 75, 0.568));
  transition: 0.5s linear;
}

.botao .mysvg {
  display: none;
}

.botao:hover {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  transition: 0.5s linear;
}

.botao:hover .texto {
  display: none;
}

.botao:hover .mysvg {
  display: inline;
}

.botao:hover::before {
  content: "";
  position: absolute;
  top: -3px;
  left: -3px;
  width: 100%;
  height: 100%;
  border: 3.5px solid transparent;
  border-top: 3.5px solid #fff;
  border-right: 3.5px solid #fff;
  border-radius: 50%;
  animation: animateC 2s linear infinite;
}

@keyframes animateC {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
