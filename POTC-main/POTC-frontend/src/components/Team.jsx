import React from 'react';
import Carousel from 'react-elastic-carousel';

export default function Team() {
  return (
    <>
      <h1 className='header' id='team'>
        TEAM
      </h1>
      <Carousel
        disableArrowsOnEnd={false}
        enableMouseSwipe={false}
        enableSwipe={false}
      >
        <div className='team-wrapper'>
          <img src='/JTB.png' alt='' />
          <div className='team-info'>
            <p>
              jtb - marketer, collab manager <br></br>
              <br></br>My name is James, I am 21 from the United Kingdom! I have
              been in the NFT Space for a year now and I have worked for
              multiple large projects and influencers over the last 6 months.
              IRL my background is project management in the software industry.
              I have been utilizing my NFT knowledge by running the marketing
              and helping with the wider scope plan for POTC.
            </p>
            <a href='https://twitter.com/NFT_JTB'>
              <img src='/twitter.svg' alt='' />
            </a>
          </div>
        </div>
        <div className='team-wrapper'>
          <img src='/jourdan.jpeg' alt='' />
          <div className='team-info'>
            <p>
              jourdan - founder, lead dev <br></br>
              <br></br>My name is Jourdan, I'm a 25 year old developer from
              Jamaica. I have 8 years of experience in software and robotics
              engineering, I come from an entrepreneurial background and I've
              been an active participant in the NFT space for 10 months. In the
              past year I've developed a fascination with smart contracts, which
              led me to create POTC along with my Co-founder Regis. POTC has
              since become my life's work.
            </p>
            <a href='https://twitter.com/cpt_jourdan'>
              <img src='/twitter.svg' alt='' />
            </a>
          </div>
        </div>
        <div className='team-wrapper'>
          <img src='/regisirl.png' alt='' />
          <div className='team-info'>
            <p>
              regis - founder, discord tech <br></br>
              <br></br>My name is Regis. I'm 25 years old. I am from the twin
              island state of Antigua and Barbuda. IRL i'm an electrical and
              electronics design engineer. I've been in the NFT space for a
              year. In POTC i'm the discord technican for the community Server.
            </p>
            <a href='https://twitter.com/parrotscaribnft'>
              <img src='/twitter.svg' alt='' />
            </a>
          </div>
        </div>
        <div className='team-wrapper'>
          <img src='/jtb.png' alt='' />
          <div className='team-info'>
            <p>
              rayne - backend/smart contract dev <br></br>
              <br></br>full time lead solidity developer, formerly worked with
              deltadevs on cybergorillas and llamaverse contracts. contributed
              to daos like tec and 1hive.
            </p>
            <a href='https://twitter.com/0xRayne'>
              <img src='/twitter.svg' alt='' />
            </a>
          </div>
        </div>
      </Carousel>
    </>
  );
}
