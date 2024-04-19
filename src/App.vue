<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
// Définir un état pour contrôler l'affichage du loader
const isLoading = ref(true);

// Simuler un délai de chargement de la page
setTimeout(() => {
  isLoading.value = false;
}, 2000);
  
</script>

<template>
    <section v-if="isLoading"  class="anime">
        <div class="loader">
            <svg xml:space="preserve" viewBox="0 0 80 80" height="80px" width="80px" y="0px" x="0px" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1" class="clock">  <image href="data:image/png;base64,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" y="0" x="0" height="80" width="80" id="image0"></image>
            </svg>
            <div class="stage"></div>
            <div class="hold">
              <div class="ball"></div>
            </div>
        </div>
        <div class="card">
          <div class="loader2">
            <img class="logo" src="../src/assets/images_yeo/logo.jpeg">
            <div class="words">
              <span class="word">Trouver</span>
              <span class="word">Le meilleur </span>
              <span class="word">Employé</span>
              <span class="word">En un clin</span>
              <span class="word">d'oeil</span>
            </div>
          </div>
      </div>
    </section>
  <RouterView v-else />
</template>

<style scoped>

.anime{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
}
.loader {
  position: relative;
  background-color: white;
  padding-left: 1.5em;
  padding-right: 1.5em;
  padding-top: 3em;
  top: -0.4em;
  border-radius: 25px;
  z-index: -1;
  box-shadow: 5px 2px 0px #666666;
}

.clock {
  position: relative;
  top: -1.4em;
  left: 0.05em;
}

.stage {
  position: relative;
  left: 0.5em;
  background-color:#C3B649;
  width: 4em;
  height: .4em;
  border-radius: 15px;
  box-shadow: 2px 2px 0px #666666;
  z-index: 4;
}

.hold {
  position: relative;
  background-color: black;
  width: 0.1em;
  height: 4em;
  left: 2.5em;
  top: -.25em;
  animation: 1.3s dangle infinite;
  box-shadow: 4px 4px 0px #666666;
  z-index: -1;
}

@keyframes dangle {
  0% {
    transform-origin: top center;
    transform: rotate(45deg);
  }

  50% {
    transform-origin: top center;
    transform: rotate(-45deg);
  }

  100% {
    transform-origin: top center;
    transform: rotate(45deg);
  }
}

.ball {
  display: inline-block;
  position: relative;
  top: 3em;
  left: -1.2em;
  width: 2.5em;
  height: 2.5em;
  margin: 0;
  border-radius: 50%;
  background: #F2EED1;
  box-shadow: 1px 1px 0px #666666;
}


/* cards */

.logo{
    height: 50px;
    width: 130px;
    border-radius: 50px;
    margin-bottom: 10px;
    
}
.card {
  /* color used to softly clip top and bottom of the .words container */
  --bg-color: #C3B649;
  background-color: var(--bg-color);
  padding: 1rem 2rem;
  border-radius: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader2 {
  color: rgb(124, 124, 124);
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 25px;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  height: 40px;
  padding: 10px 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-radius: 8px;
}

.words {
  overflow: hidden;
  position: relative;
}
.words::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    var(--bg-color) 10%,
    transparent 30%,
    transparent 70%,
    var(--bg-color) 90%
  );
  z-index: 20;
}

.word {
  display: block;
  height: 100%;
  padding-left: 6px;
  color: black;
  animation: spin_4991 4s infinite;
}

@keyframes spin_4991 {
  10% {
    -webkit-transform: translateY(-102%);
    transform: translateY(-102%);
  }

  25% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }

  35% {
    -webkit-transform: translateY(-202%);
    transform: translateY(-202%);
  }

  50% {
    -webkit-transform: translateY(-200%);
    transform: translateY(-200%);
  }

  60% {
    -webkit-transform: translateY(-302%);
    transform: translateY(-302%);
  }

  75% {
    -webkit-transform: translateY(-300%);
    transform: translateY(-300%);
  }

  85% {
    -webkit-transform: translateY(-402%);
    transform: translateY(-402%);
  }

  100% {
    -webkit-transform: translateY(-400%);
    transform: translateY(-400%);
  }
}
</style>
