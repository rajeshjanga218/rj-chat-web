import { useState } from "react";
import toast from "react-hot-toast";

function useSignUp() {
  const [loading, setLoading] = useState(false);

  const signUp = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });

    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/api/user/signup", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  function handleErrors({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
      toast.error("fill all the fields");
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }

    return true;
  }

  return { loading, signUp };
}

export default useSignUp;
