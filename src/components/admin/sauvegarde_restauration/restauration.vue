<script setup lang="ts">
import axios from "axios";
const sauvegardes = async () => {
  try {
    const response = await axios.get(
      "http://localhost/genie_logiciel-main/backend/backend_yeo/save_restore.php"
    );
    const blob = new Blob([response.data], { type: "application/octet-stream" });

    const fileName = `sauvegarde_du_${Date.now()}.sql`;
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
    <div class="title">Restauration</div>
    <div class="ele">
      <div class="cloud"></div>
      <div class="shadow"></div>
    </div>
    <div class="save">
      <form action="restaurer.php" method="post" enctype="multipart/form-data">
        <div class="input-div">
          <input class="input" name="file" type="file" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            stroke-linejoin="round"
            stroke-linecap="round"
            viewBox="0 0 24 24"
            stroke-width="2"
            fill="none"
            stroke="currentColor"
            class="icon"
          >
            <polyline points="16 16 12 12 8 16"></polyline>
            <line y2="21" x2="12" y1="12" x1="12"></line>
            <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
            <polyline points="16 16 12 12 8 16"></polyline>
          </svg>
        </div>
      </form>
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

.input-div {
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid rgb(111, 111, 111);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: 0px 0px 100px rgb(0, 0, 0), inset 0px 0px 10px rgb(14, 26, 27),
    0px 0px 5px rgb(255, 255, 255);
  animation: flicker 2s linear infinite;
}

.icon {
  color: rgb(0, 0, 0);
  font-size: 2rem;
  cursor: pointer;
  animation: iconflicker 2s linear infinite;
}

.input {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer !important;
}

@keyframes flicker {
  0% {
    border: 2px solid rgb(255, 215, 57);
    box-shadow: 0px 0px 100px rgb(252, 210, 1), inset 0px 0px 10px var(--color1),
      0px 0px 5px rgb(255, 255, 255);
  }

  5% {
    border: none;
    box-shadow: none;
  }

  10% {
    border: 2px solid rgba(252, 185, 1, 0.414);
    box-shadow: 0px 0px 100px var(--color2), inset 0px 0px 10px rgba(252, 231, 1, 0.413),
      0px 0px 5px rgb(255, 255, 255);
  }

  25% {
    border: none;
    box-shadow: none;
  }

  30% {
    border: 2px solid rgba(252, 198, 1, 0.984);
    box-shadow: 0px 0px 100px var(--color2), inset 0px 0px 10px rgba(252, 231, 1, 0.842),
      0px 0px 5px rgb(255, 255, 255);
  }

  100% {
    border: 2px solid rgba(231, 252, 1, 0.482);
    box-shadow: 0px 0px 100px rgb(252, 252, 1), inset 0px 0px 10px rgb(164, 169, 4),
      0px 0px 5px rgb(255, 255, 255);
  }
}

@keyframes iconflicker {
  0% {
    opacity: 1;
  }

  5% {
    opacity: 0.2;
  }

  10% {
    opacity: 1;
  }

  25% {
    opacity: 0.2;
  }

  30% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}
</style>
