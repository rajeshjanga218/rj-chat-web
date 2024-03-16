import React from "react";
import Message from "./Message";
import SenderChat from "./SenderChat";
import ReceiverChat from "./ReceiverChat";

const Conversation = () => {
  return (
    <>
      <div className="bg-blue-200 p-2">To: Sas serifs</div>
      <div className="p-4 flex flex-col">
        <div className="">
          <SenderChat />
          <ReceiverChat />
        </div>
        <Message />
      </div>
    </>
  );
};

export default Conversation;
