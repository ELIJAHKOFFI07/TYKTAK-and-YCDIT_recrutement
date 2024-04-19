<script setup>
import bouton1 from '@/components/admin/gestion_comptable/bouton1.vue'

</script>
<template>
        <p class="title">Comptabilité</p>
        <section class="menu">
            <router-link to="/" class="nav">
                <bouton1></bouton1>
            </router-link>
        </section>
</template>

<style scoped>
.menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vh;
    height: 100%;
}

.nav{
    text-decoration: none;
}
.nav:hover{
    background-color: transparent;
}

</style>