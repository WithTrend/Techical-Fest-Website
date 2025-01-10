import React, { useState } from "react";
import { useNavigate } from "react-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/Firebase";
import { useAuth } from "../Context/AuthContext";
import "./Register.css";

// Function to generate a unique ID
const generateUniqueId = () => {
  const prefix = "EFF";
  const randomPart = Math.random().toString(36).substring(2, 10).toUpperCase(); // Generate a random string
  return prefix + randomPart; // Combine the prefix with the random part
};

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState(""); // Added password state
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password // Using the password provided by the user
      );
      const user = userCredential.user;

      // Generate unique registration ID
      const registerId = generateUniqueId();

      // Add user data to Firestore using the authenticated user's UID
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        mobile,
        password,
        registerValue: registerId, // Store the unique ID in Firestore
      });

      // Log the user in and redirect to the profile page
      login({ name, email, mobile });
      navigate("/profile");
    } catch (error) {
      console.error("Error registering user: ", error);
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-title">Register</h2>
        <label className="register-label">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="register-label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="register-label">
          Mobile:
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </label>
        <label className="register-label">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};
