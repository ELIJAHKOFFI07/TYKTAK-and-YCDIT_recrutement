import './assets/main.css'

import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

// boostrap

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faUser, faEnvelope, faPhone, faCog,faHamburger,faCreditCard, faTachometer, faTh, 
    faUsers, faCreditCardAlt, faPencilSquare, faGraduationCap,faEye, faBriefcase ,faUserPlus, faBars, faCloud, faFileText} from '@fortawesome/free-solid-svg-icons';

// Ajouter les icônes à la bibliothèque
library.add(faCoffee, faUser, faEnvelope, faPhone, 
    faCog, faTh, faUsers, faCreditCardAlt, faPencilSquare, faGraduationCap, faBriefcase,faEye,faCreditCard ,faTachometer ,faUsers ,faHamburger,faBars, faUserPlus, faCloud, faFileText);

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router)

app.mount('#app')

