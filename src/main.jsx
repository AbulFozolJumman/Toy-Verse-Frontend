import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import Main from './Main/Main.jsx';
import Blogs from './Blogs/Blogs';
import AllToys from './Toys/AllToys/AllToys';
import MyToys from './Toys/MyToys/MyToys';
import AddToy from './Toys/AddToy/AddToy';
import Login from './Login&Register/Login';
import Register from './Login&Register/Register';
import AuthProvider from './Provider/AuthProvider';

// Routers
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: ()=> fetch('https://toy-verse-server.vercel.app/toys')
      },
      {
        path: "/myToys",
        element: <MyToys></MyToys>
      },
      {
        path: "/addToy",
        element: <AddToy></AddToy>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
