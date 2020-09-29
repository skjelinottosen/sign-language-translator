import React from "react";
import { Link, NavLink } from 'react-router-dom';

class ProfilePage extends React.Component{
    constructor() {
        super();
        this.state = {
            user:""
        }
    }
    render(){
        return(
            <main>
               <h1>Profile page</h1>     
            </main>      
        );
    }
}

export default ProfilePage;