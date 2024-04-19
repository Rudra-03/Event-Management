import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Login,
  Signup,
  Landing,
  Home,
  Events,
  Userpage,
  Useraccount,
  Participateform,
  Eventform,
  Dashboard,
  Allevents,
  Participants,
  Adminlogin,
  Adminsignup,
  Userlogin,
  Usersignup,
} from "./pages/index.js";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Landing />,
        children: [
          { path: "", element: <Home /> },
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/signup",
            element: <Signup />,
          },
          {
            path: "/admin-signup",
            element: <Adminsignup />,
          },
          {
            path: "/user-signup",
            element: <Usersignup />,
          },
          {
            path: "/admin-login",
            element: <Adminlogin />,
          },
          {
            path: "/user-login",
            element: <Userlogin />,
          },
          {
            path: "/events",
            element: <Events />,
          },
        ],
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "eventform",
            element: <Eventform />,
          },
          {
            path: "events",
            element: <Allevents />,
          },
          {
            path: "participants",
            element: <Participants />,
          }
        ],
      },
      {
        path: "/userpage",
        element: <Userpage />,
        children: [
          {
            path: "",
            element: <Useraccount />,
          },
          {
            path: "participateform",
            element: <Participateform />,
          },
          {
            path: "events",
            element: <Events />,
          }
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
