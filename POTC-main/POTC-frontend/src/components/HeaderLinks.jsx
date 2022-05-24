import React, { useState } from 'react';
import Login from './Login';
import { Link } from 'react-scroll';
import { Link as NormalLink } from 'react-router-dom';

export default function HeaderLinks(props) {
  console.log(props.data);
  // If the wallet is connected, all values will be set. Use to display the main nav below.
  const contractAvailable = !(
    !props.data.provider &&
    !props.data.accounts &&
    !props.data.contract
  );
  // Grab the connected wallet address, if available, to pass into the Login component
  const walletAddress = props.data.accounts ? props.data.accounts[0] : '';

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
    <></>
  ) : (
    <div className='header-links'>
      <ul>
        <li className='home-button'>
          <NormalLink to='/'>HOME</NormalLink>
        </li>
        <li>
          <Link to='roadmap' smooth={true}>
            ROADMAP
          </Link>
        </li>
        <li>
          <Link to='team' smooth={true}>
            TEAM
          </Link>
        </li>
        <li>
          <Link to='faq' smooth={true}>
            FAQ
          </Link>
        </li>
        <li>
          <NormalLink to='/mint'>MINT</NormalLink>
        </li>
        <li>
          <Login
            callback={props.callback}
            connected={contractAvailable}
            address={walletAddress}
          ></Login>
        </li>
      </ul>
    </div>
  );
}
