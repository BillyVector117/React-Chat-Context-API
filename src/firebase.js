import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-xIwWjGONfH0w42ef_3RMEQnG_HJ-ua8",
  authDomain: "chat-project-ed2e6.firebaseapp.com",
  projectId: "chat-project-ed2e6",
  storageBucket: "chat-project-ed2e6.appspot.com",
  messagingSenderId: "673418888997",
  appId: "1:673418888997:web:c04f67061f3c2f9b797ccc",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
