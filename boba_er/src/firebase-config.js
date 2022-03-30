import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA40BoHEZ09tdSzFuMjQm4G701hPh9uEss",
  authDomain: "bobaer-4cf63.firebaseapp.com",
  projectId: "bobaer-4cf63",
  storageBucket: "bobaer-4cf63.appspot.com",
  messagingSenderId: "931095500804",
  appId: "1:931095500804:web:3759a6a06f792d1423bd51",
  measurementId: "G-6EJ10LE851"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
