import React, { Component }  from 'react';
import './Logo.css';
import logo from './Logo.svg';

class Logo extends Component {
    render() {
        return (
            <img src={logo} className="Logo" alt="logo" />
        );
    }
}

export default Logo;
