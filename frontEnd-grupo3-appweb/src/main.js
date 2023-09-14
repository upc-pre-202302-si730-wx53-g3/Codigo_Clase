import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import i18n from './locales/i18n'
import PrimeVue from 'primevue/config'

import 'primevue/resources/primevue.min.css' //core css
import 'primevue/resources/themes/md-light-deeppurple/theme.css' //theme
import 'primeicons/primeicons.css' //icons

import Button from 'primevue/button';
import InputText from "primevue/inputtext";
import Avatar from 'primevue/avatar';
import router from "@/router";


const app = createApp(App);

app.use(i18n);
app.use(PrimeVue);
app.use(router);

app.component('pv-button', Button);
app.component('pv-inputText', InputText);
app.component('pv-label', Avatar);
app.mount('#app');