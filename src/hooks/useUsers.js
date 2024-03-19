import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";

function useUsers() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const { authUser } = useAuthContext();

  const getAllUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/api/user/getAllUsers", {
        method: "GET",
        // credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: authUser.token,
        },
      });

      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
      }
      setUsers(data);
      // console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return { loading, users };
}

export default useUsers;
