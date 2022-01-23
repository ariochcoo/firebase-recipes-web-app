import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyDcsFTgbtQ8yjigMePa_Le3F5sYL8rNO6U",
  authDomain: "fir-recipes-7227e.firebaseapp.com",
  projectId: "fir-recipes-7227e",
  storageBucket: "fir-recipes-7227e.appspot.com",
  messagingSenderId: "865869720410",
  appId: "1:865869720410:web:58688145f15b04b8a76163",
  measurementId: "G-ZGNFFE0F2F",
};
//Version 8
const classicFirebaseApp = firebase.initializeApp(config);
//const auth = classicFirebaseApp.auth();
//const firestore = classicFirebaseApp.firestore();
const storage = classicFirebaseApp.storage();

//version 9
const firebaseApp = initializeApp(config);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const firebaseConfig = {
  auth,
  firestore,
  storage,
};

export default firebaseConfig;
