const questions = [
  {
    q: 'Which of the following attribute triggers event when the browser starts to load the media data?',
    a: ['onloadedmetadata', 'onloadstart', 'onmessage', 'onoffline'],
    value: 2,
  },
  {
    q: 'Which of the following defines a measurement in millimeters?',
    a: ['in', 'mm', 'rem', 'em'],
    value: 2,
  },
  {
    q: 'Which of the following property is used to change the face of a font?',
    a: ['font-family', 'font-size', 'font-face', 'font-weight'],
    value: 1,
  },
  {
    q: 'Which of the following is an advantage of using JavaScript?',
    a: [
      'Less server interaction',
      'Immediate feedback to the visitors',
      'Increased interactivity',
      'All of the above.',
    ],
    value: 4,
  },
  {
    q: 'Which of the following function of Array object adds one or more elements to the end of an array and returns the new length of the array?',
    a: ['pop()', 'push()', 'join()', 'map()'],
    value: 2,
  },
  {
    q: 'Choose the correct HTML element for the largest heading:',
    a: ['<header>', '<h6>', '<head>', '<h1>'],
    value: 4,
  },
  {
    q: 'How can you open a link in a new tab/browser window?',
    a: [
      '<a href= "url" target ="new">',
      '<a href= "url" target ="_blank">',
      '<a href= "url" new>',
      'You can`t do it using HTML',
    ],
    value: 2,
  },
  {
    q: 'What is the correct JavaScript syntax to change the content of the HTML element below? \n <p id="demo">This is a demonstration.</p>',
    a: [
      'document.getElementByName ("p").innerHTML = "Hello World!";',
      'document.getElementById ("demo").innerHTML = "Hello World!";',
      'document.getElement ("p").innerHTML = "Hello World!";',
      '#demo.innerHTML = "Hello World!";',
    ],
    value: 2,
  },
  {
    q: 'Which of the following feature is a part of HTML 5?',
    a: ['canvas', 'audio & video', 'geolocation', 'All the above'],
    value: 4,
  },
  {
    q: 'Where is the correct place to insert a JavaScript?',
    a: [
      'The <body> section',
      'The <head> section',
      'Both <head> & <body> sections are correct',
      'None of the above',
    ],
    value: 3,
  },
];

let qLength = questions.length;
sessionStorage.setItem('questionsNum', qLength);

function startQuiz() {
  // let user_cookie = document.cookie;
  // if (user_cookie == 'username=' || user_cookie == null || user_cookie == '') {
  //   alert('please login before start exam!');
  //   window.location.href = './index.html';
  // } else {
    document.getElementById('z_quizBrief').style.display = 'none';
    document.getElementById('startQuizBtn').style.display = 'none';
    document.getElementById('flip-box').style.display = 'none'; //written by Haneen//
    document.getElementById('demo').style.display = 'flex'; //written by Haneen//
    document.getElementById('demo').style.justifyContent = 'center';
    document.getElementById('z_body').style.backgroundSize = 'cover'; //written by Haneen//
    document.getElementById('logoutBtn').style.display = 'none'; //written by zaid
    next();
  
}

let counter = 0;
function next() {
  let z = document.getElementById('demo');
  z.innerHTML = '';
  let q = document.createElement('h3');
  z.appendChild(q);
  z.appendChild(document.createElement('br'));
  q.innerHTML = counter + 1 + ') ' + questions[counter].q;

  let val = questions[counter].value;
  let f = document.createElement('form');
  f.setAttribute('onchange', 'activeBtn()');

  for (let i = 0; i < 4; i++) {
    let x = document.createElement('input');
    x.type = 'radio';
    x.name = 'asx';
    x.id = `a${i + 1}`;
    x.value = questions[i].value;
    let y = document.createElement('label');

    y.setAttribute('for', x.id);
    y.innerText = questions[counter].a[i];

    if (i + 1 == val) {
      x.value = 1;
    } else {
      x.value = 0;
    }
    f.appendChild(x);
    f.append(y);
    f.appendChild(document.createElement('br'));
  }

  let btn = document.createElement('button');
  btn.type = 'button';

  btn.style.backgroundColor = '#fafcfd'; //written by Haneen//
  btn.style.color = '#9e9e9e82'; //written by Haneen//

  if (counter == questions.length - 1) {
    btn.innerText = 'submit';
    btn.setAttribute('onclick', 'z_result()');
  } else {
    btn.innerText = 'Next';
    btn.setAttribute('onclick', 'next()');
  }

  btn.disabled = true;
  btn.id = 'nextBtn';
  f.appendChild(btn);
  z.appendChild(f);
  counter++;
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
  //written by Haneen//
  document.getElementById('nextBtn').style.backgroundColor = '#3467d9c9';
  document.getElementById('nextBtn').style.color = 'white';
  document.getElementById('nextBtn').onmouseover = function () {
    mouseOver();
  };

  document.getElementById('nextBtn').onmouseout = function () {
    mouseOut();
  };

  function mouseOver() {
    document.getElementById('nextBtn').style.transform = 'scale(1.1)';
  }

  function mouseOut() {
    document.getElementById('nextBtn').style.transform = 'scale(1)';
  }

  //end of Haneen edition//

  for (let i = 0; i < 4; i++) {
    if (document.getElementById(answers[i]).checked) {
      sessionStorage.setItem(`q${counter}`, i + 1);
    }
  }
  checkAnswer();
}

function checkAnswer() {
  let final_value = sessionStorage.getItem(`q${counter}`);
  for (let i = 0; i < 4; i++)
    if (questions[counter - 1].value == final_value)
      sessionStorage.setItem(`result${counter}`, 1);
    else sessionStorage.setItem(`result${counter}`, 0);
}

function loadCookie() {
  // console.log(localStorage.getItem("logged_in"));
  let user_data = localStorage.getItem('logged_in');
  user_data = JSON.parse(user_data);
  // console.log(user_data);
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
