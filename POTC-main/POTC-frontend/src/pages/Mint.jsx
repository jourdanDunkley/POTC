import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { verifyMerkleProof } from '../scripts/merkleGenerator';

export default function Mint(props) {
  const [currentSupply, setCurrentSupply] = useState(0);
  const [allowedMint, setAllowedMint] = useState(false);
  const [jamSaleActive, setjamSaleActive] = useState(false);
  const [publicSaleActive, setPublicSaleActive] = useState(false);
  const [jamClaimed, setJamClaimed] = useState(false);
  const [publicClaimed, setPublicClaimed] = useState(false);
  const [proof, setProof] = useState({});

  useEffect(async () => {
    console.log('JAMLIST ACTIVE: ' + jamSaleActive);
    console.log('PUBLIC SALE ACTIVE: ' + publicSaleActive);
    console.log('ALLOWED TO MINT: ' + allowedMint);
  }, [allowedMint, publicSaleActive, jamSaleActive, currentSupply]);

  useEffect(async () => {
    if (props.web3props.contract) {
      const currentSupply = await props.web3props.contract.totalSupply();
      setCurrentSupply(ethers.BigNumber.from(currentSupply).toNumber());

      const jamSaleActive = await props.web3props.contract.jamSaleActive();

      const publicSaleActive =
        await props.web3props.contract.publicSaleActive();

      const calculateProof = await verifyMerkleProof(
        props.web3props.accounts[0]
      );

      const jamClaimed = await props.web3props.contract.whitelistClaimed(
        props.web3props.accounts[0]
      );
      const publicClaimed = await props.web3props.contract.publicClaimed(
        props.web3props.accounts[0]
      );
      setJamClaimed(jamClaimed);
      setPublicClaimed(publicClaimed);

      setjamSaleActive(jamSaleActive);
      setProof(calculateProof);
      setAllowedMint(calculateProof.allowedMint);
      setPublicSaleActive(publicSaleActive);
    }
  }, [props]);

  const jamlistMint = async () => {
    console.log(proof.proof);
    const result = await props.web3props.contract.jamListMint(proof.proof, {
      value: ethers.utils.parseUnits('0.1', 'ether'),
    });
    console.log(result);
  };

  const publicMint = async () => {
    await props.web3props.contract.publicMint({
      value: ethers.utils.parseUnits('0.1', 'ether'),
    });
  };

  setInterval(async () => {
    if (props.web3props.contract) {
      const jamSaleActive = await props.web3props.contract.jamSaleActive();
      const publicSaleActive =
        await props.web3props.contract.publicSaleActive();
      const currentSupply = await props.web3props.contract.totalSupply();

      if (!jamClaimed) {
        const jamClaimed = await props.web3props.contract.whitelistClaimed(
          props.web3props.accounts[0]
        );
        setJamClaimed(jamClaimed);
      }

      if (!publicClaimed) {
        const publicClaimed = await props.web3props.contract.publicClaimed(
          props.web3props.accounts[0]
        );
        setPublicClaimed(publicClaimed);
      }

      setjamSaleActive(jamSaleActive);
      setPublicSaleActive(publicSaleActive);
      setCurrentSupply(ethers.BigNumber.from(currentSupply).toNumber());
    }
  }, 10000);

  const jamListButton = (
    <button className='mint-button' onClick={jamlistMint}>
      JAM LIST MINT
    </button>
  );
  const publicMintButton = (
    <button className='mint-button' onClick={publicMint}>
      PUBLIC MINT
    </button>
  );
  const disabledButton = (
    <button className='mint-disabled' disabled={true}>
      MINT DISABLED
    </button>
  );
  const alreadyClaimedButton = (
    <button className='mint-disabled' disabled={true}>
      ALREADY CLAIMED
    </button>
  );
  return (
    <div className='mintpage'>
      <h1>MINT</h1>
      <div className='mint-container'>
        <img src='Morgan.gif' alt='' />
        <p className='shadowOutline'>Current supply: {currentSupply}/555</p>
        {jamSaleActive &&
          currentSupply < 555 &&
          allowedMint &&
          !jamClaimed &&
          jamListButton}
        {jamClaimed && jamSaleActive && alreadyClaimedButton}
        {publicSaleActive &&
          currentSupply < 555 &&
          !publicClaimed &&
          publicMintButton}
        {(!allowedMint || !jamSaleActive) &&
          !publicSaleActive &&
          disabledButton}
        {publicClaimed && publicSaleActive && alreadyClaimedButton}
        {currentSupply == 555 && disabledButton}
      </div>
    </div>
  );
}
