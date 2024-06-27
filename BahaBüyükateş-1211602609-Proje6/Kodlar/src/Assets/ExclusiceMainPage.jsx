
import Navbar from "./Navbar";

import React, { useState,useEffect } from 'react';
import DersListThing from "./DersListThing";
import MenuThing from "./MenuThing";
import LoginPage from "./LoginPage";

import { Breadcrumb, Layout, Menu, theme ,Space} from 'antd';
import { Button } from 'antd';

import { Input } from "antd";
import Sinav from "./Sinav";
import {v4 as uuidv4} from 'uuid';
import "./Modal.css";
import MainPage from "./MainPage";
import SigninPage from './SigninPage';


function ExclusiveMainPage(props){





  const [mailName, setMailName] = useState();
  const [succesLogin,setSuccesLogin]=useState(false);
  const [signinBool,setSigninBool]=useState(false);
  const [vertThing,setVertThing]=useState(false);
  const [newUser,setnewUser]=useState();
  const [newUserName,setnewUserName]=useState();
  const [newUserPass,setnewUserPass]=useState();
  const [newUserBool,setnewUserBool]=useState();


  
return(
  
 <div>

{
    !succesLogin&&!signinBool &&(  <LoginPage succesLogin={(veri)=>{setSuccesLogin(veri)}} mail={(veri)=>{setMailName(veri)}} signinBool={(veri)=>{setSigninBool(veri)}} newUsersList={newUser} />)
   
  }
  {
    succesLogin&&(  <MainPage mailName={mailName}></MainPage>)
  }
  {signinBool&&

    (
      <SigninPage mailName={(veri)=>{setnewUserName(veri)}} passName={(veri)=>{setnewUserPass(veri)}} submitBool={(veri)=>{setSigninBool(!veri)}} updatedRegisterList={(veri)=>{setnewUser(veri)}} vertSubmit={(veri)=>{setVertThing(veri)}}>
           
      </SigninPage>
    )
    
  }


  </div>
)

}
export default ExclusiveMainPage;