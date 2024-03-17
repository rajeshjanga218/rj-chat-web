import React from "react";
import SearchBar from "./SearchBar";
import User from "./User";
// import useUsers from "../hooks/useUsers";
import LogOut from "./LogOut";

function Users() {
  // const { loading, users } = useUsers();

  // if (loading) return <>loading...</>;

  return (
    <div className="">
      <SearchBar />
      <ul className="h-full">
        <li>
          <User />
        </li>
      </ul>
      <LogOut />
    </div>
  );
}

export default Users;
