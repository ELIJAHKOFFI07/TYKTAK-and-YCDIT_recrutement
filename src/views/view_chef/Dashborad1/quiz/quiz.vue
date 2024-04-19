<template>
  <section>
    <body id="z_body">
       
            
      <nav id=quiz_nav>
        
          <div id="z_logo_container"><img src="./assets/logo (2).png" alt="logo" id="z_logo"></div>
          <div><h3 id="cookies">Welcome</h3></div>
          <div><button @click="logout" id="logoutBtn">Quitter le test pour le test suivant</button></div>
        
      </nav>
      <div class="bgimg">
        <main id="z_container" >
          <div>
            <div class="flip-box" id="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <p id="front">Règles de l'épreuve psychotechnique</p>
                  <br />
                  <h6>Survoller pour en savoir plus</h6>
                </div>
                <div class="flip-box-back">
                  <p id="z_quizBrief">
                    - Ce test Psychotechnique est Pour évaluer votre Personnalité "TikTak Administration". <br />
                    - Il y'a 10 questions: <br />
                    Chacune a une durée comprise entre 5 et 10secondes.<br />
                    - Plusieurs bonnes réponses sont enviseagebles <br>
                    - Une seule mauvaise réponse annule les points <br>
                    - Quitter le test avant la fin est synonyme d'abandon <br>
                    - Les Questions majeures comportes plus de temps et rapporte plus de point.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button @click="startQuiz" id="startQuizBtn">Débuter le test!</button>
          </div>
          <div  id="demo"></div>
        </main>
      </div>
    </body>
    
  </section>
  
</template>

<script setup>
import axios from 'axios';
import { ref,onMounted } from 'vue';
const reponse=ref([]);
 

const questions = ref([
    {
    q:"",
    a:[],
    value:[]}
]);
onMounted(() => {
      axios.get('http://localhost/backend/apitest.php')
        .then((res) => {
         
          reponse.value = res.data;

          console.log(res.data);
          for( let i=0;i<reponse.value.length;i++){
        questions.value[i].q= reponse.value[i].enonce_question// récupération des libellés
        // récupération des propositions de reponses
        questions.value[i].a[0]=reponse.value[i].prop1;
        questions.value[i].a[1]=  reponse.value[i].prop2
        questions.value[i].a[2]= reponse.value[i].prop3
        questions.value[i].a[3]=reponse.value[i].prop4
        let r1=reponse.value[i].bonne_reponse1
        let r2=reponse.value[i].bonne_reponse2
        let r3=reponse.value[i].bonne_reponse3
        let r4=reponse.value[i].bonne_reponse4
        if(reponse.value[i].prop1===r1||reponse.value[i].prop1===r2||reponse.value[i].prop1===r3||reponse.value[i].prop1===r4){
questions.value[i].value.push(1)
        }
        if(reponse.value[i].prop2===r1||reponse.value[i].prop2===r2||reponse.value[i].prop2===r3||reponse.value[i].prop2===r4){
            questions.value[i].value.push(2)
        }
        if(reponse.value[i].prop3===r1||reponse.value[i].prop3===r2||reponse.value[i].prop3===r3||reponse.value[i].prop3===r4){
            questions.value[i].value.push(3)
        }
        if(reponse.value[i].prop4===r1||reponse.value[i].prop4===r2||reponse.value[i].prop4===r3||reponse.value[i].prop4===r4){
            questions.value[i].value.push(4)
        }

    console.log(questions)

    }
        })
        .catch((error) => {
          console.error('Une erreur s\'est produite lors de la récupération des données :', error);
        });
    });
    
   
const qLength = ref(questions.value.length);
sessionStorage.setItem('questionsNum', qLength.value);

const counter = ref(0);
let timer;

const startQuiz = () => {
    const quizBrief = document.getElementById('z_quizBrief');
    const startQuizBtn = document.getElementById('startQuizBtn');
    const flipBox = document.getElementById('flip-box');
    const demo = document.getElementById('demo');
    const zBody = document.getElementById('z_body');
    const logoutBtn = document.getElementById('logoutBtn');

    quizBrief.style.display = 'none';
    startQuizBtn.style.display = 'none';
    flipBox.style.display = 'none';
    demo.style.display = 'flex';
    demo.style.justifyContent = 'center';
    zBody.style.backgroundSize = 'cover';
    logoutBtn.style.display = 'none';

    next();
}

const startTimer = () => {
    const timeLeft =ref( questions.value[counter.value].time);
    timer = setInterval(() => {
        if (timeLeft.value <= 0) {
            clearInterval(timer);
            next();
        } else {
            timeLeft.value--;
        }
    }, 1000);
}

const next = () => {
    clearInterval(timer);
    const z = document.getElementById('demo');
    z.innerHTML = '';
    const qi = document.createElement('h3');
    
    z.appendChild(qi);
    z.appendChild(document.createElement('br'));
    qi.innerHTML = counter.value + 1 + ') ' + questions.value[counter.value].q;

    const f = document.createElement('form');
    f.setAttribute('v-on:change', 'activeBtn()');

    for (let i = 0; i < 4; i++) {
        const x = document.createElement('input');
        x.type = 'checkbox';
        x.name = 'asx';
        x.id = `a${i + 1}`;
        const y = document.createElement('label');
        y.setAttribute('for', x.id);
        y.innerText = questions.value[counter.value].a[i];
        f.appendChild(x);
        f.append(y);
        f.appendChild(document.createElement('br'));
    }

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.style.backgroundColor = '#fafcfd';
    btn.style.color = '#9e9e9e82';

    if (counter.value === questions.value.length - 1) {
        btn.innerText = 'Terminer';
        btn.setAttribute('onclick', z_result());
    } else {
        btn.innerText = 'Suivant';
        btn.setAttribute('onclick', 'next()');
    }

    btn.disabled = false;
    btn.id = 'nextBtn';
    f.appendChild(btn);
    z.appendChild(f);
    counter.value++;
    if (counter.value < questions.value.length) {
        startTimer();
        addTimer(questions.value[counter.value].time * 2.5);
    }
}

const z_result = () => {
    window.location.href = './result.html';
    for (let i = 0; i < questions.value.length; i++) {
        sessionStorage.setItem(`question${i + 1}`, questions.value[i].q);
        sessionStorage.setItem(`answers${i + 1}`, questions.value[i].a);
    }
}

const activeBtn = () => {
    const answers = ['a1', 'a2', 'a3', 'a4'];
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.disabled = false;
    nextBtn.style.backgroundColor = '#3467d9c9';
    nextBtn.style.color = 'white';

    for (let i = 0; i < 4; i++) {
        if (document.getElementById(answers[i]).checked) {
            sessionStorage.setItem(`q${counter.value}`, i + 1);
        }
    }
    checkAnswer();
}

const checkAnswer = () => {
    const expected_answers = questions.value[counter.value - 1].value;
    const selected_answers = [];

    for (let i = 0; i < 4; i++) {
        if (document.getElementById(`a${i + 1}`).checked) {
            selected_answers.push(i + 1);
        }
    }

    const allCorrect = expected_answers.every(answer => selected_answers.includes(answer));
    const noIncorrect = selected_answers.every(answer => expected_answers.includes(answer));

    if (allCorrect && noIncorrect) {
        const questionScore = expected_answers.length;
        sessionStorage.setItem(`result${counter.value}`, 1);
    } else {
        sessionStorage.setItem(`result${counter.value}`, 0);
    }
}
const addTimer = (t) => {
    // Créer le style pour le SVG
    var style = document.createElement('style');
    style.textContent = `
        svg {
            display: block;
            margin: 10px auto;
        }

        #loader { fill: #0088cc }

        #border { fill: #00517a }
    `;
    document.getElementById('demo').appendChild(style);

    // Créer le SVG et ses éléments
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '150');
    svg.setAttribute('height', '150');
    svg.setAttribute('viewBox', '0 0 250 250');

    var pathBorder = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathBorder.setAttribute('id', 'border');
    pathBorder.setAttribute('transform', 'translate(125, 125)');
    svg.appendChild(pathBorder);

    var pathLoader = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathLoader.setAttribute('id', 'loader');
    pathLoader.setAttribute('transform', 'translate(125, 125) scale(.84)');
    svg.appendChild(pathLoader);

    document.getElementById('demo').appendChild(svg);

    // Animation du loader
    var loader = document.getElementById('loader')
    , border = document.getElementById('border')
    , α = 0
    , π = Math.PI
    // , t = 20; // Temps en millisecondes
  
  function draw(interval) {
    α++;
    α %= 360;
    var r = (α * π / 180),
      x = Math.sin(r) * 125,
      y = Math.cos(r) * -125,
      mid = (α > 180) ? 1 : 0,
      anim = 'M 0 0 v -125 A 125 125 1 ' +
      mid + ' 1 ' +
      x + ' ' +
      y + ' z';
  
    loader.setAttribute('d', anim);
    border.setAttribute('d', anim);
  
    setTimeout(function() {
      draw(interval);
    }, interval); // Utilisation du paramètre interval pour le temps d'exécution
    
    console.log(); // Redraw
  }
  
  // Appel initial de la fonction avec le paramètre t (en millisecondes)
  draw(t);
}

const loadCookie = () => {
    let user_data = localStorage.getItem('logged_in');
    user_data = JSON.parse(user_data);
    let cname = 'username';
    let cvalue = `${user_data['first_name']} ${user_data['last_name']}`;
    let exdays = 20;
    setCookie(cname, cvalue, exdays);
    document.getElementById('cookies').innerText = 'Welcome ' + cvalue + '!';
}

const setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

const logout = () => {
    document.cookie = 'username=;expires=Thu, 01 Jan 1970';
    localStorage.removeItem('logged_in');
    document.getElementById('cookies').innerText = '';
    window.location.href = './index.html';
}

// Insertion de la fonction de chargement du cookie à l'initialisation

</script>



<style scoped>
@import url('./css/quiz.css');
@import url('./css/result.css');
/* Vos styles CSS existants ici */
</style>
