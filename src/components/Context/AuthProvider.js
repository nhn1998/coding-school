import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
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
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
        })
        return ()=>unsubscribe();
    },[])
    const authInfo= {user, register,login, logOut}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;