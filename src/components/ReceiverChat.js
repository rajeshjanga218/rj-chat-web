import React from "react";

function ReceiverChat({ message }) {
  // console.log("rajesh", message);
  // console.log(typeof message);
  // console.log("messageR", message);
  return (
    <div className="flex justify-start items-center gap-2">
      <div>
        <img
          src="https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"
          alt="profilepic"
          className="w-8 h-8  rounded-full"
        />
      </div>
      <div className="bg-green-600 p-2 rounded-lg">{message.message}</div>
    </div>
  );
}

export default ReceiverChat;
