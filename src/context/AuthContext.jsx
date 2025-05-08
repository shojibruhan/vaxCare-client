import { createContext, useState } from "react";
import apiClient from "../services/api-client";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getToken = () => {
    const token = localStorage.getItem("authTokens");
    console.log("token.perse", JSON.parse(token));
    return token ? JSON.parse(token) : null;
  };

  const [authTokens, setAuthTokens] = useState(getToken());

  // Log in user
  const logInUser = async (email, password) => {
    const response = await apiClient.post("/auth/jwt/create/", {
      email,
      password,
    });
    console.log(response.data);
  };

  return (
    <AuthContext.Provider value={{ logInUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
