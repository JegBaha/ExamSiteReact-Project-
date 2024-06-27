
import React from 'react';
import { Button } from 'antd';
import { ConfigProvider } from 'antd';
import { Input } from "antd";
import { useState, useEffect} from 'react';

import { Card, Space,Alert } from 'antd';
import { Steps } from 'antd';
import "./Modal.css";

import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import Vertification from './Vertification';


let nextId=2;
function SigninPage(props){
  const newregisterList=[{
    id:1,
    name:"lambGod@gmail.com",
    pass:"denemeler212322"
  
  
  },
  {
    id:2,
    name:"asasa@gmail.com",
    pass:"deneme212322"
  
  
  },]

    const [pass,setPass]=useState("pass");
    const [name,setName]=useState("name");
    const [mail,setEmail]=useState("mail");
    const [stat,setStatus]=useState();
    const [nextstat,setnextStatus]=useState();
    const [data,setData]=useState([]);
    const [newData,setNewData]=useState([[]]);
    const [submitThing,setSubmitThing]=useState(false);
    const [newUser,setnewUser]=useState(newregisterList);
    const [vertificationPage,setvertificationPage]=useState(false);
    const [submitVertPage,setSubmitVertPage]=useState(false);

    const newUserThing=()=>{
   
      const insertAt=2;
     const newUserList=[
      ...newregisterList.slice(0,insertAt),
      
      {
        id:nextId++,
        name: mail,
        pass: pass
      },
    ...newregisterList.slice(insertAt)
    ]
    setnewUser(newUserList)

     }
  


    useEffect(()=>{
      props.mailName(mail)
  },[mail])
  useEffect(()=>{
    props.submitBool(submitThing)
},[submitThing])
  useEffect(()=>{
    props.vertSubmit(submitVertPage)
},[submitVertPage])
  

  useEffect(()=>{
    props.passName(pass)
},[pass])
useEffect(()=>{
  props.updatedRegisterList(newUser)
},[newUser])

    useEffect(() => {
      const getData = () => {
          fetch('https://sheets.googleapis.com/v4/spreadsheets/{1Ctjs2t8hgq0r0I6Lvqzb9QJgUC3gzDvnIaG8d6xdYhQ}/values/{ProjeDeneme}:append?valueInputOption=USER_ENTERED&access_token={93281871777-5sepuanpkpc4i5h3lhmbtkr2vmd98m85.apps.googleusercontent.com}', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer {93281871777-5sepuanpkpc4i5h3lhmbtkr2vmd98m85.apps.googleusercontent.com}`
            },
            
            body: JSON.stringify(newData)
        }) 
              .then(response => response.json())
              .then(data => {
                  console.log(data); 
                  setData(data.data || []); 
              })
              .catch(error => console.log(error))
      }
      getData();
  }, [])
    
    const click=()=>{
        
      
       setStatus('finish');
       setnextStatus('process');
       setSubmitThing(true);
       setNewData([
        {
            "Email": mail,
            "Şifreler": pass
        }
        
    ]);
    newUserThing()
    setvertificationPage(true);
    alert("Email vertification sent");
      
    }
    
    const changePass=event=>{
        setPass(event.target.value);
    }
    const changeName=event=>{
        setName(event.target.value);
    }
    const changeEmail=event=>{
        setEmail(event.target.value);
    }


    
        return(
    <div className='App'> 
     

  <Steps
    items={[
      {
        title: 'Register',
        status: stat,
        icon: <LoadingOutlined />,
      },
      {
        title: 'Vertification',
        status: nextstat,
        icon: <SolutionOutlined />,
      },
      {
        title: 'Done',
        status: 'wait',
        icon: <SmileOutlined />,
      },
    ]}
  />


    
           <Space direction='vertical' className='App'>
    
            <p>Kayit Ekrani</p>
            <Input placeholder="Name@gmail.com" onChange={changeEmail} onPressEnter={changeEmail}  />
            <Input placeholder="Name" onChange={changeName} onPressEnter={changeName}  />
            <Input.Password placeholder="Password" visibilityToggle={{}} onChange={changePass} size="small" maxLength={10} showCount={true} onPressEnter={changePass}/>
    
            <Button type="primary" onClick={click} href='vertification'>Submit</Button>
            
            </Space>
            {newUser.map((list,index)=>(
        
        <div key={index}>
          
           "ders kod"{list.name}, "ders not" {list.pass}
        </div>
       ))}
    
    
              </div>
        )
    


    }
    export default SigninPage;