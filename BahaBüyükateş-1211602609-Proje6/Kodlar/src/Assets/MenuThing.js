import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme ,Space, Button} from 'antd';
import {v4 as uuidv4} from 'uuid';

const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

let nextId=1;
const lessonList=[{
  id:1,
  kod:"blm165",
  not:"5",


},{
  id:2,
  kod:"blm155",
  not:"78",
}]


function MenuThing(props){

  const[lesson,setLesson]=useState(lessonList);
  const[dersisim,setDersisim]=useState(props.dersName);
  
   const newDers=(kod,not)=>{
    const insertAt=2;
   const newLesson=[
    ...lesson.slice(0,insertAt),
    
    {
      id:nextId++,
      kod:props.dersName, 
      not:props.dersNotu
    },
  ...lesson.slice(insertAt)
  ]
  setLesson(newLesson)
  setDersisim("");
   }
  const items2 = [UserOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `${props.profileName}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  });

    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    return(
        <Layout>
   
        <Layout>
          <Sider
            width={200}
            
            style={{
              background: colorBgContainer,
            }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
                borderRight: 0,
              }}
              items={items2}
            />
          </Sider>
        
          <Layout
            style={{
              padding: '0 24px 24px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item> </Breadcrumb.Item>
              <Breadcrumb.Item>Girilen Dersler</Breadcrumb.Item>
              <Breadcrumb.Item> </Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Space direction='vertical'>
              {    lesson.map((lesson,index)=>(
        
        <div key={index}>
          
           "ders kod"{lesson.kod}, "ders not" {lesson.not}
        </div>
       ))
}
              {props.girilenSinav&&(
                <Space direction='vertical'>

                  {/*
                  Ders Kodu: "{props.dersName}" Notu:{props.dersNotu}*/
                  }
 

                     
              </Space>)}
              <Space>
            
            <Button onClick={newDers}>  Yenile</Button>
            </Space>
            </Space>
           
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
    
}
export default MenuThing;