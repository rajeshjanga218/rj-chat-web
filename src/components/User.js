import React from "react";
import useConversationStore from "../zustund/useStore.js";

function User({ user }) {
  const { selectedUser, setSelectedUser } = useConversationStore();
  // console.log(selectedUser);
  const isSelected = selectedUser?._id === user._id;
  return (
    <div
      className={`rounded-lg bg-blue-300 flex justify-between p-2 
     ${isSelected ? "bg-red-400" : ""}
      `}
      onClick={() => setSelectedUser(user)}
    >
      <div className="flex gap-2">
        <div className="rounded-full w-6 h-6">
          <img
            src={
              user.profilePic
                ? user.profilePic
                : "https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"
            }
            alt="avatar"
            className="w-6 h-6 rounded-full"
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
