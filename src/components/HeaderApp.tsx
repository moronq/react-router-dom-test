import React from 'react';
import {Col, Menu, Row} from "antd";
import {Header} from "antd/es/layout/layout";
import CustomLink from "./CustomLink";

const HeaderApp = () => {

    const items = [
        {label: <CustomLink to={'/'} children={'Home'}/>, key: 'home', },
        {label: <CustomLink to={'/blog'} children={'Blog'}/>, key: 'blog', },
        {label: <CustomLink to={'/about'} children={'About'}/>, key: 'about', },
    ]

    return (
        <div>
            <Header>
                <Row>
                    <Col span={4} offset={10}>
                        <Menu theme="dark"
                              mode="horizontal"
                              defaultSelectedKeys={['2']}
                              items = {items}/>
                    </Col>
                </Row>
            </Header>
        </div>
    );
};

export default HeaderApp;