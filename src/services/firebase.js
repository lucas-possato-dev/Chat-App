import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7TaNvUYIIpUflL9XDDmH4Fay6KiZzFek",
  authDomain: "chat-app-12690.firebaseapp.com",
  projectId: "chat-app-12690",
  storageBucket: "chat-app-12690.appspot.com",
  messagingSenderId: "57508434154",
  appId: "1:57508434154:web:80f8b1887aaf6e800cc793",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
