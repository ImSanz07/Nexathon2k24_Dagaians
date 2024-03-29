// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAymnOV186oZ-sUgxgOoibzCW6tEyOfETA",
    authDomain: "ai-poster-generator.firebaseapp.com",
    projectId: "ai-poster-generator",
    storageBucket: "ai-poster-generator.appspot.com",
    messagingSenderId: "216851389411",
    appId: "1:216851389411:web:618fbda88c9fbcbc5bded6",
    measurementId: "G-YH3T9SH9FT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const imgDB = getStorage(app);



export const auth =  getAuth(app);
// const auth = getAuth(app);
export const imgDB = getStorage(app);


