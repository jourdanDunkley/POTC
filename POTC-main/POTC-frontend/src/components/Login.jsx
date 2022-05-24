import React from 'react';
import { ethers } from 'ethers';
import PotcABI from '../artifacts/POTC.json';

export default function Login(props) {
  const contractAddress = '0xcBCB58236E5A2c1B15B7861f400Ea848E7D544D8';

  const DoConnect = async () => {
    console.log('Connecting....');
    try {
      // Get network provider and web3 instance.
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // Request account access if needed
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      // Use web3 to get the user's accounts.
      const accounts = await provider.listAccounts();
      // Get an instance of the contract sop we can call our contract functions
      const contract = await new ethers.Contract(
        contractAddress,
        PotcABI.abi,
        provider.getSigner()
      );
      props.callback({ provider, accounts, contract });
      console.log(provider, accounts, contract);
    } catch (error) {
      // Catch any errors for any of the above operations.
      console.error('Could not connect to wallet.', error);
    }
  };

  // If not connected, display the connect button.
  if (!props.connected)
    return (
      <button className='login' onClick={DoConnect}>
        Connect Wallet
      </button>
    );

  // Display the wallet address. Truncate it to save space.
  return <>[{props.address.slice(0, 6)}]</>;
}
