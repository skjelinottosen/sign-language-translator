import React from "react";
import ReactDOM from 'react-dom';
import { Link, NavLink } from 'react-router-dom';

import { Icon } from '@fluentui/react/lib/Icon';
import { initializeIcons } from '@uifabric/icons';
initializeIcons();

function Header(props) {
    return (
        <nav className="nav">
            <ul id="link-menu">
                <li><NavLink activeClassName="active-menu-item" className="link" to="/translate"><section className="link-section">Translator<Icon iconName="Rocket" /></section></NavLink> </li>
                <li><NavLink activeClassName="active-menu-item" className="link" to="/profile"><section className="link-section">Profile<Icon iconName="Globe" /></section></NavLink> </li>
            </ul>      
        </nav>
    );
}



export default Header;