
import { Alert, Steps } from 'antd';


import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';

import { Input } from "antd";
import { useState } from 'react';
import { Button } from 'antd';
import { Card, Space } from 'antd';

function Vertification(props){
    const [stat,setStatus]=useState("process");
    const [nextstat,setnextStatus]=useState("wait");
    const[vertsubmitThing,setvertSubmitThing]=useState(false);
    
    
    const click=()=>{
        
      
        alert("You succesfully registered.")
        setStatus("finished")
        setnextStatus("finished");
        setvertSubmitThing(true);
        
    }
    

    
        return(
            <div className='App'> 
    
    <Steps
    items={[
      {
        title: 'Register',
        status: "finish",
        icon: <UserOutlined />,
      },
      {
        title: 'Vertification',
        status: stat,
        icon: <LoadingOutlined />,
      },
      {
        title: 'Done',
        status: nextstat,
        icon: <SmileOutlined />,
      },
    ]}
  />
    
           <Space direction='vertical' className='App'>
    
            <p>Onay Kodu</p>
            <Input.OTP  />
            <Button type="primary" onClick={click} href='newMainPage'>Submit</Button>
            </Space>
    
              </div>
        )
    }
    export default Vertification;