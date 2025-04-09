// src/login.js (or wherever your login.js is located)
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";  // Adjust path if needed

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User Logged In:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Error logging in:", error.message);
    console.error("Error Code:", error.code);
    console.error("Error Message:", error.message);
  }
};

export default login;
