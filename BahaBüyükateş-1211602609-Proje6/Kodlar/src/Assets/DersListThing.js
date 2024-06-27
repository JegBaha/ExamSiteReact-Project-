import Navbar from "./Navbar";
import { Breadcrumb, Layout, Menu, theme ,Space, Button} from 'antd';

import React, { useState ,useEffect} from 'react';

const { Header, Content, Footer } = Layout;

function DersListThing(props){
 
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    const[boolthing,SetBool]=useState(false);
    useEffect(()=>{
      props.sinavBool(boolthing)
  },[boolthing])


    const sinavGirisThing=()=>{
      SetBool(true);
    }
    return(
        <Layout>
  <Content style={{ padding: '0 48px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item> </Breadcrumb.Item>
              <Breadcrumb.Item>Sınavlar</Breadcrumb.Item>
              <Breadcrumb.Item> </Breadcrumb.Item>
            </Breadcrumb>
          
            <div
              style={{
                background: colorBgContainer,
                minHeight: 280,
                padding: 24,
                borderRadius: borderRadiusLG,
              }}
            >
                
              {props.bool&& 
              (
              <div>
                <Space direction="horizontal" size="large">
                {props.ders}
                
                <Button type="primary" onClick={sinavGirisThing}>Sınava Gir</Button>
                </Space>
                </div>
                
              )}
            </div>

          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Date:{new Date().getDate()} Created by baa
          </Footer>
          </Layout>
    )
}
export default DersListThing;