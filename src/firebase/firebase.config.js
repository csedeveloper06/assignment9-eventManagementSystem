// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSrDDeoSj0pWLheS635ZGpXzYOf2mYakA",
  authDomain: "assignment9-react-firebase.firebaseapp.com",
  projectId: "assignment9-react-firebase",
  storageBucket: "assignment9-react-firebase.appspot.com",
  messagingSenderId: "953783468355",
  appId: "1:953783468355:web:a4dd2d0659b1d4ae426ff6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;