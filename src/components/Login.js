import React, { useState } from "react";
import useSignIn from "../hooks/useSignIn";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, signIn } = useSignIn();
  const navigate = useNavigate();

  const handleForSubmit = async (e) => {
    e.preventDefault();

    await signIn({ username, password });
    navigate("/");
  };
  if (loading) return <>loading...</>;
  return (
    <div className="h-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4 border w-full h-full md:w-1/3 md:h-[80%] p-10 rounded-lg">
        <h1>sign In</h1>
        <form onSubmit={handleForSubmit} className="flex flex-col gap-4">
          <div>
            <label>Username</label>
            <div>
              <input
                type="text"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                className="border-2 rounded-lg"
              />
            </div>
          </div>
          <div>
            <label>Password</label>
            <div>
              <input
                type="text"
                value={password}
                className="border-2 rounded-lg"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <p>
            New user ?
            <Link to="/signup">
              <span className="text-blue-500"> Sign Up</span>
            </Link>
          </p>
          <div className="flex justify-center">
            <button type="submit" className="rounded-lg border py-1 px-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
