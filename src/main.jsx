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
