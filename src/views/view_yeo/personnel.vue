<script setup>
import boutonVue from "@/components/admin/gestion_personnel/bouton.vue";

</script>
<template>
        <p class="title">Personnels et droits d'accès</p>
        <section class="menu">
            <router-link to="/" class="nav">
                <boutonVue></boutonVue>
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