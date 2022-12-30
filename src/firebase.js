import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBo8hrlwCWBH9_4QCebf3Z5hBajsLkno24",
  authDomain: "linkedin-clone-d6854.firebaseapp.com",
  projectId: "linkedin-clone-d6854",
  storageBucket: "linkedin-clone-d6854.appspot.com",
  messagingSenderId: "813703529637",
  appId: "1:813703529637:web:73fc266aac7fe261baf94c",
};

initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, "posts");
const auth = getAuth();

export { db, auth, colRef };
