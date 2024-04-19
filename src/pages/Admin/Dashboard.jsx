import React from "react";
import authService from "../../appwrite/auth";
// import { useState, useEffect } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo_white.webp";

function Dashboard() {
  // const [name, SetName] = useState("");
  // const [email, SetEmail] = useState("");
  // const [userid, SetUserid] = useState("");
  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const data = await authService.getCurrentUser();
  //       console.log(data);
  //       if (data) {
  //         SetName(data.name);
  //         SetEmail(data.email);
  //         SetUserid(data.$id);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getData();
  // }, []);
  const navigate = useNavigate();
  const handlelogout = async() => {
    await authService.logout();
    window.history.pushState(null, null, "/");

    navigate("/");
  }
  return (
    <>
      <div className=" bg-slate-900 w-full min-h-screen  justify-center font-serif">
        <header>
          <div className="pt-4 mb-1 pr-8 pl-8 flex justify-between">
            <img src={logo} alt="logo" className="h-12"/>
            <button type="button" className="bg-slate-300 rounded-md pt-2 pb-2 pr-4 pl-4 text-black" onClick = {handlelogout}>logout</button>
          </div>
        </header>
        <div className="container w-full font-sans flex h-max mt-10 rounded-lg">
          <div className="left-section w-1/3 pr-5">
            <div className="bg-slate-500 pt-5 pb-5 rounded-lg">
              <h1 className="text-3xl text-white text-center font-serif">Admin</h1>
              <ul className="m-5 font-serif">
                <li><NavLink to="events" className={({ isActive }) => ` w-full flex items-center h-10 font-bold text-2xl pl-4  rounded-xl ${isActive ? "bg-slate-800 text-white" : ""}`}>Events</NavLink></li>
                <li><NavLink to={"participants"} className={({ isActive }) => ` w-full flex items-center h-10 font-bold text-2xl pl-4  rounded-xl ${isActive ? "bg-slate-800 text-white" : ""}`}>Participants</NavLink></li>
                <li><NavLink to={"eventform"} className={({ isActive }) => ` w-full flex items-center h-10 font-bold text-2xl pl-4  rounded-xl ${isActive ? "bg-slate-800 text-white" : ""}`}>Add events</NavLink></li>

              </ul>
            </div>
          </div>
          <div className="right-section flex-1 w-full">
            <div className="bg-slate-700 rounded-lg"><h1 className="text-5xl text-white text-center p-3 font-serif">DASHBOARD</h1></div>
            <div className="bg-slate-700 flex justify-center mt-5 rounded-lg p-5 w-full border">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
