import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";
import api from "../api";


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const checkAuth = async () => {

    try {

      const response = await api.get("/api/auth/me");

      setUser(response.data.user);

    } catch (error) {

      setUser(null);

    } finally {

      setLoading(false);

    }

  };


  useEffect(() => {

    checkAuth();

  }, []);

// LOGOUT
  const logout = async () => {

    try {

       await api.post("/api/auth/logout", {});

      setUser(null);

    } catch (error) {

      console.log(error.message);

    }

  };


  return (

    <AuthContext.Provider
      value={{
        user,
        setUser,
        logout,
        loading,
      }}
    >

      {children}

    </AuthContext.Provider>

  );

};


export const useAuth = () => {
  return useContext(AuthContext);
};