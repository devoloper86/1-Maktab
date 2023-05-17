import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhYkmBvawGPmKDZ8r_Tu_85cQvbNGiX8w",
  authDomain: "maktab-b1b32.firebaseapp.com",
  projectId: "maktab-b1b32",
  storageBucket: "maktab-b1b32.appspot.com",
  messagingSenderId: "1021297555728",
  appId: "1:1021297555728:web:98afa9beaad9007df80d95",
  measurementId: "G-Q0R367MSH7",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore();
export default firestore;
