<script lang="ts" setup>

</script>

<template>
    <section class="graphiques">
        <div class="gauche">
            <h3>Nouvelles entreprises</h3>
            <table>
                <thead>
                    <th>Raison Social</th>
                    <th>Date </th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Tilonon SA</td>
                        <td>01/20/30</td>
                        <td><button class="button">Voir</button></td>
                    </tr>                
                </tbody>
            </table>
        </div>
        <div class="droite">
            <img src="../../../../../../../assets/images_yeo/chef.png" alt="">
        </div>
    </section>
</template>

<style scoped>
.graphiques{
    width: 60%;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
    
}

.gauche{
    width: 80%;
    margin: 20px;
    overflow-x: auto;
}

.gauche::-webkit-scrollbar {
  display: none;
}


.droite{
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.droite img{
    width: 350px;
    height: 350px;
}

/* bouton */

.button {
  cursor: pointer;
  position: relative;
  width: 100px;
  height: 30px;
  font-size: 13px;
  color: #C3B649;
  border: 2px solid #C3B649;
  border-radius: 34px;
  background-color: transparent;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
  overflow: hidden;
}

.button::before {
  content: '';
  position: absolute;
  inset: 0;
  margin: auto;
  width: 80px;
  height: 30px;
  border-radius: inherit;
  scale: 0;
  z-index: -1;
  background-color: #C3B649;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.button:hover::before {
  scale: 3;
}

.button:hover {
  color: #212121;
  scale: 1.1;
  box-shadow: 0 0px 20px #C3B649;
}

.button:active {
  scale: 1;
}

/* table */

table{
    width: 100%;
}

table td{
    border-bottom: solid 2px rgba(128, 128, 128, 0.122);
}

table tr{
    padding: 10px;
}




</style>