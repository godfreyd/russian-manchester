import React from 'react';
import cx from 'classnames';
import { Row, Col, Input } from 'antd';
import './styles.css';
import HeaderMenu from '../HeaderMenu/HeaderMenu.js';
import Logo from '../Logo/Logo.js';


const Search = Input.Search;
const className = cx({
    Header: true
});

export default function Header(props) {
    return (
        <header {...props} id="header" className={className}>
            <Row type="flex" align="middle">
                <Col span={4}><Logo/></Col>
                <Col span={8}><Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 450 }}
                    size="large" />
                </Col>
                <Col span={12}>
                <HeaderMenu/>
                </Col>
            </Row>
        </header>
    );
}
