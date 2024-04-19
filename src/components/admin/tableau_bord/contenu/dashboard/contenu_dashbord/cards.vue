<script lang="ts" setup>
import card from './cards/card1.vue'

import graphique3 from './graphiques/graphique3.vue'
</script>

<template>
    <section class="section">
        <div class="graphique">
            <graphique3></graphique3>
        </div>
        <div class="cartes">
            <card></card>
            <card2></card2>
        </div>
    </section>
    
</template>

<style scoped>
.section{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}
.cartes{
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-top: 0px;
    margin-right: 30px;
}

.graphique{
    width: 38%;
    background-color: var(--color1);
    margin: 10px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
</style>