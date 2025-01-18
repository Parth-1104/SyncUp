
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// https://firebase.google.com/docs/web/setup#available-libraries



const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_KEY,
  authDomain: "taskmanger-76136.firebaseapp.com",
  projectId: "taskmanger-76136",
  storageBucket: "taskmanger-76136.firebasestorage.com",
  messagingSenderId: "122610665707",
  appId: "1:122610665707:web:3429293303b6188c1e56ae",
  measurementId: "G-E7N33ZGC97"
};


export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);