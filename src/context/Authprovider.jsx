import React, { createContext, useState, useEffect } from "react";
import { getLocalstorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Initialize userData from localStorage once on mount
        const data = getLocalstorage();
        setUserData(data);
    }, []);

    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
