import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
// import { account } from "../appwrite/auth";
import { useNavigate } from "react-router-dom";
import authService from "../../appwrite/auth";

function Userlogin() {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [error, SetError] = useState("");
  const [clickable, SetClickable] = useState("");
  const navigation = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email,
        password,
      };
      const userdata = await authService.login(data);
      if (userdata) {
        navigation("/userpage");
      }
    } catch (error) {
      SetError(error.message);
    }
  };
  useEffect(() => {
    if (email && password) {
      SetClickable(true);
    } else {
      SetClickable(false);
    }
  });
  return (
    <>
      <div className=" bg-slate-900 w-full h-screen flex  justify-center">
        <div className=" p-5 font-serif">
          <h1 className="text-center text-white mb-5 text-4xl">User login</h1>
          <p className="text-center flex w-full justify-center mb-5 text-white">
            Don't have an account?&nbsp;
            <Link to="/user-signup" className="text-green-500">
              Signup
            </Link>
          </p>
          {error && (
            <p className="text-red-500 flex justify-center p-3 w-full">
              {error}
            </p>
          )}
          <form onSubmit={handlesubmit}>
            <div className="bg-slate-500 flex flex-col p-8 gap-3">
              <label>
                Email
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border-none mb-2 h-8 p-2"
                  onChange={(e) => SetEmail(e.target.value)}
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full border-none mb-2 h-8 p-2"
                  onChange={(e) => SetPassword(e.target.value)}
                />
              </label>
              <button
                type="submit"
                className=" bg-slate-300 rounded-md pt-2 pb-2 pr-4 pl-4 mt-4 text-black"
                disabled={!clickable}
              >
                Login As User
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Userlogin;
