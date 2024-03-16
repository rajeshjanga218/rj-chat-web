import React from "react";
import Conversation from "./Conversation";
import Users from "./Users";

const Home = () => {
  return (
    <div className="h-full flex justify-center items-center py-5">
      <div className="h-full w-5/6 bg-slate-100 grid grid-cols-7">
        <div className="col-span-3 bg-red-300 ">
          <Users />
        </div>
        <div className="col-span-4 bg-red-600 h-full">
          <Conversation />
        </div>
      </div>
    </div>
  );
};

export default Home;
