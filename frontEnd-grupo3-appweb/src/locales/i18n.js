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

export default i18n;