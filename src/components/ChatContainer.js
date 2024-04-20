import React from "react";
import SenderChat from "./SenderChat";
import ReceiverChat from "./ReceiverChat";
import { useAuthContext } from "../context/authContext";

function ChatContainer({ message }) {
  const { authUser } = useAuthContext();
  //   console.log(authUser);
  const fromMe = authUser._id === message?.senderId;
  //   console.log(fromMe, message);
  //   console.log(typeof message);
  return (
    <>
      {fromMe === true ? (
        <SenderChat message={message} />
      ) : (
        <ReceiverChat message={message} />
      )}
    </>
  );
}

export default ChatContainer;
