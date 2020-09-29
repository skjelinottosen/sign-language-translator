import React from "react";
import ReactDOM from 'react-dom';
import { Link, NavLink } from 'react-router-dom';

import { Icon } from '@fluentui/react/lib/Icon';
import { initializeIcons } from '@uifabric/icons';
initializeIcons();

function Header() {
    return (
        <nav className="nav">
            <ul>
                <li><NavLink activeClassName="active-menu-item" className="link-menu" to="/"><section>Profile<Icon iconName="World" /></section></NavLink> </li>
            </ul>      
        </nav>
    )
}



export default Header;