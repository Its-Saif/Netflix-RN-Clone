import firebase from "firebase";
import "firebase/firestore";
import "firevase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6lU2nKwefukXOvbPMMqKUul-LWcEbLkk",
  authDomain: "netflix-7334d.firebaseapp.com",
  projectId: "netflix-7334d",
  storageBucket: "netflix-7334d.appspot.com",
  messagingSenderId: "355318355040",
  appId: "1:355318355040:web:cfe301a74e7cd8e0095f05",
  measurementId: "G-2K5RCCY9TT",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
