// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2nXcKIiKlHcBeyJkzBtWV64_upIDgwFk",
    authDomain: "project-db76c.firebaseapp.com",
    projectId: "project-db76c",
    storageBucket: "project-db76c.appspot.com",
    messagingSenderId: "426086342260",
    appId: "1:426086342260:web:1bf99697a1ec5094c4bb21",
    measurementId: "G-6SCXQFQXDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();