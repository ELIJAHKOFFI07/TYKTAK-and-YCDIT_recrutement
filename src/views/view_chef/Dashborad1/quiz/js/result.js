let userName = document.cookie.split('=')[1];

let scrollBtn = document.getElementById('scroll-up');
document.addEventListener('scroll', function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

let result = 0;
let questionNum = sessionStorage.getItem('questionsNum');
for (let i = 1; i <= questionNum; i++) {
  if (sessionStorage.getItem(`result${i}`) == 1) {
    result++;
  }
}

let A_resCont = document.getElementById('A_resultContainer');
let A_red = 'rgba(255, 99, 99, 0.12)';
let A_green = 'rgba(97, 179, 97, 0.2)';
let resultDiv = document.getElementById('th_Result');
let comment = document.getElementById('th_Comment');
let icon = document.getElementById('iconId');
let score = document.getElementById('th_Score');
if (result >= questionNum * 0.5) {
  let status = document.getElementById('th_Status');
  status.innerHTML = `Congratulations,${userName}!`;
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
const togglebtn = document.querySelector('.toggle-btn');

togglebtn.addEventListener('click', () => {
  document.querySelector('.nav-list').classList.toggle('hidden');
  document.querySelector('.social-icons').classList.toggle('hidden');
});

function tableResult() {
  let table = document.getElementById('table');
  table.classList.toggle('display');
  let showLink = document.getElementById('show');
  if (showLink.innerHTML === 'Fermer les résultats') {
    showLink.innerHTML = 'Afficher la table des questions';
  } else {
    showLink.innerHTML = 'Fermer les résultats';
  }
}

let table1 = document.getElementById('table');
for (let a_i = 0; a_i < questionNum; a_i++) {
  let a_answer =sessionStorage.getItem(`answers${a_i + 1}`);

  a_answer = a_answer.split(',');
  let questions = sessionStorage.getItem(`question${a_i + 1}`);
  let results = sessionStorage.getItem(`result${a_i + 1}`);
  
  let tr = document.createElement('tr');
  let td1 = document.createElement('td');
  let td2 = document.createElement('td');
  let td3 = document.createElement('td');
  td1.innerHTML = a_i + 1 + ') ' + questions;
  let a_index = sessionStorage.getItem(`q${a_i + 1}`) - 1;
  td2.innerText = (!a_answer[a_index])?"pas de réponses":a_answer[a_index];
  
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  table1.appendChild(tr);
  // console.log(a_answer);
  if (results == 1) {
    tr.style.background = A_green;
    td3.innerHTML =
      '<img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/ffffff/external-check-banking-and-finance-kiranshastry-lineal-color-kiranshastry.png"/>';
  } else {
    tr.style.background = A_red;
    td3.innerHTML =
      '<img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/fa314a/external-close-banking-and-finance-kiranshastry-lineal-color-kiranshastry.png"/>';
  }
}

function logout() {
  document.cookie = 'username=;expires=Thu, 01 Jan 1970';
  localStorage.removeItem('logged_in');
  sessionStorage.clear();
  window.location.href = './index.html';
}
