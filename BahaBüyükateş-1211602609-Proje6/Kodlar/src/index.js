import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SigninPage from './Assets/SigninPage';
import Vertification from './Assets/Vertification';
import LoginPage from './Assets/LoginPage';
import MainPage from './Assets/MainPage';
import DersSistemi from './Assets/DersSistemi';
import Sinav from './Assets/Sinav';
import SinavDeneme from './Assets/SinavDeneme';
import Navbar from './Assets/Navbar';
import Deneme from './Assets/Deneme';
import NewMainPage from './Assets/newMainPage';
import ExclusiveMainPage from './Assets/ExclusiceMainPage';




const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  
  [
    
  {
    path: "/",
    element: <App></App>,
  },

  {
    path: "dersSistemi",
    element: <DersSistemi></DersSistemi>
  },
  {
    path: "sinavSistemi",
    element: <Sinav></Sinav>
  },
  {
    path: "mainPage",
    element: <MainPage></MainPage>
  },
  {
    path: "signin",
    element:< SigninPage/>,
  },
  {
    path:"newMainPage",
    element:<ExclusiveMainPage></ExclusiveMainPage>
  },
  {
    path: "vertification",
    element: <Vertification></Vertification>,
  }
]);



root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
