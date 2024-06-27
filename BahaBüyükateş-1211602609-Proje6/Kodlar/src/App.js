import logo from './logo.svg';
import './App.css';

import LoginPage from './Assets/LoginPage';
import { Button } from 'antd';

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router,Route, BrowserRouter, Routes, Link} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import {

  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SigninPage from './Assets/SigninPage';
import Vertification from './Assets/Vertification';

import MainPage from './Assets/MainPage';
import DersSistemi from './Assets/DersSistemi';
import Sinav from './Assets/Sinav';
import SinavDeneme from './Assets/SinavDeneme';
import Navbar from './Assets/Navbar';
import ExclusiveMainPage from './Assets/ExclusiceMainPage';

function App() {
  const[data,setUpData]=useState();
  const[login,succesLogin]=useState();
  return (
    <div className='App-mainThing'>

<ExclusiveMainPage></ExclusiveMainPage>

    </div>
      
  );
}


export default App;
