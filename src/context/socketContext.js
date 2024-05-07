import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAuthContext } from "./authContext";

export const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const socket = io(process.env.REACT_APP_BACKEND_API_ENDPOINT, {
        query: {
          userId: authUser._id,
        },
      });
      setSocket(socket);
      // console.log(socket);

      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
        // console.log(users);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
