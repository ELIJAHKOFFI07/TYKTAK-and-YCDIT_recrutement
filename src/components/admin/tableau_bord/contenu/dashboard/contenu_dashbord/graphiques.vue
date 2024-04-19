<script lang="ts" setup>
import graphique1Vue from "./graphiques/graphique1.vue"
import graphique2Vue from "./graphiques/graphique2.vue";

</script>

<template>
    <section class="graphiques">
        <graphique1Vue class="graphique1"></graphique1Vue>
        <graphique2Vue class="graphique2"></graphique2Vue>
    </section>
</template>

<style scoped>
.graphiques{
    display: flex;
    justify-content: space-around;
    width: 100%;
}

.graphique1{
    width: 30%;
}
.graphique2{
    width: 65%;
}

</style>