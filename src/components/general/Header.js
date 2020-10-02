import React from "react";
import { NavLink,useLocation } from 'react-router-dom';
import { Icon } from '@fluentui/react/lib/Icon';

function Header() {

    // Gets current location
    const location = useLocation();

    // Gets current path
    const path = location.pathname;

    // Renders header with links if the path is not the same as ./start page (sign in page)
    if(path!=="/startpage"){
        return (
            <nav className="nav">
                <ul id="link-menu">
                    <li><NavLink activeClassName="active-menu-item" className="link" to="/translate"><section className="link-section">Translator<Icon iconName="Rocket" /></section></NavLink> </li>
                    <li><NavLink activeClassName="active-menu-item" className="link" to="/profile"><section className="link-section">Profile<Icon iconName="Globe" /></section></NavLink> </li>
                </ul>      
            </nav>
        );
    }
    // Renders header without links
    else{
        return (
            <nav className="nav">
                <ul id="link-menu">
                </ul>      
            </nav>
        );
    }
}
   
export default Header;