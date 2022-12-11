// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzcM6jCjvhJCAInGYzLFGuul9PK7oT9JA",
  authDomain: "base-81589.firebaseapp.com",
  projectId: "base-81589",
  storageBucket: "base-81589.appspot.com",
  messagingSenderId: "776307597022",
  appId: "1:776307597022:web:3481920f36972e78d8ac4f",
  measurementId: "G-5L1N1JNQDN"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };