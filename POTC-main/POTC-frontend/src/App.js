import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-scroll';
import './App.css';

import Home from './pages/Home';
import Mint from './pages/Mint';
import HeaderLinks from './components/HeaderLinks';
import SideBar from './components/BurgerMenu';
import SocialMediaHeader from './components/SocialMediaHeader';

function App() {
  const [web3props, setWeb3Props] = useState({
    provider: null,
    accounts: null,
    contract: null,
  });

  useEffect(
    () => console.log('re-render because x changed:', web3props),
    [web3props]
  );

  // Callback function for the Login component to give us access to the web3 instance & accounts.
  const OnLogin = function (param) {
    console.log('New values set');
    let { provider, accounts, contract } = param;
    if (provider && accounts && accounts.length && contract) {
      setWeb3Props({ provider, accounts, contract });
    }
  };

  return (
    <div className='App'>
      <Router>
        <header>
          <SideBar right pageWrapId={'page-wrap'} outerContainerId={'App'} />
          <Link to='home' className='left-header' smooth={true}>
            <img id='logo' src='./logopotc.png'></img>
          </Link>
          <HeaderLinks data={web3props} callback={OnLogin}></HeaderLinks>
          <SocialMediaHeader></SocialMediaHeader>
        </header>
        <div className='content'>
          <Switch>
            <Route path='/mint'>
              <Mint web3props={web3props} />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
