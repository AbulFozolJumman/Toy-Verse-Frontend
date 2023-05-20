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
import ErrorPage from './Error/Error';
import ShowError from './Error/ShowError';
import PrivateRoute from './PrivateRoute/PrivateRoute';

// Routers
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
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
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: "/addToy",
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path: "/error",
        element: <ShowError></ShowError>
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
