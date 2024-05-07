import React from "react";
import Message from "./Message";
import useMessages from "../hooks/useMessages";
import useConversationStore from "../zustand/useStore";
import ChatContainer from "./ChatContainer";
import useSocketMessages from "../hooks/useSocketMessages";

const Conversation = () => {
  useSocketMessages();
  const { loadig, messages } = useMessages();
  const { selectedUser } = useConversationStore();
  // console.log("meassages", messages);

  if (!selectedUser) return <></>;
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="bg-blue-200 p-2">To: {selectedUser.username}</div>
      <div className="h-full relative">
        <ul className="absolute h-full w-full p-4 flex flex-col gap-2 bg-green-50 overflow-x-auto">
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
