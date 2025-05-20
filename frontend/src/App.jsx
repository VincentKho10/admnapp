import React from "react";
import Home from "./view/home/Home";
import {
  createBrowserRouter,
  Navigate,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Login from "./view/login/Login";

const router = createBrowserRouter([
  { path: "/home", element: <Home /> },
  { path: "/", element: <Navigate to="/home" replace/> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
