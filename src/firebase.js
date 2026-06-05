import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyAEJYP_oi7rvCpOXOkjEqv5BbEhwo5PoGU",
    authDomain: "trustgame-bfd71.firebaseapp.com",
    projectId: "trustgame-bfd71",
    storageBucket: "trustgame-bfd71.firebasestorage.app",
    messagingSenderId: "852392901778",
    appId: "1:852392901778:web:5b8f3fb9d0ce6c046cba4b",
    measurementId: "G-VHC1RS8CE8"

  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);