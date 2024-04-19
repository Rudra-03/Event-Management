import React, { useEffect } from "react";
import authService from "../../appwrite/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

function Adminsignup() {
  const navigation = useNavigate();
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [admincode, SetAdmincode] = useState("");
  const [error, SetError] = useState("");
  const [clickable, SetClickable] = useState(false);
  let admincode1 = "admincode";
  const handlesubmit = async(e) => {
    e.preventDefault();
    SetError("");
    try {
      if (admincode != admincode1) {
        SetError("Wrong admin code");
        return;
      }
      const data = {
        email,
        password,
        name,
      };
      const adminAccount = await authService.createAccount(data);
      // console.log(adminAccount);
      if(adminAccount){
        navigation("/dashboard");
      }
    } catch (error) {
      SetError(error.message);
    }
  };
  useEffect(() => {
    if (name && email && password) {
      SetClickable(true);
    } else {
      SetClickable(false);
    }
  });
  return (
    <>
      <div className=" bg-slate-900 w-full h-screen flex  justify-center">
        <div className=" p-5 font-serif">
          <h1 className="text-center text-white mb-5 text-4xl">Admin signup</h1>
          <p className="text-center flex justify-center mb-5 text-white">
            Already have an account?&nbsp;
            <Link to="/admin-login" className="text-green-500">
              login
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
                Name
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full  mb-2 h-8 p-2 placeholder:text-slate-500 shadow-sm"
                  onChange={(e) => SetName(e.target.value)}
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mb-2 h-8 p-2"
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
              <label>
                Admin code
                <input
                  type="text"
                  placeholder="Enter admin code"
                  className="w-full border-none mb-2 h-8 p-2"
                  onChange={(e) => SetAdmincode(e.target.value)}
                />
              </label>
              <button
                type="submit"
                className=" bg-slate-300 rounded-md pt-2 pb-2 pr-4 pl-4 mt-4 text-black"
                disabled={!clickable}
              >
                Signup As Admin
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Adminsignup;
