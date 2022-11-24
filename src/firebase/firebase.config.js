// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDG2hIqkegmqQNZrsqMX_WJj-VPN3M5-SM",
    authDomain: "rc-cars-1e083.firebaseapp.com",
    projectId: "rc-cars-1e083",
    storageBucket: "rc-cars-1e083.appspot.com",
    messagingSenderId: "930116086070",
    appId: "1:930116086070:web:ef79e579c65344bd60eb97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;