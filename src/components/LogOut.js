import React from "react";
import useLogout from "../hooks/useLogout";
import { useNavigate } from "react-router-dom";

function LogOut() {
  const { loading, logOut } = useLogout();
  const navigate = useNavigate();
  if (loading) return <>loading...</>;

  const handleLogOut = async () => {
    await logOut();
    navigate("/login");
  };

  return (
    <div>
      <img
        src="/svg/backIcon.svg"
        alt="backIcon"
        className="w-6 cursor-pointer"
        onClick={handleLogOut}
      />
      <p>logout</p>
    </div>
  );
}

export default LogOut;
