import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer, Flip } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "../assets/css/styles.css";
import SettingUp from "./settingUp";

import AuthContext from "./context/authContext";
import AuthUserGuard from "./context/userContext";
import AuthAdminGuard from "./context/adminContext";

import Landing from "../views/pages/Landing";
import Auth from "../views/other/Auth";
import Home from "../views/pages/Home";
import Notes from "../views/pages/Notes";
import Admin from "../views/admin/Dashboard";
import Settings from "../views/pages/Settings";
import NotFound from "../views/other/NotFound";

import Page from "../views/partials/mearge/Page";

function Router() {
  SettingUp();
  const journalRoutes = [
    { path: "/", element: <Landing /> },
    {
      path: "/auth",
      element: <Auth />,
    },
  ];
  const userRoutes = [
    {
      path: "/home",
      element: <Page rander=<Home /> />,
    },
    {
      path: "/notes",
      element: <Page rander=<Notes /> />,
    },
    {
      path: "/settings",
      element: <Page rander=<Settings /> />,
    },
  ];
  const adminRoutes = [
    {
      path: "/admin",
      element: <Admin />,
    },
  ];
  const rout = createBrowserRouter(
    [
      ...journalRoutes,
      ...userRoutes.map((route) => ({
        ...route,
        element: <AuthUserGuard>{route.element}</AuthUserGuard>,
      })),
      ...adminRoutes.map((route) => ({
        ...route,
        element: <AuthAdminGuard>{route.element}</AuthAdminGuard>,
      })),
      { path: "*", element: <NotFound /> },
    ],
    {
      basename: "/ChalChitra",
    }
  );
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Flip}
      ></ToastContainer>
      <AuthContext>
        <RouterProvider router={rout} />
      </AuthContext>
    </>
  );
}

export default Router;
