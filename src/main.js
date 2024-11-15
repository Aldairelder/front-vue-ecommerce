import './assets/css/main.css';
import './assets/css/index.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';
import router from './router'; // Importa el router

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.use(router); // Usa el router en la aplicación

app.mount('#app');
