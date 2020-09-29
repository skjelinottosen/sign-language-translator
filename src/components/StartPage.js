import React from "react";
import Logo from '../images/logo.png'
import { Icon } from '@fluentui/react/lib/Icon';

class StartPage extends React.Component{
    constructor() {
        super();
        this.state = {}
    }

    render(){
        return(
            <main>
                <img id="logo-start-page" alt="Logo" src={Logo}/>
                <h1><span id="h1-span">Sign Language</span>Translator</h1>
              
              
         
              <section id="start-page-section"> 
                <input type="text" placeholder="Enter your name"/>
                <button id="btn-start"type="button">Get started</button>
              </section>
               
            </main>

        
        );
    }

}

export  default StartPage;