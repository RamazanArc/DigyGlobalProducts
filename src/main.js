import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";

import router from "./router";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXk1RHRKI2OhXDNFKNfKI8H2xlo8yb070",
    authDomain: "firstproject-4be1a.firebaseapp.com",
    projectId: "firstproject-4be1a",
    storageBucket: "firstproject-4be1a.appspot.com",
    messagingSenderId: "282926426851",
    appId: "1:282926426851:web:651c1a8ab5f5e2c5e173d6"
};

initializeApp(firebaseConfig)

const app =createApp(App)
app.use(router)
app.mount('#app')
app.use(createPinia())
