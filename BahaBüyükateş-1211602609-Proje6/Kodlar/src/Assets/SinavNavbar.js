import React, { useEffect } from 'react';
import { Breadcrumb, Layout, Menu, theme ,Space} from 'antd';
import { Button, Chec } from 'antd';
import { useState } from 'react';
import { Input } from "antd";

import "./Modal.css";
import MainPage from './MainPage';
import DersListThing from './DersListThing';
const { Header, Content, Footer } = Layout;






function SinavNavbar(props){

    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();

      const [bool,setBool]=useState(false);


      //Pop up muabbeti





     
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
                 " "
            </Space>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ flex: 1, minWidth: 0 }}
           >
        <Space>
        <Button type="primary">
            Soru 1
        </Button>
        <Button type="primary" >
            Soru 2
        </Button>
        <Button type="primary">
            Soru 3
        </Button>
        <Button type="primary" >
            Soru 4
        </Button>
        <Button  type="primary" >
            Soru 5
        </Button>
        <Button  type="primary" >
            Soru 6
        </Button>
        </Space>
           </Menu>
          </Header>
          
        </Layout>
     
        
        </>
      );
}

export default SinavNavbar;
