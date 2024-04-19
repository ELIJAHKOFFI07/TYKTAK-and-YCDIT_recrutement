<template>
<section>
  <body>
  <header>
   <a href="#"><i class="fas fa-chevron-circle-up" id="scroll-up"></i></a>  <!--Tharaa-->
   <nav class="navbar">
    <img
      src="./assets/logo (2).png"
      alt="logo picture with one word"
      class="logo"
    />
    <div class="nav-list hidden">
      <ul>
        <li><a href="./index.html">Home</a></li>
        <!-- <li><button type="button" @click="logout()" id="logoutBtn">Sortir</button></li> -->
        <li><router-link to="/"><button type="button" @click="logout()" id="logoutBtn">Sortir</button></router-link></li>
      </ul>
    </div>
    <div class="social-icons hidden">
      <ul>
        <li>
          <a href="https://www.instagram.com/eng_farah92/?r=nametag">
            <i class="fa fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/zsamamah/projectTwo-QuizWebsite">
            <i class="fa fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/farah-habarnih/">
            <i class="fa fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
    <div class="toggle-btn">
      <i class="fa fa-bars"></i>
    </div>
  </header>
  <main>
    <!-- Tharaa comment-->
    <div id="A_resultContainer"> 
    <div id="th_Result" class="th_Result">
      <h1 id="th_Status" class="th_Status"></h1>
      <i id="iconId" class="fas fa-check-circle"></i>
      <h2>Score: </h2>
      <h2 id="th_Score"></h2>
      <p id="th_Comment"></p>
    </div>
    <!-- Result table_Aya............................... -->
    <div>
    <table id="table" class="showTable" >
      <tr class="tableHead">
    <th class="question">Question</th>
    <th class="answer">Ta réponse</th>
    <th class="A_state">Statut</th>
  </tr>
   </table>
  </div>
                <a href="#table" @click="tableResult()"><p id="show"   > Voir les resultats</p></a>
                <!-- end of result table............................ -->
   </div>
  </main>

  </body>
</section>

 
  
</template>
<script setup>
import { ref, onMounted } from 'vue';

let userName = document.cookie.split('=')[1];
let scrollBtn = ref(null);
let result = 0;
let questionNum = sessionStorage.getItem('questionsNum');
const A_resCont = ref(null);
const resultDiv = ref(null);
const comment = ref(null);
const icon = ref(null);
const score = ref(null);
const togglebtn = ref(null);
const table1 = ref(null);

onMounted(() => {
  scrollBtn.value = document.getElementById('scroll-up');
  togglebtn.value = document.querySelector('.toggle-btn');
  result = calculateResult();
  showResult();
  createTable();
});

function calculateResult() {
  let result = 0;
  for (let i = 1; i <= questionNum; i++) {
    if (sessionStorage.getItem(`result${i}`) == 1) {
      result++;
    }
  }
  return result;
}

function showResult() {
  if (result >= questionNum * 0.5) {
    let status = document.getElementById('th_Status');
    status.innerHTML = `Congratulations, ${userName}!`;
    score.innerHTML = `${result}/${questionNum}`;
    if (result >= questionNum * 0.5 && result < questionNum * 0.7) {
      comment.innerHTML = 'Pas mal ';
    } else if (result >= questionNum * 0.7 && result < questionNum * 0.9) {
      comment.innerHTML = 'Bien';
    } else if (result >= questionNum * 0.9 && result <= questionNum * 1) {
      comment.innerHTML = 'Excellent';
    }
  } else {
    let status = document.getElementById('th_Status');
    resultDiv.style.setProperty('--theme-Color', 'red');
    icon.className = 'fas fa-times-circle';
    status.innerHTML = `Oops,! tu n'as pas réussi`;
    score.innerHTML = `${result}/${questionNum}`;
  }
}

function createTable() {
  for (let a_i = 0; a_i < questionNum; a_i++) {
    let a_answer = sessionStorage.getItem(`answers${a_i + 1}`);
    a_answer = a_answer.split(',');
    let questions = sessionStorage.getItem(`question${a_i + 1}`);
    let results = sessionStorage.getItem(`result${a_i + 1}`);
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    td1.innerHTML = a_i + 1 + ') ' + questions;
    let a_index = sessionStorage.getItem(`q${a_i + 1}`) - 1;
    td2.innerText = (!a_answer[a_index]) ? "pas de réponses" : a_answer[a_index];
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table1.appendChild(tr);
    if (results == 1) {
      tr.style.background = 'rgba(97, 179, 97, 0.2)';
      td3.innerHTML = '<img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/ffffff/external-check-banking-and-finance-kiranshastry-lineal-color-kiranshastry.png"/>';
    } else {
      tr.style.background = 'rgba(255, 99, 99, 0.12)';
      td3.innerHTML = '<img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/fa314a/external-close-banking-and-finance-kiranshastry-lineal-color-kiranshastry.png"/>';
    }
  }
}



function logout() {
  document.cookie = 'username=;expires=Thu, 01 Jan 1970';
  localStorage.removeItem('logged_in');
  sessionStorage.clear();
  window.location.href = './index.html';
}
</script>

<style scooped>
@import url('./css/result.css');
@import url('./css/reset.css');
@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");


</style>