import React from "react";
import Message from "./Message";
import useMessages from "../hooks/useMessages";
import useConversationStore from "../zustund/useStore";
import ChatContainer from "./ChatContainer";

const Conversation = () => {
  const { loadig, messages } = useMessages();
  const { selectedUser } = useConversationStore();
  console.log("meassages", messages);

  if (!selectedUser) return <></>;
  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="h-screen">
        <div className="bg-blue-200 p-2">To: {selectedUser.username}</div>
        <ul className="p-4 flex flex-col gap-2 bg-green-50 overflow-x-auto h-full">
          {messages?.map((message) => (
            <li key={message._id}>
              <ChatContainer message={message} />
            </li>
          ))}
        </ul>
      </div>
      <div className="p-2">
        <Message />
      </div>
    </div>
  );
};

export default Conversation;
