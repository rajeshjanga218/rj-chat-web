import React from "react";
import Conversation from "./Conversation";
import Users from "./Users";

const Home = () => {
  return (
    <div className="h-full flex justify-center items-center py-5">
      <div className="h-screen w-5/6 grid grid-cols-7 bg-black p-1">
        <div className="col-span-3">
          <Users />
        </div>
        <div className="col-span-4 bg-red-600">
          <Conversation />
        </div>
      </div>
    </div>
  );
};

export default Home;
