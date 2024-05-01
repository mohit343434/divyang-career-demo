import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: "",
    });

    useEffect(() => {
        axios.defaults.headers.common["Authorization"] = auth?.token;
    }, [auth.token]);

    useEffect(() => {
        const data = localStorage.getItem("auth");
        const user = localStorage.getItem("user");

        if (data === "undefined") {
            localStorage.setItem("auth", JSON.stringify(" "));
            return;
        }

        if (data) {
            const parseData = JSON.parse(data);
            setAuth((prevAuth) => ({
                ...prevAuth,
                token: parseData,
            }));
        }

        if (user) {
            const parseData = JSON.parse(user);
            setAuth((prevAuth) => ({
                ...prevAuth,
                user: parseData,
            }));
        }
    }, [auth.token]);

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
