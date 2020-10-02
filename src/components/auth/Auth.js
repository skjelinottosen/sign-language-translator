import React from 'react';
import { Redirect } from 'react-router-dom';

const withAuth = Component => props =>{

    // Gets username from session storage
      let username = sessionStorage.getItem('user');

    // Checks if user is not set
    if(username == null){
        // Redirects to start page for sign in
        return <Redirect to="/startpage" />
    }
    else{
        // Continues to the requested component
        return <Component {...props} />
    }
}
export default withAuth;
