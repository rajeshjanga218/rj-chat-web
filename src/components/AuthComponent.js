import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

const whiteListedRouterPaths = ["/login", "/signup"];

const AuthComponent = ({ children }) => {
  const { authUser } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (!whiteListedRouterPaths.includes(path) && !authUser) {
      navigate(`/login?redirect=${path}`);
    }
  }, [authUser, navigate, location.pathname]);

  return <>{children}</>;
};

export default AuthComponent;
