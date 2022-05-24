import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-scroll';
import Login from './Login';

export default props => {
  const [web3props, setWeb3Props] = useState({
    web3: null,
    accounts: null,
    contract: null,
  });
  // Callback function for the Login component to give us access to the web3 instance & accounts.
  const OnLogin = function (param) {
    let { web3, accounts } = param;
    if (web3 && accounts && accounts.length) {
      setWeb3Props({ web3, accounts });
    }
  };

  // If the wallet is connected, all values will be set. Use to display the main nav below.
  const contractAvailable = !(!web3props.web3 && !web3props.accounts);
  // Grab the connected wallet address, if available, to pass into the Login component
  const walletAddress = web3props.accounts ? web3props.accounts[0] : '';
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 850;

  React.useEffect(() => {
    /* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
    window.addEventListener('resize', () => setWidth(window.innerWidth));

    /* passing an empty array as the dependencies of the effect will cause this
       effect to only run when the component mounts, and not each time it updates.
       We only want the listener to be added once */
  }, []);

  return width < breakpoint ? (
    <Menu className='ABC' {...props}>
      <Link className='menu-item' to='home' smooth={true}>
        HOME
      </Link>

      <Link className='menu-item' to='roadmap' smooth={true}>
        ROADMAP
      </Link>

      <Link className='menu-item' to='team' smooth={true}>
        TEAM
      </Link>

      <Link className='menu-item' to='faq' smooth={true}>
        FAQ
      </Link>
      <Link className='menu-item' to='home' smooth={true}>
        MINT
      </Link>
      <Login
        callback={OnLogin}
        connected={contractAvailable}
        address={walletAddress}
      ></Login>
      <div className='social-media-header-burger'>
        <a href='https://twitter.com/parrotscaribnft'>
          <img src='/twitter.svg' alt='' />
        </a>
        <a href='https://discord.gg/parrotsofthecaribbean'>
          <img src='/Discord.svg' alt='' />
        </a>
        <a href=''>
          <img src='/opensea.svg' alt='' />
        </a>
      </div>
    </Menu>
  ) : (
    <></>
  );
};
