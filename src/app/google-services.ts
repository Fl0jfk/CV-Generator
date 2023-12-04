// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg_oWcPHSfknSaiUpErFnLfiGFIhpnG-Q",
  authDomain: "test-dc24d.firebaseapp.com",
  projectId: "test-dc24d",
  storageBucket: "test-dc24d.appspot.com",
  messagingSenderId: "97034274282",
  appId: "1:97034274282:web:ca894bdfa2db81af501e93",
  measurementId: "G-KNDEQVWBLS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);