import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";

function useSignIn() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signIn = async ({ username, password }) => {
    const success = handleErrors({
      username,
      password,
    });

    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_API_ENDPOINT}/api/user/login`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      // console.log(data);

      localStorage.setItem("rj-chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  function handleErrors({ username, password }) {
    if (!username || !password) {
      toast.error("fill all the fields");
    }

    return true;
  }

  return { loading, signIn };
}

export default useSignIn;
