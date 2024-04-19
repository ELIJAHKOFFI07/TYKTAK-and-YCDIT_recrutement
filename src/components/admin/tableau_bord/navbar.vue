<template>
  <div class="navbar">
    <div class="logo">
      <img src="../../../assets/images_yeo/logo.jpeg" alt="" />
    </div>
    <div class="menu1">
      <router-link class="nav" to="/tableau_bord/dashboard">
        <button class="btn">
          <font-awesome-icon class="icons" icon="tachometer" />
          <span class="text">Tableau de bord</span>
        </button>
      </router-link>
      <router-link class="nav" to="/tableau_bord">
        <button class="btn">
          <font-awesome-icon class="icons" icon="envelope" />
          <span class="text">Messagerie</span>
          <p class="notif">00</p>
        </button>
      </router-link>
    </div>
    <div class="menu2">
      <div class="titre">
        <font-awesome-icon class="icon2" icon="th" />
        <p class="titre">Menu</p>
      </div>

      <div class="menu2_btn">
        <div v-for="(item, index) in gestions" :key="index" class="gestion">
          <span class="tooltip">{{ item.name }} </span>
          <router-link :to="item.chemin" class="nav">
            <font-awesome-icon class="icon" :icon="item.icon" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const gestions = ref([
  { icon: "user-plus", chemin: "/tableau_bord/clients", name: "Clients" },
  {
    icon: "pencil-square",
    chemin: "/tableau_bord/editions",
    name: "editions",
  },
  { icon: "graduation-cap", chemin: "/tableau_bord/test", name: "tests" },
  {
    icon: "fa-cloud",
    chemin: "/tableau_bord/sauvegardes_restaurations",
    name: "Sauvegardes",
  },
  {
    icon: "fa-briefcase",
    chemin: "/tableau_bord/personnel",
    name: "personnels",
  },
  { icon: "fa-users", chemin: "/tableau_bord/candidat", name: "Candidats" },
  {
    icon: "fa-eye",
    chemin: "/tableau_bord/piste_audit",
    name: "Piste d'audit",
  },
  {
    icon: "fa-credit-card",
    chemin: "/tableau_bord/comptabilite",
    name: "Comptabilité",
  },
  { icon: "fa-cog", chemin: "/tableau_bord/parametre", name: "Paramètres" },
]);
</script>

<style scoped>
.navbar {
  height: 100%;
  width: 100%;
  background-color: black;
  border-radius: 20px;
  padding-top: 0;
  overflow-x: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.navbar .logo {
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: solid 1px #c3b649;
}

.logo img {
  height: 50px;
  width: 120px;
  border-radius: 50px;
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

/* nouveau btn */

.menu1 {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.btn {
  border: none;
  width: 98%;
  height: 5%;
  border-radius: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 12px;
  background: #1c1a1c;
  cursor: pointer;
  transition: all 450ms ease-in-out;
}

.sparkle {
  fill: #aaaaaa;
  transition: all 800ms ease;
}

.text {
  font-weight: 600;
  color: #f2eed1;
  font-size: medium;
}

.btn:hover {
  background: linear-gradient(0deg, #c3b649, #fff59b);
  box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4),
    inset 0px -4px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 4px rgba(255, 255, 255, 0.2),
    0px 0px 180px 0px #f2eed1;
  transform: translateY(-2px);
}

.btn:hover .text {
  color: white;
}

.btn:hover .sparkle {
  fill: white;
  transform: scale(1.2);
}

.btn:hover .icon {
  color: #f2eed1;
}

.btn p {
  font-weight: 900;
  font-size: 0.9em;
}
.btn .notif {
  background-color: #c3b649;
  padding: 5px;
  border-radius: 10px;
}

.icon {
  color: black;
  height: 25px;
  width: 25px;
}
.icons {
  color: rgba(255, 255, 255, 0.635);
  height: 25px;
  width: 25px;
}

/* Menu 2 */
.menu2 {
  margin-top: 10px;
}

.titre {
  display: flex;
  font-size: 25px;
  font-weight: 800;
}
.icon2 {
  color: rgb(255, 255, 255);
  height: 25px;
  width: 25px;
  margin: 0 10px 10px 10px;
}
.menu2_btn {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

.gestion {
  background-color: white;
  width: 22%;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  padding-bottom: 13px;
  padding-top: 13px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
}

.tooltip {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  visibility: hidden;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  transition: opacity 0.3s, visibility 0.3s, top 0.3s, background 0.3s;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.tooltip::before {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  border-color: var(--color2);
  transform: translateX(-50%);
}

.gestion:hover .tooltip {
  top: 120%;
  opacity: 1;
  visibility: visible;
  background: var(--color2);
  transform: translate(-50%, -5px);
}

.gestion:hover {
  background-color: #c3b649;
  box-shadow: 0 0 0 5px #f2eed1;
}

/* barre de scrool */

.navbar::-webkit-scrollbar {
  display: none;
}

.nav {
  text-decoration: none;
}

.nav:hover {
  background-color: transparent;
}

/* hover menu */
</style>
