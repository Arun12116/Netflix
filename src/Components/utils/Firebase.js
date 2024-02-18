// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClQGzn3dXs2xn8SmPnUzt2T_33JD_UJeg",
  authDomain: "netflix-19aa2.firebaseapp.com",
  projectId: "netflix-19aa2",
  storageBucket: "netflix-19aa2.appspot.com",
  messagingSenderId: "141940056091",
  appId: "1:141940056091:web:a86295ed65ae168cc618be",
  measurementId: "G-SN44E99V6E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();