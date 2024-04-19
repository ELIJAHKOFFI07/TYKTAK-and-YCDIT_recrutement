<script lang="ts" setup>
import cards from "./contenu_dashbord/cards.vue"
import stat from './contenu_dashbord/stat.vue'
import graphiquesVue from './contenu_dashbord/graphiques.vue'


</script>

<template>
    <stat></stat>
    <graphiquesVue></graphiquesVue>
    <cards class="cards"></cards>
</template>

<style scoped>



/* graphiques */

.graphiques{
  width: 100%;
  height: 50%;
  margin-top: 20px;
}

.cards{
  width: 100%;
  height: 400px;
  margin: 20px 0 0 0;
  display: flex;
  justify-content: space-between;
}

</style>