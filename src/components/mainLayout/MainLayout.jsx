import logo from "../../logo.svg";
import s from "./MainLayout.css";
import { Layout, Menu } from 'antd';
import React from 'react';
import SideMenu from "../sideMenu/SideMenu";
import { Outlet } from "react-router-dom";
import TitleH2 from "../titleH2/TitleH2";
const { Header, Content, Footer, Sider } = Layout;

const MainLayout = ({pathname}) => (
    <Layout hasSider>
        <Sider style={{overflow: 'auto',height: '100vh',position: 'fixed',left: 0,top: 0,bottom: 0,}}>
            
            <div className="logo">
                <img src={logo} className="logo-icon" alt="logo" />
                REACT
            </div>
            
            <SideMenu />

        </Sider>
        <Layout className="site-layout" style={{marginLeft: 200}}>
            
            <Header theme="dark" style={{padding: 0,height: '68px', textAlign: 'center'}}> 
                <TitleH2 titleH2={pathname}/>
            </Header>

            <Content style={{overflow: 'initial', padding: 30, overflow: 'auto'}}>
                <Outlet />
            </Content>
            
            <Footer style={{textAlign: 'center'}}>
                Ant Design ©2018 Created by Ant UED
            </Footer>

        </Layout>
    </Layout>
);

export default MainLayout;

{/* <BorderlessTableOutlined /> */}