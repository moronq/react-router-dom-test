import React from 'react';
import {Layout} from "antd";
import {Outlet} from "react-router-dom";
import {Content} from "antd/es/layout/layout";
import HeaderApp from "./HeaderApp";

const LayoutRouter = () => {

    return (
        <Layout className="layout">
            <HeaderApp/>
            <Content style={{padding: '0 50px'}}>
                <div className="site-layout-content">
                    <Outlet/>
                </div>
            </Content>
        </Layout>
    );
};

export default LayoutRouter;