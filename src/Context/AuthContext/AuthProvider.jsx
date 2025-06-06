import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/fireBase.config';
import { GoogleAuthProvider } from 'firebase/auth';


const googleProvider = new GoogleAuthProvider()



const AuthProvider = ({ children }) => {

  const [loading, setLoading] = useState(true);
  const [user,setUser] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

   const signInWithGoogle = () =>{
  setLoading(true);
  return signInWithPopup(auth,googleProvider)

   }

  const signOutUser = () =>{
    setLoading(true);
    return signOut(auth)
  }

  useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
       setUser(currentUser);
       setLoading(false);
       console.log('user in the auth',currentUser)
    })
    return () =>{
      unSubscribe();
    }
  },[])



  const authInfo = {
    loading,
    user,
    createUser, 
    signInUser,
    signOutUser,
    signInWithGoogle,

  }




  return (
    <AuthContext value={authInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;