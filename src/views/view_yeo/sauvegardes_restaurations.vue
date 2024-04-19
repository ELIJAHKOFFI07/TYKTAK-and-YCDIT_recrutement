<script setup lang="ts">
import restauration from "@/components/admin/sauvegarde_restauration/restauration.vue";
import sauvegarde from "@/components/admin/sauvegarde_restauration/sauvegarde.vue";
</script>
<template>
  <p class="title">Sauvegardes et Restaurations</p>
  <section class="save_restore">
    <sauvegarde></sauvegarde>
    <restauration></restauration>
  </section>
</template>
<style scoped>
.save_restore {
  width: 100%;
  height: 100%;
  justify-content: space-between;
  display: flex;
  gap: 20px;
}
</style>
