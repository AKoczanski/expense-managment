import React, { useState } from "react";

const AuthContext = React.createContext({
  email: "",
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const initialEmail = localStorage.getItem("email");
  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState(initialEmail);
  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const loginHandler = (token, emailValue) => {
    setToken(token);
    setEmail(emailValue);
    localStorage.setItem("email", emailValue);
    localStorage.setItem("token", token);
  };

  const contextValue = {
    email,
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
