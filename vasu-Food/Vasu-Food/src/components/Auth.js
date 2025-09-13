import { useState,createContext, useContext } from "react";

const context=createContext(null)

export const AuthProvider=({children})=>{
    const [user, setuser] = useState(null)

    const login=(user)=>{
        setuser(user);
    }
    const logout =()=>{
        setuser(null);
    }
    return (
        <context.Provider value={{user,login,logout}}>
            {children}
        </context.Provider>
    )
}

export const useAuth=()=>{
    return useContext(context)
}