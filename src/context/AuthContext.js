
import { createContext, useContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

import { auth } from "../config/firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Monitor Firebase authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      //console.log("auth cr state", currentUser)
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const DEFAULT_PROFILE_IMAGE = "https://placehold.co/150x150?text=User";

    // Signup
    const signup = async (fullName, email, password) => {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        const newUser = userCredential.user;

        try {
            await updateProfile(newUser, {
                displayName: fullName,
                photoURL: DEFAULT_PROFILE_IMAGE,
            });

            setUser(auth.currentUser);

            return newUser;

        } catch (error) {
            await newUser.delete();
            throw error;
        }
    };


  // Login
  const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    setUser(userCredential.user);

    return userCredential.user;
  };

  // Logout
  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const value = {
    user,
    loading,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};
