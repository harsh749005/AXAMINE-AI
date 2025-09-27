// src/utils/authHelpers.js
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";


// Email/password signup
export const signup = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password).then((cred) => {
    // optional email verification
    sendEmailVerification(cred.user).catch(() => {});
    return cred;
  });
}

// Login
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Logout
export function logout() {
  return signOut(auth);
}

// Google Sign-in
export function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}

// Password reset
export function resetPassword(email) {
  return sendPasswordResetEmail(auth, email);
}
