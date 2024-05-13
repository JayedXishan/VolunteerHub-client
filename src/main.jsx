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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Parent></Parent>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/volunteer"),
      },
      {
        path: "/volunteer/:id",
        element: <VolunteerDetails></VolunteerDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/volunteer/${params.id}`),
      },
      {
        path: "/bevolunteer/:id",
        element: <BeVolunteer></BeVolunteer>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/volunteer/${params.id}`),
      },
      {
        path: "/needvolunteer",
        element: <NeedVolunteer></NeedVolunteer>,
        loader: () => fetch('http://localhost:5000/volunteer'),
      },
      {
        path: "/myprofile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/addpost",
        element: <AddVolunteer></AddVolunteer>,
      },
      {
        path: '/updatepost/:id',
        element: <UpdatePost></UpdatePost>,
        loader: ({params}) => fetch(`http://localhost:5000/volunteer/${params.id}`),
      
      },
      {
        path: "/mypost",
        element: <Mypost></Mypost>,
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
