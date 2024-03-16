import React from "react";
import SearchBar from "./SearchBar";
import User from "./User";
import useUsers from "../hooks/useUsers";

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
      <div className="">
        <img src="/svg/backIcon.svg" alt="backIcon" className="w-6" />
      </div>
    </div>
  );
}

export default Users;
