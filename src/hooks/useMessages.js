import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";
import useConversationStore from "../zustund/useStore";

function useMessages() {
  const [loading, setLoading] = useState(false);

  const { selectedUser, messages, setMessages } = useConversationStore();

  const { authUser } = useAuthContext();

  const getMessages = async () => {
    setLoading(true);
    try {
      if (!selectedUser) return;
      const res = await fetch(
        `http://localhost:4000/api/messages/chatlist/${selectedUser?._id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: authUser.token,
          },
        }
      );

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setMessages(data);
      return messages;
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedUser?._id) getMessages();
  }, [selectedUser?._id, setMessages]);

  return { loading, messages };
}

export default useMessages;
