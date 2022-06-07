import React from 'react';
import {Menu} from "antd";
import {Link} from "react-router-dom";
import {Header} from "antd/es/layout/layout";

const HeaderApp = () => {
    return (
        <div>
            <Header>
                <div className="logo"/>
                <Menu theme="dark"
                      mode="horizontal"
                      defaultSelectedKeys={['2']}>
                    <Menu.Item>
                        <Link to={'/'}>
                            Home
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={'/blog'}>
                            Blog
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={'/about'}>
                            About
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>
        </div>
    );
};

export default HeaderApp;