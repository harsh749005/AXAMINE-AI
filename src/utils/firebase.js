// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF0XJ6uz-pQhxwzgtkN21le8ZXLxUuXxY",
  authDomain: "axamine-ai.firebaseapp.com",
  projectId: "axamine-ai",
  storageBucket: "axamine-ai.firebasestorage.app",
  messagingSenderId: "732713258051",
  appId: "1:732713258051:web:3b8f4ca7218e7fd6c758f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;