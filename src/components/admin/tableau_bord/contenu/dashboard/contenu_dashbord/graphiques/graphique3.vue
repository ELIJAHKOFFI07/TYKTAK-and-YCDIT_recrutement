<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { Chart } from 'chart.js';

const chartRef = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  if (chartRef.value) {
    const ctx = chartRef.value.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['trimestre 1', 'trimestre 2', 'trimestre 3', 'trimestre 4',],
          datasets: [{
            label: 'Inscription Par Trimeste',
            data: [180, 199, 80, 90],
            backgroundColor: [
              'white',
              '#C3B649',
              'black',
              'gray',
              
            ],
            borderColor: [
              'black',
              'black',
              'black',
              'black',
            ],
            borderWidth: 2
          }]
        },
        options: {
          
        }
      });
    }
  }
});
</script>

<template>
    <div class="graphique3">
        <canvas ref="chartRef" width="300" height="300"></canvas>
    </div>
</template>

<style scoped>
.graphique3{
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #F2EED1;
}
</style>