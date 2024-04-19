<script setup lang="ts">

import navbar from '@/components/admin/tableau_bord/navbar.vue'
import menuVue from '@/components/admin/tableau_bord/menu.vue'

</script>

<template>
  <header>
    <navbar class="navbar"></navbar>
  </header>
  <main>
    <menuVue class="menu"></menuVue>
    <section class="contenu">
        <router-view></router-view>
    </section>
  </main>
</template>

<style scoped>

header{
  width: 20%;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

main{
  width: 75%;
  height: 100%;
  margin: 10px 0 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.contenu{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 84%;
    width: 100%;
    overflow-x: auto;
    
    /* border-radius: 20px;
    background-color: rgb(212, 212, 212); */
}

.menu{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 8%;
    margin: 10px 0 10px 0;
    
}

.contenu::-webkit-scrollbar {
  display: none;
}

</style>
