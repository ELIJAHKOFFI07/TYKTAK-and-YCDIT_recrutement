<script setup>
import bouton_para from "@/components/admin/parametre/bouton_para.vue";
</script>
<template>
  <p class="title">Paramètres</p>
  <section class="menu">
    <router-link to="/" class="nav">
      <bouton_para></bouton_para>
    </router-link>
  </section>
</template>

<style scoped>
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vh;
  height: 100%;
}

.nav {
  text-decoration: none;
}
.nav:hover {
  background-color: transparent;
}
</style>
