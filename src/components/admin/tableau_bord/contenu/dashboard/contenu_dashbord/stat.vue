<script lang="ts" setup>
import { ref } from 'vue';

const donnees = ref([
    {nom : 'Entreprises', nombre : '2', icon: 'cog'},
    {nom : 'Candidats', nombre : '1', icon: 'users' },
    {nom : "Appels d'offre", nombre : '4', icon: 'pencil-square'},
    {nom : 'Entreprises', nombre : '2', icon: 'graduation-cap'},
    {nom : 'Candidats', nombre : '1', icon: 'user-plus'},
    {nom : "Appels d'offre", nombre : '4', icon: 'fa-cloud'}
    
]);
</script>

<template>
    <section class="statistiques">
        <div v-for="(item, index) in donnees" :key="index" class="stat1" >
            <div  class="left-side">
                <font-awesome-icon class="icon menu" :icon="item.icon" />
                <h3>{{item.nombre}}</h3>
            </div>
            <div  class="right-side">
                <div class="new">{{ item.nom}}</div>
            </div>
        </div>
    </section>
</template>

<style scoped>

.statistiques{
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}

.stat1 {
  background-color: #F2EED1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  padding-right: 5px;
  height: 40%;
  border-radius: 6px;
  transition: 0.3s ease-in-out;
}

.stat1:hover {
  transform: scale(1.03);
}

.stat1:hover .left-side {
  width: 100%;
}

.left-side {
  background-color: #C3B649;
  width: 20%;
  height: 100%;
  border-radius: 4px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  flex-shrink: 0;
  overflow: hidden;
}

.left-side h3{
    color: #C3B649;
}

.left-side:hover h3{
    color: white;
    font-weight: 900;
    text-align: center;
    font-size: 30px;
}

.left-side .icon{
    margin-left: 50px;
    width: 50px;
    height: 30px;
    color: #F2EED1;
}

.left-side:hover .icon{
    display: none;
}

.right-side {
  display: flex;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  justify-content: space-between;
  white-space: nowrap;
  transition: 0.3s;
  text-align: center;
  
}

.right-side:hover {
  background-color: #f9f7f9;
}


@media only screen and (max-width: 480px) {
  .stat1 {
    transform: scale(0.7);
  }

  .stat1:hover {
    transform: scale(0.74);
  }
}







</style>