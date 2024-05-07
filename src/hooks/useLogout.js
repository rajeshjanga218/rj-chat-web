import { useState } from "react";
import { useAuthContext } from "../context/authContext";
import toast from "react-hot-toast";

function useLogout() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logOut = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_API_ENDPOINT}/api/user/logout`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      // console.log(data);

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.removeItem("rj-chat-user");
      setAuthUser(null);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logOut };
}

export default useLogout;
