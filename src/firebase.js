import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import "firebase/database";
import "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBYc-GxKFFat516Q32rBsP1umW2Blz98Xc",
  authDomain: "noww-e941d.firebaseapp.com",
  projectId: "noww-e941d",
  storageBucket: "noww-e941d.appspot.com",
  messagingSenderId: "334645770573",
  appId: "1:334645770573:web:ec2ea7ec8611884ba19f04",
  measurementId: "G-D241L5H1KE",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

const storage = firebase.storage();

const fb = firebase;

export { storage, fb as default };
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
