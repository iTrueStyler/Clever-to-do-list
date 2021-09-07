// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEy9L2whlvTBPGN8lV0IRFmMDcdPtgU5U",
  authDomain: "todolist-4b428.firebaseapp.com",
  projectId: "todolist-4b428",
  storageBucket: "todolist-4b428.appspot.com",
  messagingSenderId: "1004473417674",
  appId: "1:1004473417674:web:31881529f160aa45b01933",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
