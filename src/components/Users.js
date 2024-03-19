import React from "react";
import SearchBar from "./SearchBar";
import User from "./User";
import useUsers from "../hooks/useUsers";
import LogOut from "./LogOut";

function Users() {
  const { loading, users } = useUsers();

  if (loading) return <>loading...</>;

  return (
    <div className="flex flex-col justify-between bg-slate-600">
      <div className="">
        <SearchBar />
        <ul className="h-full flex flex-col gap-2 p-2 overflow-auto">
          {users?.map((user) => (
            <li key={user._id}>
              <User user={user} />
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <LogOut />
      </div>
    </div>
  );
}

export default Users;
