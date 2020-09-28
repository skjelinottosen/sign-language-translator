import React from "react";
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav className="nav">
            <h1>Header</h1>
            {/*<NavLink activeClassName="active-menu-item" className="link-menu" to="/active-booking"><Icon iconName="DateTime2" />Active Booking</NavLink> */}
        </nav>
    )
}

export default Header;