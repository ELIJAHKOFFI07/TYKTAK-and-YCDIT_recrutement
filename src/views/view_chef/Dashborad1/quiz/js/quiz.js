
const questions = [
    {
        q: 'Quel est le résultat de ce calcul:\n (56-34)X(56-35)X.....X(56-75)',
        a: ['-17898', '17898', '0', '-89456'],
        value: [3],
        time:15
    },
    {
        q: 'Quel est le triple  de l inverse du triple de 3',
        a: ['9', '3', '1/9', '1/3'],
        value: [4],
        time: 15
    },
    {
        q: 'A quoi est égal 0.999999999999...?',
        a: ['1', '0.9999999999999', 'infini', 'Aucune de ces réponses'],
        value: [1],
        time: 15
    },
    {
        q: '(Un carré est un rectangle et un losange est un carré )ou une pyramide est peut-être tétraédrique?',
        a: [
            'Vrai',
            'Faux',
            'Dans certains cas',
            'Seulement si le carré est assez grand .',
        ],
        value: [1],
        time: 15
    },
    {
        q: 'Quel est le rôle du Dévéloppement limité ?',
        a: ['Trouver la limite d une fonction',
            'Trouver une fonction équivalente au voisinage de la fonction ',
            'Approchez la fonction sous forme polynomiale',
            'Aucune de ces réponses'],
        value: [2, 3],
        time: 15
    },
    {
        q: 'Après un meutre, la police arrête 3 suspects qui mentent tous\n Le premier accuse le deuxième, le deuxième avoue tout, le troisième accuse le premier\n Qui est le coupable? ',
        a: ['Le deuxième', 'Le premier', 'Tous sont coupables', 'le troisième'],
        value: [4],
        time: 15
    },
    {
        q: 'Combien de mots de longueur 1 contiennent une lettre ou un chiifre ?',
        a: [
            '26',
            '36',
            'une infinité',
            'on ne peut déterminer ',
        ],
        value: [4],
        time: 15
    },
    {
        q: 'Dans une voyelle combien y a t-il de consonnes',
        a: [
            '1',
            '4',
            '0',
            '3',
        ],
        value: [4],
        time: 15
    },
    {
        q: 'Combien y a t-il de dimanches au maximum dans une année',
        a: ['52', '50', '53', '54'],
        value: [3],
        time: 15
    },
    {
        q: 'Completez la suite: 1 21 2221 22222221 .....',
        a: [
            '22222222',
            '2222222222222221',
            '3',
            'Aucune de ces réponses ',
        ],
        value: [2],
        time: 15
    },
];

let qLength = questions.length;
sessionStorage.setItem('questionsNum', qLength);

let counter = 0;
let timer;

function startQuiz() {
    document.getElementById('z_quizBrief').style.display = 'none';
    document.getElementById('startQuizBtn').style.display = 'none';
    document.getElementById('flip-box').style.display = 'none';
    document.getElementById('demo').style.display = 'flex';
    document.getElementById('demo').style.justifyContent = 'center';
    document.getElementById('z_body').style.backgroundSize = 'cover';
    document.getElementById('logoutBtn').style.display = 'none';
    next();
}

function startTimer() {
    let timeLeft = questions[counter].time;
    timer = setInterval(function () {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timer);
            next();
        }
    }, 1000);
}

function next() {
    clearInterval(timer); // Arrêter le timer de la question précédente
    let z = document.getElementById('demo');
    z.innerHTML = '';
    let q = document.createElement('h3');
    z.appendChild(q);
    z.appendChild(document.createElement('br'));
    q.innerHTML = counter + 1 + ') ' + questions[counter].q;

    let f = document.createElement('form');
    f.setAttribute('onchange', 'activeBtn()');

    for (let i = 0; i < 4; i++) {
        let x = document.createElement('input');
        x.type = 'checkbox';
        x.name = 'asx';
        x.id = `a${i + 1}`;
        let y = document.createElement('label');
        y.setAttribute('for', x.id);
        y.innerText = questions[counter].a[i];
        f.appendChild(x);
        f.append(y);
        f.appendChild(document.createElement('br'));
    }

    let btn = document.createElement('button');
    btn.type = 'button';
    btn.style.backgroundColor = '#fafcfd';
    btn.style.color = '#9e9e9e82';

    if (counter == questions.length - 1) {
        btn.innerText = 'Terminer';
        btn.setAttribute('onclick', 'z_result()');
    } else {
        btn.innerText = 'Suivant';
        btn.setAttribute('onclick', 'next()');
    }

    btn.disabled = false;
    btn.id = 'nextBtn';
    f.appendChild(btn);
    z.appendChild(f);
    counter++;
    if (counter < questions.length+1 ) {
        startTimer(); // Démarrer le timer pour la prochaine question
        // Ajouter le timer SVG
        addTimer(questions[counter].time*2.5);
    }

}

function z_result() {
    window.location.href = './result.html';
    for (let i = 0; i < questions.length; i++) {
        sessionStorage.setItem(`question${i + 1}`, questions[i].q);
        sessionStorage.setItem(`answers${i + 1}`, questions[i].a);
    }
}

function activeBtn() {
    let answers = ['a1', 'a2', 'a3', 'a4'];
    document.getElementById('nextBtn').disabled = false;
    document.getElementById('nextBtn').style.backgroundColor = '#3467d9c9';
    document.getElementById('nextBtn').style.color = 'white';

    for (let i = 0; i < 4; i++) {
        if (document.getElementById(answers[i]).checked) {
            sessionStorage.setItem(`q${counter}`, i + 1);
        }
    }
    checkAnswer();
}

function checkAnswer() {
    let expected_answers = questions[counter - 1].value;
    console.log(expected_answers)
    let selected_answers = [];

    // Récupérer les réponses sélectionnées par l'utilisateur
    for (let i = 0; i < 4; i++) {
        if (document.getElementById(`a${i + 1}`).checked) {
            selected_answers.push(i + 1); // Stocker les ID des réponses sélectionnées
        }
        
    }
    console.log(selected_answers)

    // Vérifier que toutes les bonnes réponses ont été sélectionnées
    let allCorrect = expected_answers.every(answer => selected_answers.includes(answer));
    console.log(allCorrect)
    // Vérifier qu'aucune mauvaise réponse n'a été sélectionnée
    let noIncorrect = selected_answers.every(answer => expected_answers.includes(answer));
    console.log(noIncorrect)

    if (allCorrect && noIncorrect) {
        let questionScore = expected_answers.length; // La taille des attributs value de la question
        sessionStorage.setItem(`result${counter}`, 1);
    } else {
        sessionStorage.setItem(`result${counter}`, 0); // Si toutes les bonnes réponses ne sont pas choisies ou s'il y a une mauvaise réponse sélectionnée, le score pour cette question est 0
    }
}



function addTimer(t) {
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

function loadCookie() {
    let user_data = localStorage.getItem('logged_in');
    user_data = JSON.parse(user_data);
    let cname = 'username';
    let cvalue = `${user_data['first_name']} ${user_data['last_name']}`;
    let exdays = 20;
    setCookie(cname, cvalue, exdays);
    document.getElementById('cookies').innerText = 'Welcome ' + cvalue + '!';
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function logout() {
    document.cookie = 'username=;expires=Thu, 01 Jan 1970';
    localStorage.removeItem('logged_in');
    document.getElementById('cookies').innerText = '';
    window.location.href = './index.html';
}
