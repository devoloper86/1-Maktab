import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCwP-B8booY6Ck-x_6-odgLpEugwB-LB8E",
    authDomain: "ligin-f4334.firebaseapp.com",
    projectId: "ligin-f4334",
    storageBucket: "ligin-f4334.appspot.com",
    messagingSenderId: "191754710314",
    appId: "1:191754710314:web:c8a9a0c78b1b71b56c0253",
    measurementId: "G-RP9XSE8ZJC"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore()
export default firestore