import React from "react";
import Conversation from "./Conversation";
import Users from "./Users";

const Home = () => {
  return (
    <div className="h-full flex justify-center items-center py-5 bg-slate-800">
      <div className="h-full w-5/6 grid grid-cols-7 bg-black p-1">
        <div className="h-full col-span-3">
          <Users />
        </div>
        <div className="h-full col-span-4 bg-red-600 border-l-2 border-l-black">
          <Conversation />
        </div>
      </div>
    </div>
  );
};

export default Home;
