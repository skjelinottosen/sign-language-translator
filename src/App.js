import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Header from './components/general/Header';
import Footer from './components/general/Footer';
import StartPage from './components/StartPage';
import TranslatePage from './components/TranslatePage';
import ProfilePage from './components/ProfilePage';

import './css/main.css';

function App() {
  return (
    <Router>
      {/*<Route exact path='/account' component={Menu} />*/} 
      <div id="mastergrid">
        <Header />
        <Route exact path='/' component={StartPage}/>
        <Route exact path='/translate' component={TranslatePage}/>
        <Route exact path='/profile' component={ProfilePage}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
