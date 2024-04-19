<script setup>
import tableauVue from "./personnels/tableau.vue";
</script>
<template>
    <section class="personnel">
        <tableauVue></tableauVue>
    </section>
</template>

<style scoped>
.personnel{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

</style>