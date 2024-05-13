import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Parent from './Pages/Parent';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';
import Home from './Pages/Home';
import NeedVolunteer from './Pages/NeedVolunteer';
import MyProfile from './Pages/MyProfile';
import Register from './Pages/Register';
import Login from './Pages/Login';
import AddVolunteer from './Pages/AddVolunteer';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Parent></Parent>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/needvolunteer',
        element: <NeedVolunteer></NeedVolunteer>,
      },
      {
        path: '/myprofile',
        element: <MyProfile></MyProfile>,
      },
      {
        path: '/addpost',
        element: <AddVolunteer></AddVolunteer>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>,
)
