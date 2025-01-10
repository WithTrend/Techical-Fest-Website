import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { db } from "../Firebase/Firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import "./Profile.css";

// Function to generate a unique ID
const generateUniqueId = () => {
  const prefix = "EFF";
  const randomPart = Math.random().toString(36).substring(2, 10).toUpperCase(); // Generate a random string
  return prefix + randomPart; // Combine the prefix with the random part
};

export const Profile = () => {
  const { user } = useAuth(); // Get the authenticated user
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      console.log(user.uid);
      const fetchUserData = async () => {
        try {
          const userDocRef = doc(db, "users", user.uid); // Ensure this path is correct
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            setUserData(userDoc.data());
          } else {
            // If the user doesn't exist, create a new user document with a unique ID
            const newRegisterId = generateUniqueId();
            console.log(newRegisterId);
            await setDoc(userDocRef, {
              email: user.email,
              name: user.displayName || "Anonymous", // You can add other fields here
              mobile: "",
              registerValue: newRegisterId, // Store the unique ID in Firestore
            });
            setUserData({
              email: user.email,
              name: user.displayName || "Anonymous",
              mobile: "",
              registerValue: newRegisterId,
            });
          }
        } catch (error) {
          console.error("Error fetching user data: ", error);
        } finally {
          setLoading(false);
        }
      };

      fetchUserData();
    }
  }, [user]); // Only fetch data when user changes

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!userData) {
    return <p>No user data available.</p>;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2 className="profile-title">Profile</h2>
        <div className="profile-info">
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Mobile: {userData.mobile}</p>
          <p>The registration Id is: {userData.registerValue}</p>
        </div>
      </div>
    </div>
  );
};
