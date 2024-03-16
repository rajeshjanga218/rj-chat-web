import { useState } from "react";
import toast from "react-hot-toast";

function useSignIn() {
  const [loading, setLoading] = useState(false);

  const signIn = async ({ username, password }) => {
    const success = handleErrors({
      username,
      password,
    });

    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/api/user/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
      }
      console.log(data);
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