<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { Chart } from 'chart.js';


const chartRef = ref(null);

onMounted(() => {
    if (chartRef.value) {
    const ctx = chartRef.value.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Credit', 'Debit'],
        datasets: [{
          label: 'My Pie Chart',
          data: [10000, 5000],
          backgroundColor: ['rgb(232, 232, 232)', '#C3B649']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
    });
  }
});
  


</script>

<template>
    <section class="graphiques">
        <div class="card">
        <div class="card-image">
            <canvas ref="chartRef" width="300" height="300"></canvas>
        </div>
        <div class="card-description">
            <h3 class="text-title"> Solde</h3>
            <div class="block">
                <p class="text-body">Debit : <span>10000</span></p>
                <img src="../../../../../../../assets/images_yeo/augmenter.png">
            </div>    
            <div class="block">
                <p class="text-body">Debit : <span>5000</span></p>
                <img src="../../../../../../../assets/images_yeo/decroissant.png" alt="">
            </div>
        </div>
       </div> 
    </section>
</template>

<style scoped>
.card {
  height: 254px;
  width: 100%;
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

 /*Image*/
.card-image {
  height: 100%;
  width: 100%;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  background: white;
}

/*Description */
.card-description {
  display: flex;
  position: absolute;
  width: 100%;
  flex-direction: column;
  background-color: #F2EED1;
  height: 70%;
  bottom: 0;
  border-radius: 16px;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 1rem;
  gap: 5px;
  
}

/*Text*/
.text-title {
  font-size: 1.3rem;
  font-weight: 700;
}

.text-body {
  font-size: 1rem;
  line-height: 130%;
}

/* Hover states */
.card:hover .card-description {
  transform: translateY(100%);
}

/* Block */
.block{
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
    
}

.block span{
  font-weight: 900;
  background-color: #212121;
  color: #F2EED1;
  padding: 10px;
  border-radius: 10px;
}

.block img{
    width: 50px;
    height: 50px;
}
</style>