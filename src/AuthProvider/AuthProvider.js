import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup,} from "firebase/auth";
import { } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)



const AuthProvider = ({children}) => {
     const {user, setUser} = useState(null);
     
     const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
     }
     const signIn =(email, password)=>{
      return signInWithEmailAndPassword(auth, email, password)
     }

     const googleSignIn=(provider)=>{
      return signInWithPopup(auth, provider)
     }
     
     const githubSignIn =(provider)=>{
      return signInWithPopup(auth, provider)
     }
    const authInfo = {user, createUser, signIn, googleSignIn, githubSignIn}
    return (
       <AuthContext.Provider value={authInfo}>
           {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;