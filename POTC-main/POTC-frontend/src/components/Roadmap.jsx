import React from 'react';

export default function Roadmap() {
  return (
    <>
      <h1 className='header' id='roadmap'>
        ROADMAP
      </h1>
      <div className='treasure-road-wrapper'>
        <div className='treasuremap-wrapper'>
          <img src='/map6.gif' alt='' />
        </div>
        <div className='roadmap-wrapper'>
          <div className='roadmap-child'>
            <p className='roadmap-text'>
              Providing unique perks to holders through $PAPAYA Marketplace
            </p>
          </div>
          <div className='roadmap-child'>
            <p className='roadmap-text'>
              p2e questing system, "hunt for the primordial sound"
            </p>
          </div>
          <div className='roadmap-child'>
            <p className='roadmap-text'>
              free gen 2 mint for all genesis holders
            </p>
          </div>
          <div className='roadmap-child'>
            <p className='roadmap-text'>
              Charity, Vacation Deals, Community Voting on what happens in Gen 2
            </p>
          </div>
          <div className='roadmap-child'>
            <p className='roadmap-text'>Donation to local animal haven</p>
          </div>
        </div>
      </div>
    </>
  );
}
