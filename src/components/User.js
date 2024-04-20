import React from "react";
import useConversationStore from "../zustand/useStore.js";
import { useSocketContext } from "../context/socketContext.js";

function User({ user }) {
  const { selectedUser, setSelectedUser } = useConversationStore();
  const { onlineUsers } = useSocketContext();
  const isSelected = selectedUser?._id === user._id;
  const isOnline = onlineUsers.includes(user._id);
  return (
    <div
      className={`rounded-lg bg-blue-300 flex justify-between p-2 
     ${isSelected ? "bg-red-400" : ""}
      `}
      onClick={() => setSelectedUser(user)}
    >
      <div className=" flex gap-2">
        <div className="relative rounded-full w-6 h-6">
          {isOnline === true && (
            <span className="absolute top-0 -left-1 bg-green-900 rounded-full h-2 w-2"></span>
          )}
          <img
            src={
              user.profilePic
                ? user.profilePic
                : "https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"
            }
            alt="avatar"
            className={`w-6 h-6 rounded-full`}
          />
        </div>
        <p>{user.username}</p>
      </div>
      <div>
        <img
          src="https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"
          alt="avatar"
          className="w-6 h-6 rounded-full"
        />
      </div>
    </div>
  );
}

export default User;
