import React, { useState } from "react";
import useSignUp from "../hooks/useSignUp";

const SignUp = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("male");

  const { loading, signUp } = useSignUp();

  const handleForSubmit = async (e) => {
    e.preventDefault();

    await signUp({ fullName, username, password, confirmPassword, gender });
  };

  if (loading) return <div>loading...</div>;

  return (
    <div className="h-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4 border w-full h-full md:w-1/3 md:h-[80%] p-10 rounded-lg">
        <h1>sign Up</h1>
        <form onSubmit={handleForSubmit} className="flex flex-col gap-4">
          <div>
            <label>Full Name</label>
            <div>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="border-2 rounded-lg"
              />
            </div>
          </div>
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
          <div>
            <label>Confirm Password</label>
            <div>
              <input
                type="text"
                value={confirmPassword}
                className="border-2 rounded-lg"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <p>Select Gender</p>
            <div className="flex gap-2">
              <label>
                <input
                  checked={gender === "male"}
                  type="radio"
                  value="male"
                  className="border-2 rounded-lg"
                  name="gender"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
                Male
              </label>
              <label>
                <input
                  checked={gender === "female"}
                  type="radio"
                  value="female"
                  className="border-2 rounded-lg"
                  name="gender"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
                FeMale
              </label>
            </div>
          </div>
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

export default SignUp;
