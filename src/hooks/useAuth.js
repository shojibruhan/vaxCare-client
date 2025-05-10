import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const getToken = () => {
    const token = localStorage.getItem("authTokens");
    // console.log("token.perse", JSON.parse(token));
    return token ? JSON.parse(token) : null;
  };

  const [authTokens, setAuthTokens] = useState(getToken());

  useEffect(() => {
    if (authTokens) fetchUserProfile();
  }, [authTokens]);

  // Log in user
  const logInUser = async (userData) => {
    setErrorMsg("");
    try {
      console.log(userData);
      const response = await apiClient.post("/auth/jwt/create/", userData);
      setAuthTokens(response.data);
      localStorage.setItem("authTokens", JSON.stringify(response.data));

      await fetchUserProfile();
    } catch (error) {
      setErrorMsg(error.response.data?.detail);
    }
  };

  //   Fetch User Profile
  const fetchUserProfile = async () => {
    try {
      const response = await apiClient.get("/auth/users/me/", {
        headers: { Authorization: `JWT ${authTokens?.access}` },
      });
      // console.log("user Profile: ", response.data);
      setUser(response.data);
    } catch (error) {
      console.log("Error Fetching User Profile: ", error.data?.response);
    }
  };

  // Register A User
  const registerUser = async (userData) => {
    setErrorMsg("");
    try {
      const response = await apiClient.post("/auth/users/", userData);
      console.log(response.data);
      return {
        success: true,
        message:
          "Your Registration Complete Successfully. An Activation Code send to your email.",
      };
    } catch (error) {
      if (error.response && error.response.data) {
        const errorMessage = Object.values(error.response.data)
          .flat()
          .join("\n");
        setErrorMsg(errorMessage);
        return {
          success: false,
          message: "Registration Failed. Please Try Again.",
        };
      }
      setErrorMsg("Registration Failed. Please Try Again.");
    }
  };

  // Log out user
  const logOutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
  };

  return {
    user,
    errorMsg,
    logInUser,
    registerUser,
    logOutUser,
  };
};

export default useAuth;
