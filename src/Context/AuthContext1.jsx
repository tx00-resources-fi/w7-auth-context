// Context/AuthContext.jsx
import { createContext, useState } from "react";

// Named export for AuthContext
export const AuthContext = createContext();

export function AuthProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  const login = (jwtToken) => {
    setIsLoggedIn(true);
    setToken(jwtToken);
    setIsLoggedIn(true)
  };

  const logout = () => {
    setIsLoggedIn(false);
    setToken(null);
  };

  const value = {
    isLoggedIn,
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value} {...props} />;
}