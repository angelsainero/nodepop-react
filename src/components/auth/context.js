import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
    const authValue = useContext(AuthContext);
    return authValue
}

