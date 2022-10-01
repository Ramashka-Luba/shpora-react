import {BulbOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import React, { useState } from 'react';

const SideMenu = () => {
    const [collapsed, setCollapsed] = useState(false);
    
    return (

        

        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
                {
                    key: '1',
                    icon: <BulbOutlined />,
                    label: <Link to="/" state="!!!!!!">Home</Link>,
                },
                {
                    key: '2',
                    icon: <BulbOutlined />,
                    label: <Link to="/virtualDom" state='??????'>VirtualDom</Link>,
                },
                {
                    key: '4',
                    icon: <BulbOutlined />,
                    label: <Link to="/formAntd" state='////////'>Form Ant-desing</Link>,
                },
                {
                    key: '5',
                    icon: <BulbOutlined />,
                    label: <Link to="/toDo" state='1111111'>ToDo</Link>,
                },
                
            ]}
        />
    );
};

export default SideMenu;
