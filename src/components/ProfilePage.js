import React from "react";
import { Icon } from '@fluentui/react/lib/Icon';
import { Link, NavLink } from 'react-router-dom';

class ProfilePage extends React.Component{
    constructor() {
        super();
        this.state = {
            user:"",
            translationHistory:[]
        }
        /*Binding methods*/
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {

        // Gets username from session storage
        let username = sessionStorage.getItem('user');
        this.setState({user: username});

        // Gets tranlation history form session storage
        let history = sessionStorage.getItem('translationHistory');      
        // Checks if history is null
        if(history != null){
            let historyArray = history.split(',');
            this.setState({ translationHistory: historyArray });
        }     
    }
    handleClick(){
        sessionStorage.clear();
    }
    render(){
        return(
            <main>
               <h1 id="history-h1">Profile </h1> 
               <h2 id="history-h2">User {this.state.user}</h2>
               <NavLink activeClassName="active-menu-item" className="link-button" to="/"><button  id="btn-logout" type="button" value="Submit" onClick={this.handleClick}>Logout</button></NavLink>         
               <h3 id="history-h3">Last translated words:</h3>  
               <ul id="history-list">
                {this.state.translationHistory.map((element, index) => {
                    return <li className="history-list-element" key={index} value={element.id}>{element}</li>
                })}
                </ul>  

            </main>      
        );
    }
}

export default ProfilePage;