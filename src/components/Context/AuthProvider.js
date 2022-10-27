import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../../firebase.config';
import { useEffect } from 'react';
export const authContext = createContext()
const AuthProvider = ({ children }) => {
    const [user,setUser]=useState('');

    const auth = getAuth(app)
    const register=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    };
    const login = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    };
    const logOut = ()=>{
        return signOut(auth)
    }
    const googleLogin=(provider)=>{
        return signInWithPopup(auth,provider)
    }
    const githubLogin= (provider)=>{
        return signInWithPopup(auth,provider)
    }
    const updateUserProfile = (profile)=>{
        return updateProfile(auth.currentUser,profile)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
        })
        return ()=>unsubscribe();
    },[])
    const authInfo= {user,updateUserProfile, register,login, logOut,googleLogin,githubLogin}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;