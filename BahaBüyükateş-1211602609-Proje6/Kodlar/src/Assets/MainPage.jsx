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


const { Header, Content, Footer } = Layout;

function MainPage(props){



  const [modal,setModal]=useState(false);
  
  const[ders,setDers]=useState();
  const[bool,setBool]=useState(false);
  const[username,setUserName]=useState("none");
  const [data,setData]=useState([]);

  //Pop up muabbeti

  const toggleModal=()=>{
    setModal(!modal);
  }
  const setDersThing=event=>{
    setDers(event.target.value);
  }
  const dersCheckThing=()=>{
    ders=="blm134" ? DersEkle():alert("Doğru ders Kodu giriniz");

  }
  const DersEkle=()=>{

    setBool(true);
    setModal(!modal);
   
  }

  useEffect(() => {
    const getData = () => {
        fetch('https://v1.nocodeapi.com/baaa/google_sheets/GBrFsrsBPKJiKpQz?tabId') // tabId'yi düzeltelim
            .then(response => response.json())
            .then(data => {
                console.log(data); // Dönen veriyi kontrol edelim
                setData(data.data || []); // Verinin doğru formatta olduğundan emin olalım
            })
            .catch(error => console.log(error))
    }
    getData();
}, [])
console.log(data)



  //////////

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [upData, setUpData] = useState();
  const [boolData, setboolData] = useState();
  const [boolSinav, setboolThing] = useState();
  const [boolfinishSinav, setboolThingFinish] = useState();
  const [dersNotu, setDersData] = useState();
  const [mailName, setMailName] = useState();
  const [succesLogin,setSuccesLogin]=useState(false);

  
return(
  
 <div>

  <Navbar ders={(veri)=>{setUpData(veri)}} bool={(veri)=>{setboolData(veri)}}>

  </Navbar>
  {boolSinav &&(
                   <div className='modal'>
                   <div className='overlay'>
                       <div className='modal-content'>
                           <Sinav sinavBool={(veri)=>{setboolThing(veri) }} sinavFinishThing={(veri)=>{setboolThingFinish(veri)}} dersNotuData={(veri)=>{setDersData(veri) }}></Sinav>
                           
                       </div>

       
                   </div>
               </div>
        )}
 
  <MenuThing profileName={props.mailName} dersName={upData} girilenSinav={boolfinishSinav} dersNotu={dersNotu}></MenuThing>
  <DersListThing ders={upData} bool={boolData} sinavBool={(veri)=>{setboolThing(veri)}}></DersListThing>
  

  </div>
)

}
export default MainPage;