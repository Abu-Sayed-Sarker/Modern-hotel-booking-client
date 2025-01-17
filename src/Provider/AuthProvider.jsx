/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth'

import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app)

const googleSingin = new GoogleAuthProvider()



const AuthProvider = ({ children }) => {




    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // register Acount
    const registerAcount = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    /// log in acount
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sing in with google
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleSingin)
    }


    //log out
    const logOut = async () => {
        setLoading(true)
        return signOut(auth)
    }



    // update profile 

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }


    //ovserber

    // onAuthStateChange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async currentUser => {
            if (currentUser?.email) {
                setUser(currentUser);
                const { data } = await axios.post(`${import.meta.env.VITE_API_LINK}/jwt`, { email: currentUser?.email }, { withCredentials: true })
                console.log(data);

            } else {
                setUser(currentUser);
                const { data } = await axios.get(`${import.meta.env.VITE_API_LINK}/logout`, { withCredentials: true })
                console.log(data);

            }
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])


    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        registerAcount,
        updateUserProfile,
        logIn,
        logOut,
        signInWithGoogle,

    };



    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
};

export default AuthProvider;