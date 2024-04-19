import React from "react";
import { Link } from "react-router-dom";
import admin from "../../assets/admin.png";
import user from "../../assets/user.png";
function Login() {
  return (
    <>
      <div className=" bg-slate-900 w-full min-h-screen p-36">
        <ul className=" p-5 w-2/3 text-white flex m-auto justify-around font-serif">
          <li className=" p-5 m-5 bg-slate-950 rounded-xl">
            <Link to="/admin-login">
              <img src={admin} alt="" className="h-40 text-center"/>
              <p className="text-center text-xl pt-3"> LOGIN AS ADMIN</p>
            </Link>
          </li>
          <li className="m-5  bg-slate-950 rounded-xl p-5">
            <Link to="/user-login">
              <img src={user} alt="" className="h-40"/>
              <p className="text-center text-xl pt-3">LOGIN AS USER</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Login;
