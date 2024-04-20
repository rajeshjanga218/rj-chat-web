import { useEffect } from "react";

import { useSocketContext } from "../context/socketContext";
import useConversationStore from "../zustand/useStore";

// import notificationSound from "../assets/sounds/notification.mp3";

const useSocketMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversationStore();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      // newMessage.shouldShake = true;
      // const sound = new Audio(notificationSound);
      // sound.play();
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
};
export default useSocketMessages;
