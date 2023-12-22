import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/firebase.config";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // google based authentication
    const googleProvider = new GoogleAuthProvider();
    

    // password based authentication
    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // google based authentication
    const googleSignUp = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
                setUser(currentUser)
                setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])


    const AuthInfo = {
        user,
        loading,
        signUp,
        signIn,
        googleSignUp,
        logOut
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;