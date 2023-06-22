import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAfWY1WVFSpgvCyzP_xiS4FYv3yPpjL1DY",
  authDomain: "at3-mobile.firebaseapp.com",
  projectId: "at3-mobile",
  storageBucket: "at3-mobile.appspot.com",
  messagingSenderId: "165754151053",
  appId: "1:165754151053:web:41d4fd9507113f12e942c4",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
export const auth = firebase.auth();
