import React, { useEffect } from 'react';
import { Breadcrumb, Layout, Menu, theme ,Space,Grid,Col,Row,Divider} from 'antd';
import { Button } from 'antd';
import { useState } from 'react';
import { Input } from "antd";

import "./Modal.css";
import MainPage from './MainPage';
import DersListThing from './DersListThing';
const { Header, Content, Footer } = Layout;



const lessonListThing=[{
  id:0,
  kod:"blm134"
},
{
  id:1,
  kod:"blm179"
},
{
  id:2,
  kod:"blm341"
},
]


function Navbar(props){
  const[lessonList,setLessonList]=useState(lessonListThing);
  const nullThing=()=>{
    return(
console.log("deneme")
    )
  }

    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();

      const [modal,setModal]=useState(false);
      
      const[ders,setDers]=useState();
      const[bool,setBool]=useState(false);
      
      useEffect(()=>{
        props.ders(ders)
    },[ders])
    useEffect(()=>{
      props.bool(bool)
  },[bool])

      //Pop up muabbeti

      const toggleModal=()=>{
        setModal(!modal);
      }
      const setDersThing=event=>{
        setDers(event.target.value);
      }
      const dersCheckThing=()=>{
        {    lessonList.map((lessonList,index)=>(
        
          <div key={index}>
            
            {lessonList.kod==ders&&(DersEkle())}
            
          </div>
         ))
  }
       
    
      }
      const DersEkle=()=>{

        setBool(true);
        setModal(!modal);
       
      }


     
      return (
     <>

        <Layout>
          <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div className="demo-logo" />
            <Menu
            theme="dark"
            mode="horizontal">

            </Menu>
            <Space>
               
            </Space>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ flex: 1, minWidth: 0 }}
           >
            <Divider orientation='left'>

           
            <Row>
            <Space direction="horizontal" size={1600}>
            <Col>
        

       
        <Button onClick={toggleModal}>
            Ders Ekle
        </Button>
        </Col>
           
           <Col>
            <Button href="newMainPage">Logout</Button>
           </Col>
   
        </Space>
        </Row>
        </Divider>
           </Menu>
          </Header>
         
        </Layout>
        {modal &&(
            <div className='modal'>
            <div className='overlay'>
                <div className='modal-content'>
                    <h2>Ders Ekle</h2>
                    <Space direction='horizontal'>
                    <Input maxLength={6} placeholder='dersKodu' showCount onChange={setDersThing} onPressEnter={setDersThing}></Input>
                    <Button type='primary' onClick={dersCheckThing}>Ekle</Button>
                    </Space>
                    
                </div>
                <Button className='close-modal' onClick={toggleModal}>
                    Kapat
                </Button>

            </div>
        </div>
        )}
        
        </>
      );
}

export default Navbar;
