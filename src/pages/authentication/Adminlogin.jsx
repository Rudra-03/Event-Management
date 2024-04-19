import React from "react";
import authService from "../../appwrite/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Adminlogin() {
  const [error, SetError] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [clickable, SetClickable] = useState(false);
  const navigation = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email,
        password,
      };
      const adminData = await authService.login(data);
      if (adminData) {
        navigation("/dashboard");
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
      <div className=" bg-slate-900 w-full h-screen flex justify-center">
        <div className=" p-5 font-serif">
          <h1 className="text-center text-white mb-5 text-4xl">Admin Login</h1>
          <p className="text-center flex justify-center mb-5 text-white">
            Don't have an account?&nbsp;
            <Link to="/admin-signup" className="text-green-500">
              Signup
            </Link>
          </p>
          {error && (
            <p className="text-red-500 flex justify-center p-3">{error}</p>
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
                Login As Admin
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Adminlogin;
