import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {createI18n} from "vue-i18n";

const i18n = createI18n({
    locale: 'fr',
    legacy: true,
    messages: {
        en:{
            login: 'Login',
            contact: 'Contact',
        },
        es:{
            login: 'Iniciar Sesión',
            contact: 'Contacto',
        },
        fr:{
            login: 'Connexion',
            contact: 'Contact',

        }
    }
})

const app = createApp(App);
app.use(i18n);
app.mount('#app');