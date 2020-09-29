import React from "react";
import Logo from '../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';

class StartPage extends React.Component{
    constructor() {
        super();
        this.state = {
            user:""
        }

         /*Binding methods*/
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    // Input name from user
    handleChange(e) {
        this.setState({ user: e.target.value });
    }
    
    // Stores username in session storage on click
    handleClick() {
         sessionStorage.setItem('user', this.state.user);
    }

    render(){
        return(
            <main>
                <img id="logo-start-page" alt="Logo" src={Logo}/>
                <h1><span id="h1-span">Sign Language</span>Translator</h1>
                <section id="start-page-section"> 
                <input type="text" placeholder="Enter your name"  onChange={ this.handleChange }/>
                <NavLink activeClassName="active-menu-item" className="link-button" to="/translate"><button id="btn-start"type="button" value="Submit" onClick={this.handleClick}>Get started</button></NavLink>
                 </section>          
            </main>      
        );
    }
}

export default StartPage;