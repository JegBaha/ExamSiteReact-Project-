import { Button } from 'antd';
import { ConfigProvider } from 'antd';
import { Input } from "antd";
import { useState, useEffect} from 'react';
import { Flex, Layout } from 'antd';
import { Card, Space } from 'antd';
import React from 'react';
import { Pagination } from 'antd';
import axios from 'axios';
import { Routes, Route, BrowserRouter} from 'react-router-dom';




import {
    HomeOutlined,
    LoadingOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
  } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import MainPage from './MainPage';


function LoginPage(props){
const [pass,setPass]=useState("pass");
const [name,setName]=useState("name");
const [data,setData]=useState([]);
const [successfulLogin,setSucceslog]=useState(false);
const [signinBool,setSignİnBool]=useState(false);



var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
useEffect(() => {
    const getData = () => {
        fetch('https://v1.nocodeapi.com/baaaa/google_sheets/PnczByHHAdtddroL?tabId') // tabId'yi düzeltelim
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
useEffect(()=>{
    props.mail(name)
},[name])
useEffect(()=>{
    props.succesLogin(successfulLogin)
},[successfulLogin])
useEffect(()=>{
    props.signinBool(signinBool)
},[signinBool])

const click=()=>{

    data.map((item,index)=>(
        
        <div key={index}>
           {item.Email==name &&item.Şifreler==pass &&setSucceslog(true)}
        </div>
       ))


}
const signinBoolThing=()=>{
    setSignİnBool(true);
}

const changePass=event=>{
    setPass(event.target.value);
}
const changeName=event=>{
    setName(event.target.value);
    
}
    return(
  
        <div className='App'> 


    
       <Space direction='vertical' className='App'>

        <p>Giriş Ekranı</p>
        <Input placeholder="Name" onChange={changeName} onPressEnter={changeName}  />
        <Input.Password placeholder="Password" visibilityToggle={{}} onChange={changePass} size="small" maxLength={10} showCount={true} onPressEnter={changePass}/>
        {
            !successfulLogin&&( <Button type="dashed" onClick={click}>Login</Button>)
        }
        {
            successfulLogin&&(
            
            
            
            <div>
            <Button type="primary" href='mainPage'>Login</Button>
         

            </div>
        )
        }
    
       
        <Button type="link" onClick={signinBoolThing}>Sign in</Button>
        </Space>

        
          </div>
  
    )
}

export default LoginPage;