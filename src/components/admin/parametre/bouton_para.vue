<script lang="ts" setup>
import { ref } from "vue";

const donnees = ref([
  {
    titre: "PARAMETRES GENERAUX",
    chemin: "/tableau_bord/parametre_generaux",
    info:
      "Ici vous pourrez ajouter, modifier et supprimmer les informations liées aux paramères généraux",
  },
  {
    titre: "PARAMETRES DE APPLICATION",
    chemin: "/tableau_bord/parametre_application",
    info:
      "Ici vous pourrez modifier les informations liées aux paramères de votre application",
  },
]);
</script>
<template>
  <section class="btns">
    <div class="card" v-for="(item, index) in donnees" :key="index">
      <router-link :to="item.chemin" class="nav">
        <div class="content">
          <div class="back">
            <div class="back-content">
              <strong>{{ item.titre }}</strong>
            </div>
          </div>
          <div class="front">
            <div class="img">
              <div class="circle"></div>
              <div class="circle" id="right"></div>
              <div class="circle" id="bottom"></div>
            </div>

            <div class="front-content">
              <div class="description">
                <div class="titles">
                  <p class="titles">
                    <strong>{{ item.info }}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.nav {
  text-decoration: none;
  height: 100%;
}
.nav:hover {
  background-color: transparent;
}
.btns {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
/* card 2 */

.card {
  overflow: visible;
  width: 190px;
  height: 254px;
  display: flex;
  margin-left: 100px;
}

.content {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 300ms;
  box-shadow: 0px 0px 10px 1px #000000ee;
  border-radius: 5px;
  background-color: #c3b649;
}

.front,
.back {
  background-color: #c3b649;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 5px;
  overflow: hidden;
}

.back {
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.back::before {
  position: absolute;
  content: " ";
  display: block;
  width: 160px;
  height: 160%;
  background: linear-gradient(
    90deg,
    transparent,
    #c3b649,
    #c3b649,
    #f2eed1,
    #f2eed1,
    transparent
  );
  animation: rotation_481 5000ms infinite linear;
}

.back-content {
  position: absolute;
  width: 99%;
  height: 99%;
  background-color: #151515;
  border-radius: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.card:hover .content {
  transform: rotateY(180deg);
}

@keyframes rotation_481 {
  0% {
    transform: rotateZ(0deg);
  }

  0% {
    transform: rotateZ(360deg);
  }
}

.front {
  transform: rotateY(180deg);
  color: white;
}

.front .front-content {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.front-content .badge {
  background-color: #00000055;
  padding: 2px 10px;
  border-radius: 10px;
  backdrop-filter: blur(2px);
  width: fit-content;
}

.description {
  box-shadow: 0px 0px 10px 5px #00000088;
  width: 100%;
  padding: 10px;
  background-color: #00000099;
  backdrop-filter: blur(5px);
  border-radius: 5px;
}

.titles {
  font-size: 11px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
}

.titles p {
  width: 100%;
}

.card-footer {
  color: #ffffff88;
  margin-top: 5px;
  font-size: 8px;
}

.front .img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.circle {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #f2eed1;
  position: relative;
  filter: blur(15px);
  animation: floating 2600ms infinite linear;
}

#bottom {
  background-color: #f2eed1;
  left: 50px;
  top: 0px;
  width: 150px;
  height: 150px;
  animation-delay: -800ms;
}

#right {
  background-color: #c3b649;
  left: 160px;
  top: -80px;
  width: 30px;
  height: 30px;
  animation-delay: -1800ms;
}

@keyframes floating {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>
