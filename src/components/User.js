import React from "react";

function User() {
  return (
    <div className="rounded-lg bg-blue-300 flex justify-between py-2">
      <div className="flex gap-2">
        <div className="rounded-full w-6 h-6">
          <img
            src="https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"
            alt="avatar"
            className="w-6 h-6 rounded-full"
          />
        </div>
        <p>Divya</p>
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
