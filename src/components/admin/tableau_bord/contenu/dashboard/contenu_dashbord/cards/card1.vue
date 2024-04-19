<script lang="ts" setup>
import { ref } from 'vue';

const donnees = ref([
    {nom : 'Test 1', date : '01/05/24', heure: '12h50',  logo: '../assets/images/snapchat.png'},
    {nom : 'Test 2', date : '30/04/24', heure: '12h50', logo: '../assets/images/snapchat.png' },
    {nom : "Test 3", date : '02/04/24', heure: '12h50', logo: '../assets/images/messager.png'},
   
]);
</script>

<template>
    <div class="card">
        <div class="header">
            <p class="title">Tests programmés</p>
        </div>
        <div class="info">
        <div  v-for="(item, index) in donnees" :key="index" class="button-icon">
            <div class="icons">
                <font-awesome-icon class="icon" icon="envelope" />
            </div>
            <div class="cube">
                    <span class="side front">{{item.nom}}</span>
                    <span class="side top">{{item.date}} à {{item.heure}}</span>
            </div>
        </div>
        </div>
        <div class="footer">
        
        </div>
    </div>
</template>

<style scoped>


.card::-webkit-scrollbar {
  display: none;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.75rem;
  height: 95%;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,.1),
  0 2px 4px -2px rgba(0,0,0,.1);
  width: 48%;
  background: var(--color1);
}

.header {
    display: flex;
    justify-content: center;
    align-content: center;
  background-clip: border-box;
  margin-top: 1.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 0.75rem;
  background-color: var(--color2);
  box-shadow: 0 10px 15px -3px rgba(57, 57, 57, 0.4),0 4px 6px -4px rgba(41, 42, 42, 0.4);
  height: 15%;
}

.info {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-content: center;
  border: none;
  padding: 1.5rem;
  text-align: center;
  overflow-x: auto;
  gap: 30px;
}
.info::-webkit-scrollbar {
  display: none;
}

.title {
  color: rgb(38 50 56);
  letter-spacing: 0;
  line-height: 1.375;
  font-weight: 600;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.footer {
  padding: 0.75rem;
  border: 1px solid rgb(236 239 241);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(40, 40, 40, 0.082);
}

.tag {
  font-weight: 300;
  font-size: .75rem;
  display: block;
}

.action {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border: none;
  outline: none;
  box-shadow: 0 4px 6px -1px rgba(41, 41, 41, 0.4),0 2px 4px -2px rgba(52, 52, 52, 0.4);
  color: black;
  text-transform: uppercase;
  font-weight: 700;
  font-size: .75rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--color2);
  border-radius: 0.5rem;
}


/* bouton  */
.button-icon {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 3px #fff solid;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  
}

.icons {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 20%;
  background-color: #fff;
  padding: 10px 10px 5px 10px;
}

.icon {
  width: 100%;
  height: 25px;
}

.cube {
  transition: all 0.4s;
  transform-style: preserve-3d;
  width: 200px;
  height: 20px;
}

.button-icon:hover {
  border-color: black;
}

.button-icon:hover .cube {
  transform: rotateX(90deg);
}

.side {
  position: absolute;
  height: 47px;
  width: 200px;
  display: flex;
  font-size: 0.8em;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: bold;
}

.top {
  background: var(--color2);
  color: #fff;
  transform: rotateX(-90deg) translate3d(0, 13.5px, 2em);
}

.front {
  background: #222229;
  color: #fff;
  transform: translate3d(0, 0, 1em);
}


</style>