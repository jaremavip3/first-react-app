import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

//import firebase from "firebase/compat/app"
//import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCpZONTQ1rAMyeVaHq20u5OYBR2IVKeJyo",
  authDomain: "react-first-app-917db.firebaseapp.com",
  projectId: "react-first-app-917db",
  storageBucket: "react-first-app-917db.appspot.com",
  messagingSenderId: "77566921555",
  appId: "1:77566921555:web:6d78f0d9cde9f7db056fa6",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
