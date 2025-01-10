import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../Firebase/Firebase"; // Assuming you have Firebase configured
import { onAuthStateChanged, signOut } from "firebase/auth";

// Create Context
const AuthContext = createContext();

// AuthProvider to wrap around App
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for changes in auth state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          name: currentUser.displayName || "User",
          email: currentUser.email,
          uid: currentUser.uid,
        });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const logout = () => {
    signOut(auth); // Log out of Firebase
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
