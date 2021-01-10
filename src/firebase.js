import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "XXX-XXX-XXX",
  authDomain: "XXX-XXX-XXX",
  projectId: "XXX-XXX-XXX",
  storageBucket: "XXX-XXX-XXX",
  messagingSenderId: "XXX-XXX-XXX",
  appId: "XXX-XXX-XXX",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
