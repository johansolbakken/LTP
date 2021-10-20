import React, { useState, useContext, useEffect } from "react";
import "firebase/auth";
import { auth } from "../firebase";

interface Props {}

const AuthContext = React.createContext(undefined);

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider: React.FC<Props> = (props) => {
    const [currentUser, setCurrentUser] = useState<any>();

    const signup = (email: string, password: string):any => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        const unsubscriber = auth.onAuthStateChanged((user:any) => {
            setCurrentUser(user);
        });
        return unsubscriber;
    }, []);

    

    const value:any = {
        currentUser,
        signup
    };
    // TODO: https://www.youtube.com/watch?v=PKwu15ldZ7 20:30

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    );
}