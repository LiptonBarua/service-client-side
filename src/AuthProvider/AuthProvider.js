import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,} from "firebase/auth";
import { } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)



const AuthProvider = ({children}) => {
   const [user, setUser] =useState(null);
   const [loading, setLoading] = useState(true)


     const createUser=(email, password)=>{
      setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
     }
     const signIn =(email, password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
     }

     const googleSignIn=(provider)=>{
      setLoading(true)
      return signInWithPopup(auth, provider)
     }
     
     const githubSignIn =(provider)=>{
      setLoading(true)
      return signInWithPopup(auth, provider)
     }

     const logOut=()=>{
      setLoading(true)
      return signOut(auth)
     }

    useEffect(()=>{
      const unsubcribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        setLoading(false);
      })
      return ()=>{
        unsubcribe()
      }
    });
    const authInfo = {user, createUser, signIn, googleSignIn, githubSignIn, logOut, loading}
    return (
       <AuthContext.Provider value={authInfo}>
           {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;