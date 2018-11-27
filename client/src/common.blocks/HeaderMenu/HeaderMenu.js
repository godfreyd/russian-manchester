import React, { Component }  from 'react';
import cx from 'classnames';
import { Menu, Icon, Badge } from 'antd';
import './styles.css';

const SubMenu = Menu.SubMenu;
const className = cx({
    HeaderMenu: true
});

class HeaderMenu extends Component {
    state = {
        current: '',
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
        current: e.key,
        });
    }

render() {
    return (
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" className={className}>
            <SubMenu title={<span className="submenu-title-wrapper"><Icon style={{ fontSize: '16px'}} theme="outlined" type="user" />Мой аккаунт</span>}>
                <Menu.Item key="profile"><Icon type="profile" style={{ fontSize: '16px'}}/>Личные данные</Menu.Item>
                <Menu.Item key="address"><Icon type="environment" style={{ fontSize: '16px'}}/>Мои адреса доставки</Menu.Item>
                <Menu.Item key="settings"><Icon type="setting" style={{ fontSize: '16px'}}/>Настройки</Menu.Item>
                <Menu.Item key="help"><Icon type="question-circle" style={{ fontSize: '16px'}}/>Помощь</Menu.Item>
                <Menu.Item key="exit"><Icon type="logout" style={{ fontSize: '16px'}}/>Выход</Menu.Item>
            </SubMenu>
            <Menu.Item key="orders"><Icon type="bars" style={{ fontSize: '16px'}}/>Мои заказы</Menu.Item>
            <Menu.Item key="saved-items"><Icon type="star" style={{ fontSize: '16px'}}/>Избранное</Menu.Item>
            <Menu.Item key="cart"><Icon type="shopping" style={{ fontSize: '16px'}}/>Корзина<Badge count={4} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} /></Menu.Item>
        </Menu>
    );
    }
}

export default HeaderMenu;

