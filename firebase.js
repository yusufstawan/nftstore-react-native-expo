// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkZqtKBddA5JJfPk6WBinZQie5PkXbTVc",
  authDomain: "sanberapp-4ff89.firebaseapp.com",
  projectId: "sanberapp-4ff89",
  storageBucket: "sanberapp-4ff89.appspot.com",
  messagingSenderId: "734535252902",
  appId: "1:734535252902:web:f66ddc348a61169eb3ad67"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };