import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Parent from "./Pages/Parent";
import FirebaseProvider from "./FirebaseProvider/FirebaseProvider";
import Home from "./Pages/Home";
import NeedVolunteer from "./Pages/NeedVolunteer";
import MyProfile from "./Pages/MyProfile";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import AddVolunteer from "./Pages/AddVolunteer";
import VolunteerDetails from "./Pages/VolunteerDetails";
import BeVolunteer from "./Pages/BeVolunteer";
import Mypost from "./Pages/Mypost";
import UpdatePost from "./Pages/UpdatePost";
import PrivateRoute from "./Pages/PrivateRoute";
import ErrorPage from "./Pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Parent></Parent>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://volunteer-hub-server.vercel.app/volunteer"),
      },
      {
        path: "/volunteer/:id",
        element: (
          <PrivateRoute>
            <VolunteerDetails></VolunteerDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://volunteer-hub-server.vercel.app/volunteer/${params.id}`),
      },
      {
        path: "/bevolunteer/:id",
        element: (
          <PrivateRoute>
            <BeVolunteer></BeVolunteer>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://volunteer-hub-server.vercel.app/volunteer/${params.id}`),
      },
      {
        path: "/needvolunteer",
        element: <NeedVolunteer></NeedVolunteer>,
        loader: () => fetch("https://volunteer-hub-server.vercel.app/volunteer"),
      },
      {
        path: "/myprofile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/addpost",
        element: (
          <PrivateRoute>
            <AddVolunteer></AddVolunteer>
          </PrivateRoute>
        ),
      },
      {
        path: "/updatepost/:id",
        element: <UpdatePost></UpdatePost>,
        loader: ({ params }) =>
          fetch(`https://volunteer-hub-server.vercel.app/volunteer/${params.id}`),
      },
      {
        path: "/mypost",
        element: (
          <PrivateRoute>
            <Mypost></Mypost>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>
);
